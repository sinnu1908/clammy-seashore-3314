// VirtualSelect.init({ 
//     ele: '#brandName' 
//   });
wcartd=JSON.parse(localStorage.getItem("wcartdata"))||[];

bagcount=document.getElementById("count");
bagcount.innerText=wcartd.length;

let wcontainer=document.getElementById("container");
let womendata=[];
let wcart=JSON.parse(localStorage.getItem("wcartdata"))||[];

fetch("https://639b11eb31877e43d6812e1b.mockapi.io/products/")
.then((response)=>{
    return response.json();
})
.then((maindata)=>{
    womendata=maindata;
    console.log(womendata)
    wdata(maindata);
    

})
.catch((error)=>{
    console.log(error)
})
//sort functionality



//filter functionality
filbn=document.getElementById("brandName");
filbn.addEventListener("change",()=>{
    
    let filtdata=womendata.filter((element)=>{
            if(filbn.value==element.brandName){
                return true;
            }else{
                return false;

            }
    
        })
        console.log(filtdata)
wdata(filtdata)
})

filct=document.getElementById("Category");
filct.addEventListener("change",()=>{
    
    let filtdata=womendata.filter((element)=>{
            if(filct.value==element.category){
                return true;
            }else if(filct.value=="") {
                wdata(womendata)
            }
    
        })
        console.log(filtdata)
wdata(filtdata)
})


function wdata(data){
    container.innerHTML=null;
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

    let cartbtn=document.createElement("button");
    cartbtn.innerText="Add to Bag"
    cartbtn.addEventListener("click",()=>{
       
let isalreadyp=false;

for(let i=0; i<wcart.length; i++){
    if(wcart[i].id==element.id){
        isalreadyp=true;
    }
}
if(isalreadyp==true){
    alert("Error: Product already present in bag")
}else{
    wcart.push(element);
    localStorage.setItem("wcartdata",JSON.stringify(wcart));
    alert("Product added successfully to bag")
}
    })
    
    

    proddiv.append(image,brandName,name,price,category,size,rating,cartbtn);
    
    wcontainer.append(proddiv)
})
}

