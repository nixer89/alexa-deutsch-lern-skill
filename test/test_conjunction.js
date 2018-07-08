const ConjunctionApi = require('../src/util/conjunction_extractor.js');

var testString = "PräsensIndikativKonjunktiv IImperativSingularich winkeich winke  du winkstdu winkest wink, winke! er/sie/es winkter/sie/es winke Pluralwir winkenwir winken  ihr winktihr winket sie winkensie winken PräteritumIndikativKonjunktiv IISingularich winkteich winkte du winktestdu winktest er/sie/es winkteer/sie/es winktePluralwir winktenwir winkten ihr winktetihr winktet sie winktensie winktenPartizip I winkendPartizip II gewinkt, gewunkenInfinitiv mit zu zu winken";

var conjunction = new ConjunctionApi();

conjunction.parseText( "winken" , testString);