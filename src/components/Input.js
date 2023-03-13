const Input = ({ disabled = false, className, ...props }) => (
    <input disabled={disabled} className={`${className}`} {...props} />
)

export default Input
