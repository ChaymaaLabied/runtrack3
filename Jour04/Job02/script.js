function jsonValueKey(jsonString, key) {
  const obj = JSON.parse(jsonString);
  return obj[key];
}

const jsonStringExemple = `{
  "name": "La Plateforme_",
  "address": "8 rue d'hozier",
  "city": "Marseille",
  "nb_staff": "11",
  "creation": "2019"
}`;

console.log(jsonValueKey(jsonStringExemple, "name"));
