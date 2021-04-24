

// MOBILE DETECTION

function ismobile() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};


// AI DEVICE CHECK

function check_orientation() {
	
	if(screen.availHeight > screen.availWidth){
    
		document.getElementById("all").style.display = "none";
		
		document.getElementById("mobile").style.display = "";

	}
	
	else {
		
		document.getElementById("all").style.display = "";
	}
}


// Listen for orientation changes

window.addEventListener("orientationchange", function() {
  
	// Announce the new orientation number
  
	if (Math.abs(window.orientation) === 90) {
        
		// Landscape
		
		document.getElementById("all").style.display = "";
		
		document.getElementById("mobile").style.display = "none";
		
		
    
	} else {

		// Portrait
		
		document.getElementById("all").style.display = "none";
		
		document.getElementById("mobile").style.display = "";
		
    }
	
}, false);
	
	

// 	Definició de plantilles de tooltips

var template_share = document.getElementById('template_share');
		



// DEFINICIÓ DE CONTAINERS DE LA WEB

var home = document.getElementById("welcome");

var llibres = document.getElementById("catalan_books");
	
var llibres_altres = document.getElementById("catalan_books"); // CANVIAR A REALITAT QUAN EXISTEIXI

var llibres_inner = document.getElementById("article_content");
	
var cites = document.getElementById("cites_container");

var spinner = document.getElementById("loading_spinner_modern");

var about = document.getElementById("about_me");


// WEBSITE COMPONENTS

var cites_return = document.getElementById("bar_return_new_q");


// Retorn a home quan es clica el logo

function home2() {  // quan clic al logo
	
	scroll(0,0);

	location.reload();

}


// NAVEGACIÓ

function llibres_n() {
	
	
	home.style.display = "none";
	
	scroll(0,0);
	
	spinner.style.display = "";
	
	load_llibres();
	
	
	
	
	
}


function cites_n() {
	
	home.style.display = "none";
	
	document.getElementById("cites_carregades").innerHTML = "";
	
	scroll(0,0);

	spinner.style.display = "";
	
	get_cites_last_id();
	
	
}


function altres_n() {
	
	home.style.display = "none";
	
	spinner.style.display = "";

	
	if (ismobile() == true) {
	
		setTimeout(function(){ 
			
		spinner.style.display = "none";
		
		document.getElementById("about_me_mobile").style.display = "";
			
		}, 500);
		

	}
	
	else {
		
		// DESKTOP
		
		setTimeout(function(){ 
		
		spinner.style.display = "none";
		
		//about.style.display = ""; ACTIVATE THAT TO SET PAGE DESKTOP VERSION  DESIGN (ALTERNATIVE)
			
		document.getElementById("about_me_mobile").style.display = "";
		
	
	}, 500);
	
	}

	
}


// Retorn en pàgina de llibres i cites individuals

function return_to_gallery() {
	
	llibres_inner.style.display = "none";
	
	document.getElementById("llibre_main").style.display = "none";
	
	spinner.style.display = "";
	
		
	setTimeout(function(){ 
		
		spinner.style.display = "none";
		
		llibres.style.display = "";
		
	
	}, 500);
	
	
	
	
}


function return_to_cites() {
	
	cites.style.display = "none";
	
	spinner.style.display = "";
	
}







function slider(type) {
	
	document.getElementsByClassName("book")[0].style.visibility = "hidden";
	
	document.getElementsByClassName("book")[1].style.visibility = "hidden";
	
	document.getElementsByClassName("book")[2].style.visibility = "hidden";
	
	document.getElementsByClassName("book")[3].style.visibility = "hidden";
}


function buy(el){
	
	var amazon_link = el.children[0].getAttribute("data-amazon");
	
	var win = window.open(amazon_link, '_blank');
 
	win.focus();
}





// PÀGINA DE CITES
// ================


function like(ele) {
	
	var id = ele.id;
	
	if (document.getElementById(id).innerHTML == "favorite_border") {
		

		
		document.getElementById(id).innerHTML = "favorite";
	
	    document.getElementById(id).style.color = "darkred";
		
		
		// Get the snackbar DIV
  
		var x = document.getElementById("snackbar");

  
		// Add the "show" class to DIV
  
		x.className = "show";

  
		// After 3 seconds, remove the show class from DIV
  
		setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
		
		
	}
	
	else if (document.getElementById(id).innerHTML == "favorite") {
		
		
		document.getElementById(id).innerHTML = "favorite_border";
	
	    document.getElementById(id).style.color = "black";
		
		
	}
	

}







function like_cita(ele) {
	
	var this_it_is = "no";
	
	var id = ele.id;
	
	var identifier = id.replace("l", "");

	var likes_actual = ele.getAttribute("data-likes");

	var xmlhttp = new XMLHttpRequest();
    
	xmlhttp.onreadystatechange = function() {
     
		if (this.readyState == 4 && this.status == 200) {
			

		if (this.responseText == "ok") {
			
			
		ele.setAttribute("data-likes", Number(likes_actual) + 1);

		

		// We delete all Tippy's on the page
			
		[...document.querySelectorAll('*')].forEach(node => {
  
			if (node._tippy) {
    
				node._tippy.destroy();
  
			}

		});
			
		// We create the new like tippy's
			
		tippy('.likey', {
        
		   
           allowHTML: true,
		   interactive: true,
		   content(reference) {                              
           const likes = reference.getAttribute('data-likes');
           return '<p id="like_number_t">' + likes + '</p>';
        
		   }
		  
       });
			
			
	   // Finally, we create the new SHARE tippies
			
		
		tippy('.sharey', {
        
		  
          allowHTML: true,
		  interactive: true,
		  content(reference) {                              
          const cita = reference.getAttribute('data-text');
		  const author = reference.getAttribute('data-author');
          
		  return '<div id="template_share"><i id="sharey" class="fa fa-facebook-square" data-text="' +  cita + '" data-author="' + author + '" onclick="share_with_facebook(this);"></i><i id="sharey" class="fa fa-twitter-square" data-text="' +  cita + '" data-author="' + author + '" onclick="share_with_twitter(this);"></i><i id="sharey" class="fa fa-envelope-square" data-text="' +  cita + '" data-author="' + author + '" onclick="share_with_email(this);"></i></div>';
        
		   }
		 
		  
      }); 
			

			// MARK THAT ALL WORKED
			
			var x = document.getElementById("snackbar_c");

			x.innerHTML = "S'ha afegit un m'agrada";
			
			x.className = "show";

		    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
			
			console.log("great!");

		}
			
		else {
			
			// MARK THAT NOT WORKED
			
			console.log("not great!");
			
			var x = document.getElementById("snackbar_c");

			x.innerHTML = "No s'ha pogut afegir un m'agrada";
			
			x.className = "show";

		    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
			
			console.log("great!");
			
			
		}
			
			
		
			
			
			
			
				
			}
	 
		}
    
	
    
	xmlhttp.open("GET", "php/like.php?id=" + identifier + "&code=" + likes_actual , true);
    
	xmlhttp.send();
		
		
	
}








// CARREGADOR ON SCROLL
// =====================





window.onscroll = function(ev) {
    
	
		
	
	if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {

		
		if (reached == false) {
			
			reached = true;
			
			console.log("END OF PAGE");

		    citations_next();
			
		}
		
	}
		
	
};





// AGAFADOR DE CITES
// =================



var last_id = "fail";

var remaining_citations;


function get_cites_last_id() {
	
	var xmlhttp = new XMLHttpRequest();
    
	xmlhttp.onreadystatechange = function() {
     
		if (this.readyState == 4 && this.status == 200) {
			

			
			if (this.responseText == "fail") {
				
				console.log("error there!!");
			}
			
			else {
				
				last_id = this.responseText;
				
				remaining_citations = last_id;
				
				console.log("Hem trobat el last ID");
				
				get_citations(remaining_citations);
				
			}
	 
		}
    
	};
    
	xmlhttp.open("GET", "php/getlastid.php" , true);
    
	xmlhttp.send();
	
}





function get_citations(what) {

	
	var xmlhttp = new XMLHttpRequest();
    
	xmlhttp.onreadystatechange = function() {
     
		if (this.readyState == 4 && this.status == 200) {
			
			
			var r = this.responseText;
			
			r = r.split("/-/-/");
			
			console.log(r);
			
			console.log("Hem aconseguit la citació ER: 12");
			
			citation_manager(r);

	
		}
    
	};
    
	xmlhttp.open("GET", "php/cites.php?id=" + what, true);
    
	xmlhttp.send();
	
	
}




var citation_array = [];

var target = 4;

function citation_manager(cita) {

	// Add the recieved citation to a dictionary
	
	citation_array.push(cita);
	
	
	// Let's discount it from the available ones
	
	remaining_citations --;
	
	
	// And let's mark that we have one collected
	
	target --;
	
	
	// Now let's look if we have the number that we want to load
	
	console.log("El manager fa la seva feina");
	
	if (remaining_citations >= target) {
		
		if (target == 0) {
			
			// Un cop s'han carregat les primeres cites, una altra funció farà la resta.
	
			
			citation_creator(citation_array);
			
		}
		
		else {
		
		    get_citations(remaining_citations);
			
		}
		
		
	}
	
	else {
		
		// We don't have the number that we want to load...
		
		console.log("ja no podem carregar més");
		
		document.getElementById("loading_ring_defi").style.display = "none";
	}
    
	
}


var fonts = ["Amiri", "Kalam", "Arapey", "Crimson Text", "Special Elite"];

var font_num = 0;


function citation_creator(array) {
	
	// Aquesta funció s'ocupa de generar les cites i mostrar-les en pantalla
	
	console.log("CREATOR STARTED");
	
	for (element of array) {
		
		
		if (font_num == 5) {
		
		font_num = 0;
	
		}
		
		var type_h = "favorite_border";
		
		var type_s = "";
		
		if (element[5] > 0) {
			
			type_h = "favorite";
			
			type_s = "color: red";
		}
		
		
		// Try to decode if not leave:

		var new_cita = '<div id="content_text_cita"><div id="cita_bar"><div id="top_bar_left"></div><div id="top_bar_right"><i id="s' + element[0] + '" class="material-icons top_bar_icon share sharey" data-text="' + atob(element[1]) + '" data-author="' + element[2] + '">share</i><i style="display: none;" id="l' + element[0] + '" class="material-icons top_bar_icon like likey" onclick="like_cita(this)" data-likes="' + element[5] + '" style = "' + type_s + '">' + type_h + '</i></div></div><div id="cita_container"><p id="cita_context" style="font-family: ' + fonts[font_num] + '; font-size: ' + element[4] + 'px;"><i>' + atob(element[1]) + '</i></p></div><div id="cita_plain_container"><div id="cita_about_profile"><div id="content_boundingbox"><p id="author_name_text_c" onclick="more_about(\'' + element[2] + '\')">' + element[2] + '</p><img id="author_photo_c" src="' + element[3] + '" onclick="more_about(\'' + element[2] + '\')"></div></div></div></div>';
		
		
		font_num = font_num + 1;
		
		console.log("Les citacions han estat carregades");
		
		document.getElementById("cites_carregades").insertAdjacentHTML('beforeend', new_cita);
		
	}
	
	// Now let's hide the spinner and show the loaded cards
	
	spinner.style.display = "none";
	
	citation_array = [];
	
	reached = false;
	
	
	
	if (remaining_citations < 4) {
		
		document.getElementById("loading_ring_defi").style.display = "none";
		
	}
	
	
	tippy('.likey', {
        
		   
           allowHTML: true,
		   interactive: true,
		   content(reference) {                              
           const likes = reference.getAttribute('data-likes');
           return '<p id="like_number_t">' + likes + '</p>';
        
		   }
		  
       }); 
	
	
	
	
	
	
	tippy('.sharey', {
        
		  
          allowHTML: true,
		  interactive: true,
		  content(reference) {                              
          const cita = reference.getAttribute('data-text');
		  const author = reference.getAttribute('data-author');
          
		  return '<div id="template_share"><i id="sharey" class="fa fa-facebook-square" data-text="' +  cita + '" data-author="' + author + '" onclick="share_with_facebook(this);"></i><i id="sharey" class="fa fa-twitter-square" data-text="' +  cita + '" data-author="' + author + '" onclick="share_with_twitter(this);"></i><i id="sharey" class="fa fa-envelope-square" data-text="' +  cita + '" data-author="' + author + '" onclick="share_with_email(this);"></i></div>';
        
		   }
		 
		  
      }); 
		
		
	
	
	
	document.getElementById("loading_cites_spinner_lower").style.display = "";
	
	cites.style.display = "";
		

	
}
		

var reached = false;

function citations_next() {
	
	
	// LOAD ALL THE CITATIONS AND SET THE END TO FALSE
	
	
	console.log("starting 2 phase");
	
	console.log(remaining_citations);
	
	
	if (remaining_citations >= 4) {
		
		target = 4;
		
		get_citations(remaining_citations);
		
	}
	
	else if (remaining_citations > 0) {
		
		//target = remaining_citations;
		
		//get_citations(remaining_citations);
		
		document.getElementById("loading_ring_defi").style.display = "none";
	}
	
	else {
		
		// if 0 remaining citations
		
		document.getElementById("loading_ring_defi").style.display = "none";
	}
	
	
	
	
	
	
	
	//reached = false;
}	
	
	
	

	
function stop() {

	alert("Stopit!");
}





function chunkArray(myArray, chunk_size){
    var index = 0;
    var arrayLength = myArray.length;
    var tempArray = [];
    
    for (index = 0; index < arrayLength; index += chunk_size) {
        myChunk = myArray.slice(index, index+chunk_size);
        // Do something if you want with the group
        tempArray.push(myChunk);
    }

    return tempArray;
}




// MORE ABOUT


function more_about(what) {

	
	/*console.log(what);
	
	cites_return.style.display = "";
	
	var query = what;
	
	cites.style.display = "none";
	
	spinner.style.display = "";

	get_all_at_once(query);*/

	
}


/*
var author_all = [];

function get_all_at_once(who) {
	
	
	var xmlhttp = new XMLHttpRequest();
    
	xmlhttp.onreadystatechange = function() {
     
		if (this.readyState == 4 && this.status == 200) {
			
			
			var dict_general = [];
		
			var r = this.responseText;
			
			r = r.split("/-/-/");
			
			r.shift();
			
			r = chunkArray(r, 6);
			
			console.log(r);
			
			citation_creator(r);
			
			
			/*
			
			
			
			
			for (object in s) {
				
				var r = object;
				
				r = r.split("/-/-/");
				
				dict_general.push(r);
				
		
			}
			
			console.log(dict_general);

			
		}
    
	};
    
	xmlhttp.open("GET", "php/cites_author.php?author=" + who, true);
    
	xmlhttp.send();
	
}
	
	
*/	
	
	
	
	
		

function share_with_facebook(ele) {
	
    var cita = ele.getAttribute("data-text");
	
	var author = ele.getAttribute("data-author");
	
	window.open("https://www.facebook.com/share.php?u=http://anemllegint.com&quote=" + cita + "%0A- " + author, '_blank')
	
	
}

function share_with_twitter(ele) {
	
	var cita = ele.getAttribute("data-text");
	
	var author = ele.getAttribute("data-author");
	
	window.open("https://twitter.com/intent/tweet?text=" + cita + "%0A- " + author, '_blank');
	
}

function share_with_email(ele) {
	
	var cita = ele.getAttribute("data-text");
	
	var author = ele.getAttribute("data-author");
	
	window.open("mailto:''?body='" + cita + "<br>- " + author);
}







// APARTAT LLIBRES


// 1- WE GET THE LAST ID

var last_id_l = "fail";

var remaining_citations_llibres;


function load_llibres() {
	
	var xmlhttp = new XMLHttpRequest();
    
	xmlhttp.onreadystatechange = function() {
     
		if (this.readyState == 4 && this.status == 200) {
			

			
			if (this.responseText == "fail") {
				
				console.log("error there!!");
			}
			
			else {
				
				last_id_l = this.responseText;
				
				remaining_citations_llibres = last_id_l;
				
				console.log("Hem trobat el last ID");
				
				get_llibres(remaining_citations_llibres);
				
			}
	 
		}
    
	};
    
	xmlhttp.open("GET", "php/llibrelastid.php" , true);
    
	xmlhttp.send();
	
}


// 2- WE LOOK FOR THE NUMBER OF BOOKS

function get_llibres(number) {
	
	// SET THE BOOKS COVERS
	
	if (number > 4) {
		
		console.log("going on");
		
		get_cover(number);
	}
	
	else {
		
		// CHANGE IF WANTED
		
		console.log("NOT GOING TO SHOW UNTIL 4 ARE HERE");
	}
}


// 3- WE GET AN INDIVIDUAL BOOK COVER

function get_cover(id) {
	
	// GET THE COVER OF A BOOK AND RETURN IT'S LINK using Ajax Request
	
	var xmlhttp = new XMLHttpRequest();
    
	xmlhttp.onreadystatechange = function() {
     
		if (this.readyState == 4 && this.status == 200) {
			
			
			var r4 = this.responseText;
			
			manage_covers(r4, id)
	
		}
    
	};
    
	xmlhttp.open("GET", "php/getcover.php?id=" + id, true);
    
	xmlhttp.send();
	
	
}


var epoch = true;

var resting_bk;

var target_bk = 4;

var coverlist = [];

function manage_covers(result, id) {
	
	
	console.log("Completed");

	resting_bk = id - 1; // 1
	
	target_bk = target_bk -1; // 0
	
	
	if (target_bk == 0) { // NO
		
		// SHOW ALL
		
		coverlist.push(result); // ADD
		
		console.log("HEM ACABAT LINIA");
		
		show_covers(coverlist);
	
	}
	
	else {
		
		
		// Si no hem acabat encara la línia
		
		if (resting_bk >= target_bk) {  // 2 >= 1
		
		
			// Si encara en queden prous 
			
			coverlist.push(result); // ADD
			
			get_cover(resting_bk); // NEW COVER
	
	}
	
	else {
		
		// EXCEPTIONAL LINE NOT COMPLETE
		
		console.log("NO HEM ACABAT 2A LINIA");
	}
		
		
		
	}
	
	
	
	
	
	/*if (target_bk == 0) {
		
		console.log("All is done! :)");
	}
	
	else {
		
		
	*/
}



function show_covers(list) {
	
	console.log(list);
	
	if (epoch == true) {
		
	document.getElementById("b_1_i").src = "http://external.timefactories.com/plataforma_anemllegint/useruploads/" + list[0];
	
	document.getElementById("b_2_i").src = "http://external.timefactories.com/plataforma_anemllegint/useruploads/" + list[1];
	
	document.getElementById("b_3_i").src = "http://external.timefactories.com/plataforma_anemllegint/useruploads/" + list[2];
	
	document.getElementById("b_4_i").src = "http://external.timefactories.com/plataforma_anemllegint/useruploads/" + list[3];
		
	coverlist = [];
	
	spinner.style.display = "none";
	
	llibres.style.display = "";
		
	}
	
	
	
	
	else {
		
		// LOADING A NEW LINE
		
		console.log("newline");
		
		document.getElementById("bar_return_new_2").style.display = "";
	
		document.getElementById("loading_cites_spinner_books").style.display = "none";
		
		var new_books = '<div id="books_cover_center"> <ul class="list-inline" style="display:;"> <li class="book" onclick="open_book(this);"> <img id="b_1_i" src="http://external.timefactories.com/plataforma_anemllegint/' + list[0] + '" /> </li> <li class="book" onclick="open_book(this);"> <img id="b_2_i" src="http://external.timefactories.com/plataforma_anemllegint/' + list[1] + '" /> </li> <li class="book" onclick="open_book(this);"> <img id="b_3_i" src="http://external.timefactories.com/plataforma_anemllegint/' + list[2] + '" /> </li> <li class="book" onclick="open_book(this);"> <img id="b_4_i" src="http://external.timefactories.com/plataforma_anemllegint/' + list[3] + '" /> </li> </ul> </div>';
		
		
		if (resting_bk < 4) {
			
			document.getElementById("bar_return_new_2").style.display = "none";
		}
		
		document.getElementById("llibres_carregats").insertAdjacentHTML('beforeend', new_books);
		
	}

	
	
}



function more_books_load() {
	
	// First show loader!
	
	document.getElementById("bar_return_new_2").style.display = "none";
	
	document.getElementById("loading_cites_spinner_books").style.display = "";
	
	// Now check if are available
	
	target_bk = 4;
	
	if (resting_bk >= target_bk) {
		
		// If books are available
		
		console.log("available");
		
		epoch = false;
		
		get_cover(resting_bk);
	}
	
	else {
		
		// If column not there
		
		document.getElementById("loading_cites_spinner_books").style.display = "none";
		
		// Get the snackbar DIV
  
		var x = document.getElementById("snackbar");

  
		// Add the "show" class to DIV
  
		x.className = "show";

  
		// After 3 seconds, remove the show class from DIV
  
		setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
		
		
		
	}
	
}




function open_book(element) {
	
	var img_source = element.children[0].src;
	
	// Now let's make an AJAX request to get the book information! 
	
	
	var xmlhttp = new XMLHttpRequest();
    
	xmlhttp.onreadystatechange = function() {
     
		if (this.readyState == 4 && this.status == 200) {

			instant_book(this.responseText.split("/-/-/"));
	
		}
    
	};
    
	xmlhttp.open("GET", "php/getbook.php?link=" + img_source.replace("http://external.timefactories.com/plataforma_anemllegint/useruploads/", ""), true);
    
	xmlhttp.send();
	
	
	
	// NOW GET THE IMAGE, SET A LOADING AND SAY 'select WHERE cover = image' 
}


function instant_book(info_list) {
	
	console.log(info_list);
	
	// POSEM EL LLIBRE SKELETON LOADER
	
	llibres.style.display = "none";
	
	scroll(0,0);
	
	document.getElementById("loading_book_skeleton").style.display = "";
	
	llibres_inner.style.display = "";
	
	// POSEM EL TÍTOL
	
	document.getElementById("font_title").innerHTML = info_list[0] + '<b id="font_author">&nbsp; de ' + info_list[1] +  '</b>';
	
	// POSEM LA DATA


	document.getElementById("date").innerHTML = info_list[3].replaceAll("-", "/");
	
	// POSEM EL CONTINGUT
	
	document.getElementById("text_plain_plain").innerHTML = atob(info_list[2]); 
	
	// POSEM EL REDACTOR
	
	document.getElementById("author_name_text").innerHTML = info_list[4];
	
	// POSEM IMATGE REDACTOR
	
	document.getElementById("author_photo").src = info_list[5];
	
	// POSEM IMATGE PORTADA
	
	document.getElementById("book_image_cover").src = "http://external.timefactories.com/plataforma_anemllegint/useruploads/" + info_list[6];
	
	// POSEM PADDING
	
	document.getElementById("spacebox_userpreferences").style.height = info_list[7] + "px";
	
	// POSEM AMAZON COM A DATA-AMAZON
	
	document.getElementById("book_image_cover").setAttribute("data-amazon", info_list[8]);
	
	
	// MOSTREM EL LLIBRE REAL
	
	setTimeout(function(){ 
		
		
	console.log("Closing Instantbook 2.0");
	
	document.getElementById("loading_book_skeleton").style.display = "none";
	
	document.getElementById("llibre_main").style.display = "";
	
	
	}, 500);
	
	
	
}

