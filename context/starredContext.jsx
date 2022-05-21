import { createContext, useContext, useEffect, useState } from "react";
import Book from "../components/books/Book";
import BookSkeleton from "../components/books/BookSkeleton";
import fetcher from "../components/shared/fetcher";
import useStarredLocalStorage from "../components/shared/useStarredLocalStorage";

const StarredContext = createContext()

// Fetch one book
const getBook = async (id, callback) => {
    const data = await fetcher(`https://gnikdroy.pythonanywhere.com/api/book/${id}/?format=json`)

    const book = (
        <Book
            key={data.id}
            id={data.id}
            title={data.title}
            languageCode={data.languages[0]}

            agents={data.agents}
            resources={data.resources}
        />
    )

    if(callback != null) callback({id, book})
    return { id, book }
}

// Fetch all books when page is first loaded
const fetchAllBooks = async (books, callback) => {
    const calls = [];

    books.forEach(book => {
        calls.push(getBook(book.id))
    });

    const result = await Promise.all(calls);
    callback(result);
}

// Remove object from array using object property
const filterInPlace = (array, predicate) => {
    let end = 0;

    for (let i = 0; i < array.length; i++) {
        const obj = array[i];

        if (predicate(obj)) {
            array[end++] = obj;
        }
    }

    array.length = end;
};


const StarredProvider = ({ children }) => {
    // Save fetched starred books
    const [fetchedBooks, setFetchedBooks] = useState([]);
    const [startFetching, setStartFetching] = useState(false);

    // Remove book from fetched
    const onRemove = id => {
        const toDelete = new Set([id, 12]);
        const copy = [...fetchedBooks];

        filterInPlace(copy, obj => !toDelete.has(obj.id))
        setFetchedBooks(copy);
    }

    // Add book to fetched
    const onAdd = (id, bookProps) => {
        setFetchedBooks([...fetchedBooks, {id, book: <Book key={bookProps.id} {...bookProps}/>}])
    }

    const [getStarred, addStarred, removeStarred, isStarred, ready] = useStarredLocalStorage(onRemove, onAdd);

    // On first load fetch all starred books
    useEffect(() => {
        if (ready) {
            setFetchedBooks(getStarred().map(id => {
                return {
                    id: id,
                    book: <BookSkeleton key={id} />
                }
            }));

            setStartFetching(true);
        }
    }, [ready])

    useEffect(() => {
        if (startFetching) {
            fetchAllBooks(fetchedBooks, setFetchedBooks);
        }
    }, [startFetching])


    
    const value = { getStarred, addStarred, removeStarred, isStarred, ready, fetchedBooks }

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