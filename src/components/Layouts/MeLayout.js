import Head from 'next/head'
import ThemeToggler from '@/components/ThemeToggler'
import ApplicationLogo from '@/components/ApplicationLogo'
import Network from '@/components/Network'

const MeLayout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>Jusdepixel</title>
            </Head>

            <div
                className={`flex flex-col justify-center min-h-screen items-center me`}>
                <ThemeToggler />
                <ApplicationLogo />

                {children}

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
