import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    initialColorMode: "dark",
    useSystemColorMode: false,
    colors: {
        dark: {
            background: "#1d1e20",
            heading: "#dadbdb",
            subheading: "#939595",
            body: "#4c4c4c",
            text: "#cccccc",
            button: "#414244",
            accent: "#71b7ff"
        },
        light: {
            background: "#F5F5F5",
            heading: "#393E46",
            subheading: "#848484",
            body: "#cccccc",
            text: "#3d3d3d",
            button: "#dddddd",
            accent: "#0a69da"
        },
    }
})

export default theme
