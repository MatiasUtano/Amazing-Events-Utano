const contenedorCardUp = document.getElementById('contenedorFlexUp')

let cardUp = '';

for (const datos of data.events){
    cardUp += `<div class="card mx-1 my-2" style="width: 20rem; border: 1px solid black;">
                <img src= "${datos.image}" class="card-img-top img-fluid" alt=" " style="width: 100%; height: 12rem;">
                <div class="card-body text-center">
                <h5 class="card-title">${datos.name}</h5>
                <p class="card-text">${datos.description}</p>
                <div class="card-footer text-end">
                <span>Price $${datos.price}</span>
                <a href="./stats.html" class="btn btn-primary" style="margin-left: 5rem;">Details</a>
                </div>
                </div>
            </div>`
}

if(data.events.date >= "2022"){
    console.log(data.events)
}

contenedorCardUp.innerHTML = cardUp
contenedorCardUp.classList.add('d-flex')
contenedorCardUp.classList.add('flex-wrap')

