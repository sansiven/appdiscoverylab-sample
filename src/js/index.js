$(document).ready(function(){
    let addSlider = {

        // well if in the time of working I dont have access to their site but a way to add JS file then, 
        // I would initialise slick slider here and then add the functionlaity.

        addSlickSlider: function(){
            $('.sb-slider').slick({
                autoplay: true,
                arrows: true,
                dots: true,

            })
        },

        init: function(){
            var obj =this;
            obj.addSlickSlider()
        }

    }.init();
});