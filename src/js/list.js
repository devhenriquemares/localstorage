//                  MUDA PAGINA VAZIA OU PREENCHIDA
const listEmpty = document.querySelector('#empty');
const listFilled = document.querySelector('#filled');

if(!localStorage.getItem('haveProd') || parseInt(localStorage.getItem('haveProd')) === 0)
{
    if(listEmpty && listFilled)
    {
        listEmpty.classList.remove('hidden');
        listFilled.classList.add('hidden');
    }
}
else 
{
    if(listEmpty && listFilled)
    {
        listEmpty.classList.add('hidden');
        listFilled.classList.remove('hidden');
    }
}


//                  CRIAÇÃO DE PRODUTOS EM LIST

//                      CORPO
let prodDiv = document.getElementById('products');
let novoProd = document.createElement('section');
let pName = document.createElement('p');
let pQuant = document.createElement('p');
let pCod = document.createElement('p');
let novoDescButton = document.createElement('button');
let novaDesc = document.createElement('section');
let hr = document.createElement('hr');

//                      ATRIBUIÇOES
novoProd.setAttribute('id', 'prod');
pName.setAttribute('id', 'name-prod');
pQuant.setAttribute('id', 'quant-prod');
pCod.setAttribute('id', 'cod-prod');
novoDescButton.setAttribute('id', 'desc-prod');
novaDesc.setAttribute('id', 'description');
novaDesc.classList.add('hidden');

//                      TEXTOS
pName.innerHTML = 'Nome do produto';
pQuant.innerHTML = 'Quantidade: X';
pCod.innerHTML = 'Código: X';
novoDescButton.innerHTML = 'Descrição do produto';

//                      ENCORPORAR
if(prodDiv && novoProd)
{
    novoProd.appendChild(pName);
    novoProd.appendChild(pQuant);
    novoProd.appendChild(pCod);
    novoProd.appendChild(novoDescButton);
    prodDiv.appendChild(novoProd);
    prodDiv.appendChild(novaDesc);
    prodDiv.appendChild(hr);
}

//                  LIST
const descButton = document.querySelector('#desc-prod');
const desc = document.querySelector('#description');
const nameProd = document.querySelector('#name-prod');
const cod = document.querySelector('#cod-prod');
const quant = document.querySelector('#quant-prod');

if(descButton && desc)
{
    descButton.addEventListener('click', function(){

        if(window.getComputedStyle(desc).animationName === 'descFadeIn')
        {
            desc.style.animation = "descFadeOut 1s ease-out";
            setTimeout(() =>{
                desc.classList.add('hidden');
            }, 1000);
        }
        else
        {   
            desc.classList.remove('hidden');
            desc.style.animation = "descFadeIn 1s ease-out";
        }
    })
}

if(nameProd && cod && desc && quant)
{
    nameProd.textContent = localStorage.getItem('nameProd');
    cod.textContent = 'Código:' + localStorage.getItem('codProd')
    quant.textContent = 'Quantidade: ' + localStorage.getItem('quantProd');
    desc.textContent = localStorage.getItem('descProd');
}

//                 MANAGER

//                  ARRAYS
const prodNames = [];

//prodNames.push(localStorage.getItem('nameProd'));



const save = document.querySelector('#submit');
let haveProd = document.querySelector('#haveProd');

if(localStorage.getItem('haveProd') && haveProd)
{
    haveProd.textContent = localStorage.getItem('haveProd');
}
else
{
    if(haveProd)
    {
        if(parseInt(haveProd.textContent) === 0)
        {
            localStorage.setItem('haveProd', parseInt(haveProd.textContent));
        }
    
        console.log(localStorage.getItem('haveProd'));
    }
}

if(save)
{   

    save.addEventListener('click', () =>{

        const nome = document.querySelector('#name').value;
        const codigo = document.querySelector('#cod').value;
        const description = document.querySelector('#desc').value;
        const quantidade = document.querySelector('#quant').value;

        if(nome != '' && quantidade != '' && cod != '' && description != '')
        {
            localStorage.setItem('nameProd', nome);
            localStorage.setItem('codProd', codigo);
            localStorage.setItem('quantProd', quantidade);
            localStorage.setItem('descProd', description);

            localStorage.setItem('haveProd', haveProd);
            localStorage.setItem('haveProd', parseInt(haveProd.textContent) + 1);
            haveProd.textContent = localStorage.getItem('haveProd');

        }
    })
}

prodNames[0] = localStorage.getItem('nameProd');

console.log(prodNames[0]);