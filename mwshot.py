from playwright.sync_api import sync_playwright
CHROME="/opt/pw-browsers/chromium-1194/chrome-linux/chrome"
with sync_playwright() as p:
    b=p.chromium.launch(executable_path=CHROME)
    pg=b.new_context(viewport={"width":1280,"height":1000},device_scale_factor=1).new_page()
    pg.goto("http://127.0.0.1:8100/",wait_until="networkidle",timeout=90000); pg.wait_for_timeout(4000)
    print("title:",pg.title())
    print("headings:",pg.evaluate("()=>[...document.querySelectorAll('h1,h2,h3')].slice(0,14).map(e=>e.tagName+': '+e.textContent.trim().slice(0,60))"))
    print("buttons:",pg.evaluate("()=>[...document.querySelectorAll('button,a')].slice(0,14).map(e=>e.textContent.trim().slice(0,32)).filter(Boolean)"))
    pg.screenshot(path="mw_full.png",full_page=True)
    b.close()
