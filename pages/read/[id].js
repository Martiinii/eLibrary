import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import fetcher from "../../components/shared/fetcher";
import Meta from "../../components/shared/Meta";

const getTextTitle = async (id, callback) => {
    const data = await fetcher(`https://gnikdroy.pythonanywhere.com/api/book/${id}?format=json`)
    const resources = data?.resources ?? [];
    const title = data?.title ?? "";

    let uri = ""

    for (const res of resources) {
        if (
            res.uri.endsWith("h.htm") ||
            res.uri.endsWith("html.images") ||
            res.uri.endsWith("html.noimages")
        ) {
            uri = res.uri;
            break;
        }
    }

    if (callback != null) callback([uri, title]);
    return [uri, title];
}


const ReadPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [bookData, setBookData] = useState(["", "Wyszukiwanie..."]);

    useEffect(() => {
        if (id) {
            getTextTitle(id, setBookData);
        }
    }, [id])


    return (
        <>
        <Meta title={bookData[1]} />
            <iframe
                src={bookData[0]}
                className={`w-full min-h-[600px] md:min-h-[700px] bg-white rounded-lg shadow-lg ${bookData[0] ? "" : "bg-slate-300 animate-pulse"}`}
            />
        </>
    )
}

export default ReadPage;