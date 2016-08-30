console.log("V5")
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
   var url   = "http://localhost:3000/api_v1/articles.json";
   data = {}
   data.topic = {value: 1}
   data.url = location.href
   $.ajax({
      type: "POST",
      url: url,
      data: data,
      success: function() { alert("Article Submitted"); },
      error: function() { alert("WHOOPS");}
   });
}