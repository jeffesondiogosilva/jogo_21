

function tocar_musica() {
    const song = new Audio('pf-wall.mp3');
    song.play();

}


function parar_dado(){
        
    const numeros = [1,2,3,4,5,6];
    const numero = Math.floor(Math.random() * numeros.length + 1);
    
    let res_dado = document.getElementById('res-dado');
    res_dado.innerHTML = numero;
    

    const audio = new Audio('dice.mp3');
    audio.play();

}

const btn_dado = document.getElementById('btn-dado');
btn_dado.addEventListener('click', parar_dado);






const botao = document.querySelector('#btn-fetch');
const carta = document.querySelector('#content');
let pedidos = 0;

botao.addEventListener('click', (e) => {
    // console.log(pedidos++)
    pedidos++;
    if(pedidos == document.getElementById('res-dado').innerHTML){
        document.getElementById('res-dado').innerHTML = 'Passou a vez'
    }
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=2`, options)
    .then(response => {response.json()
        .then( data => carta.innerHTML = `<img id="carta" src="${data.cards[0].image}"> `)
            
            
    })
    .catch(err => console.log('Deu erro:'+err.message));

    const audio = new Audio('ES_Pen Click In - SFX Producer.mp3');
    audio.play();
    window.location.href = '#btn-fetch';
    
})
    var c1 = null;
    var c2 = null;
    var c3 = null;

    function pegar_carta(){
        console.log('pegou');
        if(c1 == null) {
            const carta1 = document.querySelector('#carta1');
            carta1.innerHTML = `<p class="mao">${carta.innerHTML}</p>`
            console.log('c1'+carta1.innerHTML);
            c1 = carta1.innerHTML;
            const audio = new Audio('interface-124464.mp3');
            audio.play();
            window.location.href = '#carta1'

        } else if (c1 != null && c2 == null)  {

            const carta2 = document.querySelector('#carta2');
            carta2.innerHTML = `<p class="mao" ;>${carta.innerHTML}</p>`
            console.log('c2'+carta2.innerHTML);
            c2 = carta2.innerHTML;
            const audio = new Audio('interface-124464.mp3');
            audio.play();
            window.location.href = '#carta2';


        } else if (c2 != null && c3 == null)  {

            const carta3 = document.querySelector('#carta3');
            carta3.innerHTML = `<p class="mao";>${carta.innerHTML}</p>`
            console.log('c3'+carta3.innerHTML);
            c3 = carta3.innerHTML;
            const audio = new Audio('interface-124464.mp3');
            audio.play();
            const song = new Audio('idea-34284.mp3');
            song.play();

            const msgm = document.querySelector('#msgm');
            msgm.innerHTML =  '<p id="parabens"> PARABÉNS!!! </p>  <img src="https://img1.picmix.com/output/stamp/normal/5/5/7/8/1098755_1a3d8.gif">'
            window.location.href = '#msgm';


        }
    }
    


    
    


