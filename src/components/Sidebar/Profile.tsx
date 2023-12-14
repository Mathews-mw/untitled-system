import { LogOut } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../Buttons'

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <Image
        src="/robot.png"
        alt="image profile"
        className="h-10 w-10 rounded-full"
        width={40}
        height={40}
        quality={100}
      />

      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Mathews Araújo
        </span>
        <span className="truncate text-sm text-zinc-500">
          mathews.mw@gmail.com
        </span>
      </div>
      <Button type="button" variant="ghost">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}
