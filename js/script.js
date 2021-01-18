// var studente = {
//   nome: "Lucio",
//   cognome:"Rendine",
//   eta:"30"
// };
//
// console.log(studente);

let studenti = [
{
  nome: "Lucio",
  cognome:"Rendine",
  eta:"30"
},
{
  nome: "Luca",
  cognome:"Scoscina",
  eta:"30"
},
{
  nome: "Franco",
  cognome:"Di Iorio",
  eta:"30"
},
{
  nome: "Raji",
  cognome:"Mapitigama",
  eta:"30"
},
]

for (var key in studenti)  {
  console.log(studenti[key])
}

for (var i = 0; i < 3; i++) {
  var nuovoStudente = {};
  nuovoStudente.nome = prompt('Inserire nome nuovo studente');
  nuovoStudente.cognnome = prompt('Inserire cognome nuovo studente');
  nuovoStudente.eta = prompt('Inserire eta nuovo studente');
  studenti.push(nuovoStudente);
}
