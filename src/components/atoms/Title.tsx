import { Text, useColorMode } from "@chakra-ui/react"

const Title = ({ children }: { children: string }) => {
    const { colorMode } = useColorMode()
    return (
        <Text
            fontSize="lg"
            fontWeight="semibold"
            color={`${colorMode}.heading`}>
            {children}
        </Text>
    )
}

export default Title
