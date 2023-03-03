import { resolveDerivadaFDeX, resolveFDeX } from './resolveFuncAndDer.mjs';

var xInicial = 0;
var xFinal = 1;

// usado no metodo de newton
var chuteInicial = (xInicial + xFinal) / 2;

//usado como ponto de parada em todos metodos
var stopPoint = 0.0001;

//numero de iteracoes
var numeroIteracoes = 0;

//raizes que serão utilizadas inicalmente nosmétodos

var raizInicial = (xInicial + xFinal) / 2;
var raizDeNewton = chuteInicial;


function newtonMethod(raiz) {
  return raiz - resolveFDeX(raiz) / resolveDerivadaFDeX(raiz);
}

function resolveNewtonMethod() {
  var auxVal = raizDeNewton;
  var auxFunc = resolveFDeX(auxVal);
  var resultadoMetodoNewton = newtonMethod(auxVal);

  //numero de iteracoes
  while(numeroIteracoes < 4) {
   
   if(Math.abs(auxFunc) < stopPoint) {
      console.log(resultadoMetodoNewton + " - ✅" + ` | iteração ${numeroIteracoes+1}`);
      //remover isso caso o valor das interacos casem fora da condicao
      break;
   } else{
      console.log(resultadoMetodoNewton + " - ❌" + ` | iteração ${numeroIteracoes+1}`);
   }

   auxFunc = resolveFDeX(resultadoMetodoNewton); 
   resultadoMetodoNewton = newtonMethod(resultadoMetodoNewton);
 
   numeroIteracoes++;
  }
}


resolveNewtonMethod();