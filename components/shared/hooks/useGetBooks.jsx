import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useSWR from "swr";
import Book from "../../books/Book";
import BookSkeleton from "../../books/BookSkeleton";
import fetcher from "../utility/fetcher"

const useGetBooks = (params = "", api = "https://gnikdroy.pythonanywhere.com/api/book/?format=json&type=Text&") => {
    const { data: initialLoad, error } = useSWR(api + params, fetcher)
    const [nextFetch, setNextFetch] = useState(initialLoad?.next)

    const [books, setBooks] = useState(initialLoad?.results);

    useEffect(() => {
        setNextFetch(initialLoad?.next);
        setBooks(initialLoad?.results);
    }, [initialLoad])


    const fetchMore = async () => {
        const data = await fetcher(nextFetch);
        setNextFetch(data.next);

        setBooks(books.concat(data.results));
    }

    return (
        <>
            {
                (!books)
                    ?
                    // If initial books are still loading
                    <div className="book-list">
                        {[...Array(5)].map((e, i) => {
                            return <BookSkeleton key={i} />
                        })}
                    </div>

                    :
                    // If initial books have loaded
                    <InfiniteScroll
                        className="book-list pb-5"
                        dataLength={books.length}
                        next={fetchMore}
                        hasMore={nextFetch != null}
                        loader={
                            <>
                                {[...Array(5)].map((e, i) => {
                                    return <BookSkeleton key={i} />
                                })}</>
                        }
                    >
                        {books.length ?
                            books.map(book => {
                                return (
                                    <Book
                                        key={book.id}
                                        id={book.id}
                                        title={book.title}
                                        languageCode={book.languages}

                                        agents={book.agents}
                                        resources={book.resources}
                                    />
                                )

                            })
                            :
                            <h2 className="font-semibold text-xl">Nic nie znaleziono</h2>
                        }
                    </InfiniteScroll>
            }
        </>
    )
}

export default useGetBooks;