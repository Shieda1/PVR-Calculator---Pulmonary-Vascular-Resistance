// https://www.omnicalculator.com/health/pvr

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const pulmonaryvascularresistanceRadio = document.getElementById('pulmonaryvascularresistanceRadio');
const meanpulmonaryarterialpressureRadio = document.getElementById('meanpulmonaryarterialpressureRadio');
const leftarterialpressureRadio = document.getElementById('leftarterialpressureRadio');
const cardiacoutputRadio = document.getElementById('cardiacoutputRadio');

let pulmonaryvascularresistance;
let meanpulmonaryarterialpressure = v1;
let leftarterialpressure = v2;
let cardiacoutput = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

pulmonaryvascularresistanceRadio.addEventListener('click', function() {
  variable1.textContent = 'Mean pulmonary arterial pressure';
  variable2.textContent = 'Left arterial pressure';
  variable3.textContent = 'Cardiac output';
  meanpulmonaryarterialpressure = v1;
  leftarterialpressure = v2;
  cardiacoutput = v3;
  result.textContent = '';
});

meanpulmonaryarterialpressureRadio.addEventListener('click', function() {
  variable1.textContent = 'Pulmonary vascular resistance';
  variable2.textContent = 'Left arterial pressure';
  variable3.textContent = 'Cardiac output';
  pulmonaryvascularresistance = v1;
  leftarterialpressure = v2;
  cardiacoutput = v3;
  result.textContent = '';
});

leftarterialpressureRadio.addEventListener('click', function() {
  variable1.textContent = 'Pulmonary vascular resistance';
  variable2.textContent = 'Mean pulmonary arterial pressure';
  variable3.textContent = 'Cardiac output';
  pulmonaryvascularresistance = v1;
  meanpulmonaryarterialpressure = v2;
  cardiacoutput = v3;
  result.textContent = '';
});

cardiacoutputRadio.addEventListener('click', function() {
  variable1.textContent = 'Pulmonary vascular resistance';
  variable2.textContent = 'Mean pulmonary arterial pressure';
  variable3.textContent = 'Left arterial pressure';
  pulmonaryvascularresistance = v1;
  meanpulmonaryarterialpressure = v2;
  leftarterialpressure = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(pulmonaryvascularresistanceRadio.checked)
    result.textContent = `Pulmonary vascular resistance = ${computepulmonaryvascularresistance().toFixed(2)}`;

  else if(meanpulmonaryarterialpressureRadio.checked)
    result.textContent = `Mean pulmonary arterial pressure = ${computemeanpulmonaryarterialpressure().toFixed(2)}`;

  else if(leftarterialpressureRadio.checked)
    result.textContent = `Left arterial pressure = ${computeleftarterialpressure().toFixed(2)}`;

  else if(cardiacoutputRadio.checked)
    result.textContent = `Cardiac output = ${computecardiacoutput().toFixed(2)}`;
})

// calculation

// pulmonaryvascularresistance = 80 * (meanpulmonaryarterialpressure - leftarterialpressure) / cardiacoutput

function computepulmonaryvascularresistance() {
  return 80 * (Number(meanpulmonaryarterialpressure.value) - Number(leftarterialpressure.value)) / Number(cardiacoutput.value);
}

function computemeanpulmonaryarterialpressure() {
  return ((Number(pulmonaryvascularresistance.value) * Number(cardiacoutput.value)) / 80) + Number(leftarterialpressure.value);
}

function computeleftarterialpressure() {
  return Number(meanpulmonaryarterialpressure.value) - ((Number(pulmonaryvascularresistance.value) * Number(cardiacoutput.value)) / 80);
}

function computecardiacoutput() {
  return 80 * (Number(meanpulmonaryarterialpressure.value) - Number(leftarterialpressure.value)) / Number(pulmonaryvascularresistance.value);
}