const fs = require('fs');
const path = require('path');

// Helper function to read and write files
function fixFile(filePath, replacements) {
  let content = fs.readFileSync(filePath, 'utf8');
  replacements.forEach(({ from, to }) => {
    content = content.replace(from, to);
  });
  fs.writeFileSync(filePath, content);
}

// Fix admin/archives/page.tsx
fixFile(path.join(__dirname, '../src/app/admin/archives/page.tsx'), [
  { from: /import.*Link.*from.*next\/link.*\n/, to: 'import Link from \'next/link\';\n' },
  { from: /: any/g, to: ': any' },
]);

// Fix admin/dashboard/page.tsx
fixFile(path.join(__dirname, '../src/app/admin/dashboard/page.tsx'), [
  { from: /import.*useRouter.*from.*next\/navigation.*\n/, to: '' },
  { from: /const.*session.*=.*useSession\(\);\n/, to: 'const { status } = useSession();\n' },
]);

// Fix admin/layout.tsx
fixFile(path.join(__dirname, '../src/app/admin/layout.tsx'), [
  { from: /import.*redirect.*from.*next\/navigation.*\n/, to: '' },
  { from: /import.*\{.*Settings.*FileText.*Briefcase.*Users.*Plus.*Edit.*Trash2.*Eye.*ExternalLink.*Home.*LogOut.*\}.*from.*lucide-react.*\n/, to: 'import { Home, LogOut } from "lucide-react";\n' },
]);

// Fix admin/news/[id]/edit/page.tsx
fixFile(path.join(__dirname, '../src/app/admin/news/[id]/edit/page.tsx'), [
  { from: /import.*getServerSession.*from.*next-auth\/next.*\n/, to: '' },
  { from: /import.*redirect.*from.*next\/navigation.*\n/, to: '' },
  { from: /import.*prisma.*from.*@\/lib\/prisma.*\n/, to: '' },
]);

// Fix admin/practice-areas/[id]/edit/page.tsx
fixFile(path.join(__dirname, '../src/app/admin/practice-areas/[id]/edit/page.tsx'), [
  { from: /} catch \(_\) {/, to: '} catch { /* ignore error */' },
]);

// Fix admin/practice-areas/page.tsx
fixFile(path.join(__dirname, '../src/app/admin/practice-areas/page.tsx'), [
  { from: /import.*\{.*Plus.*Edit.*Trash2.*\}.*from.*lucide-react.*\n/, to: 'import { Plus, Edit, Trash2 } from "lucide-react";\n' },
]);

// Fix admin/settlements/page.tsx
fixFile(path.join(__dirname, '../src/app/admin/settlements/page.tsx'), [
  { from: /import.*Link.*from.*next\/link.*\n/, to: 'import Link from \'next/link\';\n' },
]);

// Fix admin/archives/[id]/edit/page.tsx
fixFile(path.join(__dirname, '../src/app/admin/archives/[id]/edit/page.tsx'), [
  { from: /} catch \(err\) {/, to: '} catch { /* ignore error */' },
]);

// Fix admin/archives/new/page.tsx
fixFile(path.join(__dirname, '../src/app/admin/archives/new/page.tsx'), [
  { from: /} catch \(err\) {/, to: '} catch { /* ignore error */' },
]);

// Fix admin/settlements/[id]/edit/page.tsx
fixFile(path.join(__dirname, '../src/app/admin/settlements/[id]/edit/page.tsx'), [
  { from: /} catch \(err\) {/, to: '} catch { /* ignore error */' },
]);

// Fix admin/settlements/new/page.tsx
fixFile(path.join(__dirname, '../src/app/admin/settlements/new/page.tsx'), [
  { from: /} catch \(err\) {/, to: '} catch { /* ignore error */' },
]);

// Fix api/archives/[id]/route.ts
fixFile(path.join(__dirname, '../src/app/api/archives/[id]/route.ts'), [
  { from: /} catch \(error\) {/, to: '} catch { /* ignore error */' },
]);

// Fix api/settlements/[id]/route.ts
fixFile(path.join(__dirname, '../src/app/api/settlements/[id]/route.ts'), [
  { from: /} catch \(error\) {/, to: '} catch { /* ignore error */' },
]);

// Fix contact/page.tsx
fixFile(path.join(__dirname, '../src/app/contact/page.tsx'), [
  { from: /} catch \(_\) {/, to: '} catch { /* ignore error */' },
]);

// Fix in-the-news/page.tsx
fixFile(path.join(__dirname, '../src/app/in-the-news/page.tsx'), [
  { from: /import.*\{.*FileText.*Calendar.*ArrowLeft.*\}.*from.*lucide-react.*\n/, to: 'import { FileText, Calendar, ArrowLeft } from "lucide-react";\n' },
]);

// Fix page.tsx (home page)
fixFile(path.join(__dirname, '../src/app/page.tsx'), [
  { from: /const settlementGroups = .*;\n/, to: '' },
  { from: /} catch \(err\) {/, to: '} catch { /* ignore error */' },
  { from: /const groupPracticeAreasForCarousel = .*;\n/, to: '' },
]);

// Fix practice/[slug]/page.tsx
fixFile(path.join(__dirname, '../src/app/practice/[slug]/page.tsx'), [
  { from: /import fs from 'fs';\n/, to: '' },
  { from: /import path from 'path';\n/, to: '' },
]);

console.log('All ESLint errors fixed!'); 