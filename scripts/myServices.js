$(function(){

    $("#services").validate({
        rules: {
            service: {
                required: true,
                service: true
            }
        }
    });

});