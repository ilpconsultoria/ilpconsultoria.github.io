window.onload = function() {

  let fat = document.querySelector('.fat');
  let btnCalcular = document.querySelector('.btn-calcular');
  let resultPF = document.querySelector('.result-pf');
  let resultPJ = document.querySelector('.result-pj');
  let resultPJTotal = document.querySelector('.result-pj-total');
  
  const calculatorFat = () => {
    
    fat.value = parseFloat(fat.value.replace(',', '') && fat.value.replace('.', ''));
    let fat5 = Math.round( fat.value * 0.06 + fat.value * 0.09 );
    let fat10 = Math.round( fat.value * 0.06 + fat.value * 0.09 );
    let fat15 = Math.round( fat.value * 0.06 + fat.value * 0.1047 );
    let fat20 = Math.round( fat.value * 0.112 + fat.value * 0.073 + 780 );
    let fat21 = Math.round( fat.value * 0.1433 + fat.value * 0.015 + 671 );
    let fatPF = Math.round( fat.value * 0.275 + fat.value * 0.2 + 79.4 );
    
    const repChar = (n) => n.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.");
    
    if (fat.value <= 5000) {
      resultPJ.innerHTML = `[ R$ ${repChar(fat5)} ]`
      resultPJTotal.innerHTML = `[ R$ ${repChar(fatPF - fat5)} ]`
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
  
  $('.dinheiro').mask('#.##0,00', {reverse: true});
  
  }
  
  