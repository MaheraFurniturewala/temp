import { AiFillBulb } from "react-icons/ai";
import { FaBrain } from "react-icons/fa";
import { MdComment, MdLeaderboard } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { SiAnaconda, SiAndroidstudio, SiBootstrap, SiChakraui, SiCplusplus, SiDocker, SiExpress, SiFirebase, SiGit, SiJava, SiJavascript, SiMongodb, SiMysql, SiNodedotjs, SiOracle, SiPhp, SiPostgresql, SiPostman, SiPython, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";

export const skills = [
    {
        title: "Programming Languages",
        skills: [
            {
                name: "Java",
                icon: SiJava
            },
            {
                name: "Python",
                icon: SiPython
            },
            {
                name: "C++",
                icon: SiCplusplus
            },
            {
                name: "JavaScript",
                icon: SiJavascript
            },
            {
                name: "PHP",
                icon: SiPhp
            },
            {
                name: "SQL",
                icon: SiPostgresql
            }
        ]
    },
    {
        title: "Technologies/Frameworks",
        skills: [
            {
                name: "React.js",
                icon: SiReact
            },
            {
                name: "Node.js",
                icon: SiNodedotjs
            },
            {
                name: "Express.js",
                icon: SiExpress
            },
            {
                name: "TypeScript",
                icon: SiTypescript
            },
            {
                name: "Bootstrap",
                icon: SiBootstrap
            },
            {
                name: "Tailwind CSS",
                icon: SiTailwindcss
            },
            {
                name: "Chakra UI",
                icon: SiChakraui
            },
            {
                name: "MySQL",
                icon: SiMysql
            },
            {
                name: "Oracle",
                icon: SiOracle
            },
            {
                name: "MongoDB",
                icon: SiMongodb
            },
            {
                name: "Firebase",
                icon: SiFirebase
            }
        ]
    },
    {
        title: "Developer Tools",
        skills: [
            {
                name: "Git",
                icon: SiGit
            },
            {
                name: "Android Studio",
                icon: SiAndroidstudio
            },
            {
                name: "Docker",
                icon: SiDocker
            },
            {
                name: "Postman",
                icon: SiPostman
            },
            {
                name: "Anaconda",
                icon: SiAnaconda
            }
        ]
    },
    {
        title: "Soft Skills",
        skills: [
            {
                name: "Communication",
                icon: MdComment
            },
            {
                name: "Organizational Leadership",
                icon: MdLeaderboard
            },
            {
                name: "Analytical Thinking",
                icon: AiFillBulb
            },
            {
                name: "Teamwork",
                icon: RiTeamFill
            },
            {
                name: "Problem Solving",
                icon: FaBrain
            }
        ]
    }
]
