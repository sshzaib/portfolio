import { SiTask } from "react-icons/si"
import { ProjectCard } from "../components/ProjectCard"

export default function Page() {
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
        },
        {
            name: "Twitter Clone",
            description: "Twitter Clone using GraphQL as backend and React as Frontend",
            tech: ["GraphQL", "Redis", "TypeScript","React", "PostgreSQL", "NodeJs"],
            image: "x.png",
            githubLink: "https://github.com/sshzaib/twitter-clone"
        }
    ]

    return (
        <div className="space-y-8">
            <div className="space-y-4">
            <div className="flex items-center gap-2">
                <SiTask className="text-xl"/>
                <h2 className="text-lg font-bold"> Featured Projects</h2>
            </div>
                <p className="text-slate-400 max-w-2xl">I build interesting projects ranging from chatbots to web apps. These projects help me experiment with emerging tech and improve my skills. Check out more of my work on my 
                    <a href="https://github.com/sshzaib" className="text-zinc-100 font-semibold" target="_blank">{" " + "Github"}</a>
                </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                {projects.map((proj)=> <ProjectCard key={proj.name} proj={proj} />)}
            </div>
        </div>

    )
  }