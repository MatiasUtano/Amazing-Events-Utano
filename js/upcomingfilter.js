const categories = data.events.reduce((acc, event) => {
    acc[event.category] = true;
    return acc;
},{});

const categoriesFilter = Object.keys(categories);
console.log(categoriesFilter);

const search = document.getElementById('search');
const button = document.getElementById('buton');
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let searchCategory = search.value.trim();
    searchCategory = searchCategory.charAt(0).toUpperCase() + searchCategory.slice(1).toLowerCase();
    console.log(searchCategory);

    const foundEvents = data.events.filter(event => event.category == searchCategory);

    if(foundEvents.length > 0){
        console.log("Coincidencia");

        const container = document.getElementById('contenedorFlexUp');
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

checkboxes.forEach(function(checkbox){
    checkbox.addEventListener('change', function(){
        if(this.checked){

            console.log('El checkbox ' + this.id + ' fue marcado.');
            let checkboxId = this.id;

            if(categoriesFilter.includes(checkboxId)){
                console.log("Coincidencia")
                const container = document.getElementById('contenedorFlexUp');
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
                        </div>
                        </div>
                    </div>
                    </div>`
                    });

            }
        }else {
            console.log('El checkbox ' + this.id + ' fue desmarcado.');
        }
    })
})
