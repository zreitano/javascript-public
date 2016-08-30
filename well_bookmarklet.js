console.log("V5")
if (window.jQuery === undefined) {
    var script    = document.createElement( 'script' );
    script.src    = 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';
    script.onload = function() { sendData; }
    document.body.appendChild(script);
}
else {
    sendData();
}

function sendData() {
   var url   = "http://well.prehype.com/api_v1/articles.json";
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