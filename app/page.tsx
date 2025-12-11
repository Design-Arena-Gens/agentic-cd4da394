'use client'

import { useState } from 'react'

const vocabularyData = [
  { spanish: 'Hola', english: 'Hello', category: 'Saludos' },
  { spanish: 'Adiós', english: 'Goodbye', category: 'Saludos' },
  { spanish: 'Gracias', english: 'Thank you', category: 'Cortesía' },
  { spanish: 'Por favor', english: 'Please', category: 'Cortesía' },
  { spanish: 'Agua', english: 'Water', category: 'Comida' },
  { spanish: 'Comida', english: 'Food', category: 'Comida' },
  { spanish: 'Casa', english: 'House', category: 'Lugares' },
  { spanish: 'Familia', english: 'Family', category: 'Personas' },
  { spanish: 'Amigo', english: 'Friend', category: 'Personas' },
  { spanish: 'Libro', english: 'Book', category: 'Objetos' },
  { spanish: 'Tiempo', english: 'Time/Weather', category: 'General' },
  { spanish: 'Sol', english: 'Sun', category: 'Naturaleza' },
]

const quizData = [
  {
    question: '¿Cómo se dice "Hello" en español?',
    options: ['Hola', 'Adiós', 'Gracias', 'Por favor'],
    correct: 0
  },
  {
    question: '¿Qué significa "Gracias"?',
    options: ['Please', 'Sorry', 'Thank you', 'Goodbye'],
    correct: 2
  },
  {
    question: '¿Cómo se dice "Water" en español?',
    options: ['Comida', 'Agua', 'Casa', 'Tiempo'],
    correct: 1
  },
  {
    question: '¿Qué significa "Amigo"?',
    options: ['Family', 'Friend', 'House', 'Book'],
    correct: 1
  },
  {
    question: '¿Cómo se dice "Please" en español?',
    options: ['Gracias', 'Adiós', 'Por favor', 'Hola'],
    correct: 2
  },
]

const conjugationData = {
  ser: [
    { pronoun: 'Yo', conjugation: 'soy' },
    { pronoun: 'Tú', conjugation: 'eres' },
    { pronoun: 'Él/Ella/Usted', conjugation: 'es' },
    { pronoun: 'Nosotros', conjugation: 'somos' },
    { pronoun: 'Vosotros', conjugation: 'sois' },
    { pronoun: 'Ellos/Ellas/Ustedes', conjugation: 'son' },
  ],
  estar: [
    { pronoun: 'Yo', conjugation: 'estoy' },
    { pronoun: 'Tú', conjugation: 'estás' },
    { pronoun: 'Él/Ella/Usted', conjugation: 'está' },
    { pronoun: 'Nosotros', conjugation: 'estamos' },
    { pronoun: 'Vosotros', conjugation: 'estáis' },
    { pronoun: 'Ellos/Ellas/Ustedes', conjugation: 'están' },
  ],
  tener: [
    { pronoun: 'Yo', conjugation: 'tengo' },
    { pronoun: 'Tú', conjugation: 'tienes' },
    { pronoun: 'Él/Ella/Usted', conjugation: 'tiene' },
    { pronoun: 'Nosotros', conjugation: 'tenemos' },
    { pronoun: 'Vosotros', conjugation: 'tenéis' },
    { pronoun: 'Ellos/Ellas/Ustedes', conjugation: 'tienen' },
  ],
}

const phrasesData = [
  { spanish: '¿Cómo estás?', english: 'How are you?' },
  { spanish: 'Muy bien, gracias', english: 'Very well, thank you' },
  { spanish: '¿Dónde está el baño?', english: 'Where is the bathroom?' },
  { spanish: 'No entiendo', english: "I don't understand" },
  { spanish: '¿Cuánto cuesta?', english: 'How much does it cost?' },
  { spanish: 'Me llamo...', english: 'My name is...' },
  { spanish: '¿Hablas inglés?', english: 'Do you speak English?' },
  { spanish: 'Disculpe', english: 'Excuse me' },
  { spanish: 'Lo siento', english: "I'm sorry" },
  { spanish: '¿Qué hora es?', english: 'What time is it?' },
]

export default function Home() {
  const [activeTab, setActiveTab] = useState('vocabulary')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)

  const handleAnswerClick = (index: number) => {
    if (selectedAnswer !== null) return

    setSelectedAnswer(index)
    setShowResult(true)

    if (index === quizData[currentQuestion].correct) {
      setScore(score + 1)
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setCurrentQuestion(0)
      setSelectedAnswer(null)
      setShowResult(false)
      setScore(0)
    }
  }

  return (
    <div className="container">
      <header className="header">
        <h1>🇪🇸 Aprende Español</h1>
        <p>Tu guía interactiva para aprender español</p>
      </header>

      <main className="main-content">
        <div className="tabs">
          <button
            className={`tab ${activeTab === 'vocabulary' ? 'active' : ''}`}
            onClick={() => setActiveTab('vocabulary')}
          >
            📚 Vocabulario
          </button>
          <button
            className={`tab ${activeTab === 'quiz' ? 'active' : ''}`}
            onClick={() => setActiveTab('quiz')}
          >
            🎯 Quiz
          </button>
          <button
            className={`tab ${activeTab === 'conjugation' ? 'active' : ''}`}
            onClick={() => setActiveTab('conjugation')}
          >
            ✏️ Conjugación
          </button>
          <button
            className={`tab ${activeTab === 'phrases' ? 'active' : ''}`}
            onClick={() => setActiveTab('phrases')}
          >
            💬 Frases
          </button>
        </div>

        {activeTab === 'vocabulary' && (
          <div className="vocabulary-grid">
            {vocabularyData.map((item, index) => (
              <div key={index} className="vocab-card">
                <div className="vocab-spanish">{item.spanish}</div>
                <div className="vocab-english">{item.english}</div>
                <div className="vocab-category">{item.category}</div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'quiz' && (
          <div className="quiz-card">
            <div className="question">{quizData[currentQuestion].question}</div>
            <div className="options">
              {quizData[currentQuestion].options.map((option, index) => (
                <div
                  key={index}
                  className={`option ${
                    showResult
                      ? index === quizData[currentQuestion].correct
                        ? 'correct'
                        : index === selectedAnswer
                        ? 'incorrect'
                        : ''
                      : ''
                  }`}
                  onClick={() => handleAnswerClick(index)}
                >
                  {option}
                </div>
              ))}
            </div>
            {showResult && (
              <>
                <div className="score">
                  Puntuación: {score} / {quizData.length}
                </div>
                <button className="next-button" onClick={handleNextQuestion}>
                  {currentQuestion < quizData.length - 1
                    ? 'Siguiente Pregunta'
                    : 'Reiniciar Quiz'}
                </button>
              </>
            )}
          </div>
        )}

        {activeTab === 'conjugation' && (
          <div>
            <div className="conjugation-section">
              <h3>Verbo: SER (to be - permanent)</h3>
              <table className="conjugation-table">
                <thead>
                  <tr>
                    <th>Pronombre</th>
                    <th>Conjugación</th>
                  </tr>
                </thead>
                <tbody>
                  {conjugationData.ser.map((item, index) => (
                    <tr key={index}>
                      <td>{item.pronoun}</td>
                      <td>{item.conjugation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="conjugation-section">
              <h3>Verbo: ESTAR (to be - temporary)</h3>
              <table className="conjugation-table">
                <thead>
                  <tr>
                    <th>Pronombre</th>
                    <th>Conjugación</th>
                  </tr>
                </thead>
                <tbody>
                  {conjugationData.estar.map((item, index) => (
                    <tr key={index}>
                      <td>{item.pronoun}</td>
                      <td>{item.conjugation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="conjugation-section">
              <h3>Verbo: TENER (to have)</h3>
              <table className="conjugation-table">
                <thead>
                  <tr>
                    <th>Pronombre</th>
                    <th>Conjugación</th>
                  </tr>
                </thead>
                <tbody>
                  {conjugationData.tener.map((item, index) => (
                    <tr key={index}>
                      <td>{item.pronoun}</td>
                      <td>{item.conjugation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'phrases' && (
          <div>
            {phrasesData.map((phrase, index) => (
              <div key={index} className="phrase-card">
                <div className="phrase-spanish">{phrase.spanish}</div>
                <div className="phrase-english">{phrase.english}</div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
