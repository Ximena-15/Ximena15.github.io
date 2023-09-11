const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');

function cualEsMayor(peso) {
    if (peso <= 0) {
      return "El peso ingresado no es válido. Debe ser mayor que 0.";
    } else if (peso <= 10) {
      return "Hidratación Basal: " + peso * 100 + " cc/h";
    } else if (peso <= 20) {
      return "Hidratación Basal: " + (1000 + (peso - 10) * 50) + " cc/h";
    } else {
      return "Hidratación Basal: " + (1000 + 500 + (peso - 20) * 20) + " cc/h";
    }
  }
  
  console.log(cualEsMayor(1)); 
  console.log(cualEsMayor(15)); 
  console.log(cualEsMayor(30)); 
  sd

CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value

    if (DATO > 0){
        ERROR.style.display = 'none'
        let flujo = calcFlujo(DATO);
        let mantenimiento = flujo*1.5;
        FLU.innerHTML = flujo + ' cc/hr';
        MAN.innerHTML = 'm+m/2 ' + mantenimiento + ' cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
}) 