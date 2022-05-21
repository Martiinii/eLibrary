import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useSWR from "swr";
import Book from "../books/Book";
import BookSkeleton from "../books/BookSkeleton";

const fetcher = (...args) => fetch(...args).then(res => res.json());

const useGetBooks = (api = "https://gnikdroy.pythonanywhere.com/api/book/?format=json") => {
    const { data: initialLoad, error } = useSWR(api, fetcher)
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
                    <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
                        {[...Array(5)].map((e, i) => {
                            return <BookSkeleton key={i} />
                        })}
                    </div>

                    :
                    // If initial books have loaded
                    <InfiniteScroll
                        className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 pb-5"
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
                        {books.map(book => {
                            return (
                                <Book
                                    key={book.id}
                                    id={book.id}
                                    title={book.title}
                                    languageCode={book.languages[0]}

                                    agents={book.agents}
                                    resources={book.resources}
                                />
                            )

                        })}
                    </InfiniteScroll>
            }
        </>
    )
}

export default useGetBooks;