import os
import shutil

EXTRACT_DIR = r"c:\Users\zhaoy\Documents\AIHASHIsite\aihashi-site\public\pdf_extract"
PUBLIC_DIR = r"c:\Users\zhaoy\Documents\AIHASHIsite\aihashi-site\public\properties"

JP_BASE_DIR = os.path.join(PUBLIC_DIR, "jp-base-shibuya")
LA_VITA_DIR = os.path.join(PUBLIC_DIR, "la-vita")

os.makedirs(JP_BASE_DIR, exist_ok=True)
os.makedirs(LA_VITA_DIR, exist_ok=True)

# La Vita images are simple: page0 to page8
for i in range(9):
    src = os.path.join(EXTRACT_DIR, f"ラ・ヴィータさん販売図面_page{i}_img0.png")
    dst = os.path.join(LA_VITA_DIR, f"slide_{i}.png")
    if os.path.exists(src):
        shutil.copy2(src, dst)

# JP Base - let's grab some key images for the gallery
jp_base_images = [
    ("JP-BASE渋谷_概要書_260128（税抜）_価格改定後_page0_img0.jpeg", "cover.jpeg"),  # Cover
    ("JP-BASE渋谷_概要書_260128（税抜）_価格改定後_page5_img0.jpeg", "map1.jpeg"),
    ("JP-BASE渋谷_概要書_260128（税抜）_価格改定後_page6_img0.jpeg", "map2.jpeg"),
    ("JP-BASE渋谷_概要書_260128（税抜）_価格改定後_page7_img0.jpeg", "exterior1.jpeg"),
    ("JP-BASE渋谷_概要書_260128（税抜）_価格改定後_page7_img1.jpeg", "exterior2.jpeg"),
    ("JP-BASE渋谷_概要書_260128（税抜）_価格改定後_page8_img0.jpeg", "interior1.jpeg"),
    ("JP-BASE渋谷_概要書_260128（税抜）_価格改定後_page9_img0.jpeg", "interior_plan.jpeg"),
    ("JP-BASE渋谷_概要書_260128（税抜）_価格改定後_page10_img0.jpeg", "roof1.jpeg"),
    ("JP-BASE渋谷_概要書_260128（税抜）_価格改定後_page11_img0.jpeg", "floor_plan1.jpeg"),
    ("JP-BASE渋谷_概要書_260128（税抜）_価格改定後_page18_img0.jpeg", "roof_plan.jpeg"),
    ("JP-BASE渋谷_概要書_260128（税抜）_価格改定後_page19_img0.jpeg", "elevation1.jpeg"),
    ("JP-BASE渋谷_概要書_260128（税抜）_価格改定後_page20_img0.jpeg", "elevation2.jpeg"),
]

for src_name, dst_name in jp_base_images:
    src = os.path.join(EXTRACT_DIR, src_name)
    dst = os.path.join(JP_BASE_DIR, dst_name)
    if os.path.exists(src):
        shutil.copy2(src, dst)

print("Images copied successfully.")
