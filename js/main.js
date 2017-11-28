(function () {

    function old_school() {
        var ul_el = document.getElementById("ul_test");
        var test = ul_el.getAttribute('test');
        console.log('old_school',test)
    }

    function jquery_school() {
        var test = $("#ul_test").attr('test');
        console.log("with jquery", test);
    }

    var eval_str = function () {
        var self=this;
        var regex_letter = /^[a-zA-Z\s]*$/;
        var only_letters = regex_letter.test($(self).val());
        console.log("eval regex", only_letters);
        var parent=$(self).parent();
        if(only_letters){
            parent.children('span:last-child').remove()
        }else{
            if(!parent.children('span:last-child').length)
                $(self).after('<span>No pos que mal</span>');
        }
    };

    $(document).ready(function(){
        console.log("Hola, el documento esta listo");
        old_school();
        jquery_school();

        $("#close_dialog").click(function (e) {
            e.preventDefault();
            $("#span_alert").toggle();
            $("#close_dialog").html("Switch text");
        });

        /** execute on the blur event **/
        $("#nombre").change(eval_str);

        /** execute after press some key **/
        $("#apellido").keyup(eval_str);

        $("#link_prevent").click(function (e) {
            e.preventDefault();
            var target = $(".normal");
            if(target.hasClass("dio"))
                console.log("Tiene dio");
            target.toggleClass("dio")
        })

    });

})();
