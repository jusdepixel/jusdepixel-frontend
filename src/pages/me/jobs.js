import Head from 'next/head'
import ThemeToggle from '@/components/ThemeToggle'
import GuestLayout from '@/components/Layouts/GuestLayout'
import ApplicationLogo from '@/components/ApplicationLogo'
import Link from 'next/link'

const Jobs = () => {
    return (
        <GuestLayout>
            <Head>
                <title>Jusdepixel - Jobs</title>
            </Head>

            <div className="me">
                <ApplicationLogo className="page" />
                <ThemeToggle />
                <div className="p-20 pt-0">
                    <h1 className="mt-5">Jobs</h1>
                    <h2>Under construction, come back later...</h2>
                    <Link href="/me" className="font-light text-lg block mt-5">
                        Back to the homepage
                    </Link>
                </div>
            </div>
        </GuestLayout>
    )
}

export default Jobs
