import {
    Flex,
    FlexProps,
    Link,
    useColorMode,
    useColorModeValue
} from "@chakra-ui/react"
import { Button } from "../molecules"
import type IconButton from "../../types/icon-button"

const Btn = ({
    multicolor,
    d,
    index,
    colorMode
}: {
    multicolor?: boolean
    d: IconButton & {
        link?: string
    }
    index: number
    colorMode: string
}) => {
    const Icon = d.icon

    const multicolorProps = {
        bgColor: d.colors?.bg[index] ?? `${colorMode}.button`,
        color: d.colors?.text[index] ?? `${colorMode}.heading`,
        borderWidth: d.colors?.border ? 1 : 0,
        borderColor: d.colors?.border
            ? d.colors?.border[index]
            : "revert" ?? "revert",
        _hover: {
            color: d.colors?.bg[index] ?? "revert",
            bgColor: "revert"
        },
        _dark: {
            _hover: {
                color: "white",
                bgColor: d.colors?.text[index] ?? "revert"
            }
        }
    }

    return multicolor ? (
        <Button icon={<Icon />} buttonProps={multicolorProps}>
            {d.name}
        </Button>
    ) : (
        <Button
            icon={<Icon />}
            buttonProps={{
                color: `${colorMode}.heading`,
                bgColor: `${colorMode}.button`
            }}>
            {d.name}
        </Button>
    )
}

const ButtonGroup = ({
    data,
    multicolor,
    flexProps
}: {
    data: (IconButton & {
        link?: string
    })[]
    multicolor?: boolean
    flexProps?: FlexProps
}) => {
    const { colorMode } = useColorMode()
    const index = useColorModeValue(0, 1)

    return (
        <Flex flexDir="row" flexWrap="wrap" gap={2} pt={1} {...flexProps}>
            {data.map((d) => {
                if (d.link)
                    return (
                        <Link
                            key={d.name}
                            href={d.link}
                            _hover={{
                                textDecor: "none"
                            }}
                            target="_blank">
                            <Btn
                                multicolor={multicolor}
                                d={d}
                                index={index}
                                colorMode={colorMode}
                            />
                        </Link>
                    )
                else
                    return (
                        <Btn
                            key={d.name}
                            multicolor={multicolor}
                            d={d}
                            index={index}
                            colorMode={colorMode}
                        />
                    )
            })}
        </Flex>
    )
}

export default ButtonGroup
