"use client";

import { useState } from 'react';
import MobileHeader from '@/components/MobileHeader';
import MobileNav from '@/components/MobileNav';

export default function MobileNavClient() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <MobileHeader isMenuOpen={open} onMenuClick={() => setOpen((v) => !v)} />
      <MobileNav isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
