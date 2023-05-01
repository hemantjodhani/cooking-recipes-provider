$(document).ready(function () {
        // return
    function data_provider() {
        var user_input = $(".dish-input").val()
        var url = "https://www.themealdb.com/api/json/v1/1/search.php?s=" +user_input
        $.get(url)
            .done(function (data) {
                
                var my_meals = data.meals
                $(".result-text").text(my_meals[0].strInstructions)
                // console.log(my_meals[0].strInstructions)
            })
    }
    $(".search-btn").click(function(){
        
        data_provider()
    });
    $(".dish-input").keydown(function(e){
        if(e.keyCode == 13){
            data_provider()
        }
    }

    )
});