const queryString = location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const foundEvents = data.events.find(event => event._id == id);

const div = document.querySelector(".containerDetails")

div.innerHTML = `<div class="card mx-1 my-2" style="width: 20rem; border: 1px solid black;">
<img src= "${foundEvents.image}" class="card-img-top img-fluid imgc" alt=" " style="width: 100%; height: 12rem;">
<div class="card-body text-center">
<h5 class="card-title">${foundEvents.name}</h5>
<p class="card-text" style="margin-bottom: 3rem" >${foundEvents.description}</p>
<div class="card-footer text-end">
<span>Price $${foundEvents.price}</span>
<a href="./stats.html" class="btn btn-primary" style="margin-left: 5rem;">Details</a>
</div>
</div>
</div>`;
