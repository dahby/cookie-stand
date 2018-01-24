'use strict';

var pike = {
  name: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  random: function() {
    return Math.floor(Math.random(pike.minCust, pike.maxCust) * (pike.maxCust - pike.minCust)) + pike.minCust;
  }
}

var seatac = {
  name: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,
}

var seaCenter = {
  name: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgSale: 3.7,
}

var capHill = {
  name: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgSale: 2.3,
}

var alki = {
  name: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgSale: 4.6,
}