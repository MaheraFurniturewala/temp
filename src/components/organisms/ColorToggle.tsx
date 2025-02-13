import { Tooltip, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { IconButton } from "@chakra-ui/react"
import { FiSun, FiMoon } from "react-icons/fi"

const ColorToggle = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const Icon = useColorModeValue(FiMoon, FiSun)

    return (
        <Tooltip
            label={`Toggle ${colorMode === "dark" ? "light" : "dark"} mode`}>
            <IconButton
                onClick={toggleColorMode}
                icon={<Icon />}
                fontSize="xl"
                aria-label="Theme switcher"
                size="lg"
                color={`${colorMode}.accent`}
                variant="ghost"
            />
        </Tooltip>
    )
}

export default ColorToggle
