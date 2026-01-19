const translateARN = (arnString) => {
    const geneticCode = {
    "UCU": "Sérine", "UCC": "Sérine", "UCA": "Sérine", "UCG": "Sérine", "AGU": "Sérine", "AGC": "Sérine",
    "CCU": "Proline", "CCC": "Proline", "CCA": "Proline", "CCG": "Proline",
    "UUA": "Leucine", "UUG": "Leucine",
    "UUU": "Phénylalanine", "UUC": "Phénylalanine",
    "CGU": "Arginine", "CGC": "Arginine", "CGA": "Arginine", "CGG": "Arginine", "AGA": "Arginine", "AGG": "Arginine",
    "UAU": "Tyrosine", "UAC": "Tyrosine"
  };
  let codons = arnString.match(/.{1,3}/g);
  let protein = codons.map(codon => geneticCode[codon]);
  return protein.join("-");
};

const arn1 = "CCGUCGUUGCGCUACAGC";
const arn2 = "CCUCGCCGGUACUUCUCG";

console.log(`ARN 1 (${arn1}) donne :`);
console.log(translateARN(arn1));

console.log("--------------------");

console.log(`ARN 2 (${arn2}) donne :`);
console.log(translateARN(arn2));