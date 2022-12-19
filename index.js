wcartd=JSON.parse(localStorage.getItem("wcartdata"))||[];
bagcount=document.getElementById("count");
bagcount.innerText=wcartd.length;
    cartdata(wcartd)