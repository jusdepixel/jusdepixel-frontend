import Head from 'next/head'
import ThemeToggler from '@/components/ThemeToggler'
import ApplicationLogo from '@/components/ApplicationLogo'
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
                    page ? 'page' : 'index'
                }`}>
                <ThemeToggler />
                <ApplicationLogo />
                <h2 className={`logo`}>Freelance Web Application Developer</h2>

                <div className={`links-me flex space-x-5 mt-5`}>
                    <Link
                        href="/me"
                        className={router.pathname === '/me' ? 'active' : ''}>
                        Me !
                    </Link>
                    <Link
                        href="/me/jobs"
                        className={
                            router.pathname === '/me/jobs' ? 'active' : ''
                        }>
                        Jobs
                    </Link>
                    <Link
                        href="/me/projects"
                        className={
                            router.pathname === '/me/projects' ? 'active' : ''
                        }>
                        Some projects
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
                </div>

                {children}
            </div>
        </div>
    )
}

export default MeLayout
