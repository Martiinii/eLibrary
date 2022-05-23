const TextInput = ({className = "", ...props}) => {
    return (
        <input type="text" className={`input-style ${className}`} {...props} />
    )
}

export default TextInput