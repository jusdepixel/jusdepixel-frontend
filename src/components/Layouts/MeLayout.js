import Head from 'next/head'
import ThemeToggler from '@/components/ThemeToggler'
import ApplicationLogo from '@/components/ApplicationLogo'
import Network from '@/components/Network'
import Link from 'next/link'
import { useRouter } from 'next/router'

const MeLayout = ({ page = false, children }) => {
    const router = useRouter()

    return (
        <div>
            <Head>
                <title>Jusdepixel</title>
            </Head>

            <div
                className={`flex flex-col items-center me ${
                    page ? 'page' : 'justify-center min-h-screen'
                }`}>
                <ThemeToggler />
                <ApplicationLogo />
                {!page && (
                    <h2 className="logo">
                        Freelance Web Application Developer
                    </h2>
                )}

                {children}

                <div className="links-me flex mt-10 space-x-5">
                    {page && (
                        <Link
                            href="/me"
                            className={
                                router.pathname === '/me' ? 'active' : ''
                            }>
                            Home
                        </Link>
                    )}
                    <Link
                        href="/me/projects"
                        className={
                            router.pathname === '/me/projects' ? 'active' : ''
                        }>
                        Projects
                    </Link>
                    <Link
                        href="/me/work-with-me"
                        className={
                            router.pathname === '/me/work-with-me'
                                ? 'active'
                                : ''
                        }>
                        Work with me ?
                    </Link>
                    <Link
                        href="/me/jobs"
                        className={
                            router.pathname === '/me/jobs' ? 'active' : ''
                        }>
                        Jobs
                    </Link>
                </div>

                <div className="flex absolute bottom-10">
                    <Network
                        network="linkedin"
                        link="https://www.linkedin.com/in/mandy-blique-jusdepixel/"
                    />
                    <Network
                        network="github"
                        link="https://github.com/jusdepixel"
                    />
                    <Network
                        network="instagram"
                        link="https://www.instagram.com/jusdepixel/"
                    />
                    <Network network="discord" link="#" />
                    <Network network="google" link="#" />
                </div>
            </div>
        </div>
    )
}

export default MeLayout
