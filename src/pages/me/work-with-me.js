import Link from 'next/link'
import MeLayout from '@/components/Layouts/MeLayout'

const WorkWithMe = () => {
    return (
        <MeLayout>
            <h1 className="mt-5">Work with me</h1>
            <h2>Under construction, come back later...</h2>
            <Link href="/me" className="font-light text-lg block mt-5">
                Back to homepage
            </Link>
        </MeLayout>
    )
}

export default WorkWithMe
