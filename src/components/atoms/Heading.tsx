import { Heading as Head, HeadingProps } from "@chakra-ui/react"

const Heading = ({
    children,
    as,
    size,
    headingProps
}: {
    children: string
    as: string
    size: string
    headingProps?: HeadingProps
}) => {
    return (
        //@ts-ignore
        <Head as={as} size={size} textAlign="start" {...headingProps}>
            {children}
        </Head>
    )
}

export default Heading
