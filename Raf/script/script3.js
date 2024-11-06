function showResult() {
    const quizForm = document.getElementById('quizForm');
    let score = 0;

    
    const correctAnswers = {
        q1: 'a',  
        q2: 'a',  
        q3: 'b',
           };

   
    const formData = new FormData(quizForm);
    for (let [question, answer] of formData.entries()) {
        if (answer === correctAnswers[question]) {
            score++;
        }
    }

   
    document.getElementById('score').textContent = score;
    document.getElementById('result').classList.add('show-result');
}