import MeLayout from '@/components/Layouts/MeLayout'
import PreloadImage from 'react-preload-image'
import Link from 'next/link'

const WorkWithMe = () => {
    return (
        <MeLayout page={true}>
            <div className="mt-10">
                <h2 className="text-center">
                    Propose a project
                    <br />
                    <i className="bi bi-chevron-down" />
                </h2>
                <div className="malt">
                    <Link
                        href="https://www.malt.fr/profile/jusdepixel"
                        target="_blank">
                        <PreloadImage
                            src="https://static.jusdepixel.fr/malt/logo.svg"
                            className="banner-logo relative"
                            alt="Propose a project on malt"
                        />
                    </Link>
                    <h2 className="text-center mt-10">
                        Contact me
                        <br />
                        <i className="bi bi-chevron-down" />
                    </h2>
                </div>
            </div>
        </MeLayout>
    )
}

export default WorkWithMe
