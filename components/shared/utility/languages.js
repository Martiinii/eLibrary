const languages = { "zh": "Chi\u0144ski standardowy", "yi": "Jidysz", "tl": "Tagalski", "te": "Telugu", "sv": "Szwedzki", "sr": "Serbski", "sl": "S\u0142owe\u0144ski", "sa": "Sanskryt", "ru": "Rosyjski", "ro": "Rumu\u0144ski", "pt": "Portugalski", "pl": "Polski", "oji": "Od\u017cibwe", "oc": "Prowansalski", "nl": "Holenderski", "nap": "Neapolita\u0144ski", "nai": "Chickasaw", "nah": "Nahuatl", "mi": "Maoryski", "lt": "Litewski", "la": "\u0141aci\u0144ski", "ko": "Korea\u0144ski", "ja": "Japo\u0144ski", "iu": "Inuktitut", "it": "W\u0142oski", "is": "Islandzki", "ilo": "Ilokano", "ia": "Interlingua", "hu": "W\u0119gierski", "he": "Hebrajski", "gla": "Szkocki gaelicki", "gl": "Galicyjski", "ga": "Irlandzki", "fy": "Fryzyjski", "fur": "Friulski", "fr": "Francuski", "fi": "Fi\u0144ski", "fa": "Perski", "et": "Esto\u0144ski", "es": "Hiszpa\u0144ski", "eo": "Esperanto", "enm": "\u015arednioangielski", "en": "Angielski", "el": "Nowogrecki", "de": "Niemiecki", "da": "Du\u0144ski", "cy": "Walijski", "csb": "Kaszubski", "cs": "Czeski", "ceb": "Cebuano", "ca": "Katalo\u0144ski", "br": "Breto\u0144ski", "bg": "Bu\u0142garski", "arp": "Arapaho", "ar": "Arabski", "ang": "Staroangielski", "ale": "Aleucki", "af": "Afrykanerski" }

const convertCodeToLang = code => {
    return languages[code]
}

const compare = (a, b) => {
    if (a.label < b.label) return -1
    if (a.label > b.label) return 1;
    return 0;
}

const getLanguageList = () => {
    const list = []

    for (const lang in languages) {
        list.push({ value: lang, label: languages[lang] })
    }

    return [{ value: "", label: "Wszystkie" }, ...list.sort(compare)];
}

export { convertCodeToLang, getLanguageList };
