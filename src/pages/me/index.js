import GuestLayout from '@/components/Layouts/GuestLayout'
import Head from 'next/head'
import ApplicationLogo from '@/components/ApplicationLogo'

const Index = () => {
    return (
        <GuestLayout>
            <Head>
                <title>Jusdepixel - Index</title>
            </Head>

            <div
                className={`relative flex flex-col items-top justify-center min-h-screen items-center`}>
                <ApplicationLogo className="me" />
            </div>
        </GuestLayout>
    )
}

export default Index
