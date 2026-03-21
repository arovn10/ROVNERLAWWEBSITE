"use client";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="contents page-transition-wrapper">
      {children}
    </div>
  );
}
