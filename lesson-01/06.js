let str = "zzzzyzz";

function findSymbol(str) {
    return str.includes('y') ? console.log('нашел') : console.log('заблудился');
}

findSymbol(str);