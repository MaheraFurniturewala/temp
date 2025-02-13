import { VStack } from "@chakra-ui/react"
import { Section } from "../molecules"
import { Position } from "../organisms"

import data from "../../data"

const Experiences = () => {
    const { experiences } = data
    return (
        <Section id="experiences" title="Experiences">
            <VStack spacing={6} px={3} alignItems="start">
                sldnv;osdfnosjfo;
                {experiences.map((e) => {
                    return <Position key={e.company} {...e} />
                })}
            </VStack>
        </Section>
    )
}

export default Experiences
