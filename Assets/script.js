//Crypto App API
var icon= ''; 
var coinName='';
var price='';
//when user access website user should find value of chosen crypto currency in USD

//get user input

let userInput = document.getElementById('userQuery');

//take user input and return in current USD

userInput.addEventListener('click', function(){
    returnUSD();
})

//collect and append data to second input field

function returnUSD(){

 //grab value of user input   
var query = $('#userInput').val();

//place API URL in variable
let apiURL = `https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&search=${query}&orderDirection=desc&limit=50&offset=0`;
fetch(apiURL, {method: 'GET',
headers: {
    'X-RapidAPI-Key': '8959ff9965msh4479dc11ddcddc4p1bcd30jsndfe8e2947c47',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
} }).then(function(response){
if(response.ok){
response.json().then(function(data){
icon = data.data.coins[0].iconURL;
coinName = data.data.coins[0].name;
price = data.data.coins[0].price;
var newPrice='$' + Math.round(price*100)/100;

$('#icon').attr('src', icon);
$('#name').html(coinName);
$('#price').html(newPrice);

})
}
})

}

