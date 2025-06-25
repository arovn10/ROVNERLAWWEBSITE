"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                // Clear all tables
                return [4 /*yield*/, prisma.user.deleteMany()];
                case 1:
                    // Clear all tables
                    _a.sent();
                    return [4 /*yield*/, prisma.settlement.deleteMany()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, prisma.news.deleteMany()];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, prisma.archive.deleteMany()];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, prisma.settings.deleteMany()];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, prisma.lawyer.deleteMany()
                        // Seed only the Lawyer table
                    ];
                case 6:
                    _a.sent();
                    // Seed only the Lawyer table
                    return [4 /*yield*/, prisma.lawyer.createMany({
                            data: [
                                {
                                    id: 'cmbs1f7ce0000w80vr9fzo7zx',
                                    active: true,
                                    bio: 'Senator Robert A. Rovner founded and served as Senior Partner in the Law Firm of Rovner, Allen, Rovner, Zimmerman, Sigman & Schmidt from 1980 until 2021. In 1970, He was elected the youngest State Senator in Pennsylvania history representing Northeast Philadelphia and Bucks County.',
                                    createdAt: new Date('2025-06-11T14:20:57.710Z'),
                                    education: 'State Senator in Pennsylvania history',
                                    email: 'info@dial-law.com',
                                    experience: 'Senior Partner from 1980 until 2021',
                                    image: 'https://rovnerlawbucket.s3.us-east-1.amazonaws.com/uploads/1749651822716-rrovner.png',
                                    name: 'Robert A. Rovner',
                                    order: 1,
                                    phone: '215-259-5958',
                                    specialties: 'Personal Injury, Civil Litigation',
                                    title: 'Founding Partner (1943-2021)',
                                    updatedAt: new Date('2025-06-11T14:23:44.676Z'),
                                },
                                {
                                    id: 'cmbs1f7fs0001w80v6ldep45q',
                                    active: true,
                                    bio: 'Steven is the principal and managing attorney of Rovner, Allen, Rovner, Zimmerman, Sigman & Schmidt. He was born in Philadelphia and a graduate of Lower Moreland High School (1985), The University of Pennsylvania (1989) and The University of Miami School of Law (1992).',
                                    createdAt: new Date('2025-06-11T14:20:57.832Z'),
                                    education: 'The University of Miami School of Law (1992) The University of Pennsylvania (1989) Lower Moreland High School (1985)',
                                    email: 'srovner@dial-law.com',
                                    experience: 'Principal and managing attorney',
                                    image: 'https://rovnerlawbucket.s3.us-east-1.amazonaws.com/uploads/1749651681239-srovner.png',
                                    name: 'Steven L. Rovner',
                                    order: 2,
                                    phone: '215-259-5958',
                                    specialties: 'Personal Injury, Auto Accidents, Medical Malpractice',
                                    title: 'Principal and Managing Attorney',
                                    updatedAt: new Date('2025-06-11T14:21:23.833Z'),
                                },
                                {
                                    id: 'cmbs1f7k70002w80v5vja8ln5',
                                    active: true,
                                    bio: 'Bruce S. Allen Juris Doctor degree (May 1976) from Delaware Law School of Widener University; Bachelor of Science degree (May 1973) from Philadelphia University. Admitted to practice law in Pennsylvania, Federal District Court for the Eastern District of Pennsylvania and before the United States Supreme Court.',
                                    createdAt: new Date('2025-06-11T14:20:57.992Z'),
                                    education: 'Delaware Law School of Widener University (1976) Philadelphia University (1973)',
                                    email: 'ballen@dial-law.com',
                                    experience: 'Admitted to practice law in Pennsylvania, Federal District Court for the Eastern District of Pennsylvania and before the United States Supreme Court',
                                    image: 'https://rovnerlawbucket.s3.us-east-1.amazonaws.com/uploads/1749652005232-bruce_s.jpg',
                                    name: 'Bruce S. Allen',
                                    order: 3,
                                    phone: '215-259-5958',
                                    specialties: 'Personal Injury, Products Liability',
                                    title: 'Partner',
                                    updatedAt: new Date('2025-06-11T14:26:45.750Z'),
                                },
                                {
                                    id: 'cmbs1f7mu0003w80vhopq9l6a',
                                    active: true,
                                    bio: 'NE High School 1972 Graduated Temple University 1976 – BBA-Business Administration – Major in Business Law and Industrial Relations Delaware Law School of Widener University January 1980 – Juris Doctor.',
                                    createdAt: new Date('2025-06-11T14:20:58.086Z'),
                                    education: 'Delaware Law School of Widener University (1980) Temple University (1976) NE High School (1972)',
                                    email: 'hrovner@dial-law.com',
                                    experience: 'Partner at Rovner, Allen, Rovner, Zimmerman, Sigman & Schmidt',
                                    image: 'https://rovnerlawbucket.s3.us-east-1.amazonaws.com/uploads/1749652027354-hrovner.png',
                                    name: 'Howard P. Rovner',
                                    order: 4,
                                    phone: '215-259-5958',
                                    specialties: "Workers' Compensation, Business Law",
                                    title: 'Partner',
                                    updatedAt: new Date('2025-06-11T14:27:07.925Z'),
                                },
                                {
                                    id: 'cmbs1f7rt0005w80v6daz9wdk',
                                    active: true,
                                    bio: 'Jeffrey Allen Sigman focuses on family law, divorce, and custody matters. He provides compassionate representation during difficult family situations.',
                                    createdAt: new Date('2025-06-11T14:20:58.265Z'),
                                    education: 'Juris Doctor',
                                    email: 'jsigman@dial-law.com',
                                    experience: 'Extensive experience in family law',
                                    image: 'https://rovnerlawbucket.s3.us-east-1.amazonaws.com/uploads/1749652096141-jsigman.png',
                                    name: 'Jeffrey Allen Sigman',
                                    order: 6,
                                    phone: '215-259-5958',
                                    specialties: 'Family Law, Divorce, Custody',
                                    title: 'Partner',
                                    updatedAt: new Date('2025-06-11T14:28:16.776Z'),
                                },
                                {
                                    id: 'cmbs1f83q000aw80vmvasyp42',
                                    active: true,
                                    bio: 'Joseph S. Lukomski handles personal injury cases and civil litigation.',
                                    createdAt: new Date('2025-06-11T14:20:58.695Z'),
                                    education: 'Juris Doctor',
                                    email: 'jlukomski@dial-law.com',
                                    experience: 'Experience in personal injury and civil litigation',
                                    image: 'https://rovnerlawbucket.s3.us-east-1.amazonaws.com/lawyers/joseph-lukomski.jpg',
                                    name: 'Joseph S. Lukomski',
                                    order: 11,
                                    phone: '215-259-5958',
                                    specialties: 'Personal Injury, Civil Litigation',
                                    title: 'Attorney',
                                    updatedAt: new Date('2025-06-11T14:20:58.695Z'),
                                },
                                {
                                    id: 'cmbs1f86b000bw80vp1zvidgn',
                                    active: true,
                                    bio: 'Cheryl B. Wolf specializes in personal injury law and client advocacy.',
                                    createdAt: new Date('2025-06-11T14:20:58.788Z'),
                                    education: 'Juris Doctor',
                                    email: 'cwolf@dial-law.com',
                                    experience: 'Experience in personal injury law',
                                    image: 'https://rovnerlawbucket.s3.us-east-1.amazonaws.com/uploads/1749682898602-cwolf.png',
                                    name: 'Cheryl B. Wolf (of counsel)',
                                    order: 12,
                                    phone: '215-259-5958',
                                    specialties: 'Personal Injury, Client Advocacy',
                                    title: 'Attorney',
                                    updatedAt: new Date('2025-06-11T23:01:39.049Z'),
                                },
                            ]
                        })];
                case 7:
                    // Seed only the Lawyer table
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
main()
    .catch(function (e) {
    console.error(e);
    process.exit(1);
})
    .finally(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
