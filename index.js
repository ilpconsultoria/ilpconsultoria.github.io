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
const btnCalcular = document.querySelector('.btn-calcular');
const resultPF = document.querySelector('.result-pf');
const resultPJ = document.querySelector('.result-pj');

btnCalcular.addEventListener('click', () => {
    fat.value = parseFloat(fat.value.replace(',', '') && fat.value.replace('.', ''))
    let fat5 = parseFloat( fat.value * 0.06 + fat.value * 0.09 )
    let fat10 = parseFloat( fat.value * 0.06 + fat.value * 0.09 )
    let fat15 = parseFloat( fat.value * 0.06 + fat.value * 0.1047 )
    let fat20 = parseFloat( fat.value * 0.112 + fat.value * 0.073 + 780 )
    let fat21 = parseFloat( fat.value * 0.1433 + fat.value * 0.015 + 671 )
    let fatPF = parseFloat( fat.value * 0.275 + fat.value * 0.2 + 79.4 )

    if (fat.value == 0) {
        resultPF.innerHTML = `Pessoa Física [ R$ 0,00 ]`
    }
    
    if (fat.value <= 5000) {
        resultPJ.innerHTML = `Pessoa Jurídica [ R$ ${Math.round(fat5)},00 ]`
    }

    if (fat.value > 5000 && fat.value <= 10000) {
        resultPJ.innerHTML = `Pessoa Jurídica [ R$ ${Math.round(fat10)},00 ]`
    }

    if (fat.value > 10000 && fat.value <= 15000) {
        resultPJ.innerHTML = `Pessoa Jurídica [ R$ ${Math.round(fat15)},00 ]`
    }

    if (fat.value > 15000 && fat.value <= 20000) {
        resultPJ.innerHTML = `Pessoa Jurídica [ R$ ${Math.round(fat20)},00 ]`
    }

    if (fat.value > 20000) {
        resultPJ.innerHTML = `Pessoa Jurídica [ R$ ${Math.round(fat21)},00 ]`
    }

    resultPF.innerHTML = `Pessoa Física [ R$ ${Math.round(fatPF)},00 ]`

});

$('.dinheiro').mask('#.##0,00', {reverse: true});
