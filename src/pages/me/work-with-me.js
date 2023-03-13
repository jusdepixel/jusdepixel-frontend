import GuestLayout from '@/components/Layouts/GuestLayout'
import Head from 'next/head'
import ThemeToggle from '@/components/ThemeToggle'
import ApplicationLogo from '@/components/ApplicationLogo'
import Link from 'next/link'

const WorkWithMe = () => {
    return (
        <GuestLayout>
            <Head>
                <title>Jusdepixel - Work with me</title>
            </Head>

            <div className="flex flex-col me">
                <ApplicationLogo className="page" href="/me" />
                <ThemeToggle />
                <div className="p-20 pt-0">
                    <h1 className="mt-5">Work with me</h1>
                    <h2>Under construction, come back later...</h2>
                    <Link href="/me" className="font-light text-lg block mt-5">
                        Back to the homepage
                    </Link>
                </div>
            </div>
        </GuestLayout>
    )
}

export default WorkWithMe
