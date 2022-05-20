const TextInput = ({className = "", ...props}) => {
    return (
        <input type="text" className={`reset-focus btn-padding rounded-full bg-blue-100 ${className}`} {...props} />
    )
}

export default TextInput