const Button = ({ type = 'submit', className, ...props }) => (
    <button
        type={type}
        className={`${className} inline-flex items-center px-4 py-2 bg-cyan-400 border border-transparent font-semibold text-xs text-white uppercase tracking-widest hover:bg-cyan-500 active:bg-cyan-500 focus:outline-none focus:border-cyan-500 disabled:opacity-25 transition ease-in-out duration-150`}
        {...props}
    />
)

export default Button
