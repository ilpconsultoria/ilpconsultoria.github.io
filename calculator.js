window.onload = function() {

  let fat = document.querySelector('.fat');
  let btnCalcular = document.querySelector('.btn-calcular');
  let resultPF = document.querySelector('.result-pf');
  let resultPJ = document.querySelector('.result-pj');
  let resultPJTotal = document.querySelector('.result-pj-total');
  
  const calculatorFat = () => {
    
    fat.value = parseFloat(fat.value.replace(',', '') && fat.value.replace('.', ''));
    let fat05 = Math.round( fat.value * 0.06 + fat.value * 0.09 );
    let fat10 = Math.round( fat.value * 0.06 + fat.value * 0.09 );
    let fat15 = Math.round( fat.value * 0.06 + fat.value * 0.1047 );
    let fat20 = Math.round( fat.value * 0.112 + fat.value * 0.073 + 780 );
    let fat21 = Math.round( fat.value * 0.1433 + fat.value * 0.015 + 671 );
    let fatPF = Math.round( fat.value * 0.275 + fat.value * 0.2 + 79.4 );
    
    const repChar = (n) => n.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.");
    
    if (fat.value <= 5000) {
      resultPJ.innerHTML = `[ R$ ${repChar(fat05)} ]`
      resultPJTotal.innerHTML = `[ R$ ${repChar(fatPF - fat05)} ]`
    }
    
    if (fat.value > 5000 && fat.value <= 10000) {
      resultPJ.innerHTML = `[ R$ ${repChar(fat10)} ]`
      resultPJTotal.innerHTML = `[ R$ ${repChar(fatPF - fat10)} ]`
    }
    
    if (fat.value > 10000 && fat.value <= 15000) {
      resultPJ.innerHTML = `[ R$ ${repChar(fat15)} ]`
      resultPJTotal.innerHTML = `[ R$ ${repChar(fatPF - fat15)} ]`
    }
    
    if (fat.value > 15000 && fat.value <= 20000) {
      resultPJ.innerHTML = `[ R$ ${repChar(fat20)} ]`
      resultPJTotal.innerHTML = `[ R$ ${repChar(fatPF - fat20)} ]`
    }
    
    if (fat.value > 20000) {
      resultPJ.innerHTML = `[ R$ ${repChar(fat21)} ]`
      resultPJTotal.innerHTML = `[ R$ ${repChar(fatPF - fat21)} ]`
    }
    
    resultPF.innerHTML = `[ R$ ${repChar(fatPF)} ]`
    
    fat.value = null;
    
  };
  
  btnCalcular.addEventListener('click', calculatorFat);
  document.addEventListener('keydown', (e) => {
    if (13 == e.keyCode && fat.value != 0) {
      calculatorFat()
    }
  })

  let fatD = document.querySelector('.fat-d');
  let btnCalcularD = document.querySelector('.btn-calcular-d');
  let resultPFD = document.querySelector('.result-pf-d');
  let resultPJD = document.querySelector('.result-pj-d');
  let resultPJTotalD = document.querySelector('.result-pj-total-d');
  
  const calculatorFatD = () => {
    
    fatD.value = parseFloat(fatD.value.replace(',', '') && fatD.value.replace('.', ''));
    let fat05D = Math.round( fatD.value * 0.06 + fatD.value * 0.09 );
    let fat10D = Math.round( fatD.value * 0.06 + fatD.value * 0.09 );
    let fat15D = Math.round( fatD.value * 0.06 + fatD.value * 0.1047 );
    let fat20D = Math.round( fatD.value * 0.112 + fatD.value * 0.073 + 780 );
    let fat21D = Math.round( fatD.value * 0.1433 + fatD.value * 0.015 + 671 );
    let fatPFD = Math.round( fatD.value * 0.275 + fatD.value * 0.2 + 79.4 );
    
    const repChar = (n) => n.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.");
    
    if (fatD.value <= 5000) {
      resultPJD.innerHTML = `[ R$ ${repChar(fat05D)} ]`
      resultPJTotalD.innerHTML = `[ R$ ${repChar(fatPFD - fat05D)} ]`
    }
    
    if (fatD.value > 5000 && fatD.value <= 10000) {
      resultPJD.innerHTML = `[ R$ ${repChar(fat10D)} ]`
      resultPJTotalD.innerHTML = `[ R$ ${repChar(fatPFD - fat10D)} ]`
    }
    
    if (fatD.value > 10000 && fatD.value <= 15000) {
      resultPJD.innerHTML = `[ R$ ${repChar(fat15D)} ]`
      resultPJTotalD.innerHTML = `[ R$ ${repChar(fatPFD - fat15D)} ]`
    }
    
    if (fatD.value > 15000 && fatD.value <= 20000) {
      resultPJD.innerHTML = `[ R$ ${repChar(fat20D)} ]`
      resultPJTotalD.innerHTML = `[ R$ ${repChar(fatPFD - fat20D)} ]`
    }
    
    if (fatD.value > 20000) {
      resultPJD.innerHTML = `[ R$ ${repChar(fat21D)} ]`
      resultPJTotalD.innerHTML = `[ R$ ${repChar(fatPFD - fat21D)} ]`
    }
    
    resultPFD.innerHTML = `[ R$ ${repChar(fatPFD)} ]`
    
    fatD.value = null;
    
  };
  
  btnCalcularD.addEventListener('click', calculatorFatD);
  document.addEventListener('keydown', (e) => {
    if (13 == e.keyCode && fatD.value != 0) {
      calculatorFatD()
    }
  })
 
  
  $('.dinheiro').mask('#.##0,00', {reverse: true});
  $('.dinheiro2').mask('#.##0,00', {reverse: true});

  }
  
  