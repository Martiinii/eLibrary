import TextInput from "./TextInput"
import { useState } from "react"

const useTextInput = (className = "", placeholder = "", defaultText = "") => {
    const [currentInput, setCurrentInput] = useState(defaultText);
    const element = (
        <TextInput
            placeholder={placeholder}
            className={className}
            value={currentInput}
            onInput={e => setCurrentInput(e.target.value)}
        />
    )

    return [element, currentInput, setCurrentInput]
}

export default useTextInput