import { VStack } from "@chakra-ui/react"
import { Section } from "../molecules"
import { Position } from "../organisms"

import data from "../../data"

const Extracurriculars = () => {
    const { extracurriculars } = data
    return (
        <Section id="extra" title="Leadership and Extracurricular">
            <VStack spacing={6} px={3} alignItems="start">
                {extracurriculars.map((e) => {
                    return <Position key={e.company} {...e} />
                })}
            </VStack>
        </Section>
    )
}

export default Extracurriculars
