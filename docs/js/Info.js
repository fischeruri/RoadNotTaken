var grade = 0.0;
function resetTextColors() {
    // Reset question 1
    document.getElementById('LQ1T').classList.remove("green");
    document.getElementById('LQ1T').classList.add("poemText");
    document.getElementById('LQ1F1').classList.remove("red");
    document.getElementById('LQ1F1').classList.add("poemText");
    document.getElementById('LQ1F2').classList.remove("red");
    document.getElementById('LQ1F2').classList.add("poemText");
    document.getElementById('LQ1F3').classList.remove("red");
    document.getElementById('LQ1F3').classList.add("poemText");

    // Reset question 2
    document.getElementById('LQ2T').classList.remove("green");
    document.getElementById('LQ2T').classList.add("poemText");
    document.getElementById('LQ2F1').classList.remove("red");
    document.getElementById('LQ2F1').classList.add("poemText");
    document.getElementById('LQ2F2').classList.remove("red");
    document.getElementById('LQ2F2').classList.add("poemText");
    document.getElementById('LQ2F3').classList.remove("red");
    document.getElementById('LQ2F3').classList.add("poemText");

    // Reset question 3
    document.getElementById('LQ3T').classList.remove("green");
    document.getElementById('LQ3T').classList.add("poemText");
    document.getElementById('LQ3F1').classList.remove("red");
    document.getElementById('LQ3F1').classList.add("poemText");
    document.getElementById('LQ3F2').classList.remove("red");
    document.getElementById('LQ3F2').classList.add("poemText");
    document.getElementById('LQ3F3').classList.remove("red");
    document.getElementById('LQ3F3').classList.add("poemText");

    // Reset question 4a
    document.getElementById('Q4a').style.borderColor = "";
    document.getElementById('Q4a').style.color = "";

    // Reset question 4b
    document.getElementById('Q4b').style.borderColor = "";
    document.getElementById('Q4b').style.color = "";

    // Reset question 4c
    document.getElementById('Q4c').style.borderColor = "";
    document.getElementById('Q4c').style.color = "";

    // Reset question 4d
    document.getElementById('Q4d').style.borderColor = "";
    document.getElementById('Q4d').style.color = "";

    // Reset question 5
    document.getElementById('LQ5T1').classList.remove("green");
    document.getElementById('LQ5T1').classList.add("poemText");
    document.getElementById('LQ5T2').classList.remove("green");
    document.getElementById('LQ5T2').classList.add("poemText");
    document.getElementById('LQ5F1').classList.remove("red");
    document.getElementById('LQ5F1').classList.add("poemText");
    document.getElementById('LQ5F2').classList.remove("red");
    document.getElementById('LQ5F2').classList.add("poemText");
}
function StartQuiz() {
    document.getElementById("needHide").style.display = "none";
    document.getElementById("tableTest").style.display = "table";
    document.getElementById("tableSubmit").style.display = "table";
    document.getElementById("tableGrade").style.display = "none";
    resetTextColors()
    grade = 0.0;
}
function EndQuiz() {
    document.getElementById("needHide").style.display = "table";
    document.getElementById("tableTest").style.display = "none";
}

function chkQuiz() {
    // question 1 check
    if (document.getElementById('Q1T').checked) {
        grade++;
        document.getElementById('LQ1T').classList.remove("poemText");
        document.getElementById('LQ1T').classList.add("green");
    }
    else if (document.getElementById('Q1F1').checked) {
        document.getElementById('LQ1T').classList.remove("poemText");
        document.getElementById('LQ1T').classList.add("green");
        document.getElementById('LQ1F1').classList.remove("poemText");
        document.getElementById('LQ1F1').classList.add("red");
    }
    else if (document.getElementById('Q1F2').checked) {
        document.getElementById('LQ1T').classList.remove("poemText");
        document.getElementById('LQ1T').classList.add("green");
        document.getElementById('LQ1F2').classList.remove("poemText");
        document.getElementById('LQ1F2').classList.add("red");
    }
    else if (document.getElementById('Q1F3').checked) {
        document.getElementById('LQ1T').classList.remove("poemText");
        document.getElementById('LQ1T').classList.add("green");
        document.getElementById('LQ1F3').classList.remove("poemText");
        document.getElementById('LQ1F3').classList.add("red");
    }

    // question 2 check
    if (document.getElementById('Q2T').checked) {
        grade++;
        document.getElementById('LQ2T').classList.remove("poemText");
        document.getElementById('LQ2T').classList.add("green");
    }
    else if (document.getElementById('Q2F1').checked) {
        document.getElementById('LQ2T').classList.remove("poemText");
        document.getElementById('LQ2T').classList.add("green");
        document.getElementById('LQ2F1').classList.remove("poemText");
        document.getElementById('LQ2F1').classList.add("red");
    }
    else if (document.getElementById('Q2F2').checked) {
        document.getElementById('LQ2T').classList.remove("poemText");
        document.getElementById('LQ2T').classList.add("green");
        document.getElementById('LQ2F2').classList.remove("poemText");
        document.getElementById('LQ2F2').classList.add("red");
    }
    else if (document.getElementById('Q2F3').checked) {
        document.getElementById('LQ2T').classList.remove("poemText");
        document.getElementById('LQ2T').classList.add("green");
        document.getElementById('LQ2F3').classList.remove("poemText");
        document.getElementById('LQ2F3').classList.add("red");
    }

    // question 3 check
    if (document.getElementById('Q3T').checked) {
        grade++;
        document.getElementById('LQ3T').classList.remove("poemText");
        document.getElementById('LQ3T').classList.add("green");
    }
    else if (document.getElementById('Q3F1').checked) {
        document.getElementById('LQ3T').classList.remove("poemText");
        document.getElementById('LQ3T').classList.add("green");
        document.getElementById('LQ3F1').classList.remove("poemText");
        document.getElementById('LQ3F1').classList.add("red");
    }
    else if (document.getElementById('Q3F2').checked) {
        document.getElementById('LQ3T').classList.remove("poemText");
        document.getElementById('LQ3T').classList.add("green");
        document.getElementById('LQ3F2').classList.remove("poemText");
        document.getElementById('LQ3F2').classList.add("red");
    }
    else if (document.getElementById('Q3F3').checked) {
        document.getElementById('LQ3T').classList.remove("poemText");
        document.getElementById('LQ3T').classList.add("green");
        document.getElementById('LQ3F3').classList.remove("poemText");
        document.getElementById('LQ3F3').classList.add("red");
    }

    // question 4a check
    if (document.getElementById('Q4a').value == "true") {
        document.getElementById('Q4a').style.borderColor = "forestgreen";
        document.getElementById('Q4a').style.color = "forestgreen";
        grade += 0.25;
    }
    else {
        document.getElementById('Q4a').style.borderColor = "red";
        document.getElementById('Q4a').style.color = "red";
    }

    // question 4b check
    if (document.getElementById('Q4b').value == "true") {
        document.getElementById('Q4b').style.borderColor = "forestgreen";
        document.getElementById('Q4b').style.color = "forestgreen";
        grade += 0.25;
    }
    else {
        document.getElementById('Q4b').style.borderColor = "red";
        document.getElementById('Q4b').style.color = "red";
    }

    // question 4c check
    if (document.getElementById('Q4c').value == "true") {
        document.getElementById('Q4c').style.borderColor = "forestgreen";
        document.getElementById('Q4c').style.color = "forestgreen";
        grade += 0.25;
    }
    else {
        document.getElementById('Q4c').style.borderColor = "red";
        document.getElementById('Q4c').style.color = "red";
    }

    // question 4d check
    if (document.getElementById('Q4d').value == "true") {
        document.getElementById('Q4d').style.borderColor = "forestgreen";
        document.getElementById('Q4d').style.color = "forestgreen";
        grade += 0.25;
    }
    else {
        document.getElementById('Q4d').style.borderColor = "red";
        document.getElementById('Q4d').style.color = "red";
    }

    // question 5 check
    document.getElementById('LQ5T1').classList.remove("poemText");
    document.getElementById('LQ5T1').classList.add("green");
    document.getElementById('LQ5T2').classList.remove("poemText");
    document.getElementById('LQ5T2').classList.add("green");
    if (document.getElementById('Q5T1').checked) {
        grade += 0.5;
    }
    if (document.getElementById('Q5T2').checked) {
        grade += 0.5;
    }
    if (document.getElementById('Q5F1').checked) {
        document.getElementById('LQ5F1').classList.remove("poemText");
        document.getElementById('LQ5F1').classList.add("red");
    }
    if (document.getElementById('Q5F2').checked) {
        document.getElementById('LQ5F2').classList.remove("poemText");
        document.getElementById('LQ5F2').classList.add("red");
    }
    if (!document.getElementById('Q5T1').checked && !document.getElementById('Q5T2').checked && !document.getElementById('Q5F1').checked && !document.getElementById('Q5F2').checked) {
        document.getElementById('LQ5T1').classList.remove("green");
        document.getElementById('LQ5T1').classList.add("poemText");
        document.getElementById('LQ5T2').classList.remove("green");
        document.getElementById('LQ5T2').classList.add("poemText");
    }

    showGrade();
}

function showGrade() {
    document.getElementById("tableSubmit").style.display = "none";
    document.getElementById("tableGrade").style.display = "table";
    document.getElementById("grade").innerHTML = (grade*20).toString();
}

function home() {
    window.open("../pages/index.html", "_self");
}