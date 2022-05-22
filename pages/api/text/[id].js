import { parse } from 'node-html-parser'

const handler = async (req, res) => {
    const id = req.query.id;
    const query = `https://www.gutenberg.org/files/${id}/${id}-h/${id}-h.htm`;
    const data = await (await fetch(query)).text();

    const root = parse(data);
    res.status(200).json({elements: root.querySelectorAll("body > *").map(e => e.toString())})
}

export default handler;