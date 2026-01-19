const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

let allRented = books.every(book => book.rented > 0);
console.log("Est-ce que tous les livres ont été empruntés au moins une fois ?", allRented);

let mostRented = books.reduce((max, book) => (book.rented > max.rented ? book : max));
console.log("Le livre le plus emprunté est :", mostRented.title);

let leastRented = books.reduce((min, book) => (book.rented < min.rented ? book : min));
console.log("Le livre le moins emprunté est :", leastRented.title);

let bookById = books.find(book => book.id === 873495);
console.log("Livre trouvé avec l'ID 873495 :", bookById.title);

let booksUpdated = books.filter(book => book.id !== 133712);
console.log("Livre 133712 supprimé. Nouveau nombre de livres :", booksUpdated.length);

let sortedBooks = booksUpdated.sort((a, b) => a.title.localeCompare(b.title));
console.log("Livres triés par ordre alphabétique :", sortedBooks);