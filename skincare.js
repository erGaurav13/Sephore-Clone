let product=[
    {Image:"https://cdn12.nnnow.com/web-images/thumbnail/styles/YZCFJWPBXKS/1593757556347/1.jpg" ,name:"SHISEIDO", use:"Refreshing Cleansing Sheets", price:"1,600"},
    {Image:"" ,name:"", use:"", price:""},
    {Image:"" ,name:"", use:"", price:""},
    {Image:"" ,name:"", use:"", price:""},
    {Image:"" ,name:"", use:"", price:""},
    {Image:"" ,name:"", use:"", price:""},
    {Image:"" ,name:"", use:"", price:""},
    {Image:"" ,name:"", use:"", price:""},
    {Image:"" ,name:"", use:"", price:""},
    {Image:"" ,name:"", use:"", price:""}
]

product.forEach(function(ele){
    let childbox = document.createElement("div");
    let photo = document.createElement("img");
    photo.setAttribute("src",ele.Image);

    let names= document.createElement("h3");
    names.innerText = ele.name;

    let use = document.createElement("p");
    use.innerText = ele.use;

    let price = document.createElement("h3");
    price.innerText = ele.price;

    childbox.append(photo,names,use,price);
    document.querySelector("#box").append(childbox);
})
