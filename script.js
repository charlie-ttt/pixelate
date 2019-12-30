// add Row button
const table = document.getElementById('table');
const makeRow = () => {
  const tr = document.createElement('tr');

  for (let i = 0; i < 20; i++) {
    const td = document.createElement('td');
    tr.appendChild(td);
  }

  table.appendChild(tr);
};

const addRowButton = document.getElementById('add-row');
addRowButton.addEventListener('click', makeRow);

//change color
let selectedColor = 'red';
const choosenColor = document.getElementById('choosenColor');
choosenColor.addEventListener('change', event => {
  selectedColor = event.target.value;
  console.log(event.target.value);
});

function colorize(event) {
  if (event.target.tagName !== 'TD') {
    return;
  }
  if (!event.target.className.length) {
    event.target.className = selectedColor;
  } else {
    event.target.className = '';
  }
}

table.addEventListener('click', colorize);
table.addEventListener('mouseover', colorize);
