

let wcontainer=document.getElementById("container");

fetch("https://639b11eb31877e43d6812e1b.mockapi.io/products/")
.then((response)=>{
    console.log(response)
    return response.json();
})
.then((maindata)=>{
    console.log(maindata);
    wdata(maindata);
    

})
.catch((error)=>{
    console.log(error)
})




function wdata(data){
data.forEach((element,index)=>{
    let proddiv=document.createElement("div");

    let image=document.createElement("img");
    image.setAttribute("src",element.image);

    let brandName=document.createElement("p");
    brandName.innerText=element.brandName;

    let name=document.createElement("p");
    name.innerText=element.name;

    let price=document.createElement("p");
    price.innerText=element.price;

    let category=document.createElement("p");
    category.innerText="Category: ";
    let spanc=document.createElement("span");
    spanc.innerText=element.category;
    category.append(spanc)


    let size=document.createElement("p");
    size.innerText="Availble size: ";

    let spans=document.createElement("span");
    spans.innerText=element.size
    size.append(spans)

    let rating=document.createElement("p");
    rating.innerText="Rating: ";

    let spanr=document.createElement("span");
    spanr.innerText=element.rating;
    rating.append(spanr);

    proddiv.append(image,brandName,name,price,category,size,rating);
    
    wcontainer.append(proddiv)
})
}