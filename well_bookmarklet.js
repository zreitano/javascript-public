console.log("V8")
if (window.jQuery === undefined) {
    var script    = document.createElement( 'script' );
    script.src    = 'https://code.jquery.com/jquery-3.1.0.min.js';
    script.onload = function() { sendData; }
    document.body.appendChild(script);
}
else {
    sendData();
}

function sendData() {
   var url   = "//well.prehype.com/api_v1/articles.json";
   data = {}
   data.topic = {value: 1}
   data.url = location.href
   $.ajax({
      type: "POST",
      url: url,
      data: data,
      success: function() { 
      	console.log("Article Submitted"); 
      	var notification = document.createElement("div")
      	notification.style.position = 'absolute'
      	notification.style.top = "0px"
      	notification.style.left = "0px"
      	notification.style.right = "0px"
      	notification.style.width = "width:100%"
      	notification.style.height = "50px"
      	notification.style.width = "100%"
      	notification.style.background = "#1C8C53"
      	notification.style.lineHeight = "50px"
      	notification.style.textAlign = "center"
      	notification.style.color = "white"
      	notification.style.zIndex = "2147483647"
      	notification.style.fontSize = "22px"
		notification.innerHTML = "Article Added"
		notification.setAttribute("id", "prehype-notification");
		document.body.insertBefore(notification, document.body.firstChild);
		 setTimeout(function(){ 
		 	var notification = document.getElementById('prehype-notification')
		 	notification.style.display = "none"
		 }, 3000);
      },
      error: function() { alert("Something went wrong. Ping Z please.");}
   });
}
