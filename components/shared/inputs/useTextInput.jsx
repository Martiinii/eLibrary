import TextInput from "./TextInput"
import { useState } from "react"

const useTextInput = ({ className = "", placeholder = "", defaultText = "", ...props }) => {
    const [currentInput, setCurrentInput] = useState(defaultText);
    const element = (
        <TextInput
            placeholder={placeholder}
            className={className}
            value={currentInput}
            onInput={e => setCurrentInput(e.target.value)}

            {...props}
        />
    )

    return [element, currentInput, setCurrentInput]
}

export default useTextInput