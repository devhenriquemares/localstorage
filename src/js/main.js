const index = document.querySelector('#initial-content');
const list = document.querySelector('#products');
const manager = document.querySelector('.add-product');

if(index)
{
    localStorage.clear();

    quantProducts = 0;
    localStorage.setItem('productsQuant', quantProducts);

    let nameProd = [];
    let codProd = [];
    let quantProd = [];
    let descProd = [];
    localStorage.setItem('nameProdArray', JSON.stringify(nameProd));
    localStorage.setItem('codProdArray', JSON.stringify(codProd));
    localStorage.setItem('quantProdArray', JSON.stringify(quantProd));
    localStorage.setItem('descProdArray', JSON.stringify(descProd));
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

    const nameProduct = document.querySelectorAll('#name-prod');
    const quantProduct = document.querySelectorAll('#quant-prod');
    const codProduct = document.querySelectorAll('#cod-prod');
    const descProduct = document.querySelectorAll('#description');

    nameProduct.forEach((name, indice) => {
        name.textContent = JSON.parse(localStorage.getItem('nameProdArray'))[indice];
    })

    quantProduct.forEach((quant, indice) => {
        quant.textContent = 'Quantidade: '+ JSON.parse(localStorage.getItem('quantProdArray'))[indice];
    })

    codProduct.forEach((cod, indice) => {
        cod.textContent = 'Código: '+ JSON.parse(localStorage.getItem('codProdArray'))[indice];
    })

    descProduct.forEach((desc, indice) => {
        desc.textContent = JSON.parse(localStorage.getItem('descProdArray'))[indice];
    })

//                      exclue produtos caso esteja vazio
    const prod = document.querySelectorAll('#prod');
    const cod = document.querySelectorAll('#cod-prod');
    const desc = document.querySelectorAll('#description');

    cod.forEach((codProd, indice) => {
        if(codProd.textContent === 'Código: undefined')
        {
            prod[indice].remove();
            desc[indice].remove();
        }
    })
}

if(manager)
{
//                      adicionar produtos
    const addProdButton = document.querySelector('#submit');

    addProdButton.addEventListener('click', () =>{
        let quantProducts = parseInt(localStorage.getItem('productsQuant'));

        const nameProd = document.querySelector('#name').value;
        const codProd = document.querySelector('#cod').value;
        const quantProd = document.querySelector('#quant').value;
        const descProd = document.querySelector('#desc').value;

        //                      verifica se o produto ja existe
        const namesArray = JSON.parse(localStorage.getItem('nameProdArray'));
        const codsArray = JSON.parse(localStorage.getItem('codProdArray'));
        
        for(let i = 0; i <= quantProducts; i++)
        {
            if(nameProd === namesArray[i])
            {
                alert('Este produto já existe...');
                break;
            }
            else if(codProd === codsArray[i])
            {
                alert('O código deste produto já está sendo usado...')
                break;
            }
            else if(i === quantProducts)
            {
                //                          adiciona o produto
                if(nameProd != '' && codProd != '' && quantProd != '' && descProd != '')
                {
                    localStorage.setItem('productsQuant', quantProducts +1);
        
                    localStorage.setItem('nameProd', nameProd);
                    localStorage.setItem('codProd', codProd);
                    localStorage.setItem('quantProd', quantProd);
                    localStorage.setItem('descProd', descProd);
        
                //                          arrays de nomes etc...
                    let nameProdArray = JSON.parse(localStorage.getItem('nameProdArray'));
                    let codProdArray = JSON.parse(localStorage.getItem('codProdArray'));
                    let quantProdArray = JSON.parse(localStorage.getItem('quantProdArray'));
                    let descProdArray = JSON.parse(localStorage.getItem('descProdArray'));
        
                    nameProdArray.push(localStorage.getItem('nameProd'));
                    codProdArray.push(localStorage.getItem('codProd'));
                    quantProdArray.push(localStorage.getItem('quantProd'));
                    descProdArray.push(localStorage.getItem('descProd'));
        
                    localStorage.setItem('nameProdArray', JSON.stringify(nameProdArray));
                    localStorage.setItem('codProdArray', JSON.stringify(codProdArray));
                    localStorage.setItem('quantProdArray', JSON.stringify(quantProdArray));
                    localStorage.setItem('descProdArray', JSON.stringify(descProdArray));

                    break;
                }
            }
        }
    });

//                           deletar produtos
    const deleteProdButton = document.querySelector('#delete');

    deleteProdButton.addEventListener('click', () =>{
        const codProdDel = document.querySelector('#delete-cod').value;

        let nameArray = JSON.parse(localStorage.getItem('nameProdArray'));
        let quantArray = JSON.parse(localStorage.getItem('quantProdArray'));
        let codArray = JSON.parse(localStorage.getItem('codProdArray'));
        let descArray = JSON.parse(localStorage.getItem('descProdArray'));

        const quantProducts = parseInt(localStorage.getItem('productsQuant'));

        for(let i = 0; i <= codArray.length; i++)
        {
            if(codProdDel === codArray[i])
            {
                nameArray.splice(i, 1);
                quantArray.splice(i, 1);
                codArray.splice(i, 1);
                descArray.splice(i, 1);

                localStorage.setItem('nameProdArray', JSON.stringify(nameArray));
                localStorage.setItem('quantProdArray', JSON.stringify(quantArray));
                localStorage.setItem('codProdArray', JSON.stringify(codArray));
                localStorage.setItem('descProdArray', JSON.stringify(descArray));

                let quantProducts = parseInt(localStorage.getItem('productsQuant'));
                localStorage.setItem('productsQuant', quantProducts -1);
            }
            else if(i === quantProducts)
            {
                alert('Código inválido...');
            }
        }
    });

//                                  atualizar quantidade
    const updateButton = document.querySelector('#add-quant');

    updateButton.addEventListener('click', () => {
        const codUpdate = document.querySelector('#cod-update').value;
        const quantAdd = document.querySelector('#quant-add').value;
        const codsArray = JSON.parse(localStorage.getItem('codProdArray'));
        const quantArray = JSON.parse(localStorage.getItem('quantProdArray'));

        const quantProducts = parseInt(localStorage.getItem('productsQuant'));

        for(let i = 0; i <= quantProducts; i++)
        {
            if(codUpdate === codsArray[i])
            {
                quantArray[i] = parseInt(quantArray[i]) + parseInt(quantAdd);
                localStorage.setItem('quantProdArray', JSON.stringify(quantArray));
                break;
            }
            else if(i === quantProducts)
            {
                alert('Código inválido');
                break;
            }
        }
    })
}