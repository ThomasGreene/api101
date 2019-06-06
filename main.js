// What we want to do with javascript:
// 1) ask the db to gimmie some Data
fetch("http://localhost:8088/food")
// 2) Wait, using a Promise
// 3) recieve the Data
.then( data => data.json())
.then( food => {
    // 5) loop over the array of objects
    // 6) do stuff to the data
    console.table(food)
    let foodContainer = document.querySelector("#food-list")
    // 7) display the data in the DOM as HTML
    food.forEach( item => foodContainer.innerHTML += `<h2>I like to eat ${item.name}</h2>`)
})