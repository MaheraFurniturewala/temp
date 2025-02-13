import { Text, useColorMode } from "@chakra-ui/react"

const Subtitle = ({ children }: { children: string }) => {
    const { colorMode } = useColorMode()
    return (
        <Text fontSize="sm" color={`${colorMode}.subheading`}>
            {children}
        </Text>
    )
}

export default Subtitle
