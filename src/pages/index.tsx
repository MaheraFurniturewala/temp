import { Container, useColorMode, VStack, Box } from "@chakra-ui/react"
import type { NextPage } from "next"
import {
    Experiences,
    Projects,
    Certifications,
    Skills,
    Heading,
    Contact,
    Head,
    Footer,
    About,
    Extracurriculars,
    Education,
    Featured
} from "../components/templates"
import { Accordion } from "@chakra-ui/react"
import pinnedRepos from "../utils/pinnedRepos"
import type Project from "../types/project"

const options: (() => JSX.Element)[] = [
    Contact,
    Featured,
    Education,
    Skills,
    Experiences,
    //@ts-ignore
    Projects,
    Extracurriculars,
    Certifications
]

const Home: NextPage<{ projects: Project[] }> = ({ projects }) => {
    const { colorMode } = useColorMode()
    return (
        <Box backgroundColor={`${colorMode}.background`}>
            <Container
                backgroundColor={`${colorMode}.background`}
                minH="100vh"
                maxW="container.md">
                <Head />
                <Accordion
                    as={VStack}
                    px={3}
                    py={6}
                    w="100%"
                    spacing={0}
                    defaultIndex={[0, 1, 2, 3, 4, 5, 6, 7]}
                    allowMultiple>
                    <Heading />
                    sfjk
                    {options.map((Element, i) =>
                        Element === Projects ? (
                            projects.length > 0 ? (
                                //@ts-ignore
                                <Element key={i} projects={projects} />
                            ) : null
                        ) : (
                            <Element key={i} />
                        )
                    )}
                    <Footer />
                </Accordion>
            </Container>
        </Box>
    )
}

export default Home

export async function getServerSideProps() {
    try {
        return {
            props: {
                projects: await pinnedRepos()
            }
        }
    } catch (err) {
        console.error(err)
    }
    return {
        props: {
            projects: []
        }
    }
}
