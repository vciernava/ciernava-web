import Link from "next/link";
import React from "react";
import Badge from "./Badge";

interface ProjectCardProps {
    title: string;
    url: string;
    badges: string[];
    description: string;
    type: string;
    className?: string;
}

const renderSwitch = (type:string) => {
    switch(type) {
        case "web": {
            return "Visit website";
        }
        case "app": {
            return "Visit application";
        }
        default: {
            return "Visit repository";
        }
    }
}

const ProjectCard: React.FC<ProjectCardProps> = ({title, url, badges, description, type = 'repo', className = ''}) => {
    const cardClass = `project-card block bg-slate-800 p-4 hover:-translate-y-1.5 transition-all duration-300 ease-in-out ${className}`
    return (
        <Link className={cardClass} href={url}>
            <h3 className="text-xl font-bold text-slate-300">{title}</h3>
            <div className="mt-1 mb-4 flex gap-1 flex-wrap">
            {
                badges.map(
                    (item, index) => (
                        <Badge key={index} >
                            {item}
                        </Badge>
                    )
                )
            }
            </div>
            <div className="text-sm">
                {description}
            </div>
            <p className="mt-4 text-sm text-indigo-400">[{
                renderSwitch(type)
            }]</p>
        </Link>
    )
}

export default ProjectCard