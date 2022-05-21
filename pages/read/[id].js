import { useRouter } from "next/router";

const ReadPage = () => {
    const router = useRouter();
    const {id } = router.query

    return <p>{id}</p>
}

export default ReadPage;