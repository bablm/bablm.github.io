tabelle=document.getElementById('GoLVorschau');
let table="";
for(let i=0; i<8; i++){
    table += '<tr>';
        for (j = 0; j < 8; j++) {
            
            if(Math.random()>0.6)
            table += '<th  style="background-color: blue "></th>';
            else table += '<th  style="background-color: grey"></th>';
        }
    }
        tabelle.innerHTML=table;
    
    
        brett=document.getElementById('schachVorschau');
        let table1="";
        for(let i=0; i<8; i++){
            table1 += '<tr>';
                for (j = 0; j < 8; j++) {
                    
                    if((i+j)%2==0)
                    table1 += '<th  style="background-color: black "></th>';
                    else table1 += '<th  style="background-color: grey"></th>';
                }
            }
                brett.innerHTML=table1;
    
