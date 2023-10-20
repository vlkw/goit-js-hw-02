function getShippingCost(country) {
    let price;
    let countryName; 
    switch(country) {
        case "China":
            price = 100;
            countryName = "China"; 
            break;
            case "Chile":
            price = 250;
            countryName = "Chile"; 
            break;
            case "Australia":
            price = 170;
            countryName = "Australia"; 
            break;
            case "Jamaica":
            price = 120;
            countryName = "Jamaika"; 
            break;
            default:
             return "Sorry, there is no delivery to your country";
    }
    return `Shipping to ${country} will cost ${price} credits`
}
console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"