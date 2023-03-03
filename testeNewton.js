import { df, f } from './resolveFuncAndDer.mjs';

function newton(f, df, x0, tol=10**-4, max=100){
  var x = x0;
  for (var i=0; i<max; i++) {

    var fx = f(x);

    console.log(`iteracao ${i+1} | raiz - ${fx} | metodo - ${x}`)

    if(Math.abs(fx) < tol) {
      console.log(`encontrada na funcao ${x} ✅`)
      return x;
    }

    var dfx = df(x)
    if (dfx == 0) console.log("Derivada nula. Tentativa de divisão por zero.");
      x = x -fx / dfx;
  }
}

var x0 = 0.5
newton(f, df, x0);
