import { Flex, useColorMode } from "@chakra-ui/react"
import { Text } from "../atoms"

import data from "../../data"

const Interests = () => {
    const { colorMode } = useColorMode()
    const { interests } = data
    return (
        <Flex direction="row" flexWrap="wrap" columnGap={2} rowGap={1}>
            {interests.map((i) => {
                return (
                    <Text
                        key={i}
                        textProps={{
                            color: `${colorMode}.accent`,
                            cursor: "default"
                        }}>
                        #{i}
                    </Text>
                )
            })}
        </Flex>
    )
}

export default Interests
