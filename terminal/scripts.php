<script src='//cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js'></script>
<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/js/materialize.min.js"></script>
<!--<script src="terminal/js/server-config.js"></script>-->
<script src="terminal/js/index.js"></script>
<script src="terminal/js/work.js"></script>
<script src="terminal/js/dap-scroll.js"></script>
<script>
    function scrollAnimate(link) {
    $('html, body').animate({
              scrollTop: $(link).offset().top
        }, 1000);
    };
    
    function scroll (link){
        $('body').addClass('scale');
        sleep(500).then(()=>{
             scrollAnimate(link);
        })
       
        sleep(2100).then(()=>{
            $('body').removeClass('scale');
        })
    }
    
    function sleep (time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }
    $(document).ready(function() { 
        $(".button-collapse").sideNav();
        
    });
</script>
