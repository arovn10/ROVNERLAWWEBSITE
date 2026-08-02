'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface FirmNameContextType {
  firmName: string;
  loading: boolean;
  setFirmName: (name: string) => void;
}

const FirmNameContext = createContext<FirmNameContextType | undefined>(undefined);

export function FirmNameProvider({
  children,
  initialFirmName = 'Law Firm',
}: {
  children: ReactNode;
  initialFirmName?: string;
}) {
  // Seeded from the database by the root layout so the real firm name is in the
  // server-rendered HTML. Falling back to a placeholder here would publish
  // "Law Firm" as the site-wide brand and <h1> to crawlers.
  const [firmName, setFirmNameState] = useState(initialFirmName);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') {
      setLoading(false);
      return;
    }

    // Keep localStorage in step with the server-rendered value, so an admin
    // rename is reflected without a stale cached name winning.
    try {
      localStorage.setItem('firmName', initialFirmName);
    } catch (error) {
      console.error('Error accessing localStorage:', error);
    }

    // Re-check against the API. Redundant while pages render per-request, but it
    // keeps the name correct if the page is ever served from a cache that
    // predates an admin rename.
    fetch('/api/settings/firm-name')
      .then(res => res.json())
      .then(data => {
        if (data.firmName) {
          setFirmNameState(data.firmName);
          localStorage.setItem('firmName', data.firmName);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching firm name:', error);
        setLoading(false);
      });
  }, [initialFirmName]);

  const setFirmName = (name: string) => {
    setFirmNameState(name);
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem('firmName', name);
      }
    } catch (error) {
      console.error('Error setting localStorage:', error);
    }
  };

  return (
    <FirmNameContext.Provider value={{ firmName, loading, setFirmName }}>
      {children}
    </FirmNameContext.Provider>
  );
}

export function useFirmName() {
  const context = useContext(FirmNameContext);
  if (context === undefined) {
    throw new Error('useFirmName must be used within a FirmNameProvider');
  }
  return context;
} 