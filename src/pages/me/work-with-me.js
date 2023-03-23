import MeLayout from '@/components/Layouts/MeLayout'
import PreloadImage from 'react-preload-image'
import Link from 'next/link'
import Network from '@/components/Network'

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
                            className="banner-logo relative mx-auto"
                            alt="Propose a project on malt"
                        />
                    </Link>
                    <h2 className="text-center mt-10">
                        Contact me
                        <br />
                        <i className="bi bi-chevron-down" />
                    </h2>
                    <div className={`flex mb-10`}>
                        <Network
                            network="linkedin"
                            link="https://www.linkedin.com/in/mandy-blique-jusdepixel/"
                        />
                        <Network
                            network="github"
                            link="https://github.com/jusdepixel"
                        />
                        <Network
                            network="instagram"
                            link="https://www.instagram.com/jusdepixel/"
                        />
                        <Network network="discord" link="Jusdepixel#9348" />
                        <Network
                            network="google"
                            link="mailto:mandy.blique@gmail.com"
                        />
                        <Network
                            network="envelope-fill"
                            link="mailto:mandy@jusdepixel.fr"
                        />
                        <Network network="phone-fill" link="tel:0609426041" />
                    </div>
                </div>
            </div>
        </MeLayout>
    )
}

export default WorkWithMe
