

function tocar_musica() {
    const song = new Audio('pf-wall.mp3');
    song.play();

}


function parar_dado(){
        
    const numeros = [];
    for(var i=0; i < 60; i++){
        numeros.push(i);
    }
    const numero = Math.floor(Math.random() * numeros.length + 1);
    
    let res_dado = document.getElementById('res-dado');
    res_dado.innerHTML = numero;
    

    const audio = new Audio('interface-124464.mp3');
    audio.play();

}

const btn_dado = document.getElementById('btn-dado');
btn_dado.addEventListener('click', parar_dado);






const botao = document.querySelector('#btn-fetch');
const carta = document.querySelector('#content');
var res = '';
var contador = 0;

botao.addEventListener('click', (e) => {
    
    contador++ ;
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    switch(contador) {
        case 1:
            fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=2`, options)
        .then(response => {response.json()
        .then( data => document.getElementById('carta1').innerHTML = `<img id="carta" src="${data.cards[0].image}"> `)
                        
        })
        .catch(err => console.log('Deu erro:'+err.message));

        break;

        case 2:
            fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=2`, options)
        .then(response => {response.json()
        .then( data => document.getElementById('carta2').innerHTML = `<img id="carta" src="${data.cards[0].image}"> `)
                        
        })
        .catch(err => console.log('Deu erro:'+err.message));

        break;

        case 3:
            fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=2`, options)
        .then(response => {response.json()
        .then( data => document.getElementById('carta3').innerHTML = `<img id="carta" src="${data.cards[0].image}"> `)
                        
        })
        .catch(err => console.log('Deu erro:'+err.message));

        break;

        case 4:
            fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=2`, options)
        .then(response => {response.json()
        .then( data => document.getElementById('carta4').innerHTML = `<img id="carta" src="${data.cards[0].image}"> `)
                        
        })
        .catch(err => console.log('Deu erro:'+err.message));

        break;

        case 5:
            fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=2`, options)
        .then(response => {response.json()
        .then( data => document.getElementById('carta5').innerHTML = `<img id="carta" src="${data.cards[0].image}"> `)
                        
        })
        .catch(err => console.log('Deu erro:'+err.message));

        break;
        case 6:
            fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=2`, options)
        .then(response => {response.json()
        .then( data => document.getElementById('carta6').innerHTML = `<img id="carta" src="${data.cards[0].image}"> `)
                        
        })
        .catch(err => console.log('Deu erro:'+err.message));

        break;
    }
        
     
    

    const audio = new Audio('ES_Pen Click In - SFX Producer.mp3');
    audio.play();
    window.location.href = '#btn-fetch';
    
})
   
    
function recomecar(){
    
    const carta1 = document.getElementById('carta1');
    const carta2 = document.getElementById('carta2');
    const carta3 = document.getElementById('carta3');
    const carta4 = document.getElementById('carta4');
    const carta5 = document.getElementById('carta5');
    const carta6 = document.getElementById('carta6');

    carta1.innerHTML = '';
    carta2.innerHTML = '';
    carta3.innerHTML = '';
    carta4.innerHTML = '';
    carta5.innerHTML = '';
    carta6.innerHTML = '';

    const audio = new Audio('pop-39222.mp3');
    audio.play();
}

const btn_recom = document.getElementById('btn-recomecar');

btn_recom.addEventListener('click', recomecar)
    
    


