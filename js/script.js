var produtos = [
    {
        imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfoZtCnNC6hfeO4bSBfG7MryO0v4X-KXDKcw&s",
        título:"Nike air Max 10",
        descricao:"Eleve seu estilo com o clássico reinventado. Conforto supremo encontra design inovador",
        preco:" R$ 899,00",
    },
    {
        imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfoZtCnNC6hfeO4bSBfG7MryO0v4X-KXDKcw&s",
        título:"Nike air Max 20",
        descricao:"Eleve seu estilo com o clássico reinventado. Conforto supremo encontra design inovador",
        preco:" R$ 899,00",
    },
    {
        imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfoZtCnNC6hfeO4bSBfG7MryO0v4X-KXDKcw&s",
        título:"Nike air Max 30",
        descricao:"Eleve seu estilo com o clássico reinventado. Conforto supremo encontra design inovador",
        preco:" R$ 899,00",
    },
    {
        imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfoZtCnNC6hfeO4bSBfG7MryO0v4X-KXDKcw&s",
        título:"Nike air Max 40",
        descricao:"Eleve seu estilo com o clássico reinventado. Conforto supremo encontra design inovador",
        preco:" R$ 899,00",
    },
    {
        imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfoZtCnNC6hfeO4bSBfG7MryO0v4X-KXDKcw&s",
        título:"Nike air Max 50",
        descricao:"Eleve seu estilo com o clássico reinventado. Conforto supremo encontra design inovador",
        preco:" R$ 899,00",
    },
]

var divProdutos = document.querySelector(".produtos")

for(var i = 0; i < produtos.length;i++) {
    divProdutos.innerHTML += `<div class="card">
                <img src="${produtos[i].imagem}" alt="#">
                <div class="content">
                    <div class="title">
                        <h2>${produtos[i].título}</h2>
                        <p>${produtos[i].descricao}</p>
                    </div>
                    <div class="btns">
                        <p>${produtos[i].preco}</p>
                        <button>Comprar agora</button>
                    </div> 
                 <div class="freight">
                        <i class="fa-solid fa-truck-fast"></i>
                        <p>Frete grátis para todo o Brasil</p> 
              </div>
                </div>  
            </div>`
    
}