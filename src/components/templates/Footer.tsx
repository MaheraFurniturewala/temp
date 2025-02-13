import { Flex, Link, useColorMode } from "@chakra-ui/react"
import { Text } from "../atoms"

const Footer = () => {
    const { colorMode } = useColorMode()
    return (
        <Flex
            pt={3}
            flexWrap="wrap"
            flexDirection="row"
            gap={1}
            justify="center">
            <Text textProps={{ color: `${colorMode}.subheading` }}>
                &copy; 2022{" "}
                <Link
                    href="https://www.linkedin.com/in/mahera-furniturewala/"
                    textDecoration="underline">
                    Mahera Furniturewala
                </Link>{" "}
            </Text>
            <Text textProps={{ color: `${colorMode}.subheading` }}>
                Powered by{" "}
                <Link
                    href="https://nextjs.org"
                    textDecoration="underline"
                    target="_blank">
                    Next.js
                </Link>{" "}
                and{" "}
                <Link
                    href="https://chakra-ui.com"
                    textDecoration="underline"
                    target="_blank">
                    Chakra UI
                </Link>
            </Text>
        </Flex>
    )
}

export default Footer
