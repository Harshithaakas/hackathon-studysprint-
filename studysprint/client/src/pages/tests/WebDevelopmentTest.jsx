import React, { useState } from 'react';

const WebDevelopmentTest = () => {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Trainer Marking Language",
        "Hyper Text Marketing Language",
        "Hyper Text Markup Language",
        "Hyper Text Markdown Language"
      ],
      answer: 2
    },
    {
      question: "Which language is used for styling web pages?",
      options: ["HTML", "JQuery", "CSS", "XML"],
      answer: 2
    },
    {
      question: "What does CSS stand for?",
      options: [
        "Cascading Style Sheets",
        "Colorful Style Sheets",
        "Creative Style Syntax",
        "Computer Style Sheets"
      ],
      answer: 0
    },
    {
      question: "Which is not a JavaScript Framework?",
      options: ["Python Script", "JQuery", "Django", "NodeJS"],
      answer: 2
    },
    {
      question: "Which tag is used for inserting a line break in HTML?",
      options: ["<break>", "<lb>", "<br>", "<b>"],
      answer: 2
    }
  ];

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div className="min-h-screen bg-white py-10 px-6">
      {!started ? (
        <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-xl shadow-md text-gray-800">
          <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
            📘 Web Development Test - Instructions
          </h1>
          <ul className="list-disc list-inside text-lg space-y-2 mb-6">
            <li>Make sure you have a stable internet connection.</li>
            <li>There are 5 multiple-choice questions in total.</li>
            <li>Each question has one correct answer.</li>
            <li>Use the "Next" and "Previous" buttons to navigate.</li>
            <li>No negative marking.</li>
            <li>Click on the "Start Test" button below to begin.</li>
          </ul>
          <div className="text-center">
            <button
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
              onClick={() => setStarted(true)}
            >
              Start Test
            </button>
          </div>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-xl shadow-md text-gray-800">
          <h2 className="text-2xl font-bold mb-4 text-blue-700">
            Question {currentQuestion + 1} of {questions.length}
          </h2>
          <p className="text-xl mb-6 font-medium">
            {questions[currentQuestion].question}
          </p>
          <ul className="space-y-4 mb-6">
            {questions[currentQuestion].options.map((option, idx) => (
              <li
                key={idx}
                className="bg-white p-4 rounded-md shadow hover:bg-blue-50 cursor-pointer border"
              >
                {option}
              </li>
            ))}
          </ul>
          <div className="flex justify-between">
            <button
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              onClick={handlePrev}
              disabled={currentQuestion === 0}
            >
              Previous
            </button>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={handleNext}
              disabled={currentQuestion === questions.length - 1}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WebDevelopmentTest;
