let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};
const copy = structuredClone(passportWithAddress);
copy.address.city = "Bobryisk";

console.log(passportWithAddress.address.city);
console.log(copy.address.city);