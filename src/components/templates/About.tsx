import { Text } from "../atoms"
import { Section } from "../molecules"

import data from "../../data"

const About = () => {
    const { about } = data
    return (
        <Section id="about" title="About">
            <Text>{about}</Text>
        </Section>
    )
}

export default About
