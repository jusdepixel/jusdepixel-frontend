import GuestLayout from '@/components/Layouts/GuestLayout'
import Head from 'next/head'
import ApplicationLogo from '@/components/ApplicationLogo'
import ThemeToggler from '@/components/ThemeToggler'

const Index = () => {
    return (
        <GuestLayout>
            <Head>
                <title>Docs - Index</title>
            </Head>

            <div className="relative flex flex-col items-center docs">
                <ThemeToggler />
                <ApplicationLogo />
                <h2 className={`logo`}>Documentation (in progress...)</h2>

                <div className="w-2/3 my-12">
                    <div className="flex">
                        <div className="w-1/3">
                            <h1>
                                <i className="bi bi-instagram mr-2" />
                                Instagram Api Laravel
                            </h1>
                            <nav className="navbar mt-5">
                                <h6 className="w-100">
                                    <a className="link-item" href="/">
                                        /README.md
                                    </a>
                                </h6>
                                <h6 className="mb-0">/api</h6>
                                <ul className="navbar-nav mt-2">
                                    <li className="nav-item mt-2">
                                        <h6>
                                            <span>/api</span>/init
                                        </h6>
                                    </li>
                                    <ul className="navbar-nav">
                                        <li className="nav-item pb-0">
                                            <a href="#">
                                                <small className="badge badge-get">
                                                    GET
                                                </small>
                                                <span>/api/init</span>/url
                                            </a>
                                        </li>
                                    </ul>
                                </ul>
                                <ul className="navbar-nav pt-3">
                                    <li className="nav-item mt-2">
                                        <h6>
                                            <span>/api</span>/auth
                                        </h6>
                                    </li>
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <a href="#">
                                                <small className="badge small badge-get">
                                                    GET
                                                </small>
                                                <span>/api/auth</span>
                                                /code/:code
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#">
                                                <small className="badge badge-get">
                                                    GET
                                                </small>
                                                <span>/api/auth</span>
                                                /profile
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#">
                                                <small className="badge badge-post">
                                                    POST
                                                </small>
                                                <span>/api/auth</span>
                                                /login/:code
                                            </a>
                                        </li>
                                        <li className="nav-item pb-0">
                                            <a href="#">
                                                <small className="badge badge-post">
                                                    POST
                                                </small>
                                                <span>/api/auth</span>
                                                /logout
                                            </a>
                                        </li>
                                    </ul>
                                </ul>
                                <ul className="navbar-nav pt-3">
                                    <li className="nav-item mt-2">
                                        <h6>
                                            <span>/api</span>/me
                                        </h6>
                                    </li>
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <a href="#">
                                                <small className="badge small badge-get">
                                                    GET
                                                </small>
                                                <span>/api/me</span>/profile
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#">
                                                <small className="badge small badge-delete">
                                                    DEL
                                                </small>
                                                <span>/api/me</span>/delete
                                            </a>
                                        </li>
                                        <li className="nav-item pb-0">
                                            <a href="#">
                                                <small className="badge small badge-patch">
                                                    PATCH
                                                </small>
                                                <span>/api/me</span>
                                                /posts-auto
                                            </a>
                                        </li>

                                        <li className="nav-item mt-3">
                                            <h6>
                                                <span>/api/me</span>/posts
                                            </h6>
                                        </li>
                                        <ul className="navbar-nav">
                                            <li className="nav-item">
                                                <a href="#">
                                                    <small className="badge small badge-get">
                                                        GET
                                                    </small>
                                                    <span>/api/me/posts</span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#">
                                                    <small className="badge badge-get">
                                                        GET
                                                    </small>
                                                    <span>/api/me/posts</span>
                                                    /:id
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#">
                                                    <small className="badge badge-delete text-white">
                                                        DEL
                                                    </small>
                                                    <span>/api/me/posts</span>
                                                    /:id
                                                </a>
                                            </li>
                                            <li className="nav-item pb-0">
                                                <a href="#">
                                                    <small className="badge badge-post">
                                                        POST
                                                    </small>
                                                    <span>/api/me/posts</span>
                                                    /:instagramId
                                                </a>
                                            </li>
                                        </ul>
                                    </ul>
                                </ul>
                                <ul className="navbar-nav pt-3">
                                    <li className="nav-item mt-2">
                                        <h6>
                                            <span>/api</span>/posts
                                        </h6>
                                    </li>
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <a href="#">
                                                <small className="badge badge-get">
                                                    GET
                                                </small>
                                                <span>/api/posts</span>
                                            </a>
                                        </li>
                                        <li className="nav-item pb-0">
                                            <a href="#">
                                                <small className="badge badge-get">
                                                    GET
                                                </small>
                                                <span>/api/posts</span>/:id
                                            </a>
                                        </li>
                                    </ul>
                                </ul>
                                <ul className="navbar-nav pt-3">
                                    <li className="nav-item mt-2">
                                        <h6>
                                            <span>/api</span>/users
                                        </h6>
                                    </li>
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <a href="#">
                                                <small className="badge badge-get">
                                                    GET
                                                </small>
                                                <span>/api/users</span>
                                            </a>
                                        </li>
                                        <li className="nav-item pb-0">
                                            <a href="#">
                                                <small className="badge badge-get">
                                                    GET
                                                </small>
                                                <span>/api/users</span>/:id
                                            </a>
                                        </li>
                                    </ul>
                                </ul>
                                <ul className="navbar-nav pt-3">
                                    <li className="nav-item mt-2">
                                        <h6>
                                            <span>/api</span>/refresh
                                        </h6>
                                    </li>
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <a href="#">
                                                <small className="badge badge-patch">
                                                    PATCH
                                                </small>
                                                <span>/api/refresh</span>
                                                /token
                                            </a>
                                        </li>
                                        <li className="nav-item pb-0">
                                            <a href="#">
                                                <small className="badge badge-patch">
                                                    PATCH
                                                </small>
                                                <span>/api/refresh</span>
                                                /post/:instagramId
                                            </a>
                                        </li>
                                    </ul>
                                </ul>
                            </nav>
                        </div>
                        <div className="w-2/3">
                            <h2>README.md</h2>
                            <div className="flex mb-4 space-x-1">
                                <img
                                    src="https://img.shields.io/badge/Version-v1.2.4-lightgrey"
                                    alt="Version v1.2.4"
                                />
                                <img
                                    src="https://img.shields.io/badge/Laravel%20Support-v9%2C%20v10-blue"
                                    alt="Laravel support v9, v10"
                                />
                                <img
                                    src="https://img.shields.io/badge/Tests-passing-brightgreen"
                                    alt="Tests passing"
                                />
                                <img
                                    src="https://img.shields.io/badge/Licence-MIT-yellow"
                                    alt="Licence MIT"
                                />
                            </div>
                            Get multiple instagram feeds and share them in one
                            <h4 className="mt-3">Configuration</h4>
                            <h5 className="mt-2">
                                Setting your Instagram application in .env
                            </h5>
                            <code>
                                INSTAGRAM_CLIENT_ID=INSTAGRAM_CLIENT_ID
                                <br />
                                INSTAGRAM_CLIENT_SECRET=INSTAGRAM_CLIENT_SECRET
                                <br />
                                INSTAGRAM_ROUTES_PREFIX=api
                                <br />
                                INSTAGRAM_REQUEST_URI=https://mydomain.me/INSTAGRAM_ROUTES_PREFIX/auth/code
                            </code>
                            <h4 className="mt-3">Installation</h4>
                            <h5 className="mt-2">
                                Install this package via Composer
                            </h5>
                            <code>
                                composer require
                                jusdepixel/instagram-api-laravel
                            </code>
                            <h5 className="mt-2">
                                Add service in config/app.php
                            </h5>
                            <code>
                                Jusdepixel\InstagramApiLaravel\InstagramServiceProvider::class,
                            </code>
                            <h5 className="mt-2">
                                Add jobs in app/Console/Kernel.php
                            </h5>
                            <code>
                                protected function schedule(Schedule $schedule):
                                void
                                <br />
                                {'{'}
                                <br />
                                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                                {
                                    '$schedule->job(new RefreshTokenJob)->daily();'
                                }
                                <br />
                                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                                {
                                    '$schedule->job(new RefreshMediaJob)->daily();'
                                }
                                <br />
                                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                                {'$schedule->job(new AutoRepostJob)->daily();'}
                                <br />
                                {'}'}
                            </code>
                            <h5 className="mt-2">Run migration</h5>
                            <code>php artisan migrate</code>
                            <h5 className="mt-2">And start server</h5>
                            <code>php artisan serve</code>
                            <h4 className="mt-3">Usage</h4>
                            <h5 className="mt-2">
                                Get your instagram app code first
                            </h5>
                            <code>GET /api/init/url</code>
                            <h5 className="mt-2">Copy returned code</h5>
                            <code>{`{"code":"INSTAGRAM_CODE"}`}</code>
                            <h5 className="mt-2">Then, get your token</h5>
                            <code>POST /api/auth/login/INSTAGRAM_CODE</code>
                            <p>You are now logged, enjoy !</p>
                        </div>
                    </div>
                </div>
            </div>
        </GuestLayout>
    )
}

export default Index
