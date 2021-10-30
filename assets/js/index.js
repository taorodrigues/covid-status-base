import axios from 'axios';

const confirmed = document.getElementById('confirmed');
const death = document.getElementById('death');
const recovered = document.getElementById('recovered');

let response = await axios.get('http://api.covid19api.com/summary');
response = await response.data;

let totalConfirmed = numberWithCommas(response.Global.TotalConfirmed);
let totalDeath = numberWithCommas(response.Global.TotalDeaths);
let totalRecovered = numberWithCommas(response.Global.TotalRecovered);

confirmed.textContent = totalConfirmed;

function numberWithCommas(x) {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
}

//-------------------------------------------------------------------------
console.log(response);

let newConfirmed = numberWithCommas(response.Global.NewConfirmed);
let newDeaths = numberWithCommas(response.Global.NewDeaths);
let newRecovered = numberWithCommas(response.Global.NewRecovered);
