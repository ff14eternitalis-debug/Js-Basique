const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];
console.log("Entrepreneurs nés dans les années 70 :");
let seventies = entrepreneurs.filter(person => person.year >= 1970 && person.year < 1980);
console.log(seventies);

console.log("Prénom et nom des entrepreneurs :");
let names = entrepreneurs.map(person => person.first + " " + person.last);
console.log(names);

console.log("Âge actuel des entrepreneurs :");
entrepreneurs.forEach(person => {
  let age = 2024 - person.year;
  console.log(`${person.first} ${person.last} aurait ${age} ans.`);
});

console.log("Tri par nom de famille :");
let sorted = entrepreneurs.sort((a, b) => a.last.localeCompare(b.last));
console.log(sorted);