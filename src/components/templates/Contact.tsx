import { Section, ButtonGroup } from "../molecules"

import data from "../../data"

const Contact = () => {
    const { contact } = data
    return (
        <Section id="connect" title="Connect">
            <ButtonGroup data={contact} />
        </Section>
    )
}

export default Contact
