import { VStack } from "@chakra-ui/react"
import { Section } from "../molecules"
import { Credential } from "../organisms"

import data from "../../data"

const Certifications = () => {
    const { certifications } = data
    return (
        <Section id="certifications" title="Certifications">
            <VStack spacing={9} px={3} w="100%" alignItems="start">
                {certifications.map((c) => {
                    return <Credential key={c.credential} {...c} />
                })}
            </VStack>
        </Section>
    )
}

export default Certifications
