var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

        var ids=[];
        var sections = document.getElementsByTagName('section');
        var sec_len = sections.length;
        var i =0;
        for (i=0; i<sec_len; i++){
            ids.push('#'+sections[i].id);
        }
        var bodyheight = $(window).height();
        var docheight = $(document).height();
        console.log(docheight);
        console.log(bodyheight);
        var win_width = $(window).width();
        if (!isMobile.any()){
            $(window).scroll(function(){
                var top = $(window).scrollTop();
//          console.log('Scroll');
                clearTimeout( $.data( this, "scrollCheck" ) );
                $.data( this, "scrollCheck", setTimeout(function() {
                    var exact = top/bodyheight;
                    var round = parseInt(exact);
                    if (exact-round<0.5){
//                        console.log(ids[round]);
                        scrollAnimate(ids[round]);
                    }
                    else{
//                        console.log(ids[round+1]);
                        scrollAnimate(ids[round+1]);
                    }
                
    			     }, 250) );
        })
        }