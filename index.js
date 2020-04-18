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

btnCalcular.addEventListener('click', () => {

    fat.value = parseFloat(fat.value.replace(',', '') && fat.value.replace('.', ''))
    let fat5 = Math.round( fat.value * 0.06 + fat.value * 0.09 )
    let fat10 = Math.round( fat.value * 0.06 + fat.value * 0.09 )
    let fat15 = Math.round( fat.value * 0.06 + fat.value * 0.1047 )
    let fat20 = Math.round( fat.value * 0.112 + fat.value * 0.073 + 780 )
    let fat21 = Math.round( fat.value * 0.1433 + fat.value * 0.015 + 671 )
    let fatPF = Math.round( fat.value * 0.275 + fat.value * 0.2 + 79.4 )

    const curFor = (n) => n.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.");
    
    if (fat.value <= 5000) {
        resultPJ.innerHTML = `Pessoa Jurídica [ R$ ${curFor(fat5)} ]`
    }

    if (fat.value > 5000 && fat.value <= 10000) {
        resultPJ.innerHTML = `Pessoa Jurídica [ R$ ${curFor(fat10)} ]`
    }

    if (fat.value > 10000 && fat.value <= 15000) {
        resultPJ.innerHTML = `Pessoa Jurídica [ R$ ${curFor(fat15)} ]`
    }

    if (fat.value > 15000 && fat.value <= 20000) {
        resultPJ.innerHTML = `Pessoa Jurídica [ R$ ${curFor(fat20)} ]`
    }

    if (fat.value > 20000) {
        resultPJ.innerHTML = `Pessoa Jurídica [ R$ ${curFor(fat21)} ]`
    }

    

      resultPF.innerHTML = `PESSOA FÍSICA [ R$ ${curFor(fatPF)} ]`
    
  });

  $('.dinheiro').mask('#.##0,00', {reverse: true});
  