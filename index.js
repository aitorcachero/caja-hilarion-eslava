const cincue = document.querySelector('#cincue');
const veine = document.querySelector('#veine');
const dieze = document.querySelector('#dieze');
const cincoe = document.querySelector('#cincoe');
const dose = document.querySelector('#dose');
const une = document.querySelector('#une');
const cincuc = document.querySelector('#cincuc');
const veinc = document.querySelector('#veinc');
const diezc = document.querySelector('#diezc');
const cincoc = document.querySelector('#cincoc');

const cincuec = document.querySelector('#cincuec');
const veinec = document.querySelector('#veinec');
const diezec = document.querySelector('#diezec');
const cincoec = document.querySelector('#cincoec');
const dosec = document.querySelector('#dosec');
const unec = document.querySelector('#unec');
const cincucc = document.querySelector('#cincucc');
const veincc = document.querySelector('#veincc');
const diezcc = document.querySelector('#diezcc');
const cincocc = document.querySelector('#cincocc');

const btn = document.querySelector('#btn');
const alerta = document.querySelector('#alerta');

function calcularCaja(a, b, c, d, e, f, g, h, i, j) {
  a *= 50;
  b *= 20;
  c *= 10;
  d *= 5;
  e *= 2;
  f *= 1;
  g *= 0.5;
  h *= 0.2;
  i *= 0.1;
  j *= 0.05;
  const total = a + b + c + d + e + f + g + h + i + j;
  if (total > 300) {
    document.getElementById('alerta').style.color = '#7fff00';
    alerta.innerHTML = `La caja es correcta y sobran ${(total - 300).toFixed(
      2
    )} €`;
  } else if (total < 300) {
    document.getElementById('alerta').style.color = 'red';
    alerta.innerHTML = `¡¡¡ La caja es incorrecta, faltan ${(
      300 - total
    ).toFixed(2)} € !!!`;
  } else {
    document.getElementById('alerta').style.color = '#7fff00';
    alerta.innerHTML = `La caja es perfecta, no sobra nada`;
  }
  return total;
}

function calcularCambio() {
  cincuec.value = `${Number(cincue.value * 50).toFixed(2)} €`;
  veinec.value = `${Number(veine.value * 20).toFixed(2)} €`;
  diezec.value = `${Number(dieze.value * 10).toFixed(2)} €`;
  cincoec.value = `${Number(cincoe.value * 5).toFixed(2)} €`;
  dosec.value = `${Number(dose.value * 2).toFixed(2)} €`;
  unec.value = `${Number(une.value * 1).toFixed(2)} €`;
  cincucc.value = `${Number(cincuc.value * 0.5).toFixed(2)} €`;
  veincc.value = `${Number(veinc.value * 0.2).toFixed(2)} €`;
  diezcc.value = `${Number(diezc.value * 0.1).toFixed(2)} €`;
  cincocc.value = `${Number(cincoc.value * 0.05).toFixed(2)} €`;
}

btn.addEventListener('click', () => {
  total.value = `${calcularCaja(
    Number(cincue.value),
    Number(veine.value),
    Number(dieze.value),
    Number(cincoe.value),
    Number(dose.value),
    Number(une.value),
    Number(cincuc.value),
    Number(veinc.value),
    Number(diezc.value),
    Number(cincoc.value)
  ).toFixed(2)} €`;
  calcularCambio();
});
