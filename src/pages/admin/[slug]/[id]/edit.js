import AdminLayout from '@/components/Layouts/AdminLayout'
import Head from 'next/head'
import Link from 'next/link'
import Label from '@/components/Label'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Button from '@/components/Button'
import { useEffect, useState } from 'react'
import { useModule } from '@/hooks/module'
import { Loading } from '@/components/Loading'

const Edit = () => {
    const { model, one, update, data, errors } = useModule()

    const [loading, setLoading] = useState(true)
    const [name, setName] = useState('')
    const [slug, setSlug] = useState('')
    const [icon, setIcon] = useState('')
    const [isUpdate, setIsUpdate] = useState(false)

    const submitForm = async event => {
        event.preventDefault()
        setIsUpdate(true)
        setLoading(true)

        update({
            name: name || data.name,
            slug: slug || data.slug,
            icon: icon || data.icon,
        }).then(() => {
            setLoading(false)
            setIsUpdate(false)
        })
    }

    useEffect(() => {
        if (loading) {
            one().then(() => {
                setName(data.name)
                setSlug(data.slug)
                setIcon(data.icon)
                setLoading(false)
            })
        }
    }, [])

    return (
        <AdminLayout
            module={model.slug}
            header={
                data.name &&
                model.name && (
                    <h2 className="leading-tight flex flex-row">
                        <span className="flex">
                            <i className={`mr-1 block bi bi-${model.icon}`} />
                            {model.name} /
                            <Link
                                href={`/admin/${model.slug}`}
                                className="ml-1">
                                Index
                            </Link>
                            <span className="ml-1 font-light">
                                / {data.name}
                            </span>
                        </span>
                    </h2>
                )
            }>
            <Head>
                <title>{model.name} - Edit</title>
            </Head>

            {loading && <Loading />}

            {!loading || isUpdate ? (
                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm">
                            <div className="p-6 bg-white border-b border-gray-200">
                                <form onSubmit={submitForm}>
                                    <div className="flex space-x-4">
                                        <div className="w-1/2">
                                            <Label htmlFor="name">Name</Label>
                                            <Input
                                                id="name"
                                                type="text"
                                                value={name || data.name}
                                                onChange={event =>
                                                    setName(event.target.value)
                                                }
                                                required
                                                autoFocus
                                            />
                                            <InputError
                                                messages={errors.name}
                                            />
                                        </div>
                                        <div className="w-1/2">
                                            <Label htmlFor="slug">Slug</Label>
                                            <Input
                                                id="slug"
                                                type="text"
                                                value={slug || data.slug}
                                                onChange={event =>
                                                    setSlug(event.target.value)
                                                }
                                                required
                                            />
                                            <InputError
                                                messages={errors.slug}
                                            />
                                        </div>
                                    </div>

                                    <div className="flex space-x-4 mt-5">
                                        <div className="w-1/2">
                                            <Label htmlFor="svg">Icon</Label>
                                            <Input
                                                id="icon"
                                                type="text"
                                                value={icon || data.icon}
                                                onChange={event =>
                                                    setIcon(event.target.value)
                                                }
                                                required
                                            />
                                            <InputError
                                                messages={errors.icon}
                                            />
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-end mt-4">
                                        <Button className="ml-3">Submit</Button>
                                    </div>
                                </form>
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
