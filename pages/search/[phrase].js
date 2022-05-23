import { useRouter } from "next/router";
import useGetBooks from "../../components/shared/useGetBooks";

const SearchPage = () => {
    const router = useRouter();
    const { phrase } = router.query;

    return (
        <>
            {useGetBooks(`search=${phrase}`)}
        </>
    )
}

export default SearchPage;