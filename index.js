const icon = document.querySelector('.icon');

icon.addEventListener ('click', () => {
  let x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
});

icon.addEventListener('click', () => {
  if (icon.className == 'icon' || icon.className == 'icon rotate-back'){
    icon.className = 'icon rotate' 
  } else if (icon.className == 'icon rotate') {
  icon.className = 'icon rotate-back' 
  }
})

let fat = document.querySelector('.fat');
let btnCalcular = document.querySelector('.btn-calcular');
let resultPF = document.querySelector('.result-pf');
let resultPJ = document.querySelector('.result-pj');

const calculatorFat = () => {
  
  fat.value = parseFloat(fat.value.replace(',', '') && fat.value.replace('.', ''))
  let fat5 = Math.round( fat.value * 0.06 + fat.value * 0.09 )
  let fat10 = Math.round( fat.value * 0.06 + fat.value * 0.09 )
  let fat15 = Math.round( fat.value * 0.06 + fat.value * 0.1047 )
  let fat20 = Math.round( fat.value * 0.112 + fat.value * 0.073 + 780 )
  let fat21 = Math.round( fat.value * 0.1433 + fat.value * 0.015 + 671 )
  let fatPF = Math.round( fat.value * 0.275 + fat.value * 0.2 + 79.4 )
  
  const repChar = (n) => n.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.");
  
  if (fat.value <= 5000) {
    resultPJ.innerHTML = `Pessoa Jurídica [ R$ ${repChar(fat5)} ]`
  }

  if (fat.value > 5000 && fat.value <= 10000) {
    resultPJ.innerHTML = `Pessoa Jurídica [ R$ ${repChar(fat10)} ]`
  }
  
  if (fat.value > 10000 && fat.value <= 15000) {
    resultPJ.innerHTML = `Pessoa Jurídica [ R$ ${repChar(fat15)} ]`
  }
  
  if (fat.value > 15000 && fat.value <= 20000) {
    resultPJ.innerHTML = `Pessoa Jurídica [ R$ ${repChar(fat20)} ]`
  }
  
  if (fat.value > 20000) {
    resultPJ.innerHTML = `Pessoa Jurídica [ R$ ${repChar(fat21)} ]`
  }
  
  resultPF.innerHTML = `PESSOA FÍSICA [ R$ ${repChar(fatPF)} ]`
  
  fat.value = ' ';
  
};

btnCalcular.addEventListener('click', calculatorFat);
document.addEventListener('keydown', (e) => {
  if (13 == e.keyCode && fat.value != 0) {
    calculatorFat()
  }
})


$('.dinheiro').mask('#.##0,00', {reverse: true});
  