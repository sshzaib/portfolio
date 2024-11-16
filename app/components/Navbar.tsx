'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
    return (
    <div>
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0 sm:justify-between border-b border-slate-800 pb-4">
        <div className="text-lg font-semibold">{`>_Shahzaib Haider`} </div>
        <div className="flex gap-8">
          <Link href="/" className={pathname === "/" ? "text-slate-200" : "text-slate-400"}>~/home</Link>
          <Link href="/projects" className={pathname === "/projects" ? "text-slate-200" : "text-slate-400"}>~/projects</Link>
        </div>
      </div>
    </div>
  )
  }