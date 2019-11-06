function pickRandomFighterInAList(listOfFighters) {
  var max = listOfFighters.length;
  var generateur = Math.floor(Math.random() * max);
  return listOfFighters[generateur];
}

function removeFighterFromList(figther, listOfFighters) {
  const indexOf = listOfFighters.indexOf(figther);
  return listOfFighters.splice(indexOf, 1);
}

function pickNFighters(numberOfFigthers = 2) {
  let listOfFighters = [
    "ANNICCHIARICO Victoria",
    "RIEKER Théo",
    "CLEMENTZ Nathan",
    "JBARA Naïm",
    "MOUGIN Mehdi",
    "ALAMANOVA Madina",
    "BLANGENWITSCH Lucas",
    "RÖDERER Lucas",
    "LUCZAK Justin",
    "LAT Jordan",
    "LIN Joël",
    "CHÂTEL Jérémy",
    "ROCFORT Erwan",
    "WITTNER Déborah",
    "DE OLIVEIRA Allan",
    "BIRLINGER Anaïs",
    "MAERKY Antonin",
    "LINDER Arnaud",
    "FRUHAUF Thibaud",
    "VIDALE Cindy",
    "ALALI Mouafak",
    "BASS Kévin",
    "BARBIER Damien"
  ];

  const figthers = [];
  for (let i = 0; i < numberOfFigthers; i++) {
    const selectedFigther = pickRandomFighterInAList(listOfFighters);
    removeFighterFromList(selectedFigther, listOfFighters);
    figthers.push(selectedFigther);
  }

  return figthers;
}

function displayNFigthers(numberOfFigthers) {
  const fighters = pickNFighters(numberOfFigthers);

  let fightName = "";
  for (let i = 0; i < fighters.length; i++) {
    fightName += fighters[i];
    if (i < fighters.length - 1) {
      fightName += " vs ";
    }
  }

  const element = document.getElementById("fighters");
  element.innerHTML = fightName;
}
