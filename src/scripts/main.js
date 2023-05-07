'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');
const keys = ['name', 'sex', 'born', 'died'];

people.forEach(persone => {
  const row = document.createElement('tr');

  for (const key of keys) {
    const cell = document.createElement('td');

    cell.textContent = persone[key];

    row.append(cell);
  }

  const ageElement = document.createElement('td');
  const centureElement = document.createElement('td');

  ageElement.textContent = persone.died - persone.born;
  centureElement.textContent = Math.ceil(persone.died / 100);

  row.append(ageElement);
  row.append(centureElement);

  table.firstElementChild.append(row);
});
