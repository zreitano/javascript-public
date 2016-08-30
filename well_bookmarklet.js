console.log("V7")
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
      	alert("Article Added To The Well")
		// var body = document.getElementsByTagName('body');
		//  document.body.innerHTML +='<div id="prehype-notification" style="position:absolute;width:100%;height:50px;opacity:1;z-index:100;background:#1C8C53; line-height: 50px; text-align: center; color: white; font-size: 22px;">Article Added</div>'
		//  setTimeout(function(){ 
		//  	var notification = document.getElementById('prehype-notification')
		//  	notification.style.display = "none"
		//  }, 3000);
      },
      error: function() { alert("Something went wrong. Ping Z please.");}
   });
}
