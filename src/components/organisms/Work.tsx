import { useState, useEffect } from "react"
import {
    Image,
    Stack,
    VStack,
    Link,
    Icon,
    useColorMode,
    useDisclosure
} from "@chakra-ui/react"
import { Subtitle, Text } from "../atoms"
import { ButtonGroup } from "../molecules"
import { BsBoxArrowUpRight } from "react-icons/bs"
import type WorkType from "../../types/work"
import { Overlay } from "../organisms"

const Work = ({ title, description, date, image, link, types }: WorkType) => {
    const { colorMode } = useColorMode()
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [show, setShow] = useState(description.join(" ").length > 200)
    const [desc, setDesc] = useState(
        description.join(" ").length > 200
            ? `${description.join(" ").slice(0, 200)}...`
            : description.join(" ")
    )

    useEffect(() => {
        if (!show) {
            setDesc(description.join(" "))
        } else {
            setDesc(
                description.join(" ").length > 200
                    ? `${description.join(" ").slice(0, 200)}...`
                    : description.join(" ")
            )
        }
    }, [show])

    const href = link ? link : `/featured/${image}`
    return (
        <Stack
            spacing={{ base: 2, md: 6 }}
            w="100%"
            direction={{ base: "column", md: "row" }}>
            <Image
                w={{ base: "100%", sm: "60%", md: 48 }}
                borderColor={`${colorMode}.body`}
                borderWidth={1}
                rounded="md"
                alignSelf="start"
                style={{ aspectRatio: "1.6" }}
                src={`featured/${image}`}
                alt={title}
                objectFit="fill"
                onClick={onOpen}
            />
            <VStack
                alignItems="start"
                justifyContent="start"
                spacing={0}
                maxW={{ base: "inherit", md: "calc(100% - 12rem - 1.5rem)" }}>
                <Link
                    href={href}
                    target="_blank"
                    color={`${colorMode}.heading`}
                    _hover={{
                        color: `${colorMode}.accent`,
                        textDecor: "none"
                    }}
                    fontSize="lg"
                    fontWeight="semibold">
                    {title} <Icon as={BsBoxArrowUpRight} fontSize="sm" />
                </Link>
                <Subtitle>{date}</Subtitle>
                <Text
                    textProps={{
                        pt: 2,
                        pb: 3
                    }}>
                    {desc}
                    {show && (
                        <Text
                            textProps={{
                                display: "inline",
                                onClick: () => setShow(false),
                                cursor: "pointer",
                                fontWeight: "semibold",
                                color: `${colorMode}.accent`
                            }}>
                            Show more
                        </Text>
                    )}
                    {description.join(" ").length > 200 && !show && (
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
                </Text>
                <ButtonGroup data={types} multicolor />
            </VStack>
            <Overlay
                isOpen={isOpen}
                onClose={onClose}
                image={`featured/${image}`}
                text={title}
                alt={title}
            />
        </Stack>
    )
}

export default Work
