'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface FirmNameContextType {
  firmName: string;
  loading: boolean;
  setFirmName: (name: string) => void;
}

const FirmNameContext = createContext<FirmNameContextType | undefined>(undefined);

export function FirmNameProvider({ children }: { children: ReactNode }) {
  const [firmName, setFirmNameState] = useState('Law Firm');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') {
      setLoading(false);
      return;
    }

    // Check if firm name is already cached in localStorage
    try {
      const cachedFirmName = localStorage.getItem('firmName');
      if (cachedFirmName) {
        setFirmNameState(cachedFirmName);
        setLoading(false);
      }
    } catch (error) {
      console.error('Error accessing localStorage:', error);
    }

    // Fetch firm name from API
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
  }, []);

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