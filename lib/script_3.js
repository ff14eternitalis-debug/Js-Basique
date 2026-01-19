let floors = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
for (let i = 1; i <= floors; i++) {
    let spaces = " ".repeat(floors - i);
    let hashes = "#".repeat(i);
    console.log(spaces + hashes);
}
