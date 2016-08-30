console.log("V4")
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
   var url   = "http://well.prehype.com/good-reads?url="+encodeURIComponent(location.href);
   $.ajax({
      type: "GET",
      url: url,
      dataType: 'jsonp',
      success: function() { alert("Article Submitted"); },
      error: function() { alert("WHOOPS");}
   });
} 