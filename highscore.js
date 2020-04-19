var urlParams = new URLSearchParams(window.location.search); // grabbing url from search
var score = urlParams.get('score');

// add the score to the div
var scoreDiv = document.getElementById('score');
scoreDiv.innerHTML = score + " out of 5.";

document.getElementById('clear-score').addEventListener('click', function() {
    score = undefined;
    scoreDiv.innerHTML = "No scores available.";
})
