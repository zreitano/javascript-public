console.log("V3")
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
      // data: $data,
      //send again in 5 minutes
      // success: function() { setTimeout(sendData, 5 * 60 * 1000); }
      success: function() { alert("Article Submitted"); },
      error: function() { alert("WHOOPS");}
   });
} 