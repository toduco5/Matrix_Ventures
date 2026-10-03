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
            const content = fs.readFileSync(file);
            // Check if it starts with EF BF BD
            if (content.length >= 3 && content[0] === 0xef && content[1] === 0xbf && content[2] === 0xbd) {
                console.log("Found replacement character BOM in " + file + ", removing it.");
                const fixedContent = content.subarray(3);
                fs.writeFileSync(file, fixedContent);
            } else if (content.length >= 3 && content[0] === 0xef && content[1] === 0xbb && content[2] === 0xbf) {
                console.log("Found standard BOM in " + file + ", removing it.");
                const fixedContent = content.subarray(3);
                fs.writeFileSync(file, fixedContent);
            } else {
                // If it starts with some other weird character before 'import'
                const str = content.toString('utf8');
                if (!str.startsWith('import')) {
                    const idx = str.indexOf('import');
                    if (idx > 0 && idx < 10) {
                        console.log("Removing weird leading chars in " + file);
                        fs.writeFileSync(file, str.substring(idx), 'utf8');
                    }
                }
            }
        } catch (e) {
            console.error(e);
        }
    }
});
