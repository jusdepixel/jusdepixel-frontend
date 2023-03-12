import AdminLayout from '@/components/Layouts/AdminLayout'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import axios from '@/lib/axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Label from '@/components/Label'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Button from '@/components/Button'
import { useAuth } from '@/hooks/auth'
import AuthSessionStatus from '@/components/AuthSessionStatus'

const Edit = () => {
    const router = useRouter()
    const {
        query: { id },
    } = router

    const { update } = useAuth({ middleware: 'auth' })

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState([])
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')

    const loadApi = async () => {
        await axios
            .get('/api/users/' + id + '/edit')
            .then(res => {
                setUser(res.data)
                setEmail(res.data.email)
                setName(res.data.name)
            })
            .catch(error => {
                if (error.response.status !== 422) throw error
            })
    }

    const submitForm = async event => {
        event.preventDefault()

        update({
            id,
            name,
            email,
            setErrors,
            setStatus,
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
                        Users /
                        <Link href="/users" className="ml-1">
                            Index /
                        </Link>
                        <span className="ml-1 text-gray-400 font-light">
                            {!loading && user.name}
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
                                {/* Session Status */}
                                <AuthSessionStatus
                                    className="mb-4"
                                    status={status}
                                />

                                {user ? (
                                    <form onSubmit={submitForm}>
                                        <Input
                                            id="id"
                                            type="hidden"
                                            value={id}
                                        />

                                        {/* Name */}
                                        <div>
                                            <Label htmlFor="name">Name</Label>

                                            <Input
                                                id="name"
                                                type="text"
                                                value={name}
                                                className="block mt-1 w-full"
                                                onChange={event =>
                                                    setName(event.target.value)
                                                }
                                                required
                                                autoFocus
                                            />

                                            <InputError
                                                messages={errors.name}
                                                className="mt-2"
                                            />
                                        </div>

                                        {/* Email Address */}
                                        <div className="mt-4">
                                            <Label htmlFor="email">Email</Label>

                                            <Input
                                                id="email"
                                                type="email"
                                                value={email}
                                                className="block mt-1 w-full"
                                                onChange={event =>
                                                    setEmail(event.target.value)
                                                }
                                                required
                                            />

                                            <InputError
                                                messages={errors.email}
                                                className="mt-2"
                                            />
                                        </div>

                                        <Button className="mt-5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-person-fill-up mr-1"
                                                viewBox="0 0 16 16">
                                                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.354-5.854 1.5 1.5a.5.5 0 0 1-.708.708L13 11.707V14.5a.5.5 0 0 1-1 0v-2.793l-.646.647a.5.5 0 0 1-.708-.708l1.5-1.5a.5.5 0 0 1 .708 0ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z" />
                                            </svg>
                                            Update user
                                        </Button>
                                    </form>
                                ) : (
                                    <></>
                                )}
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
