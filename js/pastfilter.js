const names = data.events.reduce((acc, event) => {
    acc[event.name] = true;
    return acc;
},{});

const namesFilter = Object.keys(names);

const search = document.getElementById('search');
const button = document.getElementById('buton');
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let searchName = search.value.trim();
    searchName = searchName.charAt(0).toUpperCase() + searchName.slice(1).toLowerCase();
    console.log(searchName);

    const foundEvents = data.events.filter(event => event.name.includes(searchName));

    if(foundEvents.length > 0){
        console.log("Coincidencia");

        const container = document.getElementById('contenedorFlexPas');
        container.innerHTML = "";

        foundEvents.forEach(event => {
        container.innerHTML += `<div class="card mb-3" style="width: 50rem; height: 22rem;">
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
        });
    }else{
        alert("No se pudo encontrar la Categoría Deseada");
    }

});

const checkboxes = document.querySelectorAll('.category')

const categories = data.events.reduce((acc, event) => {
    acc[event.category] = true;
    return acc;
},{});

const categoriesFilter = Object.keys(categories);

checkboxes.forEach(function(checkbox){
    checkbox.addEventListener('change', function(){
        if(this.checked){

            console.log('El checkbox ' + this.id + ' fue marcado.');
            let checkboxId = this.id;

            if(categoriesFilter.includes(checkboxId)){
                console.log("Coincidencia")
                const container = document.getElementById('contenedorFlexPas');
                container.innerHTML = "";

                const foundEvents = data.events.filter(event => event.category == checkboxId);
                foundEvents.forEach(event => {
                    container.innerHTML += `<div class="card mb-3" style="width: 50rem; height: 22rem;">
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
                    });

            }
        }else {
            const contenedorCardPas= document.getElementById('contenedorFlexPas')

    let cardPas = '';

    for(const event of data.events) {
    let currentD = new Date(data.currentDate);

    let eventD = new Date(event.date)

    if(currentD > eventD){

    cardPas += `<div class="card mb-3" style="width: 50rem; height: 22rem;">
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

        contenedorCardPas.innerHTML = cardPas 
        contenedorCardPas.classList.add('d-flex') 
        contenedorCardPas.classList.add('flex-wrap')
    }
}
            console.log('El checkbox ' + this.id + ' fue desmarcado.');
        }
    })
})