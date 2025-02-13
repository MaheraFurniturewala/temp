import { VStack } from "@chakra-ui/react"
import { H4 } from "../atoms"
import { ButtonGroup } from "../molecules"
import type SkillType from "../../types/skill"

const Skill = ({ title, skills, stackProps }: SkillType) => {
    return (
        <VStack alignItems="start" spacing={3} {...stackProps}>
            <H4>{title}</H4>
            <ButtonGroup data={skills} />
        </VStack>
    )
}

export default Skill
