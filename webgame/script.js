/*
  Interaktives Entscheidungs- und Glücksspiel zur Fluchtgeschichte von Nujeen Mustafa.
  Es ist bewusst als Bildungs- und Reflexionsspiel gestaltet: Es gibt oft keine sichere Wahl.
*/

const state = {
    money: 100,
    tokens: { safety: 0, health: 0, family: 0, documents: 0, future: 0 },
    log: []
};

const storyEl = document.getElementById('story');
const choicesEl = document.getElementById('choices');

function updateStats() {
    document.getElementById('money').textContent = `💰 Taler: ${state.money}`;
    document.getElementById('safety').textContent = `🛡️ Sicherheit: ${state.tokens.safety}`;
    document.getElementById('health').textContent = `🩺 Gesundheit: ${state.tokens.health}`;
    document.getElementById('family').textContent = `👪 Familie: ${state.tokens.family}`;
    document.getElementById('documents').textContent = `📄 Dokumente: ${state.tokens.documents}`;
    document.getElementById('future').textContent = `🎓 Zukunft: ${state.tokens.future}`;
}

function show(text) {
    storyEl.textContent = text;
    choicesEl.innerHTML = '';
    updateStats();
}

function choice(text, handler) {
    const btn = document.createElement('button');
    btn.textContent = text;
    btn.addEventListener('click', handler);
    choicesEl.appendChild(btn);
}

function roll(sides = 6) {
    return Math.floor(Math.random() * sides) + 1;
}

function change(delta) {
    state.money += delta.money || 0;
    for (const key of Object.keys(state.tokens)) {
        state.tokens[key] += delta[key] || 0;
    }
    updateStats();
}

function startGame() {
    state.money = 100;
    state.tokens = { safety: 0, health: 0, family: 0, documents: 0, future: 0 };
    state.log = [];
    aleppo();
}

function aleppo() {
    show(`KAPITEL 1 – ALEPPO, SYRIEN\n\nDie Stadt klingt nicht mehr wie eine Stadt. In der Ferne schlagen Bomben ein, Staub liegt in den Straßen, und jedes Gespräch wird leiser geführt als früher.\n\nDu bist Nujeen, 16 Jahre alt, im Rollstuhl, und deine Familie weiß: Wer zu lange wartet, kann vielleicht gar nicht mehr gehen. Aber ohne Papiere wird jede Grenze gefährlicher.`);
    choice('Sofort fliehen – schnell, aber mit wenigen Dokumenten', () => {
        state.log.push('Aleppo: sofort geflohen.');
        change({ safety: 1 });
        border();
    });
    choice('Dokumente holen – riskant, aber wichtig für spätere Rechte', () => {
        const r = roll();
        if (r >= 3) {
            state.log.push('Aleppo: Dokumente geholt.');
            change({ documents: 2, money: -8 });
            transition('Ihr kehrt noch einmal zurück. Jeder Kontrollpunkt fühlt sich wie eine Falle an, aber ihr schafft es: Einige Pässe und Nachweise sind in der Tasche.', border);
        } else {
            state.log.push('Aleppo: Dokumentenversuch gescheitert.');
            change({ safety: -1, money: -15 });
            transition('Der Versuch kostet Zeit und Geld. Eine Bestechung verhindert Schlimmeres, aber ihr müsst ohne vollständige Papiere weiter.', border);
        }
    });
}

function border() {
    show(`KAPITEL 2 – GRENZE ZUR TÜRKEI\n\nDie Grenze ist nicht nur eine Linie auf der Karte. Sie ist ein Gerücht, ein Zaun, ein Schuss in der Nacht, ein Mann, der Geld verlangt.\n\nDu weißt: Offizielle Wege sind schwer zugänglich. Schmuggler versprechen Hilfe, aber niemand weiß, ob sie lügen.`);
    choice('Schleuser nutzen – 30 Taler, Würfel entscheidet', () => {
        if (state.money < 30) return alert('Nicht genug Taler.');
        const r = roll();
        change({ money: -30 });
        if (r >= 4) {
            state.log.push(`Türkei-Grenze: Schleuserroute gelungen, Wurf ${r}.`);
            change({ safety: 1 });
            transition(`Würfelwurf: ${r}\n\nIhr geht stundenlang durch Dunkelheit und Hügel. Nujeens Rollstuhl muss getragen werden. Am Morgen seid ihr erschöpft, aber auf der anderen Seite.`, turkey);
        } else {
            state.log.push(`Türkei-Grenze: Schleuserroute gefährlich, Wurf ${r}.`);
            change({ safety: -1, health: -1, family: -1 });
            transition(`Würfelwurf: ${r}\n\nPanik bricht aus. Menschen rennen auseinander. Für einen Moment verliert ihr euch aus den Augen. Die Grenze ist überwunden, aber der Preis ist hoch.`, turkey);
        }
    });
    if (state.tokens.documents > 0) {
        choice('Offizieller Grenzübertritt – 12 Taler, Papiere vorzeigen', () => {
            if (state.money < 12) return alert('Nicht genug Taler.');
            const r = roll();
            change({ money: -12 });
            if (r >= 3) {
                state.log.push(`Türkei-Grenze: offizieller Übergang gelungen, Wurf ${r}.`);
                change({ documents: 1, safety: 1 });
                transition(`Würfelwurf: ${r}\n\nStundenlanges Warten. Fragen nach Herkunft, Ziel und Papieren. Dann ein Stempel. Kein Triumph, eher ein kurzes Aufatmen.`, turkey);
            } else {
                state.log.push(`Türkei-Grenze: offizieller Übergang gescheitert, Wurf ${r}.`);
                change({ safety: -1, money: -10 });
                transition(`Würfelwurf: ${r}\n\nEin Mann behauptet, er könne gegen Geld helfen. Am Ende habt ihr Geld verloren und müsst doch einen anderen Weg suchen.`, turkey);
            }
        });
    }
}

function turkey() {
    show(`KAPITEL 3 – IN DER TÜRKEI\n\nIhr seid aus Syrien heraus, aber noch nicht in Sicherheit. Geld wird gebraucht: Essen, Unterkunft, Medikamente, Telefon, Transport.\n\nEine Registrierung könnte Schutz und Versorgung bringen. Gleichzeitig wird jeder Monat teuer.`);
    choice('Ein Jahr bleiben – ausruhen, arbeiten, registrieren: 25 Taler', () => {
        if (state.money < 25) return alert('Nicht genug Taler.');
        state.log.push('Türkei: ein Jahr geblieben und registriert.');
        change({ money: -25, health: 2, documents: 2, future: 1, safety: 1 });
        transition('Zeit vergeht. Ihr sammelt Kraft, Nujeen bekommt Unterstützung, und die Registrierung gibt euch etwas mehr Schutz. Aber das Ersparte schmilzt.', europe);
    });
    choice('Nur zwei Monate bleiben – schnell weiter, Schleuser bezahlen: 45 Taler', () => {
        if (state.money < 45) return alert('Nicht genug Taler.');
        const r = roll();
        state.log.push(`Türkei: schnelle Weiterreise, Bootswurf ${r}.`);
        change({ money: -45 });
        if (r >= 4) {
            change({ safety: 1 });
            transition(`Würfelwurf: ${r}\n\nDas Schlauchboot ist überfüllt. Nujeen hält sich fest, ihre Schwester hält den Rollstuhl. Lesbos erscheint erst wie ein Schatten, dann wie eine Möglichkeit.`, europe);
        } else {
            change({ safety: -1, health: -1, family: -1 });
            transition(`Würfelwurf: ${r}\n\nDas Boot schwankt, Wasser schlägt hinein, Menschen beten. Ihr erreicht Griechenland, aber mit Angst, Erschöpfung und Verlusten.`, europe);
        }
    });
}

function europe() {
    show(`KAPITEL 4 – WEITERREISE DURCH EUROPA\n\nGriechenland, Mazedonien, Serbien, Kroatien, Slowenien, Österreich. Namen werden zu Bahnhöfen, Grenzzäunen, Wartehallen.\n\nJede Route verspricht Rettung. Jede Route kann scheitern.`);
    choice('Mit gefälschten Dokumenten fliegen – 40 Taler', () => {
        if (state.money < 40) return alert('Nicht genug Taler.');
        const r = roll();
        change({ money: -40 });
        if (r >= 5) {
            state.log.push(`Europa: Flug mit gefälschten Dokumenten gelungen, Wurf ${r}.`);
            change({ future: 2, health: 1 });
            transition(`Würfelwurf: ${r}\n\nAm Flughafen stockt dir der Atem. Der Beamte sieht lange auf die Papiere. Dann winkt er euch weiter.`, germany);
        } else {
            state.log.push(`Europa: Fälschungen entdeckt, Wurf ${r}.`);
            change({ documents: -1, safety: -1, money: -10 });
            transition(`Würfelwurf: ${r}\n\nDie Fälschungen fallen auf. Geld ist weg, die Gefahr wächst, und ihr müsst weiter über Land.`, germany);
        }
    });
    choice('Ohne offizielle Dokumente mit Zug, Bus und zu Fuß weiter', () => {
        const r = roll();
        if (r >= 3) {
            state.log.push(`Europa: Landroute gelungen, Wurf ${r}.`);
            change({ safety: 1, family: 1 });
            transition(`Würfelwurf: ${r}\n\nNujeens Schwester schiebt den Rollstuhl über Straßen, Schotter und Bahnsteige. Es ist langsam, aber ihr bleibt zusammen.`, germany);
        } else {
            state.log.push(`Europa: Landroute mit Gewalt und Festsetzung, Wurf ${r}.`);
            change({ safety: -2, health: -1 });
            transition(`Würfelwurf: ${r}\n\nGrenzen schließen, Züge halten nicht, Polizisten schreien. Ihr kommt weiter, aber niemand bleibt unverändert.`, germany);
        }
    });
    if (state.tokens.documents >= 3) {
        choice('Mit offiziellen Papieren einen regulären Flug versuchen – 55 Taler', () => {
            if (state.money < 55) return alert('Nicht genug Taler.');
            state.log.push('Europa: regulärer Flug mit Papieren.');
            change({ money: -55, safety: 2, future: 2, health: 1 });
            transition('Ihr bezahlt fast alles, was bleibt. Aber diesmal sind die Papiere echt. Der Flug nach Deutschland wird der erste Moment seit Langem, in dem der Boden nicht unter euch wegrutscht.', germany);
        });
    }
}

function germany() {
    const score = state.tokens.safety + state.tokens.health + state.tokens.family + state.tokens.documents + state.tokens.future;
    let ending;
    if (score >= 8 && state.money >= 0) {
        ending = 'GUTES ENDE: Ihr erreicht Deutschland mit genügend Stabilität, um neu anzufangen. Schule, Sprache und medizinische Hilfe werden möglich.';
    } else if (score >= 3) {
        ending = 'OFFENES ENDE: Ihr erreicht Deutschland, aber die Anhörung, die Unterkunft und die Zukunft bleiben unsicher.';
    } else {
        ending = 'SCHWERES ENDE: Ihr kommt an, aber die Reise hat euch fast alles gekostet. Sicherheit ist noch kein Gefühl, sondern nur ein Ort auf der Karte.';
    }

    show(`KAPITEL 5 – ANKUNFT IN DEUTSCHLAND\n\n${ending}\n\nAuswertung:\nTaler: ${state.money}\nSicherheit: ${state.tokens.safety}\nGesundheit: ${state.tokens.health}\nFamilie: ${state.tokens.family}\nDokumente: ${state.tokens.documents}\nZukunft: ${state.tokens.future}\n\nWichtig: Dieses Spiel zeigt, dass Fluchtentscheidungen oft unter Druck, mit unvollständigen Informationen und ohne sichere Option getroffen werden.`);
    choice('Noch einmal spielen', startGame);
}

function transition(text, next) {
    show(text);
    choice('Weiter', next);
}

window.addEventListener('DOMContentLoaded', startGame);
