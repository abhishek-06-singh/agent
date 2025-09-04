'use client';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { Tooltip } from 'antd';

export default function ThemeMode() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
 

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Tooltip title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} Mode`}
    color={"var(--color-primary)"}
     styles={{
    body: {
      color: "var(--color-background)", 
       fontWeight: 500,
    },
  }}
    
    >

    <button
  onClick={toggleTheme}
  aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
  className={`flex items-center justify-center px-1 py-1 rounded-full transition-all duration-300
    border shadow-sm hover:shadow-md focus:outline-none dark:focus:ring-offset-gray-800
    ${
      theme === 'dark'
        ? 'bg-input border-input'
        : 'bg-yellow-400 border-yellow-300 '
    }`}
>
  <div className="relative flex items-center justify-center">
    {/* Sun Icon */}
    <Sun
      size={20}
      className={`text-white transition-all duration-500 transform
        ${theme === 'light' ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-0 -rotate-90'}`}
    />
    {/* Moon Icon */}
    <Moon
      size={20}
      className={`text-white transition-all duration-500 transform absolute
        ${theme === 'dark' ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-0 rotate-90'}`}
    />
  </div>
</button>
</Tooltip>
  );
}
