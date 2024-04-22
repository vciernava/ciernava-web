export interface TabsDataProps {
    id: number;
    date: {
        start: Date;
        end: Date;
    }
    position: string;
    company: {
        name: string;
        website: string;
    }
    description: string[]
}

export const TabsData: TabsDataProps[] = [
    {
        id: 0,
        date: {
            start: new Date(2018, 7),
            end: new Date()
        },
        position: "Freelance Developer",
        company: {
            name: "Freelance",
            website: ""
        },
        description: [
            "Collaborating with other developers, and creating digital products for business owners. Mostly using WordPress to create news, ecommerce and sports team websites.",
            "Freelancing was and still is an important part of my job. Since 2020 I started doing customized software."
        ]
    },
    {
        id: 1,
        date: {
            start: new Date(2022, 3),
            end: new Date(2024, 1)
        },
        position: "Software Engineer",
        company: {
            name: "Webdevel s.r.o.",
            website: "https://webdevel.cz/"
        },
        description: [
            "Designing and building internal tool for company, also completing support ticket tasks for company clients.",
            "I used Laravel, WordPress and PHP most of my time during the development stages."
        ]
    },
    {
        id: 2,
        date: {
            start: new Date(2023, 2),
            end: new Date(2023, 2)
        },
        position: "Python Developer",
        company: {
            name: "WillinAgency",
            website: "https://willinagency.com/"
        },
        description: [
            "I have spend two weeks in Barcelona, creating an AI application that helps people figure out their illnesses based on the symptoms and apperance.",
            "I have worked on site, collaborating with other students that came with me to Barcelona."
        ]
    },
    {
        id: 3,
        date: {
            start: new Date(2024, 3),
            end: new Date()
        },
        position: "Software Engineer",
        company: {
            name: "GamerHost",
            website: "https://gamerhost.pro/"
        },
        description: [
            "I build and manage internal software of the company that allows clients to view their purchased products and manage them.",
            "I also design the company branding, to give clients more trustful and easier UI and UX, when using the internal tools or ordering new products."
        ]
    }
]