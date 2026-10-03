import os

def fix_mojibake(filepath):
    # Read the corrupted file as UTF-8
    with open(filepath, 'r', encoding='utf-8') as f:
        corrupted_text = f.read()
    
    # Encode the string back to bytes using Windows-1252
    # Errors='ignore' or 'replace' just in case there are unmappable chars,
    # but there shouldn't be since they originally came from Windows-1252 decoding
    try:
        raw_bytes = corrupted_text.encode('cp1252')
    except UnicodeEncodeError as e:
        print(f"Failed to encode {filepath} to cp1252: {e}")
        # Some characters might have been transformed to something cp1252 doesn't have,
        # fallback to latin-1 which maps 1-to-1 for 0-255
        raw_bytes = corrupted_text.encode('latin-1', errors='ignore')
    
    # Decode the original bytes as UTF-8
    try:
        fixed_text = raw_bytes.decode('utf-8')
    except UnicodeDecodeError as e:
        print(f"Failed to decode {filepath} as utf-8: {e}")
        return

    # Write the fixed text back
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(fixed_text)
    
    print(f"Fixed {filepath}")

# Files to fix
files = [
    "c:/Users/admin/Desktop/project/app/src/pages/About.jsx",
    "c:/Users/admin/Desktop/project/app/src/pages/Careers.jsx",
    "c:/Users/admin/Desktop/project/app/src/pages/Contact.jsx",
    "c:/Users/admin/Desktop/project/app/src/pages/Ecosystem.jsx",
    "c:/Users/admin/Desktop/project/app/src/pages/News.jsx",
    "c:/Users/admin/Desktop/project/app/src/pages/Home.jsx"
]

for f in files:
    if os.path.exists(f):
        fix_mojibake(f)
