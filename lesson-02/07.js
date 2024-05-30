let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};

let passportMarried2 = structuredClone(passportMarried);

const copyAddress = passportMarried2.address;
delete passportMarried2.address;

passportMarried2.married = true;
passportMarried2.address = copyAddress;

console.log(passportMarried); 
console.log(passportMarried2);