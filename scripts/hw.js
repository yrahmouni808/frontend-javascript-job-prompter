import departments from "./data.js";

const userInput = prompt('Hoi! Hoe heet je?');
console.log(userInput);

let execute;
execute = {
    printer: function printInfo() {
        console.log(`De afdeling Sales heeft ${departments.sales.numberOfEmployees} medewerkers.`);
        console.log(`Marketing is een leuke afdeling om te werken. ${departments.marketing.description}.`);
        console.log(`De afdeling Customer Service heeft ${departments["customer-service"].numberOfEmployees} medewerkers.`);
        console.log(`Sales is een uitdagende afdeling om te werken als Verkoopmanager. ${departments.sales.jobs[1].description}`);
    }
};

export default execute;