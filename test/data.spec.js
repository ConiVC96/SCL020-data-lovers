
import { listAZ } from '../src/data.js';

describe('orderAZ', () => {

  it('is a function', () => {
    const testData = [ {"title": "Grave of the Fireflies"},{"title": "Castle in the Sky"}];
    const orderData = listAZ(testData);
console.log(orderData)
   /* expect(typeof example).toBe('function');*/
  });


});


/* 
1-Verificar la correctitud de nuesrtro código
2-Sirven como documentación del código
3-Nos ayuda con la modularización
Test unitario (ej una función que cifre)


*/