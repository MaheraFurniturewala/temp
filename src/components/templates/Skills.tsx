import { VStack } from "@chakra-ui/react"
import { Section } from "../molecules"
import { Skill } from "../organisms"

import data from "../../data"

const Skills = () => {
    const { skills } = data
    return (
        <Section id="skills" title="Skills">
            <VStack spacing={6} px={3} alignItems="start">
                {skills.map((s) => {
                    return (
                        <Skill
                            key={s.title}
                            title={s.title}
                            skills={s.skills}
                        />
                    )
                })}
            </VStack>
        </Section>
    )
}

export default Skills
