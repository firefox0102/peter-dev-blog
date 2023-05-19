import type { FunctionComponent, PropsWithChildren } from "react"

export interface IExperiencePageCompanyBlock {
  companyName: string
  startDate: string
  endDate?: string
}

export const ExperiencePageCompanyBlock: FunctionComponent<
  PropsWithChildren<IExperiencePageCompanyBlock>
> = ({ companyName, startDate, endDate }) => {
  return (
    <div className="mt-1">
      {/* Header */}
      <h2 className="text-md font-medium text-skin-accent">{companyName}</h2>
      <p>
        {startDate}
        {endDate ? ` - ${endDate}` : null}
      </p>

      {/* Content divider */}
      <div className="mx-auto max-w-3xl py-1">
        <hr className="border-skin-line" />
      </div>
    </div>
  )
}
