const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const ExcelJS = require('exceljs');
const fileUpload = require('express-fileupload');

// Use cors middleware to enable CORS
app.use(cors());

// Use body-parser middleware to parse incoming JSON data
app.use(bodyParser.json());

// Use express-fileupload middleware for file upload
app.use(fileUpload());

// Endpoint to handle form submissions
app.post('/submitStudentApplication', async (req, res) => {
    const studentData = req.body;

    // Check if all required fields are present and non-empty
    if (!studentData.name || !studentData.email || !studentData.course || !studentData.phone || !studentData.message) {
        return res.status(400).json({ error: 'Please provide all required fields.' });
    }

    // Check if the email is in a valid format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(studentData.email)) {
        return res.status(400).json({ error: 'Please provide a valid email address.' });
    }

    try {
        // Process the customer data and append it to the Excel file
        await appendStudentDataToExcel(studentData);
        res.json({ message: 'Application submitted successfully!' });
    } catch (error) {
        console.error('Error processing application:', error);
        res.status(500).json({ error: 'Failed to process application.' });
    }
});

// Endpoint to handle teacher form submissions
app.post('/submitTeacherApplication', async (req, res) => {
    const teacherData = req.body;

    // Check if all required fields are present and non-empty for teacher form
    if (!teacherData.name || !teacherData.email || !teacherData.experience || !teacherData.phone || !teacherData.message || !teacherData.preferredLevel || !teacherData.educationLevel || !teacherData.availability || !teacherData.preferredSubjects) {
        return res.status(400).json({ error: 'Please provide all required fields including resume.' });
    }

    // Check if the email is in a valid format for teacher form
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(teacherData.email)) {
        return res.status(400).json({ error: 'Please provide a valid email address.' });
    }

    try {
        // Process the teacher data and append it to the Excel file
        await appendTeacherDataToExcel(teacherData);
        res.json({ message: 'Application submitted successfully!' });
    } catch (error) {
        console.error('Error processing application:', error);
        res.status(500).json({ error: 'Failed to process application.' });
    }
});

// Helper function to append student data to the Excel file
async function appendStudentDataToExcel(studentData) {
    const excelFilePath = path.join(__dirname, 'student_list.xlsx');
    let workbook = new ExcelJS.Workbook();

    // Check if the Excel file already exists or create a new one
    if (fs.existsSync(excelFilePath)) {
        await workbook.xlsx.readFile(excelFilePath);
    } else {
        const worksheet = workbook.addWorksheet('StudentData');
        worksheet.addRow(['Name', 'Email', 'Course', 'Phone', 'Message']); // Add header row
    }

    const worksheet = workbook.getWorksheet('StudentData');
    worksheet.addRow([studentData.name, studentData.email, studentData.course, studentData.phone, studentData.message]);

    // Save the updated workbook to the file
    await workbook.xlsx.writeFile(excelFilePath);
}

// Helper function to append teacher data to the Excel file
async function appendTeacherDataToExcel(teacherData) {
    const excelFilePath = path.join(__dirname, 'teacher_list.xlsx');
    let workbook = new ExcelJS.Workbook();

    // Check if the Excel file already exists or create a new one
    if (fs.existsSync(excelFilePath)) {
        await workbook.xlsx.readFile(excelFilePath);
    } else {
        const worksheet = workbook.addWorksheet('TeacherData');
        worksheet.addRow(['Name', 'Email', 'Experience', 'Phone', 'Message', 'Preferred Level', 'Education Level', 'Availability', 'Preferred Subjects']); // Add header row
    }

    const worksheet = workbook.getWorksheet('TeacherData');
    worksheet.addRow([
        teacherData.name,
        teacherData.email,
        teacherData.experience,
        teacherData.phone,
        teacherData.message,
        teacherData.preferredLevel,
        teacherData.educationLevel,
        teacherData.availability,
        teacherData.preferredSubjects
    ]);

    // Save the updated workbook to the file
    await workbook.xlsx.writeFile(excelFilePath);
}

// Endpoint to handle file uploads
app.post('/upload', async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    const resume = req.files.resume;
    const uploadPath = path.join(__dirname, 'Resumes', resume.name);

    if (!fs.existsSync(path.join(__dirname, 'Resumes'))) {
        fs.mkdirSync(path.join(__dirname, 'Resumes'));
    }

    resume.mv(uploadPath, (err) => {
        if (err) return res.status(500).send(err);
        res.send('File uploaded!');
    });
});

const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
