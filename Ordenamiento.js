function ordenarArreglo() {
    const numeros = [5, 4, 8, 1, 3, 7, 9, 6, 2, 10];
 
    numeros.sort((a, b) => a - b);
    
    console.log("Arreglo ordenado:", numeros);
  }
  ordenarArreglo();
  