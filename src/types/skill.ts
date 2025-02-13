import { StackProps } from "@chakra-ui/react"
import IconButton from "./icon-button"

type Skill = {
    title: string
    skills: IconButton[]
    stackProps?: StackProps
}

export default Skill
