/**
 * Array to house trivia questions, multichoice
 * answer, and point value.
 */
const triviaQuestions = [
  {
    question: "What is the capital of France?",
    choices: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: 2,
    points: 1
  },
  {
    question: "Which planet is known as the Red Planet?",
    choices: ["Venus", "Mercury", "Jupiter", "Mars"],
    answer: 3,
    points: 1
  },
  {
    question: "What is the largest mammal on Earth?",
    choices: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    answer: 1,
    points: 1
  },
  {
    question: "How many continents are there on Earth?",
    choices: ["5", "6", "7", "8"],
    answer: 2,
    points: 1
  },
  {
    question: "Which sport uses a hoop and a ball?",
    choices: ["Soccer", "Basketball", "Tennis", "Baseball"],
    answer: 1,
    points: 1
  },
  {
    question: "What is the chemical symbol for gold?",
    choices: ["Au", "Ag", "Gd", "Go"],
    answer: 0,
    points: 2
  },
  {
    question: "In which country did the Olympic Games originate?",
    choices: ["Italy", "Greece", "Egypt", "France"],
    answer: 1,
    points: 2
  },
  {
    question: "Which ocean is the largest?",
    choices: ["Atlantic", "Arctic", "Indian", "Pacific"],
    answer: 3,
    points: 2
  },
  {
    question: "How many sides does a hexagon have?",
    choices: ["5", "6", "7", "8"],
    answer: 1,
    points: 2
  },
  {
    question: "Who painted the Mona Lisa?",
    choices: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Van Gogh"],
    answer: 1,
    points: 2
  },
  {
    question: "What is the hardest natural substance on Earth?",
    choices: ["Diamond", "Quartz", "Obsidian", "Granite"],
    answer: 0,
    points: 3
  },
  {
    question: "Who discovered penicillin?",
    choices: ["Alexander Fleming", "Marie Curie", "Louis Pasteur", "Isaac Newton"],
    answer: 0,
    points: 3
  },
  {
    question: "Which planet has the most moons?",
    choices: ["Earth", "Saturn", "Jupiter", "Neptune"],
    answer: 1,
    points: 3
  },
  {
    question: "What year did World War II end?",
    choices: ["1942", "1945", "1948", "1950"],
    answer: 1,
    points: 3
  },
  {
    question: "Which metal is liquid at room temperature?",
    choices: ["Mercury", "Lead", "Aluminum", "Iron"],
    answer: 0,
    points: 3
  },
  {
    question: "What is the smallest prime number?",
    choices: ["0", "1", "2", "3"],
    answer: 2,
    points: 4
  },
  {
    question: "What is the largest desert in the world?",
    choices: ["Sahara", "Gobi", "Arabian", "Antarctica"],
    answer: 3,
    points: 4
  },
  {
    question: "In which year did man first walk on the moon?",
    choices: ["1965", "1969", "1972", "1975"],
    answer: 1,
    points: 4
  },
  {
    question: "Which Shakespeare play features the characters Rosencrantz and Guildenstern?",
    choices: ["Macbeth", "Hamlet", "Othello", "King Lear"],
    answer: 1,
    points: 4
  },
  {
    question: "What is the currency of Japan?",
    choices: ["Yen", "Won", "Peso", "Rupee"],
    answer: 0,
    points: 4
  },
  {
    question: "Which element has the atomic number 1?",
    choices: ["Helium", "Hydrogen", "Oxygen", "Carbon"],
    answer: 1,
    points: 5
  },
  {
    question: "Who developed the theory of general relativity?",
    choices: ["Isaac Newton", "Albert Einstein", "Niels Bohr", "Galileo Galilei"],
    answer: 1,
    points: 5
  },
  {
    question: "Which ancient civilization built Machu Picchu?",
    choices: ["Aztec", "Maya", "Inca", "Olmec"],
    answer: 2,
    points: 5
  },
  {
    question: "What is the capital of Iceland?",
    choices: ["Oslo", "Copenhagen", "Reykjavik", "Helsinki"],
    answer: 2,
    points: 5
  },
  {
    question: "What language has the most native speakers in the world?",
    choices: ["English", "Mandarin Chinese", "Spanish", "Hindi"],
    answer: 1,
    points: 5
  },
  {
    question: "Who directed the movie 'Jurassic Park'?",
    choices: ["James Cameron", "Steven Spielberg", "George Lucas", "Ridley Scott"],
    answer: 1,
    points: 2
  },
  {
    question: "What year did the Titanic sink?",
    choices: ["1910", "1912", "1914", "1916"],
    answer: 1,
    points: 3
  },
  {
    question: "In computing, what does 'CPU' stand for?",
    choices: ["Central Process Unit", "Central Processing Unit", "Computer Personal Unit", "Control Processing Utility"],
    answer: 1,
    points: 2
  },
  {
    question: "What is the tallest mountain in the world?",
    choices: ["K2", "Mount Everest", "Kilimanjaro", "Denali"],
    answer: 1,
    points: 3
  },
  {
    question: "Who wrote '1984'?",
    choices: ["George Orwell", "Aldous Huxley", "Ernest Hemingway", "Ray Bradbury"],
    answer: 0,
    points: 3
  },
  {
    question: "Which country gifted the Statue of Liberty to the USA?",
    choices: ["England", "France", "Germany", "Italy"],
    answer: 1,
    points: 2
  },
  {
    question: "What is the square root of 144?",
    choices: ["10", "11", "12", "13"],
    answer: 2,
    points: 2
  },
  {
    question: "Which blood type is known as the universal donor?",
    choices: ["O-", "O+", "AB-", "AB+"],
    answer: 0,
    points: 4
  },
  {
    question: "In which city would you find the Colosseum?",
    choices: ["Athens", "Rome", "Florence", "Naples"],
    answer: 1,
    points: 2
  },
  {
    question: "What is the longest river in the world?",
    choices: ["Amazon", "Nile", "Yangtze", "Mississippi"],
    answer: 1,
    points: 4
  },
  {
    question: "How many bones are in the adult human body?",
    choices: ["206", "210", "215", "220"],
    answer: 0,
    points: 3
  },
  {
    question: "Which planet is closest to the Sun?",
    choices: ["Mercury", "Venus", "Earth", "Mars"],
    answer: 0,
    points: 2
  },
  {
    question: "What is the capital of Canada?",
    choices: ["Toronto", "Ottawa", "Montreal", "Vancouver"],
    answer: 1,
    points: 3
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    choices: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    answer: 1,
    points: 2
  },
  {
    question: "What is the national flower of Japan?",
    choices: ["Rose", "Tulip", "Cherry Blossom", "Lotus"],
    answer: 2,
    points: 4
  },
  {
    question: "Which famous scientist introduced the idea of natural selection?",
    choices: ["Charles Darwin", "Gregor Mendel", "Thomas Edison", "Nikola Tesla"],
    answer: 0,
    points: 4
  },
  {
    question: "What is the currency of Switzerland?",
    choices: ["Euro", "Swiss Franc", "Pound", "Dollar"],
    answer: 1,
    points: 3
  },
  {
    question: "Which is the only mammal capable of true flight?",
    choices: ["Bat", "Flying Squirrel", "Owl", "Sugar Glider"],
    answer: 0,
    points: 3
  },
  {
    question: "What is the chemical formula for table salt?",
    choices: ["NaCl", "KCl", "NaOH", "CaCl2"],
    answer: 0,
    points: 3
  }
];

export default triviaQuestions;