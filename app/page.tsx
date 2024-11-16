import { FaLinkedin } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { SiTask } from "react-icons/si";
import { MdWork } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa6";
import { ProjectCard } from "./components/ProjectCard";


export default function Home() {
  const projects = [
    {
      name: "AI-Powered Chatbot",
      description: "Chat with AI using text, audio, video, images, and files",
      tech: ["OpenAI API", "LangChain", "RAG", "Pinecone"],
      image: "bot.png",
      githubLink: "https://github.com/sshzaib/TelegramBot-AI"
    },
    {
      name: "Real-Time Chat App",
      description: "Distributed Chat room using WebSocket and Pub/Sub",
      tech: ["WebSocket", "Redis", "TypeScript", "ExpressJs", "NodeJs"],
      image: "chat.png",
      githubLink: "https://github.com/sshzaib/RedisPubSub-WS"
    }
  ]
  return (
    <div>
      <div className="space-y-8">
        <IntroCard />
        <SkillsCard />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <SiTask className="text-xl"/>
            <h2 className="text-lg font-bold"> Featured Projects</h2>
          </div>
          <a className="text-sm text-slate-400 hover:text-slate-200 transition-colors" href="/projects">View All</a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((proj)=> <ProjectCard proj={proj} />)}
        </div>
        <div>
          <WorkCard />
        </div>
        <div>
          <EducationCard />
        </div>
      </div>
    </div>
  );
}


function IntroCard () {
  const socials = [
    {
      name: "email",
      icon: <MdAlternateEmail />,
      navigateTo: "mailto:shahzaib01.h@gmail.com"
    },
    {
      name: "linkedin",
      icon: <FaLinkedin />,
      navigateTo: "https://www.linkedin.com/in/shahzaib-haider-6835311b8/"
    },
    {
      name: "github",
      icon: <FaGithub />,
      navigateTo: "https://github.com/sshzaib/"
    },
  ]
  return (
    <div className="border rounded-xl border-[#1E293B] p-8">
        <div className="mb-4 text-slate-300 font-bold text-xl">Software Engineer</div>
        <div className="mb-4 text-slate-300">I'm Shahzaib, a software engineer who finds joy in crafting web applications.</div>
        <div className="flex mb-4 items-center gap-1 text-slate-400"><FaLocationDot /> Lahore, Pakistan</div>
        <div className="flex gap-4">{socials.map(e=> <SocialsIcon icon={e} />)}</div>
    </div>
  )
}

interface icon {
  name: string,
  icon: React.ReactNode,
  navigateTo: string
}
function SocialsIcon({icon}: {icon: icon}) {

  return (
    <a className="text-2xl text-slate-500 cursor-pointer hover:text-slate-400" href={`${icon.navigateTo}`} target={'_blank'} >
      {icon.icon}
    </a>
  )
}


function SkillsCard () {
  const skills = [
    {
      category: "Languages",
      values: "TypeScript, JavaScript, Python, Go"
      
    },
    {
      category: "Frameworks",
      values: "React, NextJs, ExpressJs, Tailwind"
      
    },
    {
      category: "Databases",
      values: "PostgreSQL, MongoDB, Redis, MySQL"
      
    },
    {
      category: "Tools",
      values: "Docker, Git, Git Actions"
      
    }
  ]
  return (
    <div className="border rounded-xl border-[#1E293B] p-8">
      <div className="flex items-center gap-2 mb-6">
        {`</>`}
        <h2 className="text-lg font-bold">Technical Skills</h2>
      </div>
    
      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((skill)=> <SkillCard skill={skill} /> )}
             
      </div>
    </div>
  )
}

interface skill {
  category: string,
  values: string
}

function SkillCard ({skill}: {skill:skill}) {
  return (
    <div>
      <h3 className="text-slate-400 mb-2">{skill.category}</h3>
      <p className="text-sm">{skill.values}</p>
    </div>   
  )
}

function WorkCard () {
  return (
    <div className="border rounded-xl border-[#1E293B] p-8">
      <div className="flex gap-2 items-center font-bold text-slate-300 pb-4">
        <MdWork className="text-xl" /> Work Experience
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="text-slate-400 text-lg">HexaLabs</h2>
        <h2 className="text-slate-400 text-lg">Software Engineer</h2>
        <h2 className="text-slate-500">2023 - Present</h2>
      </div>
    </div>
  )
}

function EducationCard () {
  return (
<div className="border rounded-xl border-[#1E293B] p-8">
      <div className="flex gap-2 items-center font-bold text-slate-300 pb-4">
        <FaGraduationCap className="text-xl"/>  Education
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="text-slate-400 text-lg">GIK Institute</h2>
        <h2 className="text-slate-400 text-lg">Bachelors in Engineering</h2>
        <h2 className="text-slate-500">2018 - 2022</h2>
      </div>
    </div>
  )
}