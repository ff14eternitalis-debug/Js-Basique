let number = prompt("De quel nombre veux-tu calculer la factorielle ?");
function factorielle(n) {
  let result = 1;
  for(let i = 1; i <= n; i++) {
    result *= i;
  }
  
  return result;
}
console.log("Le résultat est : " + factorielle(number));