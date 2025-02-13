import { VStack } from "@chakra-ui/react"
import { Section } from "../molecules"
import { Institute } from "../organisms"

import data from "../../data"

const Education = () => {
    const { education } = data
    return (
        <Section id="education" title="Education">
            <VStack spacing={6} px={3} alignItems="start" w="100%">
                {education.map((e) => {
                    return <Institute key={e.name} {...e} />
                })}
            </VStack>
        </Section>
    )
}

export default Education
