import { useEffect, useState } from "react"
import { Image, HStack, VStack, useColorMode, UnorderedList, ListItem } from "@chakra-ui/react"
import { Title, Subtitle, Text } from "../atoms"
import { ButtonGroup } from "../molecules"
import type PositionType from "../../types/position"

const Position = ({
    position,
    company,
    image,
    from,
    to,
    description,
    skills
}: PositionType) => {
    const { colorMode } = useColorMode()
    colorMode === "dark" ? "dark" : "light"
    const [showAll, setShowAll] = useState(false) // Track whether to show all description items or not

    const maxVisible = 2 // Define how many items to show before showing "Show More"
    const displayedDescription = showAll ? description : description.slice(0, maxVisible)

    return (
        <HStack spacing={3}>
            <Image
                src={`companies/${image}`}
                alt={company}
                w={14}
                mt={1.5}
                rounded="md"
                alignSelf="start"
            />
            <VStack alignItems="start" justifyContent="start" spacing={0}>
                <Title>{position}</Title>
                <Subtitle>{`${company} \u00B7 ${from} - ${to}`}</Subtitle>

                {/* Render description points as bullets */}
                <UnorderedList pl={4}>
                    {displayedDescription.map((desc, idx) => (
                        <ListItem key={idx}>{desc}</ListItem>
                    ))}
                </UnorderedList>

                {description.length > maxVisible && (
                    <Text textProps={{ pt: 2 }}>
                        {showAll ? (
                            <Text
                                textProps={{
                                    display: "inline",
                                    onClick: () => setShowAll(false),
                                    cursor: "pointer",
                                    fontWeight: "semibold",
                                    color: `${colorMode}.accent`
                                }}>
                                Show less
                            </Text>
                        ) : (
                            <Text
                                textProps={{
                                    display: "inline",
                                    onClick: () => setShowAll(true),
                                    cursor: "pointer",
                                    fontWeight: "semibold",
                                    color: `${colorMode}.accent`
                                }}>
                                Show more
                            </Text>
                        )}
                    </Text>
                )}

                {skills && <ButtonGroup data={skills} flexProps={{ pt: 2 }} />}
            </VStack>
        </HStack>
    )
}

export default Position
