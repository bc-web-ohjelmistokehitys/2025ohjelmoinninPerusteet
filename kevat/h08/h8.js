
tervehdiNimella(nimi) {
  alert("Hei " + nimi + "!");
}

let kayttaja = prompt("Mikä on nimesi?");

tervehdiNimella(kayttaja);


let luvut = [13, 4, 12, 7, 20, 9, 3];

function pieninTaulukosta(lukutaulukko){
  let pienin = lukutaulukko[0];
  for (let luku of lukutaulukko) {
    if (luku < pienin) {
      pienin = luku;
    }
  }
  return pienin; // tällä arvo tuodaan funktion ulkopuolelle
}

let pieninLuku = pieninTaulukosta(luvut);
console.log("Taulukon (" + luvut + ")Pienin luku on " + pieninLuku + ".");
document.getElementById("pienin").innerHTML = "Taulukon (" + luvut + ")Pienin luku on " + pieninLuku + ".";


function valuuttaMuotoilija(maara, prefiksi, symboli){
  if (prefiksi === true) {
    return symboli + maara;
  } else {
    return maara + symboli;
  }   
};

let eurot = valuuttaMuotoilija(8, false, "€");

console.log(eurot);