import useGetBooks from "../components/shared/hooks/useGetBooks";
import Meta from "../components/shared/Meta";

const Home = () => {
  const books = useGetBooks();

  return (
    <>
      <Meta title="Najpopularniejsze książki" />
      {books}
    </>
  );
}

export default Home;
