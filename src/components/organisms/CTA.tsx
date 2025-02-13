import { Flex } from "@chakra-ui/react"
import { IconText } from "../molecules"
import { HiOutlineLocationMarker } from "react-icons/hi"
import { HiOutlineLink } from "react-icons/hi"
import { MdWorkOutline } from "react-icons/md"

import data from "../../data"

const CTA = () => {
    const { location, website, work } = data
    return (
        <Flex direction="row" flexWrap="wrap" columnGap={3} rowGap={1}>
            {location && (
                <IconText icon={HiOutlineLocationMarker} spacing={1}>
                    {location}
                </IconText>
            )}
            {/* {website && (
                <IconText
                    icon={HiOutlineLink}
                    spacing={1}
                    link
                    linkProps={{ href: website }}>
                    {website.split("://")[1]}
                </IconText>
            )} */}
            {/* {work && (
                <IconText icon={MdWorkOutline} spacing={1}>
                    {work}
                </IconText>
            )} */}
        </Flex>
    )
}

export default CTA
