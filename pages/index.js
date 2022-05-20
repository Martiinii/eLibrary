import Book from "../components/books/Book";

const Home = () => {
  return (
    <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </div>
  )
}

export default Home;
