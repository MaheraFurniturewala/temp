import axios from "axios"
import type Project from "../types/project"

const pinnedRepos = async (): Promise<Project[]> => {
    const query = `query {
        user(login: "MaheraFurniturewala") {
            name
            pinnedItems(first: 6) {
                totalCount
                nodes {
                    __typename
                    ... on Repository {
                        description
                        forkCount
                        homepageUrl
                        languages(first: 1) {
                            nodes {
                                color
                                name
                            }
                        }
                        name
                        stargazerCount
                        url
                    }
                }
                    
            }
        }
    }`
    const { data } = await axios.post(
        "https://api.github.com/graphql",
        {
            query
        },
        {
            headers: {
                Authorization: `bearer ${process.env.GITHUB_PAT!}`
            }
        }
    )

    const repos = data.data.user.pinnedItems.nodes
    const projects: Project[] = repos.map((p: any) => {
        return {
            description: p.description,
            forks: p.forkCount,
            name: p.name,
            url: p.homepageUrl,
            language: {
                name: p.languages.nodes[0].name,
                color: p.languages.nodes[0].color
            },
            stars: p.stargazerCount,
            link: p.url
        }
    })

    return projects
}

export default pinnedRepos
