import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import fetcher from "../../components/shared/fetcher";

const getTextResource = resources => {
    for (const resource of resources) {
        if (resource.uri.endsWith("htm")) return resource.uri;
    }
}

const fetchText = async (id, callback) => {
    const text = await fetcher(`/api/text/${id}`)
    if (callback != null) callback(text);
}


const ReadPage = () => {
    const router = useRouter();
    const { id } = router.query

    const [textRes, setTextRes] = useState();

    useEffect(() => {
        if (!textRes && id != null) {
            fetchText(id, setTextRes);
        }
    }, [id, textRes]);

    if (!textRes) return <p>Loading</p>
    return (
        <div dangerouslySetInnerHTML={{ __html: textRes.elements.join("") }} />

    )
}

export default ReadPage;