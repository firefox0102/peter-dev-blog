import type { FunctionComponent, PropsWithChildren } from "react"

export interface IExperiencePageCompanyBlock {
  companyName: string
  startDate: string
  endDate: string
}

export const ExperiencePageCompanyBlock: FunctionComponent<
  PropsWithChildren<IExperiencePageCompanyBlock>
> = ({ companyName, startDate, endDate }) => {
  return (
    <div className="mb-2 mt-2">
      {/* Header */}
      <h2 className="text-lg font-medium text-skin-accent">{companyName}</h2>
      <p>
        {startDate} - {endDate}
      </p>

      {/* Content divider */}
      <div className="mx-auto max-w-3xl py-2">
        <hr className="border-skin-line" />
      </div>
    </div>
  )
}
