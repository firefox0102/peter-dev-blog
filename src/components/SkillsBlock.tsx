import type { FunctionComponent } from "react"

export const SkillsBlockItem = ({ skillLabel }: { skillLabel: string }) => {
  return (
    <div
      className="mr-2 border border-skin-accent px-2 py-1 text-xs"
      style={{ borderRadius: "4px" }}
    >
      {skillLabel}
    </div>
  )
}

export interface ISkillsBlockProps {
  label?: string
  skillLabels: string[]
}

export const SkillsBlock: FunctionComponent<ISkillsBlockProps> = ({
  label,
  skillLabels,
}) => {
  return (
    <div className="my-2 flex flex-wrap">
      {label ? <span className="mr-4 text-sm font-medium">{label}</span> : null}
      {skillLabels &&
        skillLabels.map((label) => <SkillsBlockItem skillLabel={label} />)}
    </div>
  )
}
