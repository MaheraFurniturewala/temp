import { BiCollection } from "react-icons/bi"
import { SiHashnode } from "react-icons/si"

export const featured = [
    {
        title: "A Social Media Chatbot's Case Study",
        description: [
            "Outlining the journey of a menu-driven chatbot and using the metrics derived from the communication to improve a home-appliance company's CRM system."
        ],
        date: "Feb 2023",
        image: "chatbot.png",
        link: "https://blog.mahera.tech/series/chatbot-case-study",
        types: [
            {
                name: "Blog",
                icon: SiHashnode,
                colors: {
                    bg: ["#0275ca", "#0c1f31"],
                    text: ["#ffffff", "#33a2f2"],
                    border: ["#0275ca", "#194a6f"]
                }
            },
            {
                name: "Series",
                icon: BiCollection,
                colors: {
                    bg: ["#7057ff", "#1b1a3b"],
                    text: ["#ffffff", "#b3aaee"],
                    border: ["#7057ff", "#4d4a76"]
                }
            }
        ]
    }
]
