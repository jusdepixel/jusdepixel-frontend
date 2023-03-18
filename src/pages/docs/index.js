import GuestLayout from '@/components/Layouts/GuestLayout'
import Head from 'next/head'
import ApplicationLogo from '@/components/ApplicationLogo'
import Link from 'next/link'
import ThemeToggler from '@/components/ThemeToggler'

const Index = () => {
    return (
        <GuestLayout>
            <Head>
                <title>Docs - Index</title>
            </Head>

            <div className="relative flex items-top justify-center min-h-screen sm:items-center sm:pt-0">
                <ThemeToggler />
                <div className="max-w-xl mx-auto sm:px-6 lg:px-8">
                    <ApplicationLogo className="login" />
                    <div className="p-6 text-center mt-5">
                        <h2>Under construction, come back later...</h2>
                    </div>

                    <Link
                        href="/"
                        className="px-4 font-light text-lg text-gray-500 block text-center mt-5">
                        Back to the homepage
                    </Link>
                </div>
            </div>
        </GuestLayout>
    )
}

export default Index
