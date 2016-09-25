<script src='//cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js'></script>
<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/js/materialize.min.js"></script>
<script src="terminal/js/server-config.js"></script>
<script src="terminal/js/index.js"></script>
<script src="terminal/js/work.js"></script>
<script>
    function scrollAnimate(link) {
    $('html, body').animate({
              scrollTop: $(link).offset().top
        }, 500);               
    };

    $(document).ready(function() { 
        var ids=[];
        var sections = document.getElementsByTagName('section');
        var sec_len = sections.length;
        var i =0;
        for (i=0; i<sec_len; i++){
            ids.push('#'+sections[i].id);
        }

        
        $(".button-collapse").sideNav();
        var bodyheight = $(window).height();
        var docheight = $(document).height();
        console.log(docheight);
        console.log(bodyheight);
        
        $(window).scroll(function(){
            var top = $(window).scrollTop();
//          console.log('Scroll');
            clearTimeout( $.data( this, "scrollCheck" ) );
            $.data( this, "scrollCheck", setTimeout(function() {
                var exact = top/bodyheight;
                var round = parseInt(exact);
                if (exact-round<0.5){
                    console.log(ids[round]);
                    scrollAnimate(ids[round]);
                }
                else{
                    console.log(ids[round+1]);
                    scrollAnimate(ids[round+1]);
                }
                
    			}, 250) );
            
            
        })
        
    });
</script>
