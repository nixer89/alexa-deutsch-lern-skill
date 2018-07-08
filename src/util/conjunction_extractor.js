var jsonConstruct = {
    "Präsens" : {
        "Indikativ": {
            "Singular": {
                "ich": "",
                "du": "",
                "er/sie/es":""
            },
            "Plural": {
                "wir:": "",
                "ihr": "",
                "sie": ""
            }
        },
        "Konjunktiv 1": {
            "Singular": {
                "ich": "",
                "du": "",
                "er/sie/es":""
            },
            "Plural": {
                "wir:": "",
                "ihr": "",
                "sie": ""
            }
        },
        "Imperativ": {
            "Singular": {
                "ich": "",
                "du": "",
                "er/sie/es":""
            },
            "Plural": {
                "wir:": "",
                "ihr": "",
                "sie": ""
            }
        }
    },
    "Präteritum" : {
        "Indikativ": {
            "Singular": {
                "ich": "",
                "du": "",
                "er/sie/es":""
            },
            "Plural": {
                "wir:": "",
                "ihr": "",
                "sie": ""
            }
        },
        "Konjunktiv 2": {
            "Singular": {
                "ich": "",
                "du": "",
                "er/sie/es":""
            },
            "Plural": {
                "wir:": "",
                "ihr": "",
                "sie": ""
            }
        }
    },
    "Partizip 1": "",
    "Partizip 2": "",
    "Infinitiv mit": ""
}

module.exports = class ConjunctionExtractor {

    parseText(verb, text) {
        var structure = {
            "verb": verb,
            "forms": jsonConstruct
        }

        var textToParse1 = text.substring(text.indexOf("ich"), text.indexOf("Präteritum"));
        console.log(textToParse1);
    }

    textSplitter(startText, endText) {

    }
}