import fitz  # PyMuPDF
import sys
import os

def extract_pdf_info(pdf_path, output_dir):
    try:
        doc = fitz.open(pdf_path)
        base_name = os.path.splitext(os.path.basename(pdf_path))[0]
        
        text_content = []
        for page_num in range(len(doc)):
            page = doc.load_page(page_num)
            text_content.append(page.get_text())
            
            # Extract images
            image_list = page.get_images(full=True)
            for img_index, img in enumerate(image_list):
                xref = img[0]
                base_image = doc.extract_image(xref)
                image_bytes = base_image["image"]
                image_ext = base_image["ext"]
                image_filename = os.path.join(output_dir, f"{base_name}_page{page_num}_img{img_index}.{image_ext}")
                with open(image_filename, "wb") as f:
                    f.write(image_bytes)
                    
        text_filename = os.path.join(output_dir, f"{base_name}_text.txt")
        with open(text_filename, "w", encoding="utf-8") as f:
            f.write("\n--- PAGE BREAK ---\n".join(text_content))
            
        print(f"Successfully processed {pdf_path}")
        
    except Exception as e:
        print(f"Error processing {pdf_path}: {e}")

if __name__ == "__main__":
    pdf_paths = [
        r"c:\Users\zhaoy\Documents\WeChat Files\wxid_8gs9gp53rvcb12\FileStorage\File\2026-02\JP-BASE渋谷_概要書_260128（税抜）_価格改定後.pdf",
        r"c:\Users\zhaoy\Documents\WeChat Files\wxid_8gs9gp53rvcb12\FileStorage\File\2026-02\ラ・ヴィータさん販売図面.pdf"
    ]
    
    output_dir = r"c:\Users\zhaoy\Documents\AIHASHIsite\aihashi-site\public\pdf_extract"
    os.makedirs(output_dir, exist_ok=True)
    
    for pdf in pdf_paths:
        extract_pdf_info(pdf, output_dir)
