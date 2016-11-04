<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/js/materialize.min.js"></script>
<script>
    function scrollAnimate(link) {
    $('html, body').animate({
              scrollTop: $(link).offset().top
        }, 1000);
        $('.button-collapse').sideNav('hide');
    };
    
    function scroll(link){
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
        console.log('');
        console.log("%cDigital Artist Prateek", "color: white; font-size:36px; border : 2px solid black; margin:30%; padding:10px;border-radius:3px; background:#F44336;"); 

    });
</script>

