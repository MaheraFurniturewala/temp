import { IconType } from "react-icons"

type IconButton = {
    name: string
    icon: IconType
    colors?: { bg: string[]; text: string[]; border?: string[] }
}

export default IconButton
