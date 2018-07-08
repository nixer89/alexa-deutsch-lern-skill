var jsonConstruct = {
    "Praesens" : {
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
        "Konjunktiv1": {
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
        "Konjunktiv2": {
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
    "Partizip1": "",
    "Partizip2": "",
    "Infinitiv mit": ""
}

module.exports = class ConjunctionExtractor {

    parseText(verb, text) {
        var structure = {
            "verb": verb,
            "forms": jsonConstruct
        }

        var textToParsePraesens = text.substring(text.indexOf("ich"), text.indexOf("Plural"));
        
        
        console.log(text + "\n\n");
        
        this.textSplitter(structure, textToParsePraesens, "ich", "du");
        this.textSplitter(structure, textToParsePraesens, "du", "er/sie/es");
        this.textSplitter(structure, textToParsePraesens, "er/sie/es", "Plural");0

        var textToParsePraesens = text.substring(text.indexOf("Plural"), text.indexOf("Präteritum"));
        this.textSplitter(structure, textToParsePraesens, "wir", "ihr");
        this.textSplitter(structure, textToParsePraesens, "ihr", "sie");
        
        console.log(JSON.stringify(structure));
    }

    textSplitter(structure, textToParse, formToFind, nextForm) {

        var textToParseForm = textToParse.substring(textToParse.indexOf(formToFind),textToParse.indexOf(nextForm == undefined ? text.textToParse.length : nextForm)).split(formToFind);
        
        console.log(textToParseForm)
        structure.forms.Praesens.Indikativ.Singular[formToFind] = textToParseForm[1] != undefined ?  textToParseForm[1].trim() : undefined;
        structure.forms.Praesens.Konjunktiv1.Singular[formToFind] = textToParseForm[2] != undefined ?  textToParseForm[2].trim() : undefined;
        structure.forms.Praesens.Imperativ.Singular[formToFind] = textToParseForm[3] != undefined ?  textToParseForm[3].trim() : undefined;
    }
}