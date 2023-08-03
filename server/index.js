const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const ExcelJS = require('exceljs');

// Use cors middleware to enable CORS
app.use(cors());

// Use body-parser middleware to parse incoming JSON data
app.use(bodyParser.json());

// Endpoint to handle form submissions
app.post('/submitApplication', async (req, res) => {
    const customerData = req.body;

    // Check if all required fields are present and non-empty
    if (!customerData.name || !customerData.email || !customerData.course || !customerData.phone || !customerData.message) {
        return res.status(400).json({ error: 'Please provide all required fields.' });
    }

    // Check if the email is in a valid format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(customerData.email)) {
        return res.status(400).json({ error: 'Please provide a valid email address.' });
    }

    try {
        // Process the customer data and append it to the Excel file
        await appendDataToExcel(customerData);
        res.json({ message: 'Application submitted successfully!' });
    } catch (error) {
        console.error('Error processing application:', error);
        res.status(500).json({ error: 'Failed to process application.' });
    }
});

// Helper function to append customer data to the Excel file
async function appendDataToExcel(customerData) {
    const excelFilePath = path.join(__dirname, 'customer_data.xlsx');
    let workbook;

    // Check if the Excel file already exists or create a new one
    if (fs.existsSync(excelFilePath)) {
        workbook = await ExcelJS.Workbook.fromFile(excelFilePath);
    } else {
        workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('CustomerData');
        worksheet.addRow(['Name', 'Email', 'Course', 'Phone', 'Message']); // Add header row
    }

    const worksheet = workbook.getWorksheet('CustomerData');
    worksheet.addRow([customerData.name, customerData.email, customerData.course, customerData.phone, customerData.message]);

    // Save the updated workbook to the file
    await workbook.xlsx.writeFile(excelFilePath);
}

const port = 5000; // Adjust this as needed
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
