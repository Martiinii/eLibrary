import useLocalStorage from "./useLocalStorage"

const useStarredLocalStorage = (onRemove, onAdd) => {
    const [value, setValue, ready] = useLocalStorage("starred", { ids: [] });

    const getStarred = () => {
        return value.ids;
    }

    const addStarred = (id, bookProps) => {
        if (isStarred(id)) return;
        const temp = [...value.ids, id]

        setValue({ ids: temp })
        onAdd(id, bookProps)
    }

    const removeStarred = id => {
        const temp = [...value.ids].filter(v => v != id)

        setValue({ ids: temp })
        onRemove(id)
    }

    const isStarred = id => {
        return value.ids.includes(id);
    }

    return [getStarred, addStarred, removeStarred, isStarred, ready]
}

export default useStarredLocalStorage;