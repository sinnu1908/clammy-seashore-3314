wcartd=JSON.parse(localStorage.getItem("wcartdata"))||[];
console.log(wcartd)
wcartcontainer=document.getElementById("container");
bagcount=document.getElementById("count");
bagcount.innerText=wcartd.length;
    cartdata(wcartd)
        function cartdata(data){
container.innerHTML=null;
        wcartd.forEach((element,index)=>{
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

        let removebtn=document.createElement("button");
        removebtn.innerText="Remove";
removebtn.addEventListener("click",()=>{
    wcartd.splice(index,1);
    localStorage.setItem("wcartdata",JSON.stringify(wcartd));
    cartdata(wcartd)
})


        buybtn=document.createElement("button");
        buybtn.innerText="Buy"
    

        proddiv.append(image,brandName,name,price,category,size,rating,removebtn,buybtn);
        
        wcartcontainer.append(proddiv)
    })
    
        }