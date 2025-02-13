import { BsCpuFill } from "react-icons/bs"
import { FaCode, FaDatabase, FaGlobe, FaLinux, FaProductHunt, FaRobot } from "react-icons/fa"
import { GiComputing } from "react-icons/gi"

export const education = [
    {
        name: "The Univerisrtysity of Texas at Austin",
        degree: "Master of Science in Information Technology and Management",
        image: "ut.png",
        from: "July 2024",
        to: "May 2025",
        description: ["GPA: 4.0 / 4.0"],
        skills: [
            {
                name: "Big Data & Distributed Programming",
                icon: FaGlobe
            },
            {
                name: "Advanced Programming and Application Development",
                icon: FaCode
            },
            {
                name: "Data Management",
                icon: FaDatabase
            },
            {
                name: "Machine Learning",
                icon: FaRobot
            },

            {
                name: "Product Management",
                icon: FaProductHunt
            },
        ]
    },
    {
        name: "Vellore Institute of Technology",
        degree: "BTech. Computer Science and Engineering",
        image: "vit.jpeg",
        from: "Sep 2020",
        to: "May 2024",
        description: ["GPA: 9.1 / 10.0"],
        skills: [
            {
                name: "Data Structures",
                icon: FaCode
            },
            {
                name: "Database Management",
                icon: FaDatabase
            },
            {
                name: "Computer Architecture",
                icon: BsCpuFill
            },
            {
                name: "Operating Systems",
                icon: FaLinux
            },

            {
                name: "Web Technologies",
                icon: FaGlobe
            },
            {
                name: "Theory of Computation",
                icon: GiComputing
            }
        ]
    }
]
