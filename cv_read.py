import pdfplumber

out = []
with pdfplumber.open(r'C:\Users\Shashwat Kashyap\Downloads\kuki landing\kuki landing\public\shashwat_cv.pdf') as pdf:
    for i, page in enumerate(pdf.pages):
        words = page.extract_words()
        text = ' '.join([w['text'] for w in words])
        out.append(f'--- PAGE {i+1} ---\n{text}')

result = '\n'.join(out)
with open('cv_output.txt', 'w', encoding='utf-8') as f:
    f.write(result)
print("Done! Written to cv_output.txt")
