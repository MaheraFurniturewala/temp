import { useColorMode } from "@chakra-ui/react"
import { Heading } from "../atoms"

const H3 = ({ children }: { children: string }) => {
    const { colorMode } = useColorMode()
    return (
        <Heading
            as="h3"
            size="sm"
            headingProps={{ color: `${colorMode}.subheading` }}>
            {children}
        </Heading>
    )
}

export default H3
