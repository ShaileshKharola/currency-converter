
const dropdowns = document.querySelectorAll('.dropdown select');
const btn = document.querySelector('button');
const fromCurr = document.querySelector('.from select');
const toCurr = document.querySelector('.to select');

for (let select of dropdowns) {
  for (let currCode in countryList) {
    let option = document.createElement('option');
    option.textContent = currCode;
    option.value = currCode;
    if (select.name === 'from' && currCode === 'USD') {
      option.selected = true;
    } else if (select.name === 'to' && currCode === 'INR') {
      option.selected = true;
    }
    select.append(option);
  }
  select.addEventListener('change', evt => updateFlag(evt.target));
}

function updateFlag(el) {
  const currCode = el.value;
  const countryCode = countryList[currCode];
  if (countryCode) {
    el.parentElement.querySelector('img').src =
      `https://flagsapi.com/${countryCode}/flat/64.png`;
  }
}

btn.addEventListener('click', evt => {
  evt.preventDefault();
  const amtInput = document.querySelector('.amount input');
  let amtVal = parseFloat(amtInput.value);
  if (!amtVal || amtVal <= 1) {
    amtVal = 1;
    amtInput.value = '1';
  }
  console.log(fromCurr.value, toCurr.value);
  //const url=`${url}/${fromCurr}/${toCurr}.json`;
});
