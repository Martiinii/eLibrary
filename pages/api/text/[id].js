import { parse, } from 'node-html-parser'

const handler = async (req, res) => {
    const id = req.query.id;
    const absolutePath = `https://www.gutenberg.org/files/${id}/${id}-h/`
    const query = `${absolutePath}${id}-h.htm`;

    const data = await (await fetch(query)).text();
    const root = parse(data);

    root.querySelectorAll("style").forEach(style => {
        style.setAttribute("scoped", "");
    })

    root.querySelectorAll("img").forEach(link => {
        link.setAttribute("src", `${absolutePath}${link.getAttribute("src")}`)
    })

    res.status(200).send([root.querySelectorAll("style").join(""), root.querySelectorAll("body > *").join("")].join(""))
}

export default handler;