import React, { useState } from 'react';

const ComputerNetworkTest = () => {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const questions = [
    {
      question: '1. What does OSI stand for in networking?',
      options: ['Open System Interconnection', 'Operating System Interface', 'Optical Signal Integration', 'Online Server Interaction'],
      answer: 'Open System Interconnection',
    },
    {
      question: '2. Which layer in the OSI model is responsible for routing?',
      options: ['Data Link', 'Network', 'Transport', 'Session'],
      answer: 'Network',
    },
    {
      question: '3. What protocol is used to assign IP addresses automatically?',
      options: ['DNS', 'FTP', 'DHCP', 'SMTP'],
      answer: 'DHCP',
    },
    {
      question: '4. What does a router primarily use to forward data?',
      options: ['MAC address', 'Port number', 'IP address', 'Protocol'],
      answer: 'IP address',
    },
    {
      question: '5. Which port number is used by HTTPS?',
      options: ['80', '20', '443', '21'],
      answer: '443',
    },
  ];

  const handleOptionChange = (index, selected) => {
    setAnswers({ ...answers, [index]: selected });
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const score = Object.entries(answers).filter(
    ([index, selected]) => questions[index].answer === selected
  ).length;

  const instructionList = [
    'You will be presented with 5 multiple choice questions.',
    'Each correct answer awards 1 point.',
    'You can navigate between questions using "Previous" and "Next" buttons.',
    'Once done, click "Submit Test" to view your score.',
    'Do not refresh the page during the test.',
  ];

  return (
    <div className="min-h-screen bg-blue-50 p-6 md:p-12">
      {!started ? (
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow p-8">
          <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">Computer Networks Test Instructions</h2>
          <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2 text-lg">
            {instructionList.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <div className="text-center">
            <button
              onClick={() => setStarted(true)}
              className="bg-blue-600 text-white px-6 py-3 text-lg rounded-lg hover:bg-blue-700 transition"
            >
              Start Test
            </button>
          </div>
        </div>
      ) : !submitted ? (
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Question {currentQuestion + 1} of {questions.length}
          </h3>
          <p className="text-xl text-gray-700 mb-6">
            {questions[currentQuestion].question}
          </p>
          <div className="space-y-4 text-lg">
            {questions[currentQuestion].options.map((option, idx) => (
              <label key={idx} className="block">
                <input
                  type="radio"
                  name={`question-${currentQuestion}`}
                  value={option}
                  checked={answers[currentQuestion] === option}
                  onChange={() => handleOptionChange(currentQuestion, option)}
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>

          <div className="flex justify-between mt-10">
            <button
              onClick={() => setCurrentQuestion((prev) => Math.max(prev - 1, 0))}
              className="bg-gray-300 text-gray-800 px-5 py-2 rounded hover:bg-gray-400"
              disabled={currentQuestion === 0}
            >
              Previous
            </button>
            {currentQuestion < questions.length - 1 ? (
              <button
                onClick={() => setCurrentQuestion((prev) => prev + 1)}
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
              >
                Submit Test
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="max-w-xl mx-auto bg-white rounded-xl shadow p-8 text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-4">Test Completed ✅</h2>
          <p className="text-xl text-gray-700 mb-4">You scored {score} out of {questions.length}</p>
          <button
            onClick={() => {
              setStarted(false);
              setAnswers({});
              setCurrentQuestion(0);
              setSubmitted(false);
            }}
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Retake Test
          </button>
        </div>
      )}
    </div>
  );
};

export default ComputerNetworkTest;
