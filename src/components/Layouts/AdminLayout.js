import Navigation from '@/components/Layouts/Navigation'
import { useAuth } from '@/hooks/auth'

const AdminLayout = ({ header, module, children }) => {
    const { user } = useAuth({ middleware: 'auth' })

    return user === undefined ? (
        <></>
    ) : (
        <div className="min-h-screen admin">
            <Navigation user={user} module={module} />

            <header className="bg-white shadow">
                <div className="breadcrumb max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
                    {header}
                </div>
            </header>

            <main>{children}</main>
        </div>
    )
}

export default AdminLayout
