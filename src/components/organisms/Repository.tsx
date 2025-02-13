import { GridItem, Flex, Spacer, useColorMode, VStack } from "@chakra-ui/react"
import { Text } from "../atoms"
import { IconText } from "../molecules"
import type Project from "../../types/project"

import { RiGitRepositoryLine } from "react-icons/ri"
import { BsFillCircleFill } from "react-icons/bs"
import { AiOutlineStar } from "react-icons/ai"
import { BiGitRepoForked } from "react-icons/bi"
import { HiOutlineLink } from "react-icons/hi"

const Repository = ({
    description,
    forks,
    name,
    url,
    language,
    stars,
    link
}: Project) => {
    const { colorMode } = useColorMode()
    return (
        <GridItem
            as={VStack}
            minH={40}
            alignItems="start"
            borderColor={`${colorMode}.body`}
            borderWidth={1}
            p={4}
            rounded="md">
            <IconText
                linkProps={{ href: link, target: "_blank" }}
                stackProps={{
                    color: "inherit",
                    _hover: { textDecoration: "underline" }
                }}
                textProps={{ fontWeight: "bold", color: `${colorMode}.accent` }}
                icon={RiGitRepositoryLine}
                link>
                {name}
            </IconText>
            <Text>
                {description.length > 120
                    ? description.slice(0, 120) + "..."
                    : description}
            </Text>
            <Spacer />
            <Flex direction="row" columnGap={3} rowGap={1} flexWrap="wrap">
                <IconText
                    icon={BsFillCircleFill}
                    spacing={1}
                    iconProps={{ color: language.color, fontSize: "xs" }}>
                    {language.name}
                </IconText>
                {stars > 0 && (
                    <IconText
                        icon={AiOutlineStar}
                        spacing={1}
                        link
                        linkProps={{
                            href: `${link}/stargazers`,
                            target: "_blank"
                        }}>
                        {stars.toString()}
                    </IconText>
                )}
                {forks > 0 && (
                    <IconText
                        icon={BiGitRepoForked}
                        spacing={1}
                        link
                        linkProps={{
                            href: `${link}/network/members`,
                            target: "_blank"
                        }}>
                        {forks.toString()}
                    </IconText>
                )}
                {url && (
                    <IconText
                        icon={HiOutlineLink}
                        spacing={1}
                        link
                        linkProps={{
                            href: url,
                            target: "_blank"
                        }}>
                        View Project
                    </IconText>
                )}
            </Flex>
        </GridItem>
    )
}

export default Repository
