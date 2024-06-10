class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
}
let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"])


function SwitchCountry() {
    let input = document.querySelector("#CountryList").value;
    let country;
    let flag;

    if (input === "USA") {
        //set country to usa 
        country = usa;
        flag = "data:image/png;base64,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";
    }
    else if (input === "Mexico") {
        country = mexico;
        flag = "data:image/png;base64,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";
    }
    else if (input === "Algeria") {
        country = algeria;
        flag = "data:image/png;base64,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";
    }
    DisplayColors(country);

    document.querySelector("#flag").src = `${flag}`;
    document.querySelector("#CountryName").innerText = country.name;
    document.querySelector("#OfficialLanguage").innerText = country.lang;
    document.querySelector("#HelloWorld").innerText = country.greeting;
}

function DisplayColors(country){
    document.querySelector("#Color1").style.backgroundColor = country.colors[0];
    document.querySelector("#Color2").style.backgroundColor = country.colors[1];
    document.querySelector("#Color3").style.backgroundColor = country.colors[2];

}