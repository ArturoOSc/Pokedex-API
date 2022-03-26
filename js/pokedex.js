const fetchPokemon = () =>{
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if(res.status != "200"){
            console.log(res);
            pokeImage("img/60IG.gif");
        }
        else{
            return res.json();
        }
        
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        console.log(pokeImg);
        pokeImage(pokeImg);
       
    })

    fetch(url).then((res) => {
        if(res.status != "200"){
            pokeStats("Not-found")
        }
        else{
            return res.json();
        }
        
    }).then((data) => {
        let pokeStat = data.stats[0].base_stat;
        console.log(pokeStat);
        pokeStats(pokeStat);
       
    })
    
    fetch(url).then((res) => {
        if(res.status != "200"){
            pokeNumber("Not-found")
        }
        else{
            return res.json();
        }
        
    }).then((data) => {
        let pokeNum = data.id;
        console.log(pokeNum);
        pokeNumber(pokeNum);
       
    })

    fetch(url).then((res) => {
        if(res.status != "200"){
            pokeNam("Not-found")
        }
        else{
            return res.json();
        }
        
    }).then((data) => {
        let pokeNa = data.name;
        console.log(pokeNa);
        pokeNam(pokeNa);
       
    })

    fetch(url).then((res) => {
        if(res.status != "200"){
            pokeType("Not-found")
        }
        else{
            return res.json();
        }
        
    }).then((data) => {
        let pokeTy = data.types[0].type.name;
        console.log(pokeTy);
        pokeType(pokeTy);
       
    })
    
    fetch(url).then((res) => {
        if(res.status != "200"){
            pokeMove("Not-found")
        }
        else{
            return res.json();
        }
        
    }).then((data) => {
        let pokeMo = data.moves[2].move.name;
        console.log(pokeMo);
        pokeMove(pokeMo);
       
    })
   
}


const pokeImage = (url) =>{
    const pokeImg =  document.getElementById("pokeImg");
    pokeImg.src = url;
}

const pokeStats = (url) =>{
    const pokeStat = document.getElementById("statPoke");
    pokeStat.innerText = url;
}

const pokeNumber = (url) =>{
    const pokeNum = document.getElementById("numberPoke");
    pokeNum.innerText = url;
}

const pokeNam = (url) =>{
    const pokeNa = document.getElementById("namePoke");
    pokeNa.innerText = url;
}

const pokeType = (url) => {
    const pokeTy = document.getElementById("typePoke");
    pokeTy.innerText = url;
}

const pokeMove = (url) => {
    const pokeMo = document.getElementById("movePoke");
    pokeMo.innerText = url;
}
