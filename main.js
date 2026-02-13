let movies = [
    {title: "The Conjuring", genre: "Horror"},
    {title: "It", genre: "Horror"},
    {title: "The Hangover", genre: "Comedy"},
    {title: "Superbad", genre: "Comedy"},
    {title: "John Wick", genre: "Action"},
    {title: "Forrest Gump", genre: "Drama"}
]

function getPrice(age) {
    switch(true) {
        case age >= 18:
            price = 15;
            break;
        case age >= 12 && age <= 17:
            price = 12;
            break;
        case age < 12:
            price = 8;
            break;
    }

    return price;
}

function calculatePrice(age,genre) {
    let price = getPrice(age);

    switch(true) {
        case genre == "Comedy":
            discountAmount = price * 10/100;
            finalPrice = price - discountAmount;
            break;
        case genre == "Horror":
            finalPrice = price;
            break;
        case genre == "Action":
            discountAmount = price * 5/100
            finalPrice = price - discountAmount;
            break;
        case genre == "Drama":
            discountAmount = price * 8/100;
            finalPrice = price - discountAmount;
            break;
    }

    return finalPrice;
}


console.log(`Final Price for Horror movie and age 10 is : ${calculatePrice(10, "Horror")}`);
console.log(`Final Price for Comedy movie and age 15 is : ${calculatePrice(15, "Comedy")}`);
console.log(`Final Price for Action movie and age 20 is : ${calculatePrice(20, "Action")}`);
console.log(`Final Price for Drama movie and age 65 is : ${calculatePrice(65, "Drama")}`);

