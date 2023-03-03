import { f } from './resolveFuncAndDer.mjs';

function secante(f, x0, x1, tol=10**-4, maxiter=100) {
    let fx0 = f(x0);
    let fx1 = f(x1);
    let x = x1;
    for (let i = 0; i < maxiter; i++) {
        let dfx = (fx1 - fx0) / (x1 - x0);
        x = x1 - fx1 / dfx;

        console.log(`iteracao ${i+1} | raiz - ${fx1} | metodo - ${x}`)
        if (Math.abs(x-x1) < tol) {
            console.log(`encontrada na funcao ${x} ✅`)
            return x;
        }
               
        x0 = x1;
        fx0 = fx1;
        x1 = x;
        fx1 = f(x1);
        
    }
    throw new Error("Número máximo de iterações excedido.");
}

var x0 = 0;
var x1 = 1;
console.log(secante(f, x0, x1));