const faturamento = document.querySelector('.fat-mensal');
const btnCalcular = document.querySelector('.btn-calcular');
const salarioSocio = document.querySelector('.salario-socio');
const tipoEmpresa = document.querySelector('.tipo-empresa');
const result = document.querySelector('.result');

// let antes = faturamento * 0.175
// let depois = faturamento * 0.095

btnCalcular.addEventListener('click', () => {
    if (tipoEmpresa.value === 'ME') {
    let fat = parseFloat(faturamento.value * 0.175 - faturamento.value * 0.095);
    result.innerHTML = '[ R$ ' + Math.round(fat) + ',00 ]'
    }
});


