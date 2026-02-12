let sor = 6
let betu = "*"

for (let i = 0; i < sor; i++) {
    console.log(betu.repeat(20))
}







for (let i = 99; i > 0; i--) {
    if (i % 3 === 0) console.log(i)
}







for (let i = 101; i >= 50; i--) {
    if (i % 5 === 0) console.log(i * 2)
}







let N = 100
let osszeg = N * (N + 1) / 2
console.log(osszeg)





//6?????


//8??????
let N2 = 6

for (let i = 1; i <= 10; i++) { console.log(i + " x " + N2 + " = " + (i * N2)) }




//11
let dobasszam = 0
let dobasosszeg = 0

while (true) {
    let dobas = Math.floor(Math.random() * 6) + 1
    console.log(dobas)

    dobasszam++
    dobasosszeg += dobas

    if (dobasosszeg >= 20) {
        break;
    }
}


//12 feladat
let hatosok = 0
let dobasok = 0
let dobosszeg = 0

while (hatosok < 3) {
    let dob = Math.floor(Math.random() * 6) + 1
    console.log(dob)

    dobasok++
    osszeg += dob

    if (dob === 6) {
        hatosok++
    }
}

console.log("Átlag:", osszeg / dobasok)








//14
let voltparos = false
let szam = Number(prompt("szam:"))

while (szam !== 0) {
    if (szam % 2 === 0) {
        voltparos = true
    }
    szam = Number(prompt("szam:"))
}

if (voltparos) {
    console.log("volt paros")
} else {
    console.log("nem volt paros")
}



//ENNYI A MESÉNEK VÉGE

