import { useRouter } from "next/router";
import useGetBooks from "../components/shared/useGetBooks"

const SearchPage = () => {
    const router = useRouter();
    const {q, languages, author} = router.query;

    return (
        <>
            {useGetBooks(`search=${q ?? ""}&languages=${languages ?? ""}&agent_name_contains=${author ?? ""}`)}
        </>
    )
}

export default SearchPage;