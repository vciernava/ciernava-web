export interface ProjectsDataProps {
    id: number;
    title: string;
    url: string;
    badges: string[];
    type: "app" | "web" | "repo";
    description: string;
    hidden: boolean;
}

export const ProjectsData: ProjectsDataProps[] = [
    {
        id: 1,
        title: "GamerHost Redesign",
        url: "https://github.com/vciernava/gamerhostfrontend",
        badges: [
            "NextJS",
            "TypeScript",
            "TailwindCSS"
        ],
        type: "repo",
        description: "Redesign of gamerhost homepage, this is not an official commission work, just an inspiration what can be done to give a more professional and organized look to the website itself.",
        hidden: false
    },
    {
        id: 2,
        title: "Game Proxy Manager",
        url: "https://github.com/vciernava/DarkProxyManager",
        badges: [
            "Java",
            "Gradle",
            "Kubernetes"
        ],
        type: "repo",
        description: "Integrated system for minecraft game servers. One proxy server manages the amount of game servers that players can play on, based on the server load balance using Kubernetes.",
        hidden: false
    },
    {
        id: 3,
        title: "Anime Vault Course",
        url: "https://github.com/vciernava/anime_vault",
        badges: [
            "React",
            "TypeScript",
            "TailwindCSS"
        ],
        type: "repo",
        description: "The result of an React course, where I created an website to display infinite loading list of anime shows using TypeScript and external API to load the data on the page.",
        hidden: false
    },
    {
        id: 3,
        title: "Proxylo Panel",
        url: "https://github.com/Proxylo",
        badges: [
            "PHP",
            "React",
            "GoLang"
        ],
        type: "repo",
        description: "Open-source panel solution allows you to host a variety of services and games from a single, user-friendly interface. Easily scalable between multiple servers.",
        hidden: true
    }
]