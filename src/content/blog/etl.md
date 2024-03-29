---
author: Peter Finn
pubDatetime: 2020-07-03T15:22:00Z
title: 💿 Redux + ETL
postSlug: redux-etl
featured: true
draft: false
description: Some thoughts on how we can learn from ETL design in Frontend land.
---

Throughout my career I have had a long standing question that I've never been able to solve:

**Should I transform my API responses before using them in my frontend code?**

Today I want to share a recent experience that has helped me see one path for answering this question!

## Cleaning Up Our App Store

While working on the Deals product at SalesLoft, I had a very interesting debate with my coworkers to try to figure out what our preference was for keeping data in the application Redux Store. While working on a new feature, I realized that we were fetching data from Elasticsearch, which gave us back a really deeply nested data object. We were storing the Elasticsearch hit straight in to our Store so we could access any piece of the data from anywhere in the app. This meant that whenever we might need a piece of the hit, it was probably already available.

However, one day while working on a new feature that used a response from Elasticsearch, my spider senses started tingling. I felt like there were two major issues with our current approach of storing the API Repsonse directly in state, and thought that could be improved on.

### Problem 1

The first issue with our current setup was that the selectors that feed the **Presentational** layer were constantly traversing really deeply nested objects in state. This meant that our state tree was impossible to interpret as a human because it was so deeply nested and complex.

We also frequently had bugs pop up where Elasticsearch returned something we didn't expect somewhere 5 levels down in the object tree, which would cause features to break because they werent prepared to handle each of the 50 different points of failure in the deeply nested object. In some cases our React code was even directly accessing these complex nested objects, there were a LOT of points of failure that we needed to address whenever we realized that we had an edge case with a hit from Elasticsearch.

Check out this real example that extracts a name for a particular opportunity based on your CRM type. **Remember**: we had this kind of code everywhere in our Application and React components.

```jsx
const getLabel = (hit: any, crmType: CRMType) => {
  let label = ""

  if (hit && hit._source) {
    switch (crmType: CRMType) {
      case CRMType.CRM_TYPE_HUBSPOT:
        switch (hit._source.type) {
          case HubSpotObjectType.Company:
            if (hit._source["name<string>"]) {
              label = hit._source["name<string>"]
            }
            break
          case HubSpotObjectType.Contact:
            if (hit._source["fullname<string>"]) {
              label = hit._source["fullname<string>"]
            }
            break
          case HubSpotObjectType.Deal:
            if (hit._source["dealname<string>"]) {
              label = hit._source["dealname<string>"]
            }
            break
        }
        break
      case CRMType.CRM_TYPE_SALESFORCE:
        if (hit._source["Name<string>"]) {
          label = hit._source["Name<string>"]
        }
        break
    }
  }

  return label
}
```

This code is only extracting a LABEL! Think about how many times you might need to replicate this exact same snippet in different places just to see the name of this object?

### Problem 2

The Second issue was this; by storing the Elasticsearch hit directly in state we were letting our backend technology dictate the way our frontend code was written. In my mind this is actually even more important to address, and is the kind of thing that keeps me up at night! What if we decided to change where we fetched this data from, moving from Elasticsearch to a different API endpoint? By storing this in state and accessing these objects directly in the Presentational layer, we were coupling together our backend and our frontend in a way that could really hurt us in the future.

The code example for `getLabel` lives directly inside of a React component. If we kept following that same pattern, we would essentially have to re-write the frontend if we ever decide to stop using Elasticsearch.

Obviously something needed to change, and after having a discussion as a team we came up with a pretty elegant alternative!

### Extract, Transform, Load

As we were having this discussion about how to shift our data access patterns, one of my teammates brought up the topic of ETL. [Extract, Transform, Load](https://en.wikipedia.org/wiki/Extract,_transform,_load) is a pattern that is popular in data warehousing, but provides a really cool bit of insight that we found relevant:

<Message variant="secondary" mb={2}>
  A properly designed ETL system extracts data from the source systems, enforces
  data quality and consistency standards, conforms data so that separate sources
  can be used together, and finally delivers data in a presentation-ready format
</Message>

Sounds like a pretty decent solution for our problem, right?

We decided moving forward that we should follow some new rules while developing:

- Keep the Redux Store structure as flat as possible
- Avoid storing any data we weren't currently using to help de-clutter our app state (**YAGNI**)
- Add a **Transformation** layer in between any API response and our application state so that the frontend app store was always ignorant of where the data came from.
- Single point of failure: Instead of having to check for null values in every single place we access data, ensure that we populate predictable default values for data

### Redux + ETL

So how do we actually use these insights from ETL and data warehousing into our Redux project? Here's a high level diagram that might help to explain the basic idea -

<Card>
  <EmbeddedImage
    src={props.embedded.image1}
    width={["75%"]}
    justifyContent="center"
  />
  <Box p={3}>
    <Text>High Level Abstraction</Text>
  </Box>
</Card>

Here's a detailed break down of how this fit in to our Redux flow for fetching data -

<Card>
  <EmbeddedImage
    src={props.embedded.image2}
    width={["75%"]}
    justifyContent="center"
  />
  <Box p={3}>
    <Text>Redux ETL Pattern</Text>
  </Box>
</Card>

Pretty straight forward right? All we're doing is adding a small layer of code in between our API response and storing it in the Redux Store that transforms it in to a more Frontend friendly format. This is a great reminder that if you make the **EASY** thing the **RIGHT** thing, your team will have a much easier time [falling in to the pit of success](https://blog.codinghorror.com/falling-into-the-pit-of-success/)!

### Code Example

After we extract the data from the Elasticsearch endpoint, we include a snippet of code that transforms our payload of data before we dispatch a success action to our Reducer.

Here's an example of a Data Transformation function:

```javascript
const getExampleDataFromHit = (esHit: IExampleESHit): ITransformedData => {
  return {
    count: esHit?.aggregations?.historical?.base_filter?.doc_count || 0,
    transformedData: {
      theDataWeActuallyNeed:
        esHit?.aggregations?.historical?.base_filter?.won
          ?.the_data_we_actually_need?.value || 0,
      count: esHit?.aggregations?.historical?.base_filter?.won?.doc_count || 0,
    },
  }
}
```

Do you see how deeply nested the value of `the_data_we_actually_need` is nested in this Elasticsearch object? This might seem exaggerated, but this is a **REAL** example from a feaure I just finished (anonymized a bit).

We also created a TypeScript type for our Elasticsearch hit object shape called `IExampleESHit`, and a second type for our clean data state called `ITransformedData`. Having a clearly defined Type for this response on the frontend allows us to easily see the shape of this complex object without having to actually hit the API, which I find really convenient.

Here's what our `IExampleESHit` TypeScript interface looks like. Another important point to note is that if any of these values might cause issues because they're not always returned from the API, you can easily add that logic to this TypeScript type and now there are no surprises!

```javascript
export interface IExampleESHit {
  aggregations: {
    historical: {
      doc_count: number,
      base_filter: {
        doc_count: number,
        won: {
          doc_count: number,
          the_data_we_actually_need: IHitValueNumber,
          might_be_undefined_value: IHitValueNumber | undefined,
        },
      },
    },
  };
}
```

## That's It For Now!

So after all that, I think I might've found a pretty decent an answer to the question of what to do with my API responses before using them. In short, we have decided to add a thin layer of code in between our API calls and our Reducers to help transform the API responses in to a more Frontend friendly format.

Althought this might seem really simple, it is important to remember how impactful this kind of tweak could be on a frontend project. By simply adding a Transformation layer between your API responses and your App Store, you could gain:

- Decoupling your backend and frontend technologies (Yay separtion of concerns!)
- A flatter, more human friendly Redux Store state tree
- Cleaner, safer Presentational code
- Centralized points of failure for unexpected changes in your API response format
- ...probably even more that I'm not thinking of!

🐦 Feel free to let me know on [Twitter](https://twitter.com/sleepy__pete) if you've got any other insights or opinions on this topic!
