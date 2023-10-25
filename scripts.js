const allCoffees = window.document.getElementById('all-coffees') //study DOM

allCoffees.innerHTML = '<h2 style="color: red;" >hey teacher</h2>' //injects html

//fetch info from sample APIs
//window.fetch()
fetch('https://api.sampleapis.com/coffee/hot') //gets apis from website.
.then(res => res.json())//converting response to json
.then(data => {
    console.log(data)

    data.forEach((item) => {
        console.log('item ---> ', item)

        const element = document.createElement('div')//created an html element
        element.innerHTML = `<div>
            <img src="${item.image} " style="width:200px";>
            <div>
                <h2>${item.title}</h2>
                <p>${item.description}</p>
                <p>${item.ingredients}</p>
            </div>
        </div>`
        allCoffees.appendChild(element)//adds to allCoffees
    });
})//always need 2 .then() when fetching
.catch(console.error(err))

//display all coffees into our browser. 