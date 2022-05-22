import { useRouter } from "next/router";

const ReadPage = () => {
    const router = useRouter();
    const { id } = router.query
    if (!id) return;

    return (
        <iframe
            src={`https://www.gutenberg.org/files/${id}/${id}-h/${id}-h.htm`}
            className="w-full min-h-[600px] md:min-h-[700px] bg-white rounded-lg shadow-lg"
        />
    )
}

export default ReadPage;