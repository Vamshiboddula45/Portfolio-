import fitz
import sys

def convert_pdf_to_png(pdf_path, png_path):
    try:
        doc = fitz.open(pdf_path)
        page = doc.load_page(0)
        pix = page.get_pixmap(matrix=fitz.Matrix(2, 2))
        pix.save(png_path)
        print(f"Saved {png_path}")
    except Exception as e:
        print(f"Error converting {pdf_path}: {e}")

if __name__ == "__main__":
    convert_pdf_to_png("cert2.pdf", "cert2.png")
    convert_pdf_to_png("cert3.pdf", "cert3.png")
    convert_pdf_to_png("cert4.pdf", "cert4.png")
