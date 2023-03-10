import AdminLayout from '@/components/Layouts/AdminLayout'
import Head from 'next/head'

const Admin = () => {
    return (
        <AdminLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Admin
                </h2>
            }>
            <Head>
                <title>Jusdepixel - Admin</title>
            </Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            You're logged in!
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}

export default Admin
