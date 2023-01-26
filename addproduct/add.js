
$("#image").animate({
    width:"600px"
},3000)
let titlepro=document.getElementById("product_name")
let newprice=document.getElementById("price")
let cat=document.getElementById("product_categorie")
let des=document.getElementById("product_name_fr")
let imgsrc=document.getElementById("filebutton")


let store=JSON.parse(localStorage.products)


// console.log(lastid)
newid=store.length
console.log(newid)
if(localStorage.products!=null){
    arr=store
}else{
    arr=[]
}

function addpro(){
nwepro={

    id:newid,
    title:titlepro.value,
    price:newprice.value,
    category:cat.value,
    description:des.value,
    image:imgsrc.value
    
}
console.log(nwepro)
arr.push(nwepro)

localStorage.setItem("products",JSON.stringify(arr))

location.replace(".../project.html")
    
}
    