import {
    Link,
    Icon,
    HStack,
    TextProps,
    IconProps,
    StackProps,
    LinkProps,
    Box,
    useColorMode
} from "@chakra-ui/react"
import { Text } from "../atoms"
import { IconType } from "react-icons"

const IconText = ({
    spacing,
    children,
    icon,
    link,
    stackProps,
    iconProps,
    textProps,
    linkProps
}: {
    spacing?: number
    children: string
    icon: IconType
    link?: boolean
    stackProps?: StackProps
    iconProps?: IconProps
    textProps?: TextProps
    linkProps?: LinkProps
}) => {
    const { colorMode } = useColorMode()
    const Element = link ? Link : Box

    return (
        //@ts-ignore
        <Element
            {...(link
                ? {
                      fontSize: "sm",
                      color: `${colorMode}.text`,
                      _hover: {
                          color: `${colorMode}.accent`,
                          textDecor: "none"
                      },
                      ...linkProps
                  }
                : {})}>
            <HStack
                flex={0}
                _hover={{ color: "inherit" }}
                spacing={spacing ? spacing : 2}
                color={`${colorMode}.text`}
                {...stackProps}>
                <Icon as={icon} {...iconProps} />
                <Text textProps={{ color: "inherit", ...textProps }}>
                    {children}
                </Text>
            </HStack>
        </Element>
    )
}

export default IconText
