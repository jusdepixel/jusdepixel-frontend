import GuestLayout from '@/components/Layouts/GuestLayout'
import Head from 'next/head'
import ApplicationLogo from '@/components/ApplicationLogo'
import ThemeToggle from '@/components/ThemeToggle'

const Index = () => {
    return (
        <GuestLayout>
            <Head>
                <title>Jusdepixel - Index</title>
            </Head>

            <div
                className={`relative flex flex-col items-top justify-center min-h-screen items-center me`}>
                <ThemeToggle />
                <h1>
                    <ApplicationLogo />
                </h1>
                <h2>Freelance Web Developer</h2>
                <h3 className="mt-5">Looking for new challenges !</h3>
            </div>
        </GuestLayout>
    )
}

export default Index
