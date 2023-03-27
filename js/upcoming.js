const contenedorCardUp = document.getElementById('contenedorFlexUp')

let cardUp = '';

for(const event of data.events) {
    let currentD = new Date(data.currentDate);

    let eventD = new Date(event.date)

    if(currentD < eventD){

    cardUp += `<div class="card mb-3" style="width: 50rem; height: 22rem;">
                    <div class="d-flex justify-content-evenly align-items-center p-5">
                    <div class="col-7 align-items-center">
                    <img src="${event.image}" class="img-fluid rounded-start imgc" alt="Concert" style="width: 20rem; height: 15rem; border-radius: .4rem;">
                    </div>
                    <div class="col-5">
                        <div class="card-body text-center">
                        <h5 class="card-title">${event.name}</h5>
                        <p class="card-text">${event.category}</p>
                        <p class="card-text">${event.description}</p>
                        <p class="card-text">${event.price}</p>
                        <a href="./details.html?id=${event._id}" class="btn btn-primary" style="">Details</a>
                    </div>
                </div>
            </div>
        </div>`

        contenedorCardUp.innerHTML = cardUp
        contenedorCardUp.classList.add('d-flex') 
        contenedorCardUp.classList.add('flex-wrap')
    }  
}