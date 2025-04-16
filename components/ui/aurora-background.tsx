"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          "relative flex flex-col h-[100vh] items-center justify-center bg-zinc-50 dark:bg-zinc-900 text-slate-950 transition-bg overflow-hidden",
          className
        )}
        {...props}
      >
        {/* Blob 1 */}
        <div 
          className="absolute opacity-20 dark:opacity-30 blur-3xl"
          style={{
            width: '40%',
            height: '40%',
            borderRadius: '50%',
            background: 'var(--syrax-green-400)',
            top: '10%',
            left: '0%',
            animation: 'blob-move-1 25s infinite alternate ease-in-out',
          }}
        />
        
        {/* Blob 2 */}
        <div 
          className="absolute opacity-20 dark:opacity-30 blur-3xl"
          style={{
            width: '30%',
            height: '30%',
            borderRadius: '50%',
            background: 'var(--syrax-green-300)',
            bottom: '10%',
            right: '5%',
            animation: 'blob-move-2 30s infinite alternate ease-in-out',
          }}
        />
        
        {/* Blob 3 */}
        <div 
          className="absolute opacity-20 dark:opacity-30 blur-3xl"
          style={{
            width: '35%',
            height: '35%',
            borderRadius: '50%',
            background: 'var(--syrax-green-500)',
            top: '40%',
            right: '20%',
            animation: 'blob-move-3 40s infinite alternate ease-in-out',
          }}
        />
        
        {/* Blob 4 */}
        <div 
          className="absolute opacity-20 dark:opacity-30 blur-3xl"
          style={{
            width: '25%',
            height: '25%',
            borderRadius: '50%',
            background: 'var(--syrax-green-600)',
            bottom: '30%',
            left: '15%',
            animation: 'blob-move-4 35s infinite alternate ease-in-out',
          }}
        />
        
        {children}
      </div>
    </main>
  );
};
