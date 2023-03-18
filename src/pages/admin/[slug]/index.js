import AdminLayout from '@/components/Layouts/AdminLayout'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useModule } from '@/hooks/module'
import { Loading } from '@/components/Loading'

const Index = () => {
    const { model, all, datas, count } = useModule()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (loading) {
            all().then(() => setLoading(false))
        }
    }, [model, datas, count])

    return (
        <AdminLayout
            module={model.slug}
            header={
                model.name &&
                count && (
                    <h2 className="text-gray-600 leading-tight flex flex-row">
                        <span className="basis-2/3 flex">
                            <i className={`mr-1 block bi bi-${model.icon}`} />
                            {model.name} /
                            <span className="ml-1 text-gray-400 font-light">
                                Index
                            </span>
                        </span>
                        <span className="basis-1/3 text-right">
                            {count + ' result' + (count > 1 ? 's' : '')}
                        </span>
                    </h2>
                )
            }>
            <Head>
                <title>{model.name}</title>
            </Head>

            {loading && <Loading />}

            {!loading ? (
                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm">
                            <div className="p-6 bg-white border-b border-gray-200">
                                {datas ? (
                                    <table className="table-auto w-full">
                                        <thead>
                                            <tr>
                                                <th className="text-gray-500 font-light text-xl pb-4 text-left">
                                                    Name
                                                </th>
                                                <th className="text-gray-500 font-light text-xl pb-4 text-left">
                                                    Slug
                                                </th>
                                                <th className="text-gray-500 font-light text-xl pb-4 text-left">
                                                    Icon
                                                </th>
                                                <th className="text-gray-500 font-light text-xl pb-4 w-40 text-center">
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {datas.map(data => (
                                                <tr key={data.id}>
                                                    <td className="text-base py-2">
                                                        {data.name}
                                                    </td>
                                                    <td className="text-base py-2">
                                                        {data.slug}
                                                    </td>
                                                    <td className="text-base py-2">
                                                        {data.icon}
                                                    </td>

                                                    <td className="text-sm pt-2">
                                                        <div className="flex items-center w-full">
                                                            <Link
                                                                href="#"
                                                                className="w-10 text-center basis-1/2">
                                                                <i className="icon-action bi bi-eye text-cyan-400" />
                                                            </Link>
                                                            <Link
                                                                href={
                                                                    '/admin/' +
                                                                    model.slug +
                                                                    '/' +
                                                                    data.id +
                                                                    '/edit'
                                                                }
                                                                className="w-10 text-center basis-1/2">
                                                                <i className="icon-action bi bi-pencil text-gray-400" />
                                                            </Link>
                                                            <Link
                                                                href="#"
                                                                className="w-10 text-center basis-1/3">
                                                                <i className="icon-action bi bi-x-lg text-red-700" />
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
        </AdminLayout>
    )
}

export default Index
