import { Text as T, TextProps, useColorMode } from "@chakra-ui/react"
import { ReactNode } from "react"

const Text = ({
    children,
    textProps
}: {
    children: ReactNode
    textProps?: TextProps
}) => {
    const { colorMode } = useColorMode()
    return (
        <T fontSize="sm" color={`${colorMode}.text`} {...textProps}>
            {children}
        </T>
    )
}

export default Text
