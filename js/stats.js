const urlApi = "https://mindhub-xj03.onrender.com/api/amazing";
fetch(urlApi)
.then((res) => res.json())
.then((dato) => {
    const events = dato.events;
    const currentDate = dato.currentDate;
    const porcentAsis = events
    .filter((ev) => ev.assistance !== undefined)
    .map((ev) => {
        return {
        name: ev.name,
        assistance: ev.assistance,
        capacity: ev.capacity,
          percentage: ((ev.assistance / ev.capacity) * 100).toFixed(2),
        };
    });

    const orderAsis = porcentAsis
    .sort((a, b) => b.percentage - a.percentage)
    .map((ev) => {
        return `${ev.name}: ${ev.percentage}%`;
    });
    const eventsLast = orderAsis.slice(-3);
    const capPast = events.filter((ev) => ev.date < currentDate);
    const orderCapacity = capPast
    .sort((a, b) => b.capacity - a.capacity)
    .map((ev) => {
        return `${ev.name}: ${ev.capacity}`;
    });
    const firstTable = document.getElementById("classfirst");

    firstTable.innerHTML = `<table class="table table-dark my-0" id="classfirst">
            <thead class="table-light">
                <tr>
                <th scope="col" colspan="3">Events Statistics</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <td>${orderAsis[0]}</td>
                <td>${eventsLast[2]}</td>
                <td>${orderCapacity[0]}</td>
            </tr>
            <tr>
                <td>${orderAsis[1]}</td>
                <td>${eventsLast[1]}</td>
                <td>${orderCapacity[1]}</td>
            </tr>
            <tr>
                <td>${orderAsis[2]}</td>
                <td>${eventsLast[0]}</td>
                <td>${orderCapacity[2]}</td>
            </tr>
            </tbody>
        </table>`;

    const upCEvents = events
    .filter((ev) => ev.date > currentDate)
    .map((ev) => {
        return {
        name: ev.name,
        category: ev.category,
        capacity: ev.capacity,
        estimate: ev.estimate,
        price: ev.price,
          revenues: ev.price * ev.estimate,
        };
    });
    const upCMapCategorias = upCEvents.map((upccat) => upccat.category);
    const uCCategorias = upCMapCategorias.filter(
    (item, index) => upCMapCategorias.indexOf(item) == index
    );

    function dataUpCCategory(category) {
    let revUpCC = 0;
    let capUpCC = 0;
    let estUpCC = 0;
    let packUpCC = [];
    upCEvents.forEach((event) => {
        if (event.category == category) {
        revUpCC += event.revenues;
        capUpCC += event.capacity;
        estUpCC += event.estimate;
        }
    });
    let porcenUpCCate = (estUpCC / capUpCC) * 100;
    packUpCC.push(revUpCC);
    packUpCC.push(porcenUpCCate);
    return packUpCC;
    }

    function sumDataUc() {
    uCCategorias.forEach((categoriaUC) => {
        arrayPackUcC.push(dataUpCCategory(categoriaUC));
    });
    }

    let arrayPackUcC = [];
    sumDataUc();

    const secondTable = document.getElementById("classsecond");
    secondTable.innerHTML = `<table class="table table-dark my-0" id="classsecond">
    <thead class="table-light">
        <tr>
        <th scope="col" colspan="3">Upcoming Events statistics by category</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>${uCCategorias[0]}</td>
            <td>$ ${arrayPackUcC[0][0]}</td>
            <td>${arrayPackUcC[0][1]} %</td>
        </tr>
        <tr>
            <td>${uCCategorias[1]}</td>
            <td>$ ${arrayPackUcC[1][0]}</td>
            <td>${arrayPackUcC[1][1]} %</td>
        </tr>
        <tr>
            <td>${uCCategorias[2]}</td>
            <td>$ ${arrayPackUcC[2][0]}</td>
            <td>${arrayPackUcC[2][1]} %</td>
        </tr>
        <tr>
            <td>${uCCategorias[3]}</td>
            <td>$ ${arrayPackUcC[3][0]}</td>
            <td>${arrayPackUcC[3][1]} %</td>
        </tr>
        <tr>
            <td>${uCCategorias[4]}</td>
            <td>$${arrayPackUcC[4][0]}</td>
            <td>${arrayPackUcC[4][1]} %</td>
        </tr>
        <tr>
            <td>${uCCategorias[5]}</td>
            <td>$${arrayPackUcC[5][0]}</td>
            <td>${arrayPackUcC[5][1]} %</td>
        </tr>
    </tbody>
</table>`;

    const pastEvents = events
    .filter((ev) => ev.date < currentDate)
    .map((ev) => {
        return {
        name: ev.name,
        category: ev.category,
        capacity: ev.capacity,
        assistance: ev.assistance,
        percentage: Math.round((ev.assistance / ev.capacity) * 100),
        price: ev.price,
        revenues: ev.price * ev.assistance,
        };
    });
    const pasCMapCategorias = pastEvents.map((pasccat) => pasccat.category);
    const pasCategorias = pasCMapCategorias.filter(
    (item, index) => pasCMapCategorias.indexOf(item) == index
    );

    function dataPasCCategory(categoriaPas) {
    let revPasCC = 0;
    let capPasCC = 0;
    let asiPasCC = 0;
    let packPasCC = [];
    pastEvents.forEach((event) => {
        if (event.category == categoriaPas) {
        revPasCC += event.revenues;
        capPasCC += event.capacity;
        asiPasCC += event.assistance;
        }
    });

    let porcenPasCCate = (asiPasCC / capPasCC) * 100;
    packPasCC.push(revPasCC);
    packPasCC.push(porcenPasCCate);
    return packPasCC;
    }

    function sumDataPas() {
    pasCategorias.forEach((categoriaPas) => {
        arrayPackPasC.push(dataPasCCategory(categoriaPas));
    });
    }
    let arrayPackPasC = [];
    sumDataPas();
    const thirdTable = document.getElementById("classthree");
    thirdTable.innerHTML = `<table class="table table-dark my-0" id="classthree">
    <thead class="table-light">
        <tr>
        <th scope="col" colspan="3">Past Events statistics by category</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>${pasCategorias[0]}</td>
            <td>$ ${arrayPackPasC[0][0]}</td>
            <td>${arrayPackPasC[0][1]} %</td>
        </tr>
        <tr>
            <td>${pasCategorias[1]}</td>
            <td>$ ${arrayPackPasC[1][0]}</td>
            <td>${arrayPackPasC[1][1]} %</td>
        </tr>
        <tr>
            <td>${pasCategorias[2]}</td>
            <td>$ ${arrayPackPasC[2][0]}</td>
            <td>${arrayPackPasC[2][1]} %</td>
        </tr>
        <tr>
            <td>${pasCategorias[3]}</td>
            <td>$ ${arrayPackPasC[3][0]}</td>
            <td>${arrayPackPasC[3][1]} %</td>
        </tr>
        <tr>
            <td>${pasCategorias[4]}</td>
            <td>$ ${arrayPackPasC[4][0]}</td>
            <td>${arrayPackPasC[4][1]} %</td>
        </tr>
        <tr>
            <td>${pasCategorias[5]}</td>
            <td>$ ${arrayPackPasC[5][0]}</td>
            <td>${arrayPackPasC[5][1]} %</td>
        </tr>
        <tr>
            <td>${pasCategorias[6]}</td>
            <td>$ ${arrayPackPasC[6][0]}</td>
            <td>${arrayPackPasC[6][1]} %</td>
        </tr>
    </tbody>
</table>`;
})
.catch((error) => console.log(error));
