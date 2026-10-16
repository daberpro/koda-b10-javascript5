function convertCelciusToAntoherBuiltIn(celcius){

    const hasil_konversi = [
        {
            name: "Reamur",
            value: celcius * (4 / 5)
        },
        {
            name: "Kelvin",
            value: celcius + 273.15
        },
        {
            name: "Fahrenheit",
            value: celcius * (9/5) + 32
        }
    ];

    console.log("Dengan built in foreach");
    hasil_konversi.forEach(({name, value}) => {
        console.log(`Hasil konversi celcius ke ${name} adalah ${value}`);
    });

}

function convertCelciusToAntoherManual(celcius){

    const hasil_konversi = [
        {
            name: "Reamur",
            value: celcius * (4 / 5)
        },
        {
            name: "Kelvin",
            value: celcius + 273.15
        },
        {
            name: "Fahrenheit",
            value: celcius * (9/5) + 32
        }
    ];

    console.log("Dengan for of manual");
    for(const {name, value} of hasil_konversi){
        console.log(`Hasil konversi celcius ke ${name} adalah ${value}`);
    }

}

convertCelciusToAntoherBuiltIn(100);
convertCelciusToAntoherManual(100);
