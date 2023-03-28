import GuestLayout from '@/components/Layouts/GuestLayout'
import Head from 'next/head'
import ApplicationLogo from '@/components/ApplicationLogo'
import ThemeToggler from '@/components/ThemeToggler'
import Link from 'next/link'
import Badge from '@/components/Badge'

const Index = () => {
    return (
        <GuestLayout>
            <Head>
                <title>Github - Index</title>
            </Head>

            <div className="relative flex flex-col items-center github">
                <ThemeToggler />
                <ApplicationLogo />
                <h2 className={`logo`}>Github repositories</h2>

                <div className="repositories grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 my-12 px-12">
                    <div className="repository relative pb-10 w-full">
                        <h2>
                            <i className="bi bi-github" />
                            jusdepixel/cms-frontend-nextjs
                            <Badge className="progress" />
                        </h2>
                        <p>
                            Content management system frontend
                            <br />
                            from
                            <Link
                                href="https://github.com/laravel/breeze-next"
                                target="_blank"
                                className="link">
                                Laravel Breeze - Next.js Edition
                                <i className="bi bi-box-arrow-up-right" />
                            </Link>
                            <br />
                            in connection with
                            <span className="attached">
                                jusdepixel/cms-backend-laravel
                            </span>
                            <br />
                            <Link
                                href="https://github.com/jusdepixel/cms-frontend-nextjs"
                                target="_blank"
                                className="link only">
                                jusdepixel/cms-frontend-nextjs
                                <i className="bi bi-box-arrow-up-right" />
                            </Link>
                        </p>
                    </div>
                    <div className="repository relative pb-10 w-full">
                        <h2>
                            <i className="bi bi-github" />
                            jusdepixel/cms-backend-laravel
                            <Badge className="progress" />
                        </h2>
                        <p>
                            Content management system API
                            <br />
                            from
                            <Link
                                className="link"
                                href="https://laravel.com/docs/10.x/starter-kits#breeze-and-next"
                                target="_blank">
                                Laravel Breeze & Next.js / API
                                <i className="bi bi-box-arrow-up-right" />
                            </Link>
                            <br />
                            in connection with
                            <span className="attached">
                                jusdepixel/cms-frontend-nextjs
                            </span>
                            <br />
                            <Link
                                href="https://github.com/jusdepixel/cms-backend-laravel"
                                target="_blank"
                                className="link only">
                                jusdepixel/cms-backend-laravel
                                <i className="bi bi-box-arrow-up-right" />
                            </Link>
                        </p>
                    </div>
                    <div className="repository relative pb-10 w-full">
                        <h2>
                            <i className="bi bi-github" />
                            jusdepixel/instagram-api-laravel
                            <Badge className="done" />
                        </h2>
                        <p>
                            Get multiple instagram feeds and share them in one
                            <br />
                            <Link
                                href="https://github.com/jusdepixel/instagram-api-laravel"
                                target="_blank"
                                className="link only">
                                jusdepixel/instagram-api-laravel
                                <i className="bi bi-box-arrow-up-right" />
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </GuestLayout>
    )
}

export default Index
