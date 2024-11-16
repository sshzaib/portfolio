'use client'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  console.log(pathname)
  const pages = [
    {
      title: "home",
      navigate: "/"
    },
    {
      title: "projects",
      navigate: "/projects"
    },
  ]
    return (
    <div>
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0 sm:justify-between border-b border-slate-800 pb-4">
        <div className="text-lg font-semibold">{`>_Shahzaib Haider`} </div>
        <div className="flex gap-8">
          <a href="/" className={pathname === "/" ? "text-slate-200" : "text-slate-400"}>~/home</a>
          <a href="/projects" className={pathname === "/projects" ? "text-slate-200" : "text-slate-400"}>~/projects</a>
        </div>
      </div>
    </div>
  )
  }

interface props {
  title: string,
  navigate: string
}

function ButtonLink ({page, path}: {page: props, path: string}) {
  return (
    <a href={`${page.navigate}`} className=''>{`~/${page.title}`}</a>
  )
}