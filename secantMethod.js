import { resolveFDeX } from './resolveFuncAndDer.mjs';


var xInicial = 1.5;
var xFinal = 1.7;

var stopPoint = 0.0001;
var numeroIteracoes = 0;

function secantMethod(inicial, final) {
   // console.log(((inicial * resolveFDeX(final)) - (final * resolveFDeX(inicial)))/(resolveFDeX(final) -(resolveFDeX(inicial))));

   return (((inicial * resolveFDeX(final)) - (final * resolveFDeX(inicial)))/(resolveFDeX(final) -(resolveFDeX(inicial))));
}


function resolveSecantMethod() {
   var auxVal1 = xInicial;
   var auxVal2 = xFinal;
   var auxFunc = resolveFDeX(xFinal);
   var resultadoMetodoSecante = secantMethod(auxVal1, auxVal2);
   var firstResultMethod = secantMethod(auxVal1, auxVal2);

   while(numeroIteracoes < 4) {

      if(Math.abs(auxFunc) < stopPoint) {
         console.log(auxFunc + " - ✅" + ` | iteração ${numeroIteracoes+1}`);
         //remover isso caso o valor das interacos casem fora da condicao
         
      } else{
         console.log(auxFunc + " - ❌" + ` | iteração ${numeroIteracoes+1}`);
      }

       
      if(numeroIteracoes == 0) {
         resultadoMetodoSecante = secantMethod(auxVal2, resultadoMetodoSecante);
      } else if(numeroIteracoes == 1){
         resultadoMetodoSecante = secantMethod(firstResultMethod, resultadoMetodoSecante);
      } else {
         resultadoMetodoSecante = secantMethod(firstResultMethod, resultadoMetodoSecante);
      }

      auxFunc = resolveFDeX(resultadoMetodoSecante);
      auxVal2 = resultadoMetodoSecante;
      numeroIteracoes++;
   }
}

resolveSecantMethod();