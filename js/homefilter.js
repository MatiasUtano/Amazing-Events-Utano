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

        const container = document.getElementById('contenedorFlex');
        container.innerHTML = "";

        foundEvents.forEach(event => {
        container.innerHTML += `<div class="card mx-1 my-2" style="width: 20rem; border: 1px solid black;">
        <img src= "${event.image}" class="card-img-top img-fluid imgc" alt=" " style="width: 100%; height: 12rem;">
        <div class="card-body text-center">
        <h5 class="card-title">${event.name}</h5>
        <p class="card-text" style="margin-bottom: 3rem" >${event.description}</p>
        <div class="card-footer text-end">
        <span>Price $${event.price}</span>
        <a href="./stats.html" class="btn btn-primary" style="margin-left: 5rem;">Details</a>
        </div>
        </div>
        </div>`;
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
                const container = document.getElementById('contenedorFlex');
                container.innerHTML = "";

                const foundEvents = data.events.filter(event => event.category == checkboxId);
                foundEvents.forEach(event => {
                    container.innerHTML += `<div class="card mx-1 my-2" style="width: 20rem; border: 1px solid black;">
                    <img src= "${event.image}" class="card-img-top img-fluid imgc" alt=" " style="width: 100%; height: 12rem;">
                    <div class="card-body text-center">
                    <h5 class="card-title">${event.name}</h5>
                    <p class="card-text" style="margin-bottom: 3rem" >${event.description}</p>
                    <div class="card-footer text-end">
                    <span>Price $${event.price}</span>
                    <a href="./stats.html" class="btn btn-primary" style="margin-left: 5rem;">Details</a>
                    </div>
                    </div>
                    </div>`;
                    });

            }
        }else {
            console.log('El checkbox ' + this.id + ' fue desmarcado.');
        }
    })
})
