'use strict';
// Creat an array of open store hours
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// First and Pike Location
var pike = {
  name: '1st and Pike',
  minCustHr: 23,
  maxCustHr: 65,
  avgSalePerCust: 6.3,
  randCustHr: [],
  cookiesHr: [],
  totalCookies: 0,
  // method for random customers by hour
  calcRandCustHr: function() {
    for(var i = 0; i < hours.length; i++) {
      this.randCustHr.push(Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr);
    // console.log(this.randCustHr[i]);
    }
  },
  // method for cookies sold by hour
  calcCookiesHr: function() {
    for (var j=0; j < hours.length; j++) {
      this.cookiesHr.push(Math.round(this.avgSalePerCust * this.randCustHr[j]));
    // console.log(this.cookiesHr[j]);
    }
  },
  // render function into lists
  render: function () {
    var pike = document.getElementById('pike');
    var pikeList = document.getElementById('pikeList');
    this.calcRandCustHr();
    this.calcCookiesHr();
    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    pike.appendChild(h3El);
    for (var k = 0; k < hours.length; k++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[k] + ': ' + this.cookiesHr[k] + ' cookies';
    console.log(liEl);
    pikeList.appendChild(liEl);
    }
  }
};
pike.render();

var seatac = {
  name: 'SeaTac Airport',
  minCustHr: 3,
  maxCustHr: 24,
  avgSalePerCust: 1.2,
  randCustHr: [],
  cookiesHr: [],
  totalCookies: 0,

  calcRandCustHr: function() {
    for(var i = 0; i < hours.length; i++) {
      this.randCustHr.push(Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr);
    // console.log(this.randCustHr[i]);
    }
  },
  
  calcCookiesHr: function() {
    for (var j=0; j < hours.length; j++) {
      this.cookiesHr.push(Math.round(this.avgSalePerCust * this.randCustHr[j]));
    // console.log(this.cookiesHr[j]);
    }
  },
  
  render: function () {
    var seatac = document.getElementById('seatac');
    var seatacList = document.getElementById('seatacList');
    this.calcRandCustHr();
    this.calcCookiesHr();
    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    seatac.appendChild(h3El);
    for (var k = 0; k < hours.length; k++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[k] + ': ' + this.cookiesHr[k] + ' cookies';
    console.log(liEl);
    seatacList.appendChild(liEl);
    }
  }
};
seatac.render();

var seaCenter = {
  name: 'Seattle Center',
  minCustHr: 11,
  maxCustHr: 38,
  avgSalePerCust: 3.7,
  randCustHr: [],
  cookiesHr: [],
  totalCookies: 0,

  calcRandCustHr: function() {
    for(var i = 0; i < hours.length; i++) {
      this.randCustHr.push(Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr);
    // console.log(this.randCustHr[i]);
    }
  },
  
  calcCookiesHr: function() {
    for (var j=0; j < hours.length; j++) {
      this.cookiesHr.push(Math.round(this.avgSalePerCust * this.randCustHr[j]));
    // console.log(this.cookiesHr[j]);
    }
  },
  
  render: function () {
    var seaCenter = document.getElementById('seaCenter');
    var seaCenterList = document.getElementById('seaCenterList');
    this.calcRandCustHr();
    this.calcCookiesHr();
    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    seaCenter.appendChild(h3El);
    for (var k = 0; k < hours.length; k++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[k] + ': ' + this.cookiesHr[k] + ' cookies';
    console.log(liEl);
    seaCenterList.appendChild(liEl);
    }
  }
};
seaCenter.render();

var capHill = {
  name: 'Capitol Hill',
  minCustHr: 20,
  maxCustHr: 38,
  avgSalePerCust: 2.3,
  randCustHr: [],
  cookiesHr: [],
  totalCookies: 0,

  calcRandCustHr: function() {
    for(var i = 0; i < hours.length; i++) {
      this.randCustHr.push(Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr);
    // console.log(this.randCustHr[i]);
    }
  },
  
  calcCookiesHr: function() {
    for (var j=0; j < hours.length; j++) {
      this.cookiesHr.push(Math.round(this.avgSalePerCust * this.randCustHr[j]));
    // console.log(this.cookiesHr[j]);
    }
  },
  
  render: function () {
    var capHill = document.getElementById('capHill');
    var capHillList = document.getElementById('capHillList');
    this.calcRandCustHr();
    this.calcCookiesHr();
    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    capHill.appendChild(h3El);
    for (var k = 0; k < hours.length; k++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[k] + ': ' + this.cookiesHr[k] + ' cookies';
    console.log(liEl);
    capHillList.appendChild(liEl);
    }
  }
};
capHill.render();

var alki = {
  name: 'Alki',
  minCustHr: 2,
  maxCustHr: 16,
  avgSalePerCust: 4.6,
  randCustHr: [],
  cookiesHr: [],
  totalCookies: 0,

  calcRandCustHr: function() {
    for(var i = 0; i < hours.length; i++) {
      this.randCustHr.push(Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr);
    // console.log(this.randCustHr[i]);
    }
  },
  
  calcCookiesHr: function() {
    for (var j=0; j < hours.length; j++) {
      this.cookiesHr.push(Math.round(this.avgSalePerCust * this.randCustHr[j]));
    // console.log(this.cookiesHr[j]);
    }
  },
  
  render: function () {
    var alki = document.getElementById('alki');
    var alkiList = document.getElementById('alkiList');
    this.calcRandCustHr();
    this.calcCookiesHr();
    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    alki.appendChild(h3El);
    for (var k = 0; k < hours.length; k++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[k] + ': ' + this.cookiesHr[k] + ' cookies';
    // console.log(liEl);
    alkiList.appendChild(liEl);
    }
  }
};
alki.render();