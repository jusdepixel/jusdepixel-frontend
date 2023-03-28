const Badge = ({ className, ...props }) => (
    <span
        className={`${className} badge text-xs inline-block py-0.5 px-2 ml-2 rounded-full relative -top-2`}
        {...props}
    />
)

export default Badge
