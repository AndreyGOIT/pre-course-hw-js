let passport = {
    name: "Petr",
    surname: "Petrov",
};
const copy = structuredClone(passport);
copy.name = "Ivan";

console.log(passport);
console.log(copy);