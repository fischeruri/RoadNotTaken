// JavaScript for quiz functionality
document.addEventListener("DOMContentLoaded", function() {
  // Add event listener to form submission
  document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve selected answers
    var answers = [];
    var radios = document.querySelectorAll("input[type='radio']:checked");
    radios.forEach(function(radio) {
      answers.push(radio.value);
    });

    // Check answers
    var correctAnswers = ["a", "b", "b", "c", "d"];
    var score = 0;
    var questionElements = document.querySelectorAll("h3");
    questionElements.forEach(function(questionElement, index) {
      var feedbackElement = document.createElement("p");
      if (answers[index] === correctAnswers[index]) {
        feedbackElement.classList.add("correct-answer");
        feedbackElement.textContent = "✓ Correct!";
        score++;
      } else {
        feedbackElement.classList.add("incorrect-answer");
        feedbackElement.textContent = "✗ Incorrect. The correct answer is: " + correctAnswers[index].toUpperCase();
      }
      questionElement.parentNode.insertBefore(feedbackElement, questionElement.nextSibling);
    });

    // Display total score
    var totalScoreElement = document.createElement("p");
    totalScoreElement.textContent = "Total Score: " + score + " out of " + correctAnswers.length;
    totalScoreElement.classList.add("correct-answer");
    document.querySelector("form").appendChild(totalScoreElement);

    // Disable form submission after checking answers
    document.querySelector("input[type='submit']").disabled = true;
  });
});