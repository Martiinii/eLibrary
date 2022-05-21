import { createContext, useContext, useEffect, useState } from "react";
import { useStarred } from "../../context/starredContext";

const BookContext = createContext()

const BookProvider = ({ children, id, title, agents, languageCode, resources }) => {
    const { ready, isStarred: checkStarred, addStarred, removeStarred } = useStarred();
    const [starredState, setStarredState] = useState(false);
    // For optimalization
    const [initialCheck, setInitialCheck] = useState(false);


    const setStarred = (state) => {
        setStarredState(state);
        
        if (state) {
            addStarred(id, {id, title, agents, languageCode, resources})
        } else {
            removeStarred(id)
        }
    }


    // On first render update starredState
    useEffect(() => {
        // If initialCheck wasn't performed yet and localStorage is ready
        if (!initialCheck && ready) {
            setStarredState(checkStarred(id))
            setInitialCheck(true);
        }
    }, [initialCheck, ready, checkStarred, id])


    const value = { ready, starredState, setStarred, id, title, agents, languageCode, resources }

    return (
        <BookContext.Provider
            value={value}
        >
            {children}
        </BookContext.Provider>
    )
}

const useBook = () => {
    const context = useContext(BookContext)

    if (context === undefined) {
        throw new Error("useBook must be used within a BookProvider")
    }

    return context;
}

export { BookProvider, useBook }