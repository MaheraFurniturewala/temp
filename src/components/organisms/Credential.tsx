import {
    Image,
    Stack,
    HStack,
    VStack,
    Spacer,
    Link,
    useColorMode,
    useDisclosure
} from "@chakra-ui/react"
import { Title, Subtitle, Text } from "../atoms"
import { Overlay } from "../organisms"
import type CredentialType from "../../types/credential"

const Credential = ({
    credential,
    sub,
    company,
    companyImage,
    date,
    image
}: CredentialType) => {
    const { colorMode } = useColorMode()
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Stack spacing={3} w="100%" direction={{ base: "column", md: "row" }}>
            <HStack
                spacing={3}
                alignSelf="start"
                maxW={{ base: "inherit", md: "calc(100% - 8rem - 1.5rem)" }}>
                <Image
                    bgColor="white"
                    src={`hackathons/${companyImage}`}
                    alt={sub}
                    w={14}
                    mt={1.5}
                    style={{ aspectRatio: "1" }}
                    rounded="md"
                    alignSelf="start"
                />
                <VStack alignItems="start" justifyContent="start" spacing={0}>
                    <Title>{credential}</Title>
                    <Subtitle>{`${sub} \u00B7 ${company}`}</Subtitle>
                    <Text>{date}</Text>
                </VStack>
            </HStack>
            <Spacer />
            <Image
                onClick={onOpen}
                cursor="pointer"
                w={32}
                borderColor={`${colorMode}.body`}
                borderWidth={1}
                rounded="md"
                alignSelf="start"
                style={{ aspectRatio: "1.6" }}
                src={`credentials/${image}`}
                alt={sub}
                objectFit="fill"
            />
            <Overlay
                isOpen={isOpen}
                onClose={onClose}
                image={`/credentials/${image}`}
                text={`${credential} \u00B7 ${sub} by ${company}`}
                alt={sub}
            />
        </Stack>
    )
}

export default Credential
