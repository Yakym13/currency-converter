function start() {
  let dol = +document.getElementById('convert-dol').value;
  let euro = +document.getElementById('convert-eu').value;
  const USD_RATE = 29.25 ;
  const EUR_RATE = 32.13 ;
  const resD = (dol * USD_RATE).toFixed(2) ;
  const resE = (euro * EUR_RATE).toFixed(2);
  const comparisonE = (EUR_RATE / USD_RATE).toFixed(4) ; // округлюємо до 4 цифр після крапки
  const comparisonD = (USD_RATE / EUR_RATE).toFixed(4) ;
  alert(`${dol} дол-${resD} грн, ${euro} євро-${resE} грн, ${comparisonE}, ${comparisonD}`);
}

const convertBtn = document.getElementById('convert-btn');
convertBtn.addEventListener('click', start);