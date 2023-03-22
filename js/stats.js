const urlApi = "https://mindhub-xj03.onrender.com/api/amazing"

fetch(urlApi)
.then(response => response.json())
.then(dato => {
    const events = dato.events
    const currentDate = dato.currentDate
    const percentAsis = events.filter(ev => ev.assistance !== undefined).map(ev => {return{
        name:ev.name,
        assistance: ev.assistance,
        capacity: ev.capacity,
        percentage: ((ev.assistance / ev.capacity ) * 100)
    }})

    const orderAsis = percentAsis.sort((a,b) => b.percentage - a.percentage).map(ev => {return`${ev.name}: ${ev.percentage}%`})
    const eventLatest = orderAsis.slice(-3)
    const past = events.filter(ev => ev.date < currentDate)
    const orderCapacity = past.sort((a,b) => b.capacity - a.capacity).map(ev => {return `${ev.name}: ${ev.capacity}`})
    const firstTable = document.getElementById("classfirst")

        classfirst.innerHTML = ` 
            <tr>
                <td>${orderAsis[0]}</td>
                <td>${eventLatest[2]}</td>
                <td>${orderCapacity[0]}</td>
            </tr>
            <tr>
                <td>${orderAsis[1]}</td>
                <td>${eventLatest[1]}</td>
                <td>${orderCapacity[1]}</td>
            </tr>
            <tr>
                <td>${orderAsis[2]}</td>
                <td>${eventLatest[0]}</td>
                <td>${orderCapacity[2]}</td>
            </tr>
            `
}).catch(error => console.log(error))