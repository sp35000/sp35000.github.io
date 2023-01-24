function ckstart() {
 window.open("https://chat.serpro.gov.br/");
 window.open("https://alm.serpro/");
 window.open("https://solucoes.corporativo.serpro/siscopweb/");
 window.open("https://mail.serpro.gov.br/");
 window.open("https://serprocards.serpro/");
}

function getTitle() {
  var url = document.getElementById("link");
  var proxyurl = "../serina/get_title.php?url=" + url.value;
  $.ajax({
    url: proxyurl,
    async: true,
    beforeSend: function() {
      $("#loaderDiv").show();
    },
    success: function(response) {
      $("#loaderDiv").hide();
      //alert(response);
      document.getElementById("title").value = response;
    },
    error: function(e) {
      alert("error! " + e);
    }
  });
}

function getTitlePython() {
  var url = document.getElementById("link");
  var proxyurl = "../serina/get_title_python.php?url=" + url.value;
  $.ajax({
    url: proxyurl,
    async: true,
    beforeSend: function() {
      $("#loaderDiv").show();
    },
    success: function(response) {
      $("#loaderDiv").hide();
      //alert(response);
      document.getElementById("title").value = response;
    },
    error: function(e) {
      alert("error! " + e);
    }
  });
}


$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

   // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
      });
    } // End if
  });
})

$(window).scroll(function() {
  $(".slideanim").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      $(this).addClass("slide");
    }
  });
});

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}

function showTime() {
	let time = new Date();
	let cDayWeek = time.getDay();
	let cDay = time.getDate()
	let cMonth = time.getMonth() + 1
	let cYear = time.getFullYear()
	let hour = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();
	am_pm = "AM";
	var week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
	if (hour > 12) {
		hour -= 12;
		am_pm = "PM";
	}
	if (hour == 0) {
		hr = 12;
		am_pm = "AM";
	}

	hour = hour < 10 ? "0" + hour : hour;
	min = min < 10 ? "0" + min : min;
	sec = sec < 10 ? "0" + sec : sec;

	let currentTime = week[cDayWeek] + ", "
			+ cDay + "/" + cMonth + "/" + cYear + " - "
			+ hour + ":" + min + ":" + sec + " " + am_pm;

	document.getElementById("clock")
			.innerHTML = currentTime;
}
showTime();
