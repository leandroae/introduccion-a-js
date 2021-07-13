//TAREA "A": crear un formulario donde un usuario pueda ingresar su salario anual.
//cuando el usuario haga click en el botón "calcular", mostrar el salario mensual
// en una caja de texto deshabilitada. --> <input type="text" disabled id="salario-mensual"/>

const calcularSalarioMensual = function (salarioAnual) {
    return salarioAnual / 12;
}

document.querySelector("#calcular-salario-mensual").onclick = function(){
    const $salarioAnual = Number(document.querySelector("#salario-anual").value);
    const $salarioMensual = document.querySelector("#salario-mensual");
    $salarioMensual.value = calcularSalarioMensual($salarioAnual);
    return false;
}
