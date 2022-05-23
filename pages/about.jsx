import Meta from "../components/shared/Meta";

const AboutPage = () => {
    return (
        <>
            <Meta title="O projekcie" />
            <h2 className="font-bold text-xl text-center m-5">O projekcie</h2>
            <section className="max-w-3xl mx-auto flex flex-col">
                <p>Projekt E-Biblioteka powstał przy użyciu <a className="link" href="https://www.gutenberg.org">Projektu Gutenberga</a>.</p>
                <p>Wszystkie książki oraz źródła zostały uzyskane przez <a className="link" href="https://gnikdroy.pythonanywhere.com">API Projektu Gutenberga.</a></p>
                <p>Jeżeli zastanawiasz się nad wsparciem tego projektu, zrób to przez <a className="link" href="https://www.gutenberg.org/donate/">dotację dla Projektu Gutenberga</a>.</p>
            </section>

            <section className="text-center mt-10">
                <p>Projekt wykonany przez <a className="link" href="https://martiinii.dev">Marcina Gąsienice-Makowskiego</a></p>
            </section>
        </>
    )
}

export default AboutPage;