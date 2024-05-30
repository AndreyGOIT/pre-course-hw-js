let passport = {
    name: "Petr",
    surname: "Petrov",
};
// const passport2 = structuredClone(passport);
const passport2 = Object.assign({}, passport);
passport2.name = 'Ivan';

console.log(passport.name);
console.log(passport2.name);