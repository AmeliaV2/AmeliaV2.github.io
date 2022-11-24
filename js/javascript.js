
function cambiarSelect(){
    var opcion=document.getElementById('select');
    var valor=opcion.selectedIndex;
    console.log(valor);
    
    if(valor==1){ 
        var guate=document.getElementById("ejercicio1").style.display="block";
    }else { var guate=document.getElementById("ejercicio1").style.display="none";}
    if(valor==2){
            var india=document.getElementById("ejercicio2").style.display="block"; 
        }else {var india=document.getElementById("ejercicio2").style.display="none"; } 
    if(valor==3){
                var paises=document.getElementById("ejercicio3").style.display="block";   
        }else {var paises=document.getElementById("ejercicio3").style.display="none";}
    if(valor==4){
            var suecia=document.getElementById("ejercicio4").style.display="block";  
        }else {var suecia=document.getElementById("ejercicio4").style.display="none"; }
     if(valor==5){
            var suiza=document.getElementById("ejercicio5").style.display="block";  
        }else{var suiza=document.getElementById("ejercicio5").style.display="none"; }
    
    

}

