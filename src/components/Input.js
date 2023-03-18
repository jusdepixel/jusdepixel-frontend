const Input = ({ disabled = false, className, ...props }) => (
    <input
        disabled={disabled}
        className={`block mt-1 w-full ${className}`}
        {...props}
    />
)

export default Input
