const contenedorCard = document.getElementById('contenedorFlex');

let card = '';

for (const datos of data.events){
    card += `<div class="card mx-1 my-2" style="width: 20rem; border: 1px solid black;">
                <img src= "${datos.image}" class="card-img-top img-fluid imgc" alt=" " style="width: 100%; height: 12rem;">
                <div class="card-body text-center">
                <h5 class="card-title">${datos.name}</h5>
                <p class="card-text" style="margin-bottom: 3rem" >${datos.description}</p>
                <div class="card-footer text-end">
                <span>Price $${datos.price}</span>
                <a href="./details.html?id=${datos._id}" class="btn btn-primary" style="margin-left: 5rem;">Details</a>
                </div>
                </div>
            </div>`
}

contenedorCard.innerHTML = card
contenedorCard.classList.add('d-flex')
contenedorCard.classList.add('flex-wrap')


