// dom
const
  // buttons
  addUser = document.querySelector('#addUser'),
  doubleMoney = document.querySelector('#doubleMoney'),
  showMillonaires = document.querySelector('#showMillonaires'),
  sortByRichest = document.querySelector('#sortByRichest'),
  calculateWealth = document.querySelector('#calculateWealth'),
  // elements
  usersTable = document.querySelector('#usersTable')
  ;

var users = [];
var wealth = [];

// addUser function
addUser.onclick = function() {
  let names = ['John', 'Steven', 'Thomas', 'Elon'];
  let lastNames = ['Doe', 'Universe', 'Edinson', 'Musk'];
  // add user
  let generatedName = names[Math.floor(Math.random() * names.length)] + ' ' + lastNames[Math.floor(Math.random() * lastNames.length)];
  users.push(generatedName);
  wealth.push(Math.floor(Math.random() * 999));
  // add user to dom
  let tr = document.createElement('tr');
  let userName = document.createElement('td');
  let userWealth = document.createElement('td');
  // add text to elements
  userName.innerHTML = generatedName;
  userWealth.innerHTML = wealth[wealth.length - 1];
  // some configs
  userWealth.setAttribute('id', 'usersWealth');
  // add elements to html
  tr.appendChild(userName);
  tr.appendChild(userWealth);
  usersTable.appendChild(tr);

  console.info(users, wealth);
}

// doubleMoney function
doubleMoney.onclick = function() {
  console.log(wealth);
  userWealthTable = document.querySelectorAll('#usersWealth');
  for (let i = 0; i<wealth.length; i++) {
    wealth[i] = wealth[i] * 2;
    //console.log(userWealthTable[i]);
    // userWealthTable[i].innerHTML = wealth[i];
  }
  for (let i = 0; i<userWealthTable.length; i++) {
    // console.log(userWealthTable[i]);
    userWealthTable[i].innerHTML = wealth[i];
  }
  console.log(`nuevo dinero: ${wealth}`);
}

// showOnlyMillonaires function


// calculateWealth function
calculateWealth.onclick = function() {
  // suma
  let totalWealth = 0;
  for (let i = 0; i < wealth.length; i++) {
    totalWealth += wealth[i];
    console.log(totalWealth);
  }
  // add to the table
  let tr = document.createElement('tr');
  let txt = document.createElement('td');
  let totalMoney = document.createElement('td');
  // content
  txt.innerHTML = 'Dinero total:';
  totalMoney.innerHTML = totalWealth;
  tr.appendChild(txt);
  tr.appendChild(totalMoney);
  tr.setAttribute('id', 'totalMoneyEntry');
  usersTable.appendChild(tr);
}