import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fff] text-[#4b4b4b]">
      <Header />

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center max-w-6xl mx-auto px-4 py-12 md:py-24">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-[#3c3c3c]">
            Learn English in a Fun Way!
          </h1>
          <p className="text-xl text-[#777]">
            English learning platform with a playful approach designed specifically for Indonesian students.
          </p>
          <button className="bg-[#58cc02] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-[#46a302] shadow-md">
            Start Learning - It's Free!
          </button>
          <p className="text-sm text-[#999]">No credit card required</p>
        </div>
        <div className="md:w-1/2 mb-8 md:mb-0">
          <div className="relative w-full h-80 md:h-96">
            <div className="bg-[#ffc800] rounded-2xl w-full h-full flex items-center justify-center">
              <div className="relative w-3/4 h-3/4">
                <Image
                  src="/assets/learning-illustration.svg"
                  alt="Students learning English"
                  width={400}
                  height={300}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#f5f5f5] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#3c3c3c]">Learning Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-[#ce82ff] rounded-full flex items-center justify-center mb-4 mx-auto">
                <div className="text-white text-2xl font-bold">🎮</div>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Learn While Playing</h3>
              <p className="text-center text-[#666]">
                Learn English through fun, interactive games that keep you engaged and entertained.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-[#ff9600] rounded-full flex items-center justify-center mb-4 mx-auto">
                <div className="text-white text-2xl font-bold">🏆</div>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Ranking System</h3>
              <p className="text-center text-[#666]">
                Compete with friends and achieve the highest rankings to boost your learning motivation.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-[#1cb0f6] rounded-full flex items-center justify-center mb-4 mx-auto">
                <div className="text-white text-2xl font-bold">🔊</div>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Conversation Practice</h3>
              <p className="text-center text-[#666]">
                Practice your speaking skills with interactive conversation exercises and pronunciation drills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="py-16 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#3c3c3c]">Learning Path</h2>
        
        <div className="relative">
          {/* Path line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-[#e5e5e5] hidden md:block"></div>
          
          {/* Learning Steps */}
          <div className="space-y-16 relative">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 order-2 md:order-1 mt-4 md:mt-0 md:pr-12 md:text-right">
                <h3 className="text-2xl font-bold text-[#58cc02] mb-2">English Basics</h3>
                <p className="text-[#666]">
                  Start with simple words and phrases essential for everyday conversations.
                </p>
              </div>
              <div className="relative md:w-8 md:mx-auto order-1 md:order-2">
                <div className="w-12 h-12 rounded-full bg-[#58cc02] flex items-center justify-center text-white font-bold text-xl border-4 border-white">
                  1
                </div>
              </div>
              <div className="md:w-1/2 order-3 hidden md:block"></div>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 order-2 md:order-1 hidden md:block"></div>
              <div className="relative md:w-8 md:mx-auto order-1 md:order-2">
                <div className="w-12 h-12 rounded-full bg-[#1cb0f6] flex items-center justify-center text-white font-bold text-xl border-4 border-white">
                  2
                </div>
              </div>
              <div className="md:w-1/2 order-3 mt-4 md:mt-0 md:pl-12">
                <h3 className="text-2xl font-bold text-[#1cb0f6] mb-2">Grammar & Vocabulary</h3>
                <p className="text-[#666]">
                  Learn sentence structures and expand your vocabulary to speak with confidence.
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 order-2 md:order-1 mt-4 md:mt-0 md:pr-12 md:text-right">
                <h3 className="text-2xl font-bold text-[#ff9600] mb-2">Conversation & Listening</h3>
                <p className="text-[#666]">
                  Enhance your listening and speaking abilities through dialogues and real-life situations.
                </p>
              </div>
              <div className="relative md:w-8 md:mx-auto order-1 md:order-2">
                <div className="w-12 h-12 rounded-full bg-[#ff9600] flex items-center justify-center text-white font-bold text-xl border-4 border-white">
                  3
                </div>
              </div>
              <div className="md:w-1/2 order-3 hidden md:block"></div>
            </div>
            
            {/* Step 4 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 order-2 md:order-1 hidden md:block"></div>
              <div className="relative md:w-8 md:mx-auto order-1 md:order-2">
                <div className="w-12 h-12 rounded-full bg-[#ce82ff] flex items-center justify-center text-white font-bold text-xl border-4 border-white">
                  4
                </div>
              </div>
              <div className="md:w-1/2 order-3 mt-4 md:mt-0 md:pl-12">
                <h3 className="text-2xl font-bold text-[#ce82ff] mb-2">Advanced Mastery</h3>
                <p className="text-[#666]">
                  Master idioms, conversational language, and complex expressions to speak like a native.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Challenges Section (Duolingo-style) */}
      <section className="bg-[#1cb0f6] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="bg-white rounded-xl p-6 shadow-lg max-w-md mx-auto">
                <h3 className="text-2xl font-bold mb-4 text-center text-[#1cb0f6]">Daily Challenge</h3>
                <div className="grid grid-cols-7 gap-2 mb-6">
                  {Array.from({ length: 7 }).map((_, index) => (
                    <div 
                      key={index}
                      className={`aspect-square rounded-lg flex items-center justify-center ${
                        index < 5 ? 'bg-[#58cc02] text-white' : 'bg-[#e5e5e5] text-[#afafaf]'
                      }`}
                    >
                      {index < 5 ? '✓' : ''}
                    </div>
                  ))}
                </div>
                <div className="text-center text-[#3c3c3c] mb-4">
                  <div className="text-4xl font-bold text-[#ff9600]">5</div>
                  <div className="text-sm">days in a row!</div>
                </div>
                <button className="w-full bg-[#58cc02] text-white py-3 rounded-xl font-bold">
                  Continue Challenge
                </button>
              </div>
            </div>
            <div className="md:w-1/2 text-white px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Consistency Is Key</h2>
              <p className="text-xl mb-8">
                Complete daily challenges and build consistent learning habits. The longer your streak, the more rewards you earn!
              </p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center text-[#1cb0f6] text-2xl font-bold mx-auto mb-2">
                    7
                  </div>
                  <div className="text-sm">Days</div>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center text-[#1cb0f6] text-2xl font-bold mx-auto mb-2">
                    30
                  </div>
                  <div className="text-sm">Days</div>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center text-[#1cb0f6] text-2xl font-bold mx-auto mb-2">
                    365
                  </div>
                  <div className="text-sm">Days</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#ffc800] py-16 text-[#3c3c3c] text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your English Journey?</h2>
          <p className="text-xl mb-8">
            Join millions of learners who have improved their English skills in a fun and engaging way!
          </p>
          <button className="bg-[#58cc02] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-[#46a302] shadow-md">
            Start Free Course
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
