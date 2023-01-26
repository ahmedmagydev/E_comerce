







$("nav").hide()
$(".img1").hide(4000)
$("nav").show(4000)

function getproduct(){
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(product)
}
getproduct()

main=document.getElementById("main")
// console.log(img)

title=document.getElementById("title")
function product(store){
 
    console.log(store)
    localStorage.setItem("products", JSON.stringify(store))
    storepro=JSON.parse(localStorage.products)
    storepro.forEach(function (el){
        // console.log(el)
 main.innerHTML+=`    
     <div class="col-lg-3 col-sm-6 col-md-4"> 
         <div class="card h-100 shadow-sm ">
          <img src="${el.image}" class="card-img-top w-220px col" alt="..." id="img" > 
          <div class="clearfix mb-3"> 
          <span class="float-start badge rounded-pill bg-primary fs-4" id="title">${el.category}</span> 
          <span class="float-end price-hp fs-3" id="price">${el.price}&euro;</span> 
          </div>
          <h6 class="card-title" id="desc">${el.title}</h6> 
          <h6 id="cat"></h6>
           <div class="text-center my-4"> 
               <a href="./viewpro/viewpro.html?${el.id}" class="btn btn-warning" onclick="viewpro(${el.id})">Buy Now</a> 
       </div> `
 

    });

}

function viewpro(i){

}





if(sessionStorage!=null){
   oneuser= JSON.parse(localStorage.user)
   oneuser.forEach(function(ele){
    console.log(ele.email)
    $("#navbarDropdown").html(`${ele.email}`)
   })
}
else{
    $("#navbarDropdown").hide
    $("#logout").show()
}

$("#lgt").click(function(){
sessionStorage.clear()
console.log("mimimim")
})