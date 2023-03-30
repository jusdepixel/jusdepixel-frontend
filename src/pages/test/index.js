import Head from 'next/head'
import ThemeToggler from '@/components/ThemeToggler'
import GuestLayout from '@/components/Layouts/GuestLayout'

const Index = () => {
    return (
        <GuestLayout>
            <Head>
                <title>Test - Index</title>
            </Head>

            <div className="relative flex flex-col items-center docs">
                <ThemeToggler />

                <span className="mind">Mindcrew</span>
            </div>
        </GuestLayout>
    )
}

export default Index
