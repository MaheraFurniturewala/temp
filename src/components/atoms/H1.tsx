import { useColorMode } from "@chakra-ui/react"
import { Heading } from "../atoms"

const H1 = ({ children }: { children: string }) => {
    const { colorMode } = useColorMode()
    return (
        <Heading
            as="h1"
            size="lg"
            headingProps={{
                fontWeight: "extrabold",
                color: `${colorMode}.heading`
            }}>
            {children}
        </Heading>
    )
}

export default H1
