//question 1
console.log('output 1')
const orderslist =[
    { name:"laptop", price: 120000},
    {name : "mobile", price: 70000},
    {name : "mobile charger", price : 1500},
    {name : "laptop charger", price : 10500}
];
sum =0;
orderslist.forEach((value) => {
    sum+=value.price;
})
console.log(sum)
console.log()

//question 2
console.log('output 3')
function random (){
    const a = Math.random()
    console.log(a)
}
setInterval(random,2000)
console.log()

//question 3
console.log('output 3')
let expenses = [
    {amount:100, category : "utensils"},
    {amount:200, category : "groceries"},
    {amount:50, category : "entertainment"}
];
const mapexpenses = expenses.map((value) => {
    let tax = (value.amount * 10)/100
    return {value, tax : tax}
})
console.log(mapexpenses)
console.log()

//question 4
console.log("output 4")
const newarr = expenses.filter((values) =>{
    if(values.category==="groceries"){
        return{values}
    }
})
console.log(newarr)
console.log()

//question 5
console.log("output 5")
const newarr1 = expenses.reduce((sum,num) =>{
    return sum + num.amount;
},0)
console.log(newarr1)
console.log()

//question 6 
console.log("output 6")
function categorizeExpense (Amount){
    if(Amount > 100){
        return "High Expense"
    }
    else{
        return "Low Expense"
    }
}
let categorizedExpenses = expenses.map((value1) => {
    let a = categorizeExpense(value1.amount)
    return a;
})
console.log("Categorized Expenses:",categorizedExpenses)
console.log()

//question 7
console.log("output 7")
 let originalNumbers=[2,5,8,10,3]
originalNumbers.forEach((value,index,array)=>{
    array[index]=value*2;
})
console.log(originalNumbers)
console.log()

//question 8
console.log("output 8")
let even_element=[] 
originalNumbers.forEach((value)=>{
    if(value % 2 === 0){
        even_element.push(value)
    }
})
console.log(even_element)