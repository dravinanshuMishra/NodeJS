const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

// Create PDF
const doc = new PDFDocument({ margin: 50 });
doc.pipe(fs.createWriteStream('Woman_Profile_Interview_Modern.pdf'));

// Register Hindi font (optional, for Hindi text)
const fontPath = path.join(__dirname, 'fonts', 'NotoSansDevanagari-Regular.ttf');
if(fs.existsSync(fontPath)){
    doc.registerFont('HindiFont', fontPath);
}

// Function to add a profile
function addProfile(profile){
    // Header
    doc.rect(50, 40, 500, 30).fill('#1A5276');
    doc.fillColor('white').fontSize(16).font('Helvetica-Bold').text('Woman Profile / Interview Style Biodata', 55, 45);
    doc.moveDown(2);

    // Personal Info Table
    doc.fillColor('#154360').fontSize(14).text('Personal Information', { underline: true });
    doc.moveDown(0.5);

    profile.personalInfo.forEach(row => {
        doc.rect(doc.x-2, doc.y-2, 500, 20).stroke('#154360'); // border
        doc.font('Helvetica-Bold').fillColor('#154360').text(row[0] + ': ', { continued: true });
        doc.font('Helvetica').fillColor('black').text(row[1]);
        doc.moveDown(0.2);
    });

    doc.moveDown(1);

    // Photo placeholder
    doc.rect(doc.x, doc.y, 100, 100).stroke('#1A5276');
    doc.fontSize(12).fillColor('#555555').text('Photo', doc.x+25, doc.y+40);
    doc.moveDown(6);

    // Interview Q&A
    doc.fillColor('#154360').fontSize(14).text('Life Journey and Struggles (Interview)', { underline: true });
    doc.moveDown(0.5);

    profile.qa.forEach(item => {
        doc.font('Helvetica-Bold').fillColor('#1A5276').fontSize(12).text(item.question);
        doc.font('Helvetica').fillColor('black').fontSize(12).text(item.answer);
        doc.moveDown(0.5);
    });

    doc.addPage(); // New page for next profile
}

// Example profile data
const profile = {
    personalInfo: [
        ['Name', 'Radha Devi'],
        ['Age', '32 Years'],
        ['Place of Birth', 'Bihar'],
        ['Current Residence', 'Himachal Pradesh'],
        ['Education', 'Very little schooling'],
        ['Family', 'Husband works as farm laborer, 2 children']
    ],
    qa: [
        { question: 'Q1: Why did you come to Himachal Pradesh for work?', answer: 'A: "Bihar me employment nahi milta. Children ka pet chalana mushkil ho raha tha."' },
        { question: 'Q2: What is your daily routine?', answer: 'A: "I wake up 5am, clean 20+ houses, wash dishes, sweep and mop."' },
        { question: 'Q3: How much money do you earn?', answer: 'A: "2000–3000 per month. Very little but necessary."' },
        { question: 'Q4: Biggest challenge?', answer: 'A: "Tiredness, harsh weather, being away from children."' },
        { question: 'Q5: Your dreams?', answer: 'A: "Children should study well and have a good life."' }
    ]
}

// Add profile
addProfile(profile);

// Finalize PDF
doc.end();
console.log('Modern styled PDF generated: Woman_Profile_Interview_Modern.pdf');
