// Função para virar os flashcards
function flipCard(card) {
    let front = card.querySelector('.front');
    let back = card.querySelector('.back');
    
    if (front.style.display === "none") {
        front.style.display = "block";
        back.style.display = "none";
    } else {
        front.style.display = "none";
        back.style.display = "block";
    }
}

// Função para checar resposta do quiz
function checkAnswer(answer) {
    const feedback = document.getElementById('feedback');
    if (answer === 'Brasilia') {
        feedback.innerText = "Correto!";
        feedback.style.color = "green";
    } else {
        feedback.innerText = "Errado, tente novamente.";
        feedback.style.color = "red";
    }
}
