leerNumero='';
numero=0;
total=0;

leerNumero = prompt('Ingrese el primer numero');
console.log('Los numeros sumados fueron');
while(leerNumero !='0' && leerNumero!=null ){
    if(leerNumero == '' || leerNumero<='z' && leerNumero>='a'){
        alert('Ingrese un número, Por favor');
        leerNumero = prompt('Ingrese el primer numero');
    }else{
        numero = parseInt(leerNumero);
        console.log(numero)
        total = total + numero;
        leerNumero = prompt('Siga sumando o aprete 0 para el resultado');
    }
}
if(leerNumero==undefined){
    console.log('Se cancelo la suma... :(')
    alert('Se canceló la suma... :(')
}else{
    console.log('El total es: ', total)
    alert('La suma total a pagar es: ' + total)

}