import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import axios from '@/lib/axios'
import Link from 'next/link'
import Button from '@/components/Button'
import { useRouter } from 'next/router'

const Index = () => {
    const router = useRouter()
    const [loading, setLoading] = useState(true)
    const [users, setUsers] = useState([])
    const [count, setCount] = useState(0)

    const loadApi = async () => {
        await axios
            .get('/api/users')
            .then(res => {
                setUsers(res.data)
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
                            className="bi bi-people"
                            viewBox="0 0 20 20">
                            <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
                        </svg>
                        Users /
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
                <title>Users</title>
            </Head>

            {!loading ? (
                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <Button
                            onClick={() => router.push('/users/create')}
                            className="mb-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-person-fill-up mr-2"
                                viewBox="0 0 16 16">
                                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.354-5.854 1.5 1.5a.5.5 0 0 1-.708.708L13 11.707V14.5a.5.5 0 0 1-1 0v-2.793l-.646.647a.5.5 0 0 1-.708-.708l1.5-1.5a.5.5 0 0 1 .708 0ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z" />
                            </svg>
                            Create a user
                        </Button>
                        <div className="bg-white overflow-hidden shadow-sm">
                            <div className="p-6 bg-white border-b border-gray-200">
                                {users ? (
                                    <table className="table-auto w-full">
                                        <thead>
                                            <tr>
                                                <th className="text-gray-500 font-light text-xl pb-4 text-left">
                                                    Name
                                                </th>
                                                <th className="text-gray-500 font-light text-xl pb-4 text-left">
                                                    Email
                                                </th>
                                                <th className="text-gray-500 font-light text-xl pb-4 w-40 text-center">
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {users.map(user => (
                                                <tr key={user.id}>
                                                    <td className="text-base py-2">
                                                        {user.name}
                                                    </td>
                                                    <td className="text-base py-2">
                                                        {user.email}
                                                    </td>

                                                    <td className="text-sm pt-2">
                                                        <div className="grid grid-cols-2 content-center w-full">
                                                            <Link
                                                                href={{
                                                                    pathname:
                                                                        '/users/edit',
                                                                    query: {
                                                                        id:
                                                                            user.id,
                                                                    },
                                                                }}>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="20"
                                                                    height="20"
                                                                    fill="currentColor"
                                                                    className="bi bi-pencil text-gray-400 w-full"
                                                                    viewBox="0 0 16 16">
                                                                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                                                </svg>
                                                            </Link>
                                                            <Link
                                                                href={{
                                                                    pathname:
                                                                        '/users/delete',
                                                                    query: {
                                                                        id:
                                                                            user.id,
                                                                    },
                                                                }}>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="20"
                                                                    height="20"
                                                                    fill="currentColor"
                                                                    className="bi bi-x-lg text-red-700 w-full"
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
                                    <>No result...</>
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
