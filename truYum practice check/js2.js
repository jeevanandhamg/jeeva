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

