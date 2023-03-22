import MeLayout from '@/components/Layouts/MeLayout'

const Jobs = () => {
    return (
        <MeLayout page={true}>
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-12 mb-16 mt-16">
                <div className="job w-full sm:max-w-md px-10 py-6 pb-14 bg-white shadow-md relative">
                    <div className="icon absolute top-0 right-4">
                        <i className="bi bi-broadcast-pin" />
                    </div>
                    <h3 className="mb-2">Web Application Developer</h3>
                    <h4>Freelance</h4>
                    <h5>june 2022 - now</h5>
                    <h6 className="w-full absolute left-0 bottom-0 px-3 pt-2 pb-1 text-left">
                        <i className="bi bi-pin-map mr-1" />
                        Abbeville, Hauts-de-France, France
                        <span className="absolute right-3">10 months</span>
                    </h6>
                    <p className="mt-4">
                        laravel · php · react · next.js · tailwinds · sass
                    </p>
                </div>
                <div className="job w-full sm:max-w-md px-10 py-6 pb-14 bg-white shadow-md relative">
                    <div className="icon absolute top-0 right-4">
                        <i className="bi bi-sunglasses" />
                    </div>
                    <h3 className="mb-2">Sabbatical year</h3>
                    <h4>Professional break</h4>
                    <h5>june 2021 - june 2022</h5>
                    <h6 className="w-full absolute left-0 bottom-0 px-3 pt-2 pb-1">
                        <i className="bi bi-pin-map mr-1" />
                        Abbeville, Hauts-de-France, France
                        <span className="absolute right-3">1 year</span>
                    </h6>
                    <p className="mt-4">coding fun · technical watch</p>
                </div>
                <div className="job w-full sm:max-w-md px-10 py-6 pb-14 bg-white shadow-md relative">
                    <div className="icon absolute -top-4 right-0">
                        <i className="bi bi-paperclip" />
                    </div>
                    <h3 className="mb-2">Web Developer</h3>
                    <h4>NOVALYS, Promoteur Aménageur</h4>
                    <h5>feb. 2021 - may 2021</h5>
                    <h6 className="w-full absolute left-0 bottom-0 px-3 pt-2 pb-1">
                        <i className="bi bi-pin-map mr-1" />
                        Amiens, Hauts-de-France, France
                        <span className="absolute right-3">4 months</span>
                    </h6>
                    <p className="mt-4">
                        symfony · php · api · from scratch · windev
                    </p>
                </div>
                <div className="job w-full sm:max-w-md px-10 py-6 pb-14 bg-white shadow-md relative">
                    <div className="icon absolute -top-4 right-0">
                        <i className="bi bi-paperclip" />
                    </div>
                    <h3 className="mb-2">Web Developer</h3>
                    <h4>WAW AGENCY, Agence Numérique</h4>
                    <h5>june 2015 - nov. 2020</h5>
                    <h6 className="w-full absolute left-0 bottom-0 px-3 pt-2 pb-1">
                        <i className="bi bi-pin-map mr-1" />
                        Paris, France · Full remote
                        <span className="absolute right-3">≃ 6 years</span>
                    </h6>
                    <p className="mt-4">
                        backend · php · api · cms · crm · frontend · bootstrap
                    </p>
                </div>
                <div className="job w-full sm:max-w-md px-10 py-6 pb-14 bg-white shadow-md relative">
                    <div className="icon absolute -top-4 right-0">
                        <i className="bi bi-paperclip" />
                    </div>
                    <h3 className="mb-2">Web Developer</h3>
                    <h4>ROSSWEB, Agence Interactive</h4>
                    <h5>2011 - 2015</h5>
                    <h6 className="w-full absolute left-0 bottom-0 px-3 pt-2 pb-1">
                        <i className="bi bi-pin-map mr-1" />
                        Paris, France · Full remote
                        <span className="absolute right-3">≃ 4 years</span>
                    </h6>
                    <p className="mt-4">
                        backend · php · cms · frontend · html · css · jquery
                    </p>
                </div>
                <div className="job w-full sm:max-w-md px-10 py-6 pb-14 bg-white shadow-md relative">
                    <div className="icon absolute -top-4 right-0">
                        <i className="bi bi-paperclip" />
                    </div>
                    <h3 className="mb-2">Web Developer</h3>
                    <h4>JDG</h4>
                    <h5>2008 - 2011</h5>
                    <h6 className="w-full absolute left-0 bottom-0 px-3 pt-2 pb-1">
                        <i className="bi bi-pin-map mr-1" />
                        Paris, France · Full remote
                        <span className="absolute right-3">≃ 3 years</span>
                    </h6>
                    <p className="mt-4">
                        backend · php · cms · frontend · html · css · jquery
                    </p>
                </div>
            </div>
        </MeLayout>
    )
}

export default Jobs
