import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import axios from '@/lib/axios'
import ApplicationLogo from '@/components/ApplicationLogo'
import ThemeToggle from '@/components/ThemeToggle'
import { useAuth } from '@/hooks/auth'

export default function Home() {
    const [domains, setDomains] = useState([])
    const [loading, setLoading] = useState('loading')
    const [isDefault, setDefault] = useState(true)
    const { user } = useAuth({
        middleware: 'guest',
    })

    const loadApi = async () => {
        await axios
            .get('/api')
            .then(res => {
                setDomains(res.data)
            })
            .catch(error => {
                if (error.response.status !== 422) throw error
            })
    }

    useEffect(() => {
        if (loading === 'loading') {
            loadApi().then(() => {
                setTimeout(() => {
                    setLoading('loaded')
                }, 100)
            })
        }
    })

    return (
        <div>
            <Head>
                <title>Jusdepixel</title>
            </Head>

            <div
                className={`relative flex flex-col items-top justify-center min-h-screen items-center ${loading}`}>
                <ThemeToggle />
                <ApplicationLogo className="block h-14 w-auto fill-current text-gray-600 index mt-5" />

                {domains ? (
                    <div>
                        <div className="choose-domain flex flex-col items-center">
                            <div className="video-domain">
                                <video
                                    onClick={e => {
                                        e.target.play()
                                    }}>
                                    <source
                                        src="https://static.jusdepixel.fr/mandy/mandy.mp4"
                                        type="video/mp4"
                                    />
                                </video>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-play-circle-fill"
                                    viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                                </svg>
                            </div>
                            <div className="choose-domain-text text-lg text-gray-500">
                                Choose your domain
                            </div>
                            <div className="text-gray-500 chevron">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="currentColor"
                                    className="bi bi-chevron-down"
                                    viewBox="0 0 16 16">
                                    <path
                                        fillRule="evenodd"
                                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                                    />
                                </svg>
                            </div>
                        </div>

                        <div
                            className="domains flex"
                            onMouseEnter={() => setDefault(false)}
                            onMouseLeave={() => setDefault(true)}>
                            {domains.map(domain => (
                                <Link
                                    href={
                                        domain.secure && user !== undefined
                                            ? domain.slug
                                            : '/login'
                                    }
                                    key={domain.id}
                                    className={`domain text-center ${
                                        domain.default && isDefault && 'default'
                                    }`}>
                                    <span
                                        className="domain-front text-gray-600 block mb-2"
                                        dangerouslySetInnerHTML={{
                                            __html: domain.svg,
                                        }}
                                    />
                                    {domain.secure === 1 && (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="domain-secure"
                                            viewBox="0 0 16 16">
                                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                                        </svg>
                                    )}
                                    <span className="domain-back text-gray-600">
                                        {domain.name}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </div>
    )
}
