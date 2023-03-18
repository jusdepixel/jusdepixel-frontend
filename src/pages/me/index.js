import Link from 'next/link'
import MeLayout from '@/components/Layouts/MeLayout'

const Index = () => {
    return (
        <MeLayout>
            <h2>Freelance Web Developer</h2>
            <h3 className="mt-20">Looking for new challenges !</h3>

            <div className="links-me flex mt-5">
                <Link href="/me/projects" className="m-5">
                    Projects
                </Link>
                <Link href="/me/work-with-me" className="m-5">
                    Work with me ?
                </Link>
                <Link href="/me/jobs" className="m-5">
                    Jobs
                </Link>
            </div>
        </MeLayout>
    )
}

export default Index
