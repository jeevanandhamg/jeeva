const products=[
{
name:'sandwich',price:'Rs.99.00',Active:'Yes',dataofLaunch:'15/03/2017',Category:'Main Course',
freeDelivery:'Yes',pid:1
},

{name:'Burger',price:'Rs.129.00',Active:'Yes',dataofLaunch:'23/12/2017',Category:'Main Course',
freeDelivery:'No',pid:2
},

{name:'pizza',price:'Rs.149.00',Active:'Yes',dataofLaunch:'21/08/2017',Category:'Main Course',
freeDelivery:'No',pid:3
},

{name:'French Fries',price:'Rs.57.00',Active:'No',dataofLaunch:'02/07/2017',Category:'Starters',
freeDelivery:'Yes',pid:4
},

{name:'Chocolate Browine',price:'Rs.32.00',Active:'Yes',dataofLaunch:'02/11/2017',Category:'Dessert',
freeDelivery:'Yes',pid:5
}
];

const renderProducts=function(products)
{
                let tabE1=document.querySelector("#prod-tab");
                var m=document.querySelector("#menu").value;
                
				
				
                products.forEach(function(product){
                                let trow1=document.createElement("tr");
                                let tcol1=document.createElement("td");
                                tcol1.textContent=product.name;
                                trow1.appendChild(tcol1);
                                
                                let tcol2=document.createElement("td");
                                tcol2.textContent=product.price;
                                trow1.appendChild(tcol2);
                
                                let tcol3=document.createElement("td");
                                tcol3.textContent=product.Active;
                                trow1.appendChild(tcol3);
                                
                                
                                let tcol7=document.createElement("td");
                                tcol7.textContent=product.dataofLaunch;
                                trow1.appendChild(tcol7);
                                
                                
                                let tcol5=document.createElement("td");
                                tcol5.textContent=product.Category;
                                trow1.appendChild(tcol5);
                                
                                
                                let tcol6=document.createElement("td");
                                tcol6.textContent=product.freeDelivery;
                                trow1.appendChild(tcol6);
                                
								
								
								
									
								
                                let link=document.createElement("a");
                                link.setAttribute('product.pid','link');
                                
								if(m==="menu")
								{
                                link.textContent="Edit";
								link.href="editMenu.html?"+"name="+product.name+"&price="+product.price+"&active="+product.Active+"&dataofLaunch="+product.dataofLaunch+"&category="+product.Category+"&freeDelivery="+product.freeDelivery;
								 }
								 else if(m==="cart"){
									 link.textContent="Add to Cart";
									 link.href="addCart.html?"+"name="+product.name+"&price="+product.price+"&active="+product.Active+"&dataofLaunch="+product.dataofLaunch+"&category="+product.Category+"&freeDelivery="+product.freeDelivery;
								 }
								 else
								 {
									 link.textContent="delete";
									 link.href="delCart.html?"+"name="+product.name+"&price="+product.price+"&active="+product.Active+"&dataofLaunch="+product.dataofLaunch+"&category="+product.Category+"&freeDelivery="+product.freeDelivery;
								 }
                                let tcol4=document.createElement("td");
                                tcol4.appendChild(link);
								
                                trow1.appendChild(tcol4);
                               
								
                                tabE1.appendChild(trow1);
                                
                })
                
                
}
renderProducts(products);

/* function getData()
{
var getQueryString = function ( field, url ) {
    var href = url ? url : window.location.href;
    var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
    var string = reg.exec(href);
    return string ? string[1] : null;
};

var name = getQueryString("name");
document.querySelector("#name").value = name

var price = getQueryString("price");
document.querySelector("#price").value = price

var dol = getQueryString("dataofLaunch");
document.querySelector("#dol").value = dol


var active = getQueryString("Active");
if(active==="Yes")
document.querySelector("#Yes").checked = true

else
	document.querySelector("#No").checked = false

var fod = getQueryString("freeDelivery");
if(fod==="Yes")
document.querySelector("#delivery").checked = true

else
	document.querySelector("#deivery").checked = false

var cat = getQueryString("category");
document.querySelector("#cat").value = cat
}

document.querySelector("#update").addEventListener("click",function(){

const name2=document.querySelector("#name").value
const price2=document.querySelector("#price").value
const dol2=document.querySelector("#dol").value
const active2=document.querySelector("#Yes").value
const fod2=document.querySelector("#delivery").value
const cat2=document.querySelector("#category").value

console.log(name2+" "+price2);
})
 */

