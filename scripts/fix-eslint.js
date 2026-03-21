const fs = require('fs');
const path = require('path');

// Fix admin/practice-areas/page.tsx
const practiceAreasPage = path.join(__dirname, '../src/app/admin/practice-areas/page.tsx');
let content = fs.readFileSync(practiceAreasPage, 'utf8');
content = content.replace(/import.*Eye.*from.*lucide-react.*\n/, '');
content = content.replace(/:\s*any/g, ': any');
fs.writeFileSync(practiceAreasPage, content);

// Fix admin/settlements/page.tsx
const settlementsPage = path.join(__dirname, '../src/app/admin/settlements/page.tsx');
content = fs.readFileSync(settlementsPage, 'utf8');
content = content.replace(/import.*Link.*from.*next\/link.*\n/, '');
fs.writeFileSync(settlementsPage, content);

// Fix api/contact/route.ts
const contactRoute = path.join(__dirname, '../src/app/api/contact/route.ts');
content = fs.readFileSync(contactRoute, 'utf8');
content = content.replace(/const contactSubmission = await prisma\.contactSubmission\.create/g, 'await prisma.contactSubmission.create');
fs.writeFileSync(contactRoute, content);

// Fix contact/page.tsx
const contactPage = path.join(__dirname, '../src/app/contact/page.tsx');
content = fs.readFileSync(contactPage, 'utf8');
content = content.replace(/} catch \(error\) {/g, '} catch (_) {');
fs.writeFileSync(contactPage, content);

// Fix in-the-news/[id]/page.tsx
const newsIdPage = path.join(__dirname, '../src/app/in-the-news/[id]/page.tsx');
content = fs.readFileSync(newsIdPage, 'utf8');
content = content.replace(/import.*useFirmName.*from.*FirmNameContext.*\n/, '');
fs.writeFileSync(newsIdPage, content);

// Fix in-the-news/page.tsx
const newsPage = path.join(__dirname, '../src/app/in-the-news/page.tsx');
content = fs.readFileSync(newsPage, 'utf8');
content = content.replace(/import.*ExternalLink.*from.*lucide-react.*\n/, '');
content = content.replace(/import.*Image.*from.*next\/image.*\n/, '');
fs.writeFileSync(newsPage, content);

// Fix page.tsx (home page)
const homePage = path.join(__dirname, '../src/app/page.tsx');
content = fs.readFileSync(homePage, 'utf8');
content = content.replace(/const settlementGroups = .*;\n/, '');
content = content.replace(/} catch \(err\) {/g, '} catch (_) {');
content = content.replace(/const groupPracticeAreasForCarousel = .*;\n/, '');
fs.writeFileSync(homePage, content);

console.log('ESLint errors fixed!'); 