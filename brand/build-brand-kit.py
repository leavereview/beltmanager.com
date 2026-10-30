"""BeltManager social image kit. Brand = the parent app's mark (white hexagon BM on rust #a83a0a),
from dojo/apps/parent/assets/brand/mark.svg. Run: python3 brand/build-brand-kit.py (writes png/ and svg/)."""
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from brandlib import *
from PIL import Image

RUST = "#a83a0a"; WHITE = "#ffffff"; SOFT = "#f3d9cc"
GLYPH = ('<g fill="none" stroke="{c}" stroke-linecap="round" stroke-linejoin="round">'
         '<path stroke-width="1.5" d="M12 1.75 20.9 6.88v10.24L12 22.25l-8.9-5.13V6.88z"/>'
         '<path stroke-width="1.75" d="M6.7 8.5v7M6.7 8.5h2.2a1.75 1.75 0 0 1 0 3.5H6.7M6.7 12h2.55a1.75 1.75 0 0 1 0 3.5H6.7"/>'
         '<path stroke-width="1.75" d="M13.3 15.5v-7l2 3.6 2-3.6v7"/></g>')

def mark(x, y, size, color=WHITE):
    return f'<g transform="translate({x:.2f} {y:.2f}) scale({size/24:.4f})">{GLYPH.format(c=color)}</g>'

def bg(w, h): return f'<rect width="{w}" height="{h}" fill="{RUST}"/>'

def write(name, w, h, body, out_w=None):
    s = svg_doc(w, h, body)
    open(f'{BRAND}/svg/{name}.svg', 'w').write(s)
    png(s, f'{BRAND}/png/{name}.png', out_w or w, int(h * (out_w or w) / w))

LX = face('Lexend-Bold'); IR = face('Inter-SemiBold')
HEAD = "Set it up once. Then teach."
SUB = "Class, attendance and grading software for martial-arts clubs"
URL = "beltmanager.com"

# avatar: mark at 56% of the square, safe for circle crops
write('social-avatar-800', 800, 800, bg(800, 800) + mark(800*0.22, 800*0.22, 800*0.56), 800)

def banner(name, w, h, mark_h, head_s, sub_s, url_s, left, text_x=None, centred=False, sub=True):
    b = bg(w, h)
    mx = left; my = (h - mark_h) / 2
    b += mark(mx, my, mark_h)
    tx = mx + mark_h + mark_h * 0.28 if text_x is None else text_x
    total = head_s * 1.0 + (sub_s * 1.7 if sub else 0) + url_s * 1.4
    y = (h - total) / 2 + head_s * 0.78
    b += text(LX, HEAD, head_s, tx, y, WHITE, 'outline')
    if sub:
        y += sub_s * 1.7
        b += text(IR, SUB, sub_s, tx, y, SOFT, 'outline')
    y += url_s * 1.5 if sub else head_s * 0.4 + url_s
    b += text(IR, URL, url_s, tx, y, WHITE, 'outline')
    return b

write('banner-facebook-1640x624', 1640, 624, banner('fb', 1640, 624, 250, 78, 36, 36, 150))
write('banner-linkedin-1128x191', 1128, 191, banner('li', 1128, 191, 100, 34, 0, 20, 60, sub=False))
write('banner-og-1200x630', 1200, 630, banner('og', 1200, 630, 190, 48, 23, 26, 75))
# youtube: everything inside the central 1546x423 safe area (x 507..2053, y 508..931)
write('banner-youtube-2560x1440', 2560, 1440, banner('yt', 2560, 1440, 260, 80, 38, 38, 545, text_x=545+260+55), 2560)
write('youtube-watermark-150', 150, 150, mark(15, 15, 120), 150)
# transparent watermark (no background rect)

# contact sheet
names = ['social-avatar-800','banner-facebook-1640x624','banner-linkedin-1128x191','banner-youtube-2560x1440','banner-og-1200x630','youtube-watermark-150']
sheet = Image.new('RGB', (1700, 1500), '#f7f7f5'); y = 20
def put(n, wmax, x, y):
    im = Image.open(f'{BRAND}/png/{n}.png').convert('RGBA'); r = wmax/im.width
    im = im.resize((wmax, int(im.height*r))); base = Image.new('RGBA', im.size, '#888'); base.alpha_composite(im)
    sheet.paste(base.convert('RGB'), (x, y)); return im.height
h1 = put(names[0], 300, 20, y); put(names[5], 150, 340, y)
# circle crop preview
av = Image.open(f'{BRAND}/png/{names[0]}.png').convert('RGB').resize((200,200)); m = Image.new('L',(200,200),0)
from PIL import ImageDraw; ImageDraw.Draw(m).ellipse((0,0,199,199), fill=255); sheet.paste(av,(520,y),m)
y += h1 + 20
y += put(names[1], 820, 20, y) + 20; put(names[4], 600, 860, y-20-312)
y += put(names[2], 1128, 20, y) + 20
y += put(names[3], 900, 20, y) + 20
sheet.crop((0,0,1700,y)).save(os.path.join(os.environ.get('SHEET_DIR', '.'), 'contact-sheet.png'))
