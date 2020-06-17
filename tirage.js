    // num carte

    function tircarte(){
        carte = Math.floor(Math.random()*13)+1
    if (carte == 1){
        return 11; //valeur de l'as
    }if (carte > 10){
        return 10; //valeur valet, dame, roi
    }
    return carte;
    }

    var counter = 0;
    
    // nouvelle carte

    function tirnewcarte(){
        counter +=1;

        var d = document.getElementById("hum").innerHTML = "";
        var e = document.getElementById("comp").innerHTML = "";
        var f = document.getElementById("count").innerHTML = counter;
        var a = parseInt(document.getElementById("dealer").value = 0);
        var res = document.getElementById("dealer");
        var aa = parseInt(document.getElementById("moi").value = 0);
        var resa = document.getElementById("moi");
        resa.value = a + tircarte("moi");
        res.value = aa + tircarte("dealer");
    }


    // ordinateur (moins de 17 pts)

    function computer(){
        var a = parseInt(document.getElementById("dealer").value);
        var res = document.getElementById("dealer");
        while(res.value < 17){
            var b = parseInt(document.getElementById("dealer").value);
            res.value = b + tircarte("dealer");
        }
    }

    //humain (plus de 21 pts)

    function humain(){
        var a = parseInt(document.getElementById("moi").value);
        var res = document.getElementById("moi");
        res.value = a + tircarte("moi");
        if (res.value >21){
            whowonc += 1;
            document.getElementById("compw").innerHTML = whowonc;
            var a = document.getElementById("comp").innerHTML = " Gagnant";
        }
    }

    //variable de compteur

    var whowonh = 0; //humain
    var whowonc = 0; //ordi

    // qui gagne

    function winner(){

    var a = parseInt(document.getElementById("moi").value);
    var b = parseInt(document.getElementById("dealer").value);

    if (b > 21){
        whowonh += 1;
        document.getElementById("humw").innerHTML = whowonh;
        var winner = document.getElementById("hum").innerHTML = " Gagnant"; //affichage gagant humain
        return;
    }if ( a == b){
        var a = document.getElementById("hum").innerHTML = "égalité";
        var b = document.getElementById("comp").innerHTML = "égalité";   
    }if (a > b){
        whowonh += 1;
        document.getElementById("humw").innerHTML = whowonh;
        var a = document.getElementById("hum").innerHTML = "Gagnant"; // affichage gagnant humain
    }if (b > a ){
        whowonc += 1;
        document.getElementById("compw").innerHTML = whowonc;
        var b = document.getElementById("comp").innerHTML = " Gagnant"; // affichage gagant ordi
    }
    } 