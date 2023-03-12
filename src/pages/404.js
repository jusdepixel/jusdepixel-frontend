import Link from 'next/link'

const NotFoundPage = () => (
    <div className="relative flex items-top justify-center min-h-screen sm:items-center sm:pt-0">
        <div className="max-w-xl mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center pt-8 sm:justify-start sm:pt-0">
                <div className="px-4 text-lg text-gray-500 tracking-wider">
                    404
                </div>

                <div className="jusdepixel ml-4 text-lg text-gray-500 uppercase tracking-wider">
                    Not Found
                </div>
            </div>

            <Link
                href="/"
                className="px-4 font-light text-lg text-gray-500 block text-center mt-5">
                Go back to home
            </Link>
        </div>
    </div>
)

export default NotFoundPage
