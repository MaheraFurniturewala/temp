import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    UseDisclosureProps
} from "@chakra-ui/react"
import {
    Center,
    VStack,
    Image,
    Container,
    useColorMode
} from "@chakra-ui/react"
import { Text } from "../atoms"
import type CredentialType from "../../types/credential"

const Overlay = ({
    image,
    text,
    alt,
    isOpen,
    onClose
}: { image: string; text: string; alt: string } & UseDisclosureProps) => {
    const { colorMode } = useColorMode()

    return (
        <Modal size="full" isOpen={isOpen!} onClose={onClose!} isCentered>
            <ModalOverlay />
            <ModalContent bgColor="rgba(0, 0, 0, 0.5)" shadow="none">
                {/* <ModalCloseButton /> */}
                <ModalBody w="100%" py={0} onClick={onClose} onBlur={onClose}>
                    <Container maxW="container.md" w="100%" h="100vh">
                        <Center w="100%" h="100%" as={VStack}>
                            <Image
                                w="100%"
                                src={image}
                                rounded="md"
                                alt={alt}
                            />
                            <Text
                                textProps={{
                                    color: "dark.heading",
                                    textAlign: "center"
                                }}>
                                {text}
                            </Text>
                        </Center>
                    </Container>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default Overlay
