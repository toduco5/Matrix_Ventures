const fs = require('fs');

const files = [
    "c:/Users/admin/Desktop/project/app/src/pages/About.jsx",
    "c:/Users/admin/Desktop/project/app/src/pages/Careers.jsx",
    "c:/Users/admin/Desktop/project/app/src/pages/Contact.jsx",
    "c:/Users/admin/Desktop/project/app/src/pages/Ecosystem.jsx",
    "c:/Users/admin/Desktop/project/app/src/pages/News.jsx",
    "c:/Users/admin/Desktop/project/app/src/pages/Home.jsx"
];

files.forEach(file => {
    if (fs.existsSync(file)) {
        try {
            // Read the corrupted UTF-8 string
            const corruptedText = fs.readFileSync(file, 'utf8');
            
            // The string was parsed as UTF-8, but it originally contained bytes decoded as CP1252/latin1.
            // Let's convert it back to a Buffer by interpreting each character's charCode as a byte.
            // Latin-1 (ISO-8859-1) mapping works because Windows-1252 is similar, but let's be careful.
            // Buffer.from(string, 'binary') treats the string as latin-1.
            const rawBytes = Buffer.from(corruptedText, 'binary');
            
            // Now decode those raw bytes as UTF-8
            const fixedText = rawBytes.toString('utf8');
            
            // Write it back
            fs.writeFileSync(file, fixedText, 'utf8');
            console.log("Fixed " + file);
        } catch (e) {
            console.error("Error fixing " + file + ":", e);
        }
    }
});
