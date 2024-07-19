import inquirer from "inquirer";
let Currencyobject = {
    USD: 1,
    EUR: 0.91,
    GPB: 0.76,
    INR: 76.54,
    PKR: 280
};
let Currencyselector = await inquirer.prompt([
    {
        name: 'from',
        type: 'list',
        message: "please select your currency",
        choices: ['USD', 'EUR', 'GPB', 'INR', 'PKR']
    },
    {
        name: 'to',
        type: 'list',
        message: "please select your conversion currency",
        choices: ['USD', 'EUR', 'GPB', 'INR', 'PKR']
    },
    {
        name: 'Amount',
        type: 'number',
        message: "please enter amount",
    }
]);
let fromAmount = Currencyobject[Currencyselector.from];
let toAmount = Currencyobject[Currencyselector.to];
let Amount = Currencyselector.Amount;
let baseamount = Amount / fromAmount;
let convertamount = baseamount * toAmount;
console.log(convertamount);
