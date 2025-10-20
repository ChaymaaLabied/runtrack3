function tri(numbers, order) {
  // On clone le tableau pour ne pas modifier l'original comme on a vu aujord'hui
  let sorted = [...numbers];

  if (order === "asc") {
    sorted.sort((a, b) => a - b); // tri croissant
  } else if (order === "desc") {
    sorted.sort((a, b) => b - a); // tri décroissant
  } else {
    console.warn("Order doit être 'asc' ou 'desc'");
  }

  return sorted;
}


console.log(tri([5, 2, 9, 1, 7], "asc")); 
console.log(tri([5, 2, 9, 1, 7], "desc")); 
