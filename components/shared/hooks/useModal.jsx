import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const ModalElement = ({ visible, bgClicked, setVisible, options, children }) => {
    return (
        <div className={`${visible ? "block" : "hidden"} fixed z-50 inset-0 bg-black/40 backdrop-blur-sm`} onClick={bgClicked}>
            <div onClick={e => { e.stopPropagation() }} className="h-full bg-white w-fit p-5 max-w-xl overflow-y-auto">
                <header className="flex gap-6 justify-between items-center">
                    <h2 className="font-semibold text-xl">{options?.title ?? "Tytuł"}</h2>
                    <button className="reset-focus p-4 rounded-full fa-layers text-xl text-white bg-red-500 hover:bg-red-600 focus-visible:ring-rose-800" onClick={() => setVisible(false)}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </header>

                <hr className="my-5" />

                <section className={options?.className ?? ""}>
                    {children}
                </section>
            </div>
        </div>
    )
}

const useModal = (children = null, options = { title, backgroundClose, className }) => {
    const [visible, setVisible] = useState(false);

    const bgClicked = () => {
        if (options?.backgroundClose ?? true) setVisible(false)
    }

    const element = (
        <ModalElement visible={visible} bgClicked={bgClicked} options={options} setVisible={setVisible}>
            {children}
        </ModalElement>
    )

    return [element, setVisible]
}

export default useModal;