import { ReactNode } from "react"
import { VStack, Divider, useColorMode, Spacer } from "@chakra-ui/react"
import { H3 } from "../atoms"

import {
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon
} from "@chakra-ui/react"

const Section = ({
    children,
    id,
    title
}: {
    children: ReactNode
    id: string
    title: string
}) => {
    const { colorMode } = useColorMode()
    return (
        <>
            {/* <Divider borderColor={`${colorMode}.body`} /> */}
            <AccordionItem
                w="100%"
                id={id}
                alignItems="start"
                borderColor={`${colorMode}.body`}>
                <AccordionButton pl={0} pt={6} py={6} _expanded={{ pb: 3 }}>
                    <H3>{title}</H3>
                    <Spacer />
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel px={0} pt={0} pb={6}>
                    {children}
                </AccordionPanel>
            </AccordionItem>
        </>
    )
}

export default Section
