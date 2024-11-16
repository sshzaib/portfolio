import { FaGithub } from "react-icons/fa";

interface projectCard {
    name: string;
    description: string;
    tech: string[];
    image: string;
    githubLink: string
}

export function ProjectCard ({proj}: {proj: projectCard}) {
    return (
      <div className="relative group border border-slate-800 rounded-xl overflow-hidden">
        <div className="h-48 overflow-hidden">
          <img src={`${proj.image}`} alt="project image" className="object-scale-down h-full w-full bg-white"/>
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 to-transparent opacity-90"></div>
        </div>
        <div className="relative p-6 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-bold text-lg text-slate-100 group-hover:text-green-400 transition-colors"> {proj.name}</h3>
            <div className="flex items-center gap-2 text-slate-400">
              <a href={proj.githubLink} target="_blank"><FaGithub className="text-xl hover:text-slate-200"/></a>
            </div>
          </div>
          <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed">{proj.description}</p>
          <div className="flex flex-wrap gap-2 pt-2">
            {proj.tech.map((tech) => <span key={tech} className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:text-green-400 hover:border-green-500/50 hover:bg-green-500/5 transition-all duration-300">{tech}</span>)}
          </div>
        </div>
      </div>
    )
  }