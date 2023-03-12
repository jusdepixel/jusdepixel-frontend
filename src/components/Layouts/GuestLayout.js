import Head from 'next/head'

const GuestLayout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>Jusdepixel</title>
            </Head>

            <div className="font-sans">{children}</div>
        </div>
    )
}

export default GuestLayout
