const index = document.querySelector('#initial-content');
const list = document.querySelector('#products');
const manager = document.querySelector('.add-product');

if(index)
{
    localStorage.clear();

    quantProducts = 0;
    localStorage.setItem('productsQuant', quantProducts);
}

if(list)
{
//                      adicionar quantidade de produtos
    
    function createProd(){
    //                      corpo do novo produto
        let prodDiv = document.querySelector('#products');
        let hr = document.createElement('hr');
        let newProd = document.createElement('section');
        let pNameProd = document.createElement('p');
        let pQuantProd = document.createElement('p');
        let pCodProd = document.createElement('p');
        let descButton = document.createElement('button');
        let newDescProd = document.createElement('section');

    //                      atribuições do novo corpo do produto
        newProd.setAttribute('id', 'prod');
        pNameProd.setAttribute('id', 'name-prod');
        pQuantProd.setAttribute('id', 'quant-prod');
        pCodProd.setAttribute('id', 'cod-prod');
        descButton.setAttribute('id', 'desc-prod');
        newDescProd.setAttribute('id', 'description');
        newDescProd.classList.add('hidden');

    //                      textos predefinidos
        pNameProd.innerHTML = 'Nome do produto';
        pQuantProd.innerHTML = 'Quantidade: X';
        pCodProd.innerHTML = 'Código: X';
        descButton.innerHTML = 'Descrição do produto';
        newDescProd.textContent = 'abc teste';

        newProd.appendChild(pNameProd);
        newProd.appendChild(pQuantProd);
        newProd.appendChild(pCodProd);
        newProd.appendChild(descButton);
        prodDiv.appendChild(hr)
        prodDiv.appendChild(newProd);
        prodDiv.appendChild(newDescProd);
    }

//                      criação de produtos automaticamente
    for(let i = 0; i < localStorage.getItem('productsQuant'); i++)
    {
        createProd();
    }

//                      aparece/esconde a descrição
    const descRevel = document.querySelectorAll('#desc-prod');
    const descProd = document.querySelectorAll('#description');

    descRevel.forEach((botao, indice) => {
        botao.addEventListener('click', () =>{
            const desc = descProd[indice];

            if(window.getComputedStyle(desc).animationName === "descFadeOut")
            {
                desc.classList.remove('hidden');
                desc.style.animation = "descFadeIn 1s ease-out";
            }
            else if(window.getComputedStyle(desc).animationName === "descFadeIn")
            {
                desc.style.animation = "descFadeOut 1s ease-out";
    
                setTimeout(()=>{
                    desc.classList.add('hidden');
                }, 1000);
            }
        })       
    });

//                      verifica se a lista esta vazia ou nao
    const emptyList = document.querySelector('#empty');
    const filledList = document.querySelector('#filled');

    let quantProducts = parseInt(localStorage.getItem('productsQuant'));

    if(quantProducts != 0)
    {
        emptyList.classList.add('hidden');
        filledList.classList.remove('hidden');
    }
    else if(quantProducts === 0)
    {
        filledList.classList.add('hidden');
        emptyList.classList.remove('hidden');
    }

//                      atribuição dos valores dos produtos dados no manager

    
}

if(manager)
{
    const addProdButton = document.querySelector('#submit');

    if(addProdButton)
    {
        addProdButton.addEventListener('click', () =>{
            let quantProducts = parseInt(localStorage.getItem('productsQuant'));

            const nameProd = document.querySelector('#name').value;
            const codProd = document.querySelector('#cod').value;
            const quantProd = document.querySelector('#quant').value;
            const descProd = document.querySelector('#desc').value;

            if(nameProd != '' && codProd != '' && quantProd != '' && descProd != '')
            {
                localStorage.setItem('productsQuant', quantProducts +1);

                localStorage.setItem('nameProd', nameProd);
                localStorage.setItem('codProd', codProd);
                localStorage.setItem('quantProd', quantProd);
                localStorage.setItem('descProd', descProd);
            }
        });
    }
}