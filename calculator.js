window.onload = function() {

  let fat = document.querySelector('.fat');
  let btnCalcular = document.querySelector('.btn-calcular');
  let resultPF = document.querySelector('.result-pf');
  let resultPJ = document.querySelector('.result-pj');
  let resultPJTotal = document.querySelector('.result-pj-total');
  
  const calculatorFat = () => {
    
    fat.value = parseFloat(fat.value.replace(',', '') && fat.value.replace('.', ''));
    let fatPJ = Math.round( fat.value * 0.1433 );
    let fatPF = Math.round( fat.value * 0.275 );
    
    const repChar = (n) => n.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.");
    
    if (fat.value < 5000) {
      alert('Insira um valor acima de R$5.000')
    }

    if (fat.value >= 5000) {
      resultPJ.innerHTML = `[ R$ ${repChar(fatPJ)} ]`
      resultPJTotal.innerHTML = `[ R$ ${repChar(fatPF - fatPJ)} ]`
      resultPF.innerHTML = `[ R$ ${repChar(fatPF)} ]`
    }
    
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
    let fatPJD = Math.round( fatD.value * 0.1433 );
    let fatPFD = Math.round( fatD.value * 0.275 );
    
    const repChar = (n) => n.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.");
    
    if (fatD.value < 5000) {
      alert('Insira um valor acima de R$5.000')
    }

    if (fatD.value >= 5000) {
      resultPJD.innerHTML = `[ R$ ${repChar(fatPJD)} ]`
      resultPJTotalD.innerHTML = `[ R$ ${repChar(fatPFD - fatPJD)} ]`
      resultPFD.innerHTML = `[ R$ ${repChar(fatPFD)} ]`
    } 
    
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
  
  