import { useEffect, useState } from "react"
import { Grid } from "@chakra-ui/react"
import { Section } from "../molecules"
import { Repository } from "../organisms"
import type Project from "../../types/project"

const Projects = ({ projects }: { projects: Project[] }) => {
    return (
        <Section id="projects" title="Projects">
            <Grid
                gap={3}
                templateColumns={{
                    base: "repeat(1, 1fr)",
                    md: "repeat(2, 1fr)"
                }}
                w="100%">
                {projects.map((p) => {
                    return <Repository key={p.name} {...p} />
                })}
            </Grid>
        </Section>
    )
}

export default Projects
