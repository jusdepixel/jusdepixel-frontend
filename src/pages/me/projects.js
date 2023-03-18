import Link from 'next/link'
import MeLayout from '@/components/Layouts/MeLayout'

const Projects = () => {
    return (
        <MeLayout>
            <h1 className="mt-5">Projects</h1>
            <h2>Under construction, come back later...</h2>
            <Link href="/me" className="font-light text-lg block mt-5">
                Back to the homepage
            </Link>
        </MeLayout>
    )
}

export default Projects
