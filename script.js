function getRandom (){
    var list=[
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
var max = list.length;
var generateur = Math.floor(Math.random()*max)
console.log(list[generateur]);

}