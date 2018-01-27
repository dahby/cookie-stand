'use strict';
// Creat an array of open store hours
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var allLocations = [];
var totalCookiesHr = 0;
var netTotal = 0;

function MakeLocation(name, minCustHr, maxCustHr, avgSalePerCust) {
  this.name = name;
  this.minCustHr = minCustHr;
  this.maxCustHr = maxCustHr;
  this.avgSalePerCust = avgSalePerCust;
  this.randCustHr = [];
  this.cookiesHr = [];
  this.totalCookies = 0;
  allLocations.push(this);  

  this.calcRandCustHr = function() {
    for(var i = 0; i < hours.length; i++) {
      this.randCustHr.push(Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr);
    console.log(this.randCustHr[i]);
     }
    }
     
  this.calcCookiesHr = function() {
    for (var j=0; j < hours.length; j++) {
      this.cookiesHr.push(Math.round(this.avgSalePerCust * this.randCustHr[j]));
    console.log(this.cookiesHr[j]);
     }
    }
  
  
  };

function makeStores() {
  new MakeLocation("First and Pike", 23, 65, 6.3);
  new MakeLocation("SeaTac Airport", 3, 24, 1.2);
  new MakeLocation("Seattle Center", 11, 38, 3.7);
  new MakeLocation("Capitol Hill", 20, 38, 2.3);
  new MakeLocation("Alki", 2, 16, 4.6);
}

makeStores();
console.log(allLocations)

var tableEl = document.getElementById("cookieStands");

function makeHeaderRow() {
  var trEl = document.createElement("tr");
  for (var i = 0; i < hours.length; i++) {
    var thEl = document.createElement("th");
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  tableEl.appendChild(trEl);
};
makeHeaderRow(hours);
