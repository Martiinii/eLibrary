import useGetBooks from "../components/shared/useGetBooks";

const Home = () => {
  const books = useGetBooks();
  
  return books;
}

export default Home;
