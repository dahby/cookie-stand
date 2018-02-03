'use strict';
// Creat an array of open store hours
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var allLocations = [];
// var totalCookiesHr = 0;
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
      // console.log(this.randCustHr[i]);
    }
  };
  this.calcRandCustHr();

  this.calcCookiesHr = function() {
    for (var j=0; j < hours.length; j++) {
      this.cookiesHr.push(Math.round(this.avgSalePerCust * this.randCustHr[j]));
      // console.log(this.cookiesHr[j]);
      this.totalCookies += this.cookiesHr[j];
    }
  };
  this.calcCookiesHr();
}

function makeStores() {
  new MakeLocation('First and Pike', 23, 65, 6.3);
  new MakeLocation('SeaTac Airport', 3, 24, 1.2);
  new MakeLocation('Seattle Center', 11, 38, 3.7);
  new MakeLocation('Capitol Hill', 20, 38, 2.3);
  new MakeLocation('Alki', 2, 16, 4.6);
}

// makeStores();
// console.log(allLocations);

var cookieStands = document.getElementById('cookieStands');

function makeHeaderRow() {
  var thEl = document.createElement('tr');
  var trEl = document.createElement('tr');
  trEl.appendChild(thEl);
  for (var i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Daily Location Totals';
  trEl.appendChild(thEl);
  cookieStands.appendChild(trEl);
}
// makeHeaderRow();

function makeTableRow() {
  for (var j = 0; j < allLocations.length; j++) {
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = allLocations[j].name;
    trEl.appendChild(tdEl);
    for (var k = 0; k < hours.length; k++) {
      tdEl = document.createElement('td');
      tdEl.textContent = allLocations[j].cookiesHr[k];
      trEl.appendChild(tdEl);
    }
    tdEl = document.createElement('td');
    tdEl.textContent = allLocations[j].totalCookies;
    trEl.appendChild(tdEl);
    cookieStands.appendChild(trEl);
  }
}
// makeTableRow();

function makeFooterRow() {
  var trEl = document.createElement('tr');
  var rowEl = document.createElement('td');
  rowEl.textContent = 'Net Totals';
  trEl.appendChild(rowEl);
  var tdEl = [];
  var total = 0;
  for (var i = 0; i < hours.length; i++) {
    tdEl[i] = document.createElement('td');
    for (var j = 0; j < allLocations.length; j++) {
      total += allLocations[j].cookiesHr[i];
    }
    tdEl[i].textContent = total;
    netTotal += total;
    total = 0;
    trEl.appendChild(tdEl[i]);
  }
  var allTotals = document.createElement('td');
  allTotals.textContent = netTotal;
  cookieStands.appendChild(trEl);
  trEl.appendChild(allTotals);
}
// makeFooterRow();

var newStore = document.getElementById('newStore');

function handleLocationAdd(event) {
  event.preventDefault();
  if(!event.target.storeName.value || !event.target.minCust.value || !event.target.maxCust.value || !event.target.avgSalePerCust.value) {
    return alert('Insufficient data to add new store location');
  }
  var newName = event.target.storeName.value;
  var newMinCustHr = parseInt(event.target.minCust.value);
  var newMaxCustHr = parseInt(event.target.maxCust.value);
  var newAvgSalePerCust = parseInt(event.target.avgSalePerCust.value);

  new MakeLocation(newName, newMinCustHr, newMaxCustHr, newAvgSalePerCust);
  makeTableRow();

  event.target.storeName.value = null;
  event.target.minCust.value = null;
  event.target.maxCust.value = null;
  event.target.avgSalePerCust.value = null;
}

newStore.addEventListener('submit', handleLocationAdd);

function generateTable() {
  makeStores();
  makeHeaderRow();
  makeTableRow();
  makeFooterRow();
}

generateTable();