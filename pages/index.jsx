import Book from "../components/books/Book";

const Home = ({ count, next, books }) => {
  return (
    <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
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
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch("https://gnikdroy.pythonanywhere.com/api/book/?format=json")
  const data = await res.json();

  return {
    props: {
      count: data.count,
      next: data.next,
      books: data.results
    }
  }

}

export default Home;
