import { createContext, useContext } from "react";
import useStarredLocalStorage from "../components/shared/useStarredLocalStorage";

const StarredContext = createContext()

const StarredProvider = ({ children }) => {
    const [getStarred, addStarred, removeStarred, isStarred, ready] = useStarredLocalStorage();
    const value = { getStarred, addStarred, removeStarred, isStarred, ready }

    return (
        <StarredContext.Provider
            value={value}
        >
            {children}
        </StarredContext.Provider>
    )
}

const useStarred = () => {
    const context = useContext(StarredContext)

    if (context === undefined) {
        throw new Error("useStarred must be used within a StarredProvider")
    }

    return context;
}

export { StarredProvider, useStarred }