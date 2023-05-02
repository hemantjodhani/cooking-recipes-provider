$(document).ready(function () {

    function data_provider() {
        var user_input = $(".dish-input").val()
        var url = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + user_input
        $.get(url)
            .done(function (data) {
                hide_loader()
                var my_meals = data.meals
                $(".thumbnail").attr("src" , my_meals[0].strMealThumb )
                $(".dish-region").text(my_meals[0].strArea)
                $(".dish-category").text(my_meals[0].strCategory)
                var replaced_reipe = my_meals[0].strInstructions.replaceAll("\n", "<br> <br> ");
                var video_url = my_meals[0].strYoutube.replace("watch?v=", "embed/")
                $("iframe").attr("src" , video_url) 
                $(".result-text").html(replaced_reipe)
                for (var i = 1; i <= 20; i++) {
                    var ingredient = my_meals[0]["strIngredient" + i];
                    $(".list-1").append("<li>" + ingredient + "</li>");
                }    
                $(".list-1 li:empty").remove();
                $(".ingridient-thumbnail-section").fadeIn("fast")
            })
    }
    function show_loader(){
        $(".loading-animation").css("display", "flex");
    }
    function hide_loader(){
        $(".loading-animation").hide();
    }
    $(".search-btn").click(function(){
        show_loader()
        data_provider()
    });
    $(".dish-input").keydown(function(e){
        if(e.keyCode == 13){
            show_loader()
            data_provider()
        }
    });
    $(".view-button").click(function(){

        $(".ingridient-thumbnail-section").fadeOut("fast")
        $(".recipe-section").fadeIn("fast")
    });
    $(".windows-waala-btn div span").click(function(){

        $(".ingridient-thumbnail-section").fadeIn("fast")
        $(".recipe-section").fadeOut("fast")
    });
});