

var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','racoon'];
var arreglot = [];
var dom1, dom2, dom3;
var outList="";

for( var i=0; i < pronoun.length; i++){

    for (var j=0; j < adj.length; j++){

        for( var k=0; k< noun.length; k++){

            dom1 = pronoun[i]+adj[j]+noun[k]+"."+"com";
            arreglot.push(dom1);
        }
    }
}

for( var i=0; i < pronoun.length; i++){

    for (var j=0; j < noun.length; j++){

        for( var k=0; k< adj.length; k++){

            dom1 = pronoun[i]+noun[j]+adj[k]+"."+"com";
            arreglot.push(dom1);
        }
    }
}


for( var i=0; i < adj.length; i++){

    for (var j=0; j < pronoun.length; j++){

        for( var k=0; k< noun.length; k++){

            dom1 = adj[i]+pronoun[j]+noun[k]+"."+"com";
            arreglot.push(dom1);
        }
    }

}

for( var i=0; i < adj.length; i++){

    for (var j=0; j < noun.length; j++){

        for( var k=0; k< pronoun.length; k++){

            dom1 = adj[i]+noun[j]+pronoun[k]+"."+"com";
            arreglot.push(dom1);
        }
    }

}

for( var i=0; i < noun.length; i++){

    for (var j=0; j < pronoun.length; j++){

        for( var k=0; k< adj.length; k++){

            dom1 = noun[i]+pronoun[j]+adj[k]+"."+"com";
            arreglot.push(dom1);
        }
    }

}

for( var i=0; i < noun.length; i++){

    for (var j=0; j < adj.length; j++){

        for( var k=0; k< pronoun.length; k++){

            dom1 = noun[i]+adj[j]+pronoun[k]+"."+"com";
            arreglot.push(dom1);
        }
    }

}

for(var i =0;  i<arreglot.length; i++){

outList +=  "<li>"+arreglot[i]+"</li>";

}


//console.log(outList);

window.onload = function() {
       document.getElementById("list1").innerHTML = outList;
}