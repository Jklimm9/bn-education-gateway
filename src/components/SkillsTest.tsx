

import { useState } from 'react';

const SkillsTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      category: "Логіка",
      question: "Наскільки добре ваша дитина розв'язує логічні задачі?",
      description: "Аналітичне мислення та вміння знаходити закономірності"
    },
    {
      category: "Креативність", 
      question: "Чи проявляє ваша дитина творчі здібності?",
      description: "Нестандартне мислення та художні навички"
    },
    {
      category: "Математика",
      question: "Як справляється з математичними завданнями?",
      description: "Числові операції та абстрактне мислення"
    },
    {
      category: "Мови",
      question: "Наскільки легко засвоює іноземні мови?",
      description: "Лінгвістичні здібності та комунікація"
    },
    {
      category: "Критичне мислення",
      question: "Чи вміє аналізувати та оцінювати інформацію?",
      description: "Здатність до глибокого аналізу та оцінки"
    },
    {
      category: "Лідерство",
      question: "Чи проявляє лідерські якості у спілкуванні з однолітками?",
      description: "Вміння керувати та організовувати інших"
    },
    {
      category: "Наука",
      question: "Наскільки цікавиться природничими науками?",
      description: "Інтерес до дослідження та експериментування"
    },
    {
      category: "Емоційний інтелект",
      question: "Як добре розуміє емоції свої та інших людей?",
      description: "Здатність до емпатії та самоконтролю"
    },
    {
      category: "Технології",
      question: "Наскільки швидко освоює нові технології?",
      description: "Цифрова грамотність та адаптація до інновацій"
    }
  ];

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const getResults = () => {
    const total = answers.reduce((sum, score) => sum + score, 0);
    const average = total / answers.length;
    
    if (average >= 4) {
      return {
        title: "Високий потенціал!",
        description: "Ваша дитина демонструє відмінні здібності в багатьох областях.",
        recommendation: "Рекомендуємо розглянути підготовку до топ-університетів світу."
      };
    } else if (average >= 3) {
      return {
        title: "Хороший потенціал",
        description: "Є сильні сторони, які можна розвивати далі.",
        recommendation: "Індивідуальна програма допоможе розкрити весь потенціал."
      };
    } else {
      return {
        title: "Потенціал для розвитку",
        description: "Кожна дитина унікальна, важливо знайти правильний підхід.",
        recommendation: "Персональна консультація допоможе визначити найкращий шлях."
      };
    }
  };

  if (showResults) {
    const results = getResults();
    return (
      <div className="text-center animate-fade-in">
        <div className="premium-card p-8 rounded-2xl max-w-2xl mx-auto">
          <h3 className="font-playfair text-3xl font-bold text-burgundy-700 mb-4">
            {results.title}
          </h3>
          <p className="text-lg text-burgundy-600 mb-4">
            {results.description}
          </p>
          <p className="text-burgundy-700 font-medium mb-8">
            {results.recommendation}
          </p>
          <div className="space-y-4">
            <button className="btn-primary w-full">
              Записатися на консультацію
            </button>
            <button 
              className="btn-secondary w-full"
              onClick={() => {
                setCurrentQuestion(0);
                setAnswers([]);
                setShowResults(false);
              }}
            >
              Пройти тест заново
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <div className="premium-card p-8 rounded-2xl max-w-2xl mx-auto">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-burgundy-600 font-medium">
              Питання {currentQuestion + 1} з {questions.length}
            </span>
            <span className="text-gold-500 font-medium">
              {questions[currentQuestion].category}
            </span>
          </div>
          <div className="w-full bg-burgundy-100 rounded-full h-2 mb-6">
            <div
              className="bg-gradient-to-r from-burgundy-700 to-gold-400 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <h3 className="font-playfair text-2xl font-semibold text-burgundy-700 mb-4">
          {questions[currentQuestion].question}
        </h3>
        <p className="text-burgundy-600 mb-8">
          {questions[currentQuestion].description}
        </p>

        <div className="grid grid-cols-5 gap-2 sm:gap-3">
          {[1, 2, 3, 4, 5].map((score) => (
            <button
              key={score}
              onClick={() => handleAnswer(score)}
              className="p-2 sm:p-4 border-2 border-burgundy-200 rounded-lg hover:border-burgundy-700 hover:bg-burgundy-50 transition-all duration-200 text-center min-h-[90px] sm:min-h-[auto] flex flex-col justify-between"
            >
              <div className="font-bold text-burgundy-700 text-lg sm:text-xl mb-2">{score}</div>
              <div className="text-xs sm:text-sm text-burgundy-600 leading-tight mt-auto">
                {score === 1 ? 'Слабо' : score === 2 ? 'Нижче середнього' : score === 3 ? 'Середньо' : score === 4 ? 'Добре' : 'Відмінно'}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsTest;

