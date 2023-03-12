import Link from 'next/link'

const NavLink = ({ active = false, children, ...props }) => (
    <Link
        {...props}
        className={`text-lg inline-flex items-center px-1 pt-1 border-b-2 leading-5 focus:outline-none transition duration-150 ease-in-out ${
            active
                ? 'border-cyan-400 text-gray-900 focus:border-cyan-500'
                : 'border-transparent text-gray-400 hover:text-gray-900 font-light hover:border-gray-400 focus:text-gray-700 focus:border-gray-400'
        }`}>
        {children}
    </Link>
)

export default NavLink
