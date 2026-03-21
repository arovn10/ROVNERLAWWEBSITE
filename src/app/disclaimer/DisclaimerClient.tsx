'use client';

import { useState } from 'react';
import MobileHeader from '@/components/MobileHeader';
import MobileNav from '@/components/MobileNav';

export default function DisclaimerClient() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <MobileHeader isMenuOpen={mobileMenuOpen} onMenuClick={() => setMobileMenuOpen((v) => !v)} />
      <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
