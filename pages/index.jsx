import Book from "../components/books/Book";

const Home = () => {
  return (
    <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
      <Book id={1} />
      <Book id={2} />
      <Book id={3} />
      <Book id={4} />
      <Book id={5} />
    </div>
  )
}

export default Home;
