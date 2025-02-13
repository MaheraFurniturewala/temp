import { FaCode, FaCodeBranch, FaCodepen, FaMicrochip, FaTree } from "react-icons/fa"
import { GiAbstract001, GiArchitectMask, GiTreeBranch } from "react-icons/gi"
import {
    SiAmazonaws,
    SiApacheairflow,
    SiAzuredevops,
    SiDocker,
    SiElastic,
    SiElasticsearch,
    SiFlask,
    SiGraphql,
    SiJava,
    SiJavascript,
    SiKubernetes,
    SiMongodb,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql,
    SiPython,
    SiReact,
    SiResearchgate,
    SiSpringboot,
    SiStrapi,
    SiTailwindcss,
    SiTypescript,
    SiVuedotjs,
    SiWebflow
} from "react-icons/si"

export const experiences = [
    {
        position: "Software Engineering Intern - Capstone",
        company: "Dell Technologies",
        image: "dell.jpg",
        from: "December 2024",
        to: "Present",
        description: [
            "Integrated workflows for quota management using Apache Airflow, automating data preprocessing and model execution to eliminate manual interventions and ensure seamless orchestration across all pipeline stages",
            "Built a feature evaluation system using MLflow, Scikit-learn, and Pandas to analyze and test new data attributes, enhancing quota prediction models and improving overall accuracy by 15%",
            "Containerized workflows and machine learning models with Docker and Kubernetes, enabling scalable, consistent deployments across environments and improving fault tolerance in production systems"
        ],
        skills: [
            {
                name: "Airflow",
                icon: SiApacheairflow
            },
            {
                name: "Docker",
                icon: SiDocker
            },
            {
                name: "Kubernetes",
                icon: SiKubernetes
            },
        ]
    },
    {
        position: "Software Engineering Intern",
        company: "Bajaj Finserv Health",
        image: "bfhl.png",
        from: "September 2023",
        to: "May 2024",
        description: [
            "Implemented service workers on the web portal, eliminating chunk-loading errors (250+ per month), achieving a 100% reduction",
            "Integrated a recommender system using JSON-Rule-Engine, personalizing pages for 1M+ users, improving lead conversion by 12%",
            "Reduced TBT (Total Blocking Time) by 25% using PartyTown to offload third-party scripts to a web worker, boosting page load speed",
             "Developed an API to generate SAS (Shared Access Signature) tokens for secure access to profile images stored in Azure Blob Storage"
        ],
        skills: [
            {
                name: "Typescript",
                icon: SiTypescript
            },
            {
                name: "JavaScript",
                icon: SiJavascript
            },
            {
                name: "Next.js",
                icon: SiNextdotjs
            },
            {
                name: "MongoDB",
                icon: SiMongodb
            },
            {
                name: "Elasitc Search",
                icon: SiElasticsearch
            },
            {
                name: "Azure",
                icon: SiAzuredevops
            },
            {
                name: "Strapi",
                icon: SiStrapi
            }
        ]
    },
    {
        position: "Research Intern",
        company: "Indian Institute of Science, Banfgalore",
        image: "iisc.jpeg",
        from: "June 2023",
        to: "August 2023",
        description: [
            " Researched automating the migration of monolithic Spring Boot applications to micro-services by modifying Abstract Syntax Trees (AST)",
            "Designed input formats and algorithms for migration using the Java code transformation tool – Spoon, automating 80% of the migration"
        ],
        skills: [
            {
                name: "Micro services",
                icon: FaCodeBranch
            },
            {
                name: "Spring Boot",
                icon: SiSpringboot
            },
            {
                name: "Abstract Syntax Trees",
                icon: FaCode
            },
            {
                name: "PostgreSQL",
                icon: SiPostgresql
            }
        ]
    },
    {
        position: "Software Engineering Intern",
        company: "Expedia Group",
        image: "expedia.png",
        from: "May 2023",
        to: "July 2023",
        description: [
            "Implemented the AWS SNS/SQS event-driven patterns to migrate multiple users concurrently to a new program",
            "Incorporated Dead Letter Queues (DLQ) for error management in the migration process",
            "Optimized data caching for offers, improving offer-handling capacity from 50K to 250K and reducing cache calls by 50%"
        ],
        skills: [
            {
                name: "AWS SNS/SQS",
                icon: SiAmazonaws
            },
            {
                name: "Spring Boot",
                icon: SiSpringboot
            },
            {
                name: "Java",
                icon: SiJava
            },
            {
                name: "PostgreSQL",
                icon: SiPostgresql
            }
        ]
    },
    {
        position: "Prism Research Intern",
        company: "Samsung R&D Institute India",
        image: "samsung.png",
        from: "Dec 2022",
        to: "Present",
        description: [
            "Researched techniques to customize image search and collection in a web crawler and automate the process. Working on image data tagging using AI under the SW Quality Assurance & Efficiency group"
        ],
        skills: [
            {
                name: "Python",
                icon: SiPython
            },
            {
                name: "Flask",
                icon: SiFlask
            }
        ]
    },
    {
        position: "Full Stack Developer",
        company: "BattleBrains",
        image: "bb.png",
        from: "May 2022",
        to: "July 2022",
        description: [
            "Worked on developing the frontend of the product from scratch using Vue.js, TailwindCSS, and Nuxt.js.Assisted in validating the API calls made to the Node.js + Prisma backend server."
        ],
        skills: [
            {
                name: "NodeJS",
                icon: SiNodedotjs
            },
            {
                name: "Tailwind CSS",
                icon: SiTailwindcss
            },
            {
                name: "JavaScript",
                icon: SiJavascript
            },
            {
                name: "Vue.js",
                icon: SiVuedotjs
            }
        ]
    },
    {
        position: "Developer",
        company: "Major League Hacking",
        image: "mlh.png",
        from: "Jan 2022",
        to: "Apr 2022",
        description: [
            "Worked in a team with 11 pod mates from all over the globe and contributed to the GitHub GraphQL API and Jordan Harband’s npm packages including eslint, qs, jsx-lint, and enzyme."
        ],
        skills: [
            {
                name: "NodeJS",
                icon: SiNodedotjs
            },
            {
                name: "GraphQL",
                icon: SiGraphql
            },
            {
                name: "JavaScript",
                icon: SiJavascript
            }
        ]
    },

]
