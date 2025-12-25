import os
import re

# Het patroon dat we zoeken (begint bij <section en eindigt bij </section>)
pattern = re.compile(r'<section class="cookie_div dark_theme">.*?</section>', re.DOTALL)

for root, dirs, files in os.walk("."):
    for file in files:
        if file.endswith((".html", ".php", ".htm")): # Voeg extensies toe indien nodig
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()

            if pattern.search(content):
                new_content = pattern.sub('', content)
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Gecorrigeerd: {path}")