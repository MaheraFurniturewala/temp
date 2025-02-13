import { useColorMode } from "@chakra-ui/react"
import { Heading } from "../atoms"

const H4 = ({ children }: { children: string }) => {
    const { colorMode } = useColorMode()
    return (
        <Heading
            as="h4"
            size="xs"
            headingProps={{ color: `${colorMode}.subheading` }}>
            {children}
        </Heading>
    )
}

export default H4
