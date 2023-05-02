$(document).ready(function () {

    function data_provider() {
        var user_input = $(".dish-input").val()
        var url = "https://www.themealdb.com/api/json/v1/1/search.php?s=" +user_input
        $.get(url)
            .done(function (data) {
                $(".spinner").hide()
                var my_meals = data.meals
                $(".thumbnail").attr("src" , my_meals[0].strMealThumb )
                $(".dish-region").text(my_meals[0].strArea)
                $(".dish-category").text(my_meals[0].strCategory)
                $(".result-text").text(my_meals[0].strInstructions)
                for (var i = 1; i <= 20; i++) {
                    var ingredient = my_meals[0]["strIngredient" + i];
                    $(".list-1").append("<li>" + ingredient + "</li>");
                }    
                $(".list-1 li:empty").remove();
                $(".ingridient-thumbnail-section").fadeIn("fast")
            })
    }
    $(".search-btn").click(function(){
        $(".spinner").show()
        data_provider()
    });
    $(".dish-input").keydown(function(e){
        if(e.keyCode == 13){
            $(".spinner").show()
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