import { Heading } from "../atoms"

const H2 = ({ children }: { children: string }) => {
    return (
        <Heading as="h2" size="md">
            {children}
        </Heading>
    )
}

export default H2
