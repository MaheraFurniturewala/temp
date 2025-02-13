import { useState } from "react"
import {
    Image,
    Stack,
    HStack,
    VStack,
    useColorMode,
    Spacer
} from "@chakra-ui/react"
import { Title, Subtitle, Text } from "../atoms"
import Skill from "./Skill"
import type InstituteType from "../../types/institute"

const Institute = ({
    name,
    degree,
    image,
    from,
    to,
    description,
    skills
}: InstituteType) => {
    const { colorMode } = useColorMode()
    const [show, setShow] = useState(skills.length > 0)

    return (
        <HStack spacing={3} w="100%">
            <Image
                src={`institutes/${image}`}
                alt={name}
                w={14}
                mt={1.5}
                rounded="md"
                alignSelf="start"
            />
            <VStack
                alignItems="start"
                justifyContent="start"
                spacing={0}
                w="100%">
                <Title>{name}</Title>
                <Subtitle>{`${degree} \u00B7 ${from} - ${to}`}</Subtitle>
                <Stack w="100%" direction={{ base: "column", sm: "row" }}>
                    <Text textProps={{ fontWeight: "semibold" }}>
                        {description.join(" ")}
                    </Text>
                    <Spacer display={{ base: "none", sm: "inherit" }} />
                    {show && (
                        <Text
                            textProps={{
                                onClick: () => setShow(false),
                                cursor: "pointer",
                                fontWeight: "semibold",
                                color: `${colorMode}.accent`
                            }}>
                            Show more
                        </Text>
                    )}
                    {skills.length > 0 && !show && (
                        <Text
                            textProps={{
                                onClick: () => setShow(true),
                                cursor: "pointer",
                                fontWeight: "semibold",
                                color: `${colorMode}.accent`
                            }}>
                            Show less
                        </Text>
                    )}
                </Stack>
                {skills.length > 0 && !show && (
                    <Skill
                        title="Relevant Coursework"
                        skills={skills}
                        stackProps={{ pt: 2 }}
                    />
                )}
            </VStack>
        </HStack>
    )
}

export default Institute
