import { DashboardHeader } from '@/components/dashboard/header';
import { DashboardSidebar } from '@/components/dashboard/sidebar';
import { StreakCard } from '@/components/dashboard/streak-card';
import { ProgressCard } from '@/components/dashboard/progress-card';
import { LessonCard } from '@/components/dashboard/lesson-card';
import { DailyGoalCard } from '@/components/dashboard/daily-goal-card';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <DashboardHeader />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6 pt-24 md:pt-6 md:pl-72">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-3xl font-bold mb-8">Welcome back, Jamie!</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <StreakCard streak={15} />
              <DailyGoalCard progress={75} />
              <ProgressCard level={3} xp={1250} nextLevel={2000} />
            </div>
            
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Continue Learning</h2>
                <button className="text-primary text-sm font-medium">View All</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <LessonCard 
                  title="Basics 1"
                  description="Learn essential vocabulary and simple phrases"
                  progress={100}
                  icon="📚"
                  href="/lesson/basics-1"
                  completed={true}
                />
                <LessonCard 
                  title="Basics 2"
                  description="Continue building your foundational knowledge"
                  progress={75}
                  icon="🏠"
                  href="/lesson/basics-2"
                  active={true}
                />
                <LessonCard 
                  title="Phrases"
                  description="Common expressions for everyday situations"
                  progress={0}
                  icon="💬"
                  href="/lesson/phrases"
                  locked={false}
                />
              </div>
            </div>
            
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">New Lessons</h2>
                <button className="text-primary text-sm font-medium">Browse All</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <LessonCard 
                  title="Food & Dining"
                  description="Learn vocabulary for ordering food and dining out"
                  progress={0}
                  icon="🍽️"
                  href="/lesson/food"
                  locked={false}
                />
                <LessonCard 
                  title="Travel"
                  description="Essential phrases for your next trip abroad"
                  progress={0}
                  icon="✈️"
                  href="/lesson/travel"
                  locked={true}
                />
                <LessonCard 
                  title="Business English"
                  description="Professional vocabulary for the workplace"
                  progress={0}
                  icon="💼"
                  href="/lesson/business"
                  locked={true}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}