store=JSON.parse(localStorage.products)


var idpro=location.search.split("?")[1]

console.log(store[idpro])
// console.log($("#main-image").a$("#main-image").attr=`${store[idpro].image}`

img= document.getElementById("main-image").src=`${store[idpro].image}`
// $("#title").innerHTML(`${store[idpro].title}`)

document.getElementById("title").textContent=`${store[idpro].title}`
document.getElementById("cat").textContent=`${store[idpro].category}`

document.getElementById("dis").textContent=`${store[idpro].description}`
document.getElementById("price").textContent=`${store[idpro].price}$`
