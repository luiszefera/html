
function activ1(){
let n= Number=(prompt("digite um numero"));
let n= Number=(prompt("digite os numeres inteiro "));


}







function activ5(){
    let n=Number(prompt("digite um valor"))
    let tabela = "";

for(let mult  = 1 ; mult <= 10; mult ++){
 tabela +="\n"+n+"X" +mult+"="+(n*mult);

}
alert(tabela)
}
function activ6(){
 let n = Number(prompt("digite um numero"));



for(let par = 1 ; par <= n; par++ )
 if( par % 2 == 0 ){
   pares += "\n" = par 
    alert(par) }
    
    
}
 function activ7(){
 let n = Number(prompt("digite um numero"));
 let passo = Number(prompt("digite o passo"));
 let i = 1;
 while(i <=n ){
   alert(i);
   i += passo;
 }
}
function activ8(){
    let n = Number(prompt("digite um numero"));



for(let i = 1 ; i <= n; i++ ){
 if( i % 2 != 0 ){
   i += "\n" = impar 
    alert(impares)
            }
    }
}
function activ9() {
let n1 = Number(prompt("digite um numero"));
let n2 = Number(prompt("digite um numero multiplo"));
if(n2 %n1 ==0){}
else{
alert(n2+"e multiplo"+n1)
}

}
 function activ10(){
    let n =(prompt("digite um numero"))
    let qtddivisores = 0;
    let ant = 1;


    while (ant <= n)
        if(n % ant ==0){
            qtddivisores ++;

        } 
        ant ++;
        
        if(qtddivisores == 2){
           alert(n + "primo")
        }

        else{
            alert(n + "nao e primpo")
                }

    




 }