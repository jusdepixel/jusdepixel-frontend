import AdminLayout from '@/components/Layouts/AdminLayout'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import axios from '@/lib/axios'
import Link from 'next/link'

const Edit = () => {
    const [loading, setLoading] = useState(true)
    const [domain, setDomain] = useState([])

    const loadApi = async () => {
        await axios
            .get('/api/domains//edit')
            .then(res => {
                setDomain(res.data)
            })
            .catch(error => {
                if (error.response.status !== 422) throw error
            })
    }

    useEffect(() => {
        if (loading) {
            loadApi().then(() => {
                setLoading(false)
            })
        }
    })

    return (
        <AdminLayout
            header={
                <h2 className="text-gray-600 leading-tight flex flex-row">
                    <span className="basis-2/3 flex">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="22"
                            fill="currentColor"
                            className="bi bi-collection"
                            viewBox="0 0 20 20">
                            <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z" />
                        </svg>
                        Domains / <Link href="/domains">Index</Link>
                        <span className="ml-1 text-gray-400 font-light">
                            {!loading && domain.name}
                        </span>
                    </span>
                    <span className="basis-1/3 text-right text-gray-600">
                        {loading && 'Loading...'}
                    </span>
                </h2>
            }>
            <Head>
                <title>Domains - Edit</title>
            </Head>

            {!loading ? (
                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm">
                            <div className="p-6 bg-white border-b border-gray-200">
                                {domain ? <></> : <></>}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </AdminLayout>
    )
}

export default Edit
