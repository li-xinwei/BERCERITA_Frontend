"use client"

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { CheckCircle, X, MessageCircle, Heart, Volume as VolumeUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

export default function LessonPage() {
  const params = useParams();
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [progress, setProgress] = useState(0);
  
  // Mock lesson data - in a real app this would come from an API
  const lessonSteps = [
    {
      type: 'translation',
      question: 'Translate this sentence',
      content: 'She reads a book every day.',
      options: ['Dia membaca sebuah buku setiap hari.', 'Dia menulis buku setiap hari.', 'Dia membaca buku setiap minggu.', 'Saya membaca buku setiap hari.'],
      correctAnswer: 'Dia membaca sebuah buku setiap hari.',
    },
    {
      type: 'multiple-choice',
      question: 'Which word means "to read" in English?',
      options: ['Write', 'Speak', 'Read', 'Listen'],
      correctAnswer: 'Read',
    },
    {
      type: 'fill-blank',
      question: 'Complete the sentence',
      content: 'He ___ to the store yesterday.',
      options: ['go', 'goes', 'went', 'going'],
      correctAnswer: 'went',
    },
    {
      type: 'match',
      question: 'Match the words to their meanings',
      pairs: [
        { word: 'Book', meaning: 'A written or printed work' },
        { word: 'Read', meaning: 'Look at and comprehend written content' },
        { word: 'Write', meaning: 'Mark letters or words on a surface' },
        { word: 'Speak', meaning: 'Say words to convey information' }
      ]
    },
    {
      type: 'translation',
      question: 'Translate this sentence',
      content: 'I like to travel with my family.',
      options: ['Saya suka bepergian dengan keluarga saya.', 'Saya tidak suka bepergian sendiri.', 'Keluarga saya suka bepergian.', 'Saya bepergian ke luar negeri.'],
      correctAnswer: 'Saya suka bepergian dengan keluarga saya.',
    }
  ];
  
  useEffect(() => {
    setProgress(Math.round((currentStep / lessonSteps.length) * 100));
  }, [currentStep, lessonSteps.length]);
  
  const handleOptionSelect = (option: string) => {
    if (isSubmitted) return;
    setSelectedOption(option);
  };
  
  const handleCheck = () => {
    if (!selectedOption) return;
    
    const currentQuestion = lessonSteps[currentStep];
    const correct = selectedOption === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    setIsSubmitted(true);
  };
  
  const handleContinue = () => {
    if (currentStep < lessonSteps.length - 1) {
      setCurrentStep(currentStep + 1);
      setSelectedOption(null);
      setIsCorrect(null);
      setIsSubmitted(false);
    } else {
      // Lesson complete - navigate to completion screen
      router.push('/dashboard');
    }
  };
  
  const currentLesson = lessonSteps[currentStep];
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 z-10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <button 
            onClick={() => router.push('/dashboard')}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <X size={24} />
          </button>
          
          <div className="w-full max-w-md mx-4">
            <Progress value={progress} className="h-2.5" />
          </div>
          
          <div className="flex items-center space-x-2">
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
              <Heart size={20} />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
              <MessageCircle size={20} />
            </button>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 mb-6">
          <h1 className="text-xl font-bold mb-6">{currentLesson.question}</h1>
          
          {currentLesson.type === 'translation' && (
            <>
              <div className="flex items-center mb-6">
                <p className="text-lg font-medium mr-2">{currentLesson.content}</p>
                <button className="p-1.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                  <VolumeUp size={18} />
                </button>
              </div>
              
              <div className="space-y-3">
                {currentLesson.options.map((option, index) => (
                  <button
                    key={index}
                    className={`w-full p-4 rounded-lg border text-left transition-colors ${
                      selectedOption === option
                        ? isSubmitted
                          ? isCorrect
                            ? 'bg-green-50 dark:bg-green-900/20 border-green-300 dark:border-green-800'
                            : 'bg-red-50 dark:bg-red-900/20 border-red-300 dark:border-red-800'
                          : 'bg-blue-50 dark:bg-blue-900/20 border-blue-300 dark:border-blue-800'
                        : 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                    onClick={() => handleOptionSelect(option)}
                    disabled={isSubmitted}
                  >
                    {option}
                    {isSubmitted && selectedOption === option && (
                      <span className="float-right">
                        {isCorrect ? (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        ) : (
                          <X className="h-5 w-5 text-red-500" />
                        )}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </>
          )}
          
          {/* Other question types would be implemented here */}
        </div>
        
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto max-w-2xl">
            {!isSubmitted ? (
              <Button 
                className="w-full" 
                size="lg" 
                onClick={handleCheck}
                disabled={!selectedOption}
              >
                Check
              </Button>
            ) : (
              <Button 
                className="w-full" 
                size="lg" 
                onClick={handleContinue}
                variant={isCorrect ? "default" : "destructive"}
              >
                {isCorrect ? "Continue" : "Got it"}
              </Button>
            )}
          </div>
        </div>
        
        {isSubmitted && !isCorrect && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-red-200 dark:border-red-800 p-6 mb-20">
            <h3 className="text-lg font-medium mb-2">Correct Solution:</h3>
            <p className="text-green-600 dark:text-green-400 font-medium">
              {currentLesson.correctAnswer}
            </p>
          </div>
        )}
      </main>
    </div>
  );
}