let name = document.getElementById("name");
let price = document.getElementById("price");
let color = document.getElementById("color");
let year = document.getElementById("year");
let image = document.getElementById("image");
let addBtn = document.getElementById("addBtn");
let productList = document.getElementById("productList")

let mashinalar = []

console.log(mashinalar)




function addData(){



    let newCar = {
        name: name.value,
        price: price.value,
        color:color.value,
        year:year.value,
        image:image.value
    }

      


    mashinalar.push(newCar)

}

addBtn.addEventListener("click",()=>{
    addData()
    renderData()
    console.log(mashinalar)
})

function renderData(){
productList.innerHTML = ""

    mashinalar.forEach((car)=>{
        let div = document.createElement("div")
        div.innerHTML = `
            <img class="text" src=${car.image}/>
            <h2>${car.name}</h2>
            <p> price:${ car.price}</p>
            <P> color:${car.color}</P>
            <p> year:${car.year}</p>
        `


        productList.appendChild(div)
    })
}

renderData()




