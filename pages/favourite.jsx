import { useEffect, useState } from "react";
import Book from "../components/books/Book";
import BookSkeleton from "../components/books/BookSkeleton";
import fetcher from "../components/shared/fetcher";
import { useStarred } from "../context/starredContext";

const getBook = async (id) => {
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

    return { id, book }
    
}

const fetchAllBooks = async (books, callback) => {
    const calls = [];

    books.forEach(book => {
        calls.push(getBook(book.id))
    });

    const result = await Promise.all(calls);
    callback(result);
}

const FavouritePage = () => {
    const { getStarred, addStarred, removeStarred, isStarred, ready } = useStarred();
    const [savedStarred, setSavedStarred] = useState(getStarred());
    const [startFetching, setStartFetching] = useState(false);

    useEffect(() => {
        if (ready) {
            setSavedStarred(getStarred().map(id => {
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
            fetchAllBooks(savedStarred, setSavedStarred);
        }
    }, [startFetching])

    return (
        <div className="book-list">
            {savedStarred.map(saved => saved.book)}
        </div>
    )
}

export default FavouritePage;