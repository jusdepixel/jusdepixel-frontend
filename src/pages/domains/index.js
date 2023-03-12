import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import axios from '@/lib/axios'
import Link from 'next/link'

const Index = () => {
    const [loading, setLoading] = useState(true)
    const [domains, setDomains] = useState([])
    const [count, setCount] = useState(0)

    const loadApi = async () => {
        await axios
            .get('/api/domains')
            .then(res => {
                setDomains(res.data)
                setCount(res.data.length)
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
        <AppLayout
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
                        Domains /
                        <span className="ml-1 text-gray-400 font-light">
                            Index
                        </span>
                    </span>
                    <span className="basis-1/3 text-right text-gray-600">
                        {!loading
                            ? count + ' result' + (count > 1 ? 's' : '')
                            : 'Loading...'}
                    </span>
                </h2>
            }>
            <Head>
                <title>Domains</title>
            </Head>

            {!loading ? (
                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm">
                            <div className="p-6 bg-white border-b border-gray-200">
                                {domains ? (
                                    <table className="table-auto w-full">
                                        <thead>
                                            <tr>
                                                <th className="text-gray-500 font-light text-xl pb-4 text-left">
                                                    Name
                                                </th>
                                                <th className="text-gray-500 font-light text-xl pb-4 w-40 text-center">
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {domains.map(domain => (
                                                <tr key={domain.id}>
                                                    <td className="text-base py-2">
                                                        {domain.name}
                                                    </td>

                                                    <td className="text-sm pt-2">
                                                        <div className="flex items-center w-full">
                                                            <Link
                                                                href="#"
                                                                className="w-10 text-center basis-1/2">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="40"
                                                                    height="20"
                                                                    fill="currentColor"
                                                                    className="bi bi-eye text-cyan-400"
                                                                    viewBox="0 0 16 14">
                                                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                                                </svg>
                                                            </Link>
                                                            <Link
                                                                href={
                                                                    '/domains/' +
                                                                    domain.slug +
                                                                    '/edit'
                                                                }
                                                                className="w-10 text-center basis-1/2">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="40"
                                                                    height="20"
                                                                    fill="currentColor"
                                                                    className="bi bi-pencil text-gray-400"
                                                                    viewBox="0 0 16 16">
                                                                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                                                </svg>
                                                            </Link>
                                                            <Link
                                                                href="#"
                                                                className="w-10 text-center basis-1/3">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="40"
                                                                    height="20"
                                                                    fill="currentColor"
                                                                    className="bi bi-x-lg text-red-700"
                                                                    viewBox="0 0 16 16">
                                                                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                                                </svg>
                                                            </Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                ) : (
                                    <>No results...</>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </AppLayout>
    )
}

export default Index
