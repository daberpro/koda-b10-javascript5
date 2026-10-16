function convertCelciusToAntoherBuiltIn(celcius){

    let objek_konversi = [
        {
            name: "Reamur",
            calc: (suhu) => suhu * (4 / 5)
        },
        {
            name: "Kelvin",
            calc: (suhu) => suhu + 237.15
        },
        {
            name: "Fahrenheit",
            calc: (suhu) => suhu * (9/5) + 32
        },
    ];

    console.log("Dengan built in foreach");
    objek_konversi = objek_konversi.map(({name, calc}) => {
        return `Hasil konversi celcius ke ${name} adalah ${calc(celcius)}`;
    });
    objek_konversi.forEach((hasil)=> console.log(hasil));

}

function convertCelciusToAntoherManual(celcius){

    let objek_konversi = [
        {
            name: "Reamur",
            calc: (suhu) => suhu * (4 / 5)
        },
        {
            name: "Kelvin",
            calc: (suhu) => suhu + 237.15
        },
        {
            name: "Fahrenheit",
            calc: (suhu) => suhu * (9/5) + 32
        },
    ];

    for(let i = 0; i < objek_konversi.length; i++){
        const {name, calc} = objek_konversi[i];
        objek_konversi[i] = `Hasil konversi celcius ke ${name} adalah ${calc(celcius)}`;
    }
    console.log("Dengan for loop");
    for(let i = 0; i < objek_konversi.length; i++){
        console.log(objek_konversi[i]);
    }

}

convertCelciusToAntoherBuiltIn(100);
convertCelciusToAntoherManual(100);
