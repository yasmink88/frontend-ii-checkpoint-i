const botaoEnviar = document.getElementById('botaoEnviar');
let card = document.querySelector('.cards')



function executar() {
    //grabbing form info
    let formUrl = document.getElementById('url').value
    let formPais = document.getElementById('pais').value
    let formDescricao = document.getElementById('descricao').value

    //adding from values to cards
    let newContent = `
    <div class="card">
    <img src="${formUrl}" alt="">
    <h2>${formPais}</h2>
    <p>${formDescricao}</p>
    </div>`

    card.innerHTML = card.innerHTML + newContent
}

botaoEnviar.addEventListener("click", (evento) => {
    evento.preventDefault();
    executar()
})