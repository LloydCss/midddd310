const key = "pWExA8r3QhEJ79LAnX6LhYQ7Y5sQvQxd"
const quiz = [
    {
        question: "What is your favorite color?",
        answers: [
            {
                src: "anger",
                score: 20
            },
            {
                src: "saddnes",
                score: 5
            },
            {
                src: "happy",
                score: 0
            },
            {
                src: "annoyed",
                score: 35
            }
		]
	},
    {
        question: "What do you feel like doing with your partner or if you had one?",
        answers: [
            {
                src: "alone",
                score: 20
            },
            {
                src: "competitive",
                score: 3
            },
            {
                src: "hanging out",
                score: 20
            },
            {
                src: "cuddling",
                score: 15
            }
		]
	},
    {
        question: "What is your favorite hobby?",
        answers: [
            {
                src: "sing",
                score: 15
            },
            {
                src: "reading",
                score: 20
            },
            {
                src: "sports",
                score: 0
            },
            {
                src: "games",
                score: 0
            }
		]
	},
    {
        question: "Do you even believe in horoscopes??",
        answers: [
            {
                src: "yes",
                score: 15
            },
            {
                src: "no",
                score: 20
            },
		]
	},
    {
        question: "What is your personality like?",
        answers: [
            {
                src: "focused",
                score: 15
            },
            {
                src: "funny",
                score: 20
            },
            {
                src: "calm",
                score: 6
            },
            {
                src: "alone",
                score: 0
            }
		]
	}
];



const container = document.getElementById('quiz');

// build quiz HTML
for (let i = 0; i < quiz.length; i++) {
    const q = quiz[i];

    // create question container 
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');

    // add question
    const p = document.createElement('p');
    p.textContent = q.question;
    questionDiv.appendChild(p);


    // option div
    const options = document.createElement('div');
    options.classList.add('options');
    questionDiv.appendChild(options);

    // add answers
    for (let j = 0; j < q.answers.length; j++) {
        const tag = q.answers[j].src;
        const url = `https://api.giphy.com/v1/gifs/random?tag=${tag}&rating=g&api_key=${key}`;
        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                const img = new Image();
                img.src = json.data.images.downsized.url;
                options.appendChild(img);

                img.onclick = function () {
                    q.score = a.score;
                    console.log(a.score)

                };





            })
            .catch(function (error) {
                console.log('error', error);
            });
    }
    // add to container
    container.appendChild(questionDiv);
}



// < 0 introvert - > 0 extrovert

const resultsBtn = document.getElementById('results');
resultsBtn.onclick = function () {
    let score = 0;
    for (let i = 0; i < quiz.length; i++) {
        score += quiz[i].score;
    }
    const response = document.getElementById('response');
    if (score > 60) {
        response.textContent = "You are a cancer.";
    } else if (score > 50) {
        response.textContent = " You are a ARIES.";
    } else if (score > 40) {
        response.textContent = " You are a Tarus.";
    } else if (score > 30) {
        response.textContent = " You are a Capricorn.";
    } else if (score > 20) {
        response.textContent = " You are a Gemini.";
    } else if (score > 10) {
        response.textContent = " You are a Leo.";
    }
};