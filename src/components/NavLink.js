import Link from 'next/link'

const NavLink = ({ active = false, children, ...props }) => (
    <Link
        {...props}
        className={`nav-link inline-flex items-center px-1 pt-1 leading-5 focus:outline-none ${
            active && 'active'
        }`}>
        {children}
    </Link>
)

export default NavLink
