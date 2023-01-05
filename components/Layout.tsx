
import Head from "next/head"

type Props = {
    metaTags: {
        title: string
        description?: string
        ogImage?: string
        ogImageWidth?: string
        ogImageHeight?: string
    }
    children: React.ReactNode
}

export const Layout = ({
    metaTags,
    children,
}: Props) => {
    const meta = {
        title: metaTags.title,
        description: metaTags.description || '',
        ogImage: metaTags.ogImage || '',
        ogImageWidth: '381',
        ogImageHeight: '200',
    }

    return (
        <>
            <Head>
                <title>Weather</title>
                <meta name="description" content="Weathers App" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="bg-black">
                 <div className="container-xl pt-3 pb-2">
                    {children}
                </div>
            </main>
        </>)
}