import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import axios from '@/lib/axios'
import ApplicationLogo from '@/components/ApplicationLogo'
import ThemeToggler from '@/components/ThemeToggler'
import { useAuth } from '@/hooks/auth'
import { Loading } from '@/components/Loading'

export default function Home() {
    const [domains, setDomains] = useState([])
    const [loading, setLoading] = useState('')
    const [isDefault, setDefault] = useState(true)
    const { user } = useAuth({
        middleware: 'guest',
    })

    const loadApi = async () => {
        await axios
            .get('/api/domains')
            .then(res => {
                setDomains(res.data.datas)
            })
            .catch(error => {
                if (error.response.status !== 422) throw error
            })
    }

    useEffect(() => {
        if (loading === '') {
            loadApi().then(() => {
                setLoading('loaded')
            })
        }
    })

    return (
        <div>
            <Head>
                <title>Jusdepixel</title>
            </Head>

            {loading === '' && <Loading />}

            <div
                className={`relative flex flex-col items-top justify-center min-h-screen items-center ${loading}`}>
                <ThemeToggler />
                <ApplicationLogo className="h-14 index" />

                {domains && (
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
                            </div>
                            <div className="choose-domain-text text-lg text-gray-500">
                                Choose your domain
                            </div>
                            <div className="text-gray-500 chevron">
                                <i className="bi bi-chevron-down" />
                            </div>
                        </div>

                        <div
                            className="domains flex"
                            onMouseEnter={() => setDefault(false)}
                            onMouseLeave={() => setDefault(true)}>
                            {domains.map(domain => (
                                <Link
                                    href={
                                        (domain.secure === 1 &&
                                            user !== undefined) ||
                                        domain.secure === 0
                                            ? domain.slug
                                            : '/login'
                                    }
                                    key={domain.id}
                                    className={`domain text-center ${
                                        domain.default && isDefault && 'default'
                                    }`}>
                                    <span className="domain-front text-gray-600 block mb-2">
                                        <i
                                            className={`mb-2 bi bi-${domain.icon}`}
                                        />
                                    </span>
                                    {domain.secure === 1 && (
                                        <i
                                            className={`bi bi-lock-fill domain-secure`}
                                        />
                                    )}
                                    <span className="domain-back text-gray-600">
                                        {domain.name}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
