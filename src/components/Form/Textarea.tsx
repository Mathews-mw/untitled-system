import { ComponentProps } from 'react'

export type TextAreaProps = ComponentProps<'textarea'>

export function Textarea(props: TextAreaProps) {
  return (
    <textarea
      className="'dark:border-zinc-700 min-h-[120px] w-full resize-y rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus:border-violet-300 focus:ring-2 focus:ring-violet-100 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-400 dark:focus:border-violet-500 dark:focus:ring-violet-500/20"
      {...props}
    />
  )
}
