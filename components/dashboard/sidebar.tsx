"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  BarChart2, 
  BookOpen, 
  Award, 
  Users, 
  Settings, 
  HelpCircle,
  Layers
} from 'lucide-react';

export function DashboardSidebar() {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) {
    return null;
  }
  
  const menuItems = [
    {
      name: 'Dashboard',
      href: '/dashboard',
      icon: <Layers className="h-5 w-5" />,
    },
    {
      name: 'Lessons',
      href: '/lessons',
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      name: 'Progress',
      href: '/progress',
      icon: <BarChart2 className="h-5 w-5" />,
    },
    {
      name: 'Achievements',
      href: '/achievements',
      icon: <Award className="h-5 w-5" />,
    },
    {
      name: 'Community',
      href: '/community',
      icon: <Users className="h-5 w-5" />,
    },
  ];
  
  const bottomMenuItems = [
    {
      name: 'Settings',
      href: '/settings',
      icon: <Settings className="h-5 w-5" />,
    },
    {
      name: 'Help',
      href: '/help',
      icon: <HelpCircle className="h-5 w-5" />,
    },
  ];
  
  return (
    <aside className="fixed left-0 top-16 bottom-0 z-30 hidden md:block w-64 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-y-auto">
      <div className="flex flex-col h-full py-4">
        <div className="px-4 py-2">
          <h3 className="text-xs font-semibold uppercase text-muted-foreground tracking-wider">
            Learn
          </h3>
        </div>
        <nav className="flex-1 space-y-1 px-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  flex items-center px-3 py-3 text-sm font-medium rounded-md
                  ${isActive 
                    ? 'bg-primary/10 text-primary' 
                    : 'text-foreground hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary'}
                `}
              >
                <span className={`mr-3 ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>
                  {item.icon}
                </span>
                {item.name}
                {item.name === 'Achievements' && (
                  <span className="ml-auto bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-xs px-2 py-0.5 rounded-full">
                    New
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
        
        <div className="mt-auto">
          <div className="px-4 py-2">
            <h3 className="text-xs font-semibold uppercase text-muted-foreground tracking-wider">
              Account
            </h3>
          </div>
          <nav className="space-y-1 px-2">
            {bottomMenuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    flex items-center px-3 py-3 text-sm font-medium rounded-md
                    ${isActive 
                      ? 'bg-primary/10 text-primary' 
                      : 'text-foreground hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary'}
                  `}
                >
                  <span className={`mr-3 ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>
                    {item.icon}
                  </span>
                  {item.name}
                </Link>
              );
            })}
          </nav>
          
          <div className="px-4 py-4 mt-6">
            <div className="bg-sky-50 dark:bg-sky-900/20 rounded-lg p-3 border border-sky-100 dark:border-sky-800">
              <div className="flex items-center">
                <div className="p-2 bg-sky-100 dark:bg-sky-800 rounded-full">
                  <Award className="h-5 w-5 text-sky-600 dark:text-sky-400" />
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium">Premium Plan</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Upgrade for more features</p>
                </div>
              </div>
              <button className="mt-2 text-xs font-medium text-center px-3 py-1.5 bg-sky-500 hover:bg-sky-600 text-white rounded-md w-full transition-colors">
                Upgrade Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}