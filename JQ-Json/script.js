//https://raw.githubusercontent.com/chriscanipe/exercise-two/master/js/tv_movies.json
let moviesARR = [];


$(() => {

    $("#loadData").on("click", function (event) {
        $.getJSON("https://raw.githubusercontent.com/chriscanipe/exercise-two/master/js/tv_movies.json",
            function (result) {
                $.each(result.movies, function (index, movie) {
                    // console.log(movie);
                    addMovie(movie)
                });
                showMovies(moviesARR);
                // console.log(moviesARR);
            });
    });



});

$("#saveMovie").on("click", function () {
    let movie = $("#addMovieName").val();

    // console.log(movie);
    addMovie(movie);
    showMovies(moviesARR);
    $("#closeModal").click();
});

$("#closeModal").on("click", function () {
    $("#addMovieName").val("");
});

$("#movieList").on("click", ".btn-danger", function (event) {
    let indexInArr = $(this).closest("tr").children()[0].innerText - 1;
    // console.log(indexInArr);

    moviesARR.splice(indexInArr, 1);
    showMovies(moviesARR);
});


$("#movieList").on("click", ".btn-warning", function (event) {

    let indexInArr = $(this).closest("tr").children()[0].innerText - 1;
    let oldValue = moviesARR[indexInArr];
    $(this).closest("tr").children()[1].innerHTML = `<input type='text' class='inlineEdit' value='${oldValue}'>`;
    $(this).closest("tr").children()[2].innerHTML = '<button type="button" class="btn btn-success inlineSave">Save</button>';
});



$("#movieList").on("click", ".inlineSave", function(event){
    let newVal = $(".inlineEdit").val();
    // console.log(newVal);
    let indexInArr = $(this).closest("tr").children()[0].innerText - 1;
    moviesARR[indexInArr]=newVal;
    showMovies(moviesARR);   
});


$('#serchBox').on('keydown', function (event) {
    if (event.keyCode == 13) {
        let text = $(this).val();
        console.log(text);
        // console.log('Enter was pressed');
        let serchedMoviesARR = moviesARR.filter((movie) => {
            if (movie.indexOf(text) !== -1) {
                return true;
            }
            return false;
        });
        showMovies(serchedMoviesARR);
    }
});

$("#sort").on("click", function (event) {
    moviesARR.sort();
    showMovies(moviesARR);
});


function showMovies(arrOfMovies) {
    let container = $("#movieList").html("");
    $.each(arrOfMovies, function (index) {
        container.append(`
        <tr>
            <th class="text-center">${index + 1}</th>
            <th class="text-center">${arrOfMovies[index]}</th>
            <th class="text-center">
                <button type="button" class="btn btn-warning">Edit</button> 
            </th>
            <th class="text-center">
                <button type="button" class="btn btn-danger">Delete</button> 
            </th>
        </tr>
        `);
    });

    let result = $("#movieLength").text(arrOfMovies.length);
}//End function showMovies

function addMovie(movieName) {
    moviesARR.push(movieName);
} //End function addMovie





