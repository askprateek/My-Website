/* ---- Terminal Window Configurtaion ---- */
var directory = 'content/';
var path='';
var login = '<span class="user"><b>dap</b>@askprateek.com:~ ';
var bash = document.getElementById('root').innerHTML;

//$(document).ready(function(){
function getdir(dir){
  var dir_list = [];
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
  return dir_list;
};


function appendlist(list){
  list.shift();
  files= list.toString().replace(/,/g,' ');
  $('#term').append('<p>' +files+ '</p>');
};

function appendoutput(file_content){
  $('#term').append('<p>' + file_content + '<p/>');
}

;
appendlist(getdir(directory));

function appendCommand(command){
  var span = document.getElementById('root').innerHTML;
  $('#term').append('<p><span class="user">' + span + '</span> $ ' + command + '</p>' );

};

function changeCommand(path){
  document.getElementById('root').innerHTML = bash + path;
};

/* Clear Screen, Input, AutoScroll */
function clearInput(){
  document.getElementById('command').value="";
};

function clearScreen(){
  document.getElementById('term').innerHTML="";
};

function autoscroll(){
  var objDiv = document.getElementById("term");
  objDiv.scrollTop = objDiv.scrollHeight;
};

/* Read File  */
function readTextFile(file, command)
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
                appendCommand(command);
                appendoutput(allText);
                autoscroll();

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
    var files = getdir(directory);
    //console.log(files);
    console.log(user_input);
    var i=0; var file=user_input[0] + " ";
    if (user_input[1].length){
      for (i=0; i <files.length; i++){
        if ( files[i].startsWith(user_input[1])  ){
          file += files[i];
          break;
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
    var command = document.getElementById('command').value;
    var user_input= command.toLowerCase().split(" ");
    switch (user_input[0]) {
      case 'ls':
        appendCommand(command);
        appendlist(getdir(directory));
        break;

      case 'cat':
      if(user_input[1].endsWith('txt')){
        var file_url = directory + user_input[1];
        readTextFile(file_url, command);
      }
      else{

      }

        break;

      case 'clear':
        clearScreen();
        break;

      case 'cd':
        if (user_input[1].endsWith('txt')){
          appendCommand(command);
          $('#term').append('<p>cd: '+user_input[1]+': Not a directory</p>');
        }
        else if ( (user_input[1]=='..') || (user_input[1]=='/') ){
          directory = 'content/';
          path ='';
          appendCommand(command);
          changeCommand(path);
        }
        else{
          directory+=user_input[1];
          path=user_input[1];
          //console.log(path);
          appendCommand(command);
          changeCommand(path);
        }
        break;

      default:
      $('#term').append('<p>Illegal Command</p>');
        break;

    }
    clearInput();
    autoscroll();

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
