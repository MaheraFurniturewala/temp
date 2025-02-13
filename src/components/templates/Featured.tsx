import { VStack } from "@chakra-ui/react"
import { Section } from "../molecules"
import { Work } from "../organisms"

import data from "../../data"

const Featured = () => {
    const { featured } = data
    return (
        <Section id="featured" title="Featured Work">
            <VStack spacing={9} px={3} w="100%" alignItems="start">
                {featured.map((f) => {
                    return <Work key={f.title} {...f} />
                })}
            </VStack>
        </Section>
    )
}

export default Featured
