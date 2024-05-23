const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

// Set up Multer for handling file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle file upload
app.post('/upload', upload.single('file'), (req, res) => {
    res.redirect('/');
});

// Serve uploaded files
app.use('/uploads', express.static('uploads'));

app.listen(port, () => {
    console.log(`Server is running at file:///C:/Users/suraj/Downloads/.`);
});


    // Function to handle mouse hover event
    function handleHover() {
        // Selecting the div element where Hindi text will be displayed
        var hindiDiv = document.getElementById("hindiText");
        
        // Adding Hindi text
        hindiDiv.innerHTML = "सुरज सुरज सूरा"; // "Suraj Suraj Sura" in Hindi
    }


    