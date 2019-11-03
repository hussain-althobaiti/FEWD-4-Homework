
function calculate(){
    var x;
    x=Number(document.getElementById("input").value);
    
    if(x%3==0 && x %5==0){
        console.log("Pling"+"Plang");
        x="Pling"+"Plang";

        }
        else if (x%3==0){
            console.log("Pling");
            x="Pling";
            
        }
        else if(x%5==0){
            console.log("Plang");
            x="Plang";
        }
        else if(x%7==0){
            console.log("Plong");
            x="Plong";
        }
        document.getElementById("output").value= x;
    }
    
    

