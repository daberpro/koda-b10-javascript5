function convertCelciusToAntoherBuiltIn(celcius){

    const hasil_konversi = [
        (suhu)=>{
            console.log(`Hasil konversi celcius ke Reamur adalah ${suhu * (4 / 5)}`);
        },
        (suhu)=>{
            console.log(`Hasil konversi celcius ke Kelvin adalah ${suhu + 273.15}`);
        },
        (suhu)=>{
            console.log(`Hasil konversi celcius ke Fahrenheit adalah ${suhu * (9/5) + 32}`);
        }
    ];

    console.log("Dengan built in foreach");
    hasil_konversi.forEach((fn) => {
        fn(celcius);
    });

}

function convertCelciusToAntoherManual(celcius){

    const hasil_konversi = [
        (suhu)=>{
            console.log(`Hasil konversi celcius ke Reamur adalah ${suhu * (4 / 5)}`);
        },
        (suhu)=>{
            console.log(`Hasil konversi celcius ke Kelvin adalah ${suhu + 273.15}`);
        },
        (suhu)=>{
            console.log(`Hasil konversi celcius ke Fahrenheit adalah ${suhu * (9/5) + 32}`);
        }
    ];

    console.log("Dengan for loop");
    for(let i = 0; i < hasil_konversi.length; i++){
        hasil_konversi[i](celcius);
    }

}

convertCelciusToAntoherBuiltIn(100);
convertCelciusToAntoherManual(100);
