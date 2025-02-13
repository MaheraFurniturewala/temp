import { Stack, HStack, Image, VStack, Spacer } from "@chakra-ui/react"
import { H1, Text } from "../atoms"
import { Interests, CTA, ColorToggle } from "../organisms"

import data from "../../data"

const Heading = () => {
    const { name, tagline, image } = data

    return (
        <Stack
            direction={{ base: "column", md: "row" }}
            width="100%"
            spacing={{ base: 1, md: 6 }}
            pb={6}>
            <Image
                src={image}
                width={{ base: "30%", sm: "20%", md: "15%" }}
                height={{ base: "30%", sm: "20%", md: "15%" }}
                alt="Profile"
                rounded="full"
            />
            <VStack alignItems="start" spacing={1} w="100%">
                <HStack w="100%">
                    <H1>{name}</H1>
                    <Spacer />
                    <ColorToggle />
                </HStack>
                <Text>{tagline}</Text>
                <CTA />
                <Interests />
            </VStack>
        </Stack>
    )
}

export default Heading
