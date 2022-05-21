import useSWR from "swr";
import Book from "../components/books/Book";
import BookSkeleton from "../components/books/BookSkeleton";

const fetcher = (...args) => fetch(...args).then(res => res.json());

const Home = () => {
  const { data, error } = useSWR("https://gnikdroy.pythonanywhere.com/api/book/?format=json", fetcher)

  const books = data?.results;

  return (
    <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">

      {
        (!data)
          ?
          // If books are still loading
          <>
            {[...Array(5)].map((e, i) => {
              return <BookSkeleton key={i} />
            })}
          </>

          :
          // If books loaded
          <>
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
          </>
      }
    </div>
  )
}

export default Home;
