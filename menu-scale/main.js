document.addEventListener('DOMContentLoaded', function () {

    var menu = document.querySelector('#menu');
    var menuFlag = 'chuathunho';

    window.addEventListener('scroll' , function(){
        if(this.pageYOffset >= 50 && menuFlag === 'chuathunho'){
            menu.classList.add('thunho');
            menuFlag = 'dathunho';
        }

        if(this.pageYOffset < 50 && menuFlag === 'dathunho'){
            menu.classList.remove('thunho');
            menuFlag = 'chuathunho';
        }
    });

}, false);