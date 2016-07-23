/* ---- Terminal Window Configurtaion ---- */
var directory = 'content/';

var login = '<span class= "user"><b>dap</b>@askprateek.com:~ </span>';
var dir_list = [];

//$(document).ready(function(){
function getdir(dir){
  $.ajax({
    url: dir,
    async: false,
    success: function(data){
      var folder;
      $(data).find("td > a").each(function(){
        folder=$(this).attr('href');
        //console.log(folder);
        dir_list.push(folder);
        //console.log(folder);
      });
    }
  });
};


function appendlist(list){
  list.shift();
  files= list.toString().replace(/,/g,' ');
  $('#term').append('<p>' +files+ '</p>');
};

function appendoutput(file_content){
  $('#term').append('<p>' + file_content + '<p/>');
}

getdir(directory);
appendlist(dir_list);

function appendCommand(){
  //var login = document.getElementById('login').innerHTML;
  var command = document.getElementById('command').value;
  console.log(login);
  console.log(command);
  $('#term').append('<p>'+ login + " $ "+ command + '</p>' );
};


function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                appendCommand();
                appendoutput(allText);
                var objDiv = document.getElementById("term");
                objDiv.scrollTop = objDiv.scrollHeight;
            }
        }
    }
    rawFile.send(null);
}



/*   Tab Key Funtionality    */
command.addEventListener("keydown", function (e) {
  /*  ALT - 18, TAB - 9 , CTRL - 17  */
  if (e.keyCode === 9) {
    e.preventDefault();
    //console.log(files);

    var value = document.getElementById('command').value;
    var user_input= value.split(" ");
    var files = dir_list;
    console.log(user_input);
    var i=0; var file=user_input[0] + " ";
    if (user_input[1].length){
      for (i=0; i <files.length; i++){
        if ( files[i].startsWith(user_input[1])  ){
          file += files[i];
        }
      }

    }
    if (file.length){
      document.getElementById('command').value = file;
    }
  }
});

//console.log(cat.about);

/*  ENTER Key Press | Funtionality of Commands   */
command.addEventListener("keydown", function (e) {
  /*  ALT - 18, TAB - 9 , CTRL - 17 , ENTER - 13 */
  if (e.keyCode === 13) {
    e.preventDefault();
    var value = document.getElementById('command').value;
    var user_input= value.split(" ");
    readTextFile("./content/about.txt");

  //  console.log(user_input);

  }
});





/* ---- particles.js config ---- */

particlesJS("aa_particles", {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});


/* ---- stats.js config ----

var count_particles, stats, update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function() {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update); */
var cat = {
  'about' : "20, B.Tech - CE, Web|Graphics Designer|Developer",
  'contact': "Email - dap@askprateek.com ",
  'projects': 'Home Automation System - Hackon - Treasure Hunt - Graph Plotter - URL Shortner',
  'skills' : 'Python - Django - HTML - CSS - JS - Ruby on Rails - Adobe Photoshop',
}
