import useLocalStorage from "./useLocalStorage"

const useStarredLocalStorage = () => {
    const [value, setValue, ready] = useLocalStorage("starred", { ids: [] });

    const getStarred = () => {
        return value.ids;
    }

    const addStarred = id => {
        if (isStarred(id)) return;
        const temp = [...value.ids, id]

        setValue({ ids: temp })
    }

    const removeStarred = id => {
        const temp = [...value.ids].filter(v => v != id)

        setValue({ ids: temp })
    }

    const isStarred = id => {
        return value.ids.includes(id);
    }

    return [getStarred, addStarred, removeStarred, isStarred, ready]
}

export default useStarredLocalStorage;