import React, { useState } from 'react';

const questions = [
  {
    question: "What is the main purpose of an operating system?",
    options: ["Compile code", "Manage hardware resources", "Send emails", "Design web pages"],
  },
  {
    question: "Which of these is a type of OS?",
    options: ["Batch", "High-level", "Compiler", "Database"],
  },
  {
    question: "Which of these is not a scheduling algorithm?",
    options: ["FCFS", "Round Robin", "Shortest Job First", "Merge Sort"],
  },
  {
    question: "What is a deadlock?",
    options: ["A fast process", "A type of virus", "A state where processes wait forever", "A hardware malfunction"],
  },
  {
    question: "Which OS is developed by Apple?",
    options: ["Linux", "Windows", "macOS", "Android"],
  },
];

const OperatingSystemsTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [started, setStarted] = useState(false);

  const handleStart = () => setStarted(true);
  const next = () => setCurrentQuestion((prev) => Math.min(prev + 1, questions.length - 1));
  const prev = () => setCurrentQuestion((prev) => Math.max(prev - 1, 0));

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10 text-center">
      {!started ? (
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">
          <h2 className="text-3xl font-bold mb-4 text-blue-700">💻 Operating Systems Test Instructions</h2>
          <ul className="text-left text-gray-700 list-disc list-inside mb-6 space-y-2">
            <li>There are 5 questions in total.</li>
            <li>Each question has 4 options, only one is correct.</li>
            <li>Use the Next and Previous buttons to navigate.</li>
            <li>There is no time limit for this test.</li>
            <li>Try to answer all questions before exiting.</li>
          </ul>
          <button
            onClick={handleStart}
            className="mt-4 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Start Test
          </button>
        </div>
      ) : (
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">
            Question {currentQuestion + 1} of {questions.length}
          </h3>
          <p className="text-lg mb-4 text-gray-900 font-medium min-h-[4rem]">
            {questions[currentQuestion].question}
          </p>
          <div className="grid gap-3 text-left">
            {questions[currentQuestion].options.map((opt, idx) => (
              <label
                key={idx}
                className="block bg-gray-100 hover:bg-blue-100 px-4 py-3 rounded cursor-pointer"
              >
                <input type="radio" name={`q${currentQuestion}`} className="mr-2" /> {opt}
              </label>
            ))}
          </div>
          <div className="mt-6 flex justify-between">
            <button
              onClick={prev}
              className="px-5 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
              disabled={currentQuestion === 0}
            >
              Previous
            </button>
            <button
              onClick={next}
              className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
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

export default OperatingSystemsTest;
