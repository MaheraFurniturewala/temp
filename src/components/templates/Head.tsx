import Head from "next/head"

const PageHead = () => {
    const title = "Mahera Furniturewala's Showcase"
    const desc = "All about me and what I do in just a page."

    return (
        <Head>
            <meta charSet="UTF-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />

            <title>{title}</title>
            <meta name="description" content={desc} />
            <link rel="icon" href="/favicon.png" />

            <meta property="og:title" content={title} />
            <meta property="og:type" content="website" />
            <meta property="og:description" content={desc} />
            <meta
                property="og:image"
                content="https://showcase.arjunsivaraman.co/ogicon.png"
            />
            <meta
                property="og:url"
                content="https://showcase.arjunsivaraman.co/"
            />
            <meta property="og:site_name" content="Arjun Sivaraman" />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@1407Arjun" />
            <meta property="twitter:domain" content="arjunsivaraman.co" />
            <meta
                property="twitter:url"
                content="https://showcase.arjunsivaraman.co/"
            />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={desc} />
            <meta
                name="twitter:image"
                content="https://showcase.arjunsivaraman.co/ogicon.png"
            />
        </Head>
    )
}

export default PageHead
