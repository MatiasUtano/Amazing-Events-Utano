const contenedorCardPas= document.getElementById('contenedorFlexPas')

let cardPas = '';

for (const datos of data.events){
    cardPas += `<div class="card mb-3" style="width: 50rem; height: 22rem;">
                    <div class="d-flex justify-content-evenly align-items-center p-5">
                    <div class="col-7 align-items-center">
                    <img src="${datos.image}" class="img-fluid rounded-start" alt="Concert" style="width: 20rem; height: 15rem; border-radius: .4rem;">
                    </div>
                    <div class="col-5">
                        <div class="card-body text-center">
                        <h5 class="card-title">${datos.name}</h5>
                        <p class="card-text">${datos.category}</p>
                        <p class="card-text">${datos.description}</p>
                        <p class="card-text">${datos.price}</p>
                    </div>
                </div>
            </div>
        </div>`
}

contenedorCardPas.innerHTML = cardPas
contenedorCardPas.classList.add('d-flex')
contenedorCardPas.classList.add('flex-wrap')

//console.log(Object.values(data));

/*const mappedData = Object.keys(data).map(key =>{
    const value = data[key]
    console.log(key, value)
})*/

/*for(let i = 0; i < data.events.length; i++){
    console.log(data.events[i])
}
















/*contenedorCardPas.innerHTML = cardPas
contenedorCardPas.classList.add('d-flex')
contenedorCardPas.classList.add('flex-wrap')*/


