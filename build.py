#!/usr/bin/env python3
"""Construeix les quatre versions de l'Orloj a partir d'una sola font.

  orloj.js            codi compartit (tot el comportament del rellotge)
  shells/*.html       estil i estructura propis de cada versió
  comu/               controls (so, nit, pantalla) i etiquetes del <head>
  assets/             so d'engranatge i textura de pàtina
  pwa/                manifest, service worker i icones

Ús:  python3 build.py        -> escriu les versions a dist/
Cada fitxer de dist/ és autònom: es pot pujar tal qual a GitHub Pages.
Per poder-lo instal·lar i obrir sense connexió, cal pujar també els fitxers
de pwa/ (copiats a dist/) a la mateixa carpeta.
"""
import base64
import json
import pathlib
import shutil

ARREL = pathlib.Path(__file__).resolve().parent
DIST = ARREL / "dist"

# Configuració pròpia de cada versió (la llegeix orloj.js).
VARIANTS = {
    "orloj-escriptori.html": {
        "selectorTitol": "h1", "textDaurat": "original", "pantallaEncesaPerDefecte": False,
    },
    "orloj-iphone.html": {
        "selectorTitol": "h1", "textDaurat": "clar", "pantallaEncesaPerDefecte": True,
    },
    "orloj-medieval-escriptori.html": {
        "selectorTitol": ".banderolaTitol", "textDaurat": "clar", "pantallaEncesaPerDefecte": False,
    },
    "orloj-medieval-iphone.html": {
        "selectorTitol": ".banderolaTitol", "textDaurat": "original", "pantallaEncesaPerDefecte": True,
    },
}


def llegeix(ruta):
    return (ARREL / ruta).read_text(encoding="utf-8")


def b64(ruta):
    return base64.b64encode((ARREL / ruta).read_bytes()).decode("ascii")


def substitueix(text, marcador, valor, obligatori=True):
    if marcador not in text:
        if obligatori:
            raise SystemExit(f"Falta el marcador {marcador}")
        return text
    return text.replace(marcador, valor)


def construeix():
    js = llegeix("orloj.js")
    js = substitueix(js, "@ENGRANATGE_B64@", b64("assets/engranatge.mp3"))
    patina = "data:image/webp;base64," + b64("assets/patina.webp")
    css_comu = llegeix("comu/controls.css")
    controls = llegeix("comu/controls.html")
    head = llegeix("comu/head.html")

    DIST.mkdir(exist_ok=True)
    for nom, config in VARIANTS.items():
        html = llegeix(f"shells/{nom}")
        cap = head
        if 'name="apple-mobile-web-app-capable"' not in html:
            cap += '<meta name="apple-mobile-web-app-capable" content="yes">\n'
            cap += '<meta name="apple-mobile-web-app-title" content="Orloj">\n'
        html = substitueix(html, "<!--@ORLOJ_HEAD@-->", cap.rstrip("\n"))
        html = substitueix(html, "/*@ORLOJ_CSS_COMU@*/", css_comu.rstrip("\n"))
        html = substitueix(html, "<!--@ORLOJ_CONTROLS@-->", controls.rstrip("\n"))
        html = substitueix(html, "@PATINA_DATAURI@", patina, obligatori=False)
        html = substitueix(html, "/*@ORLOJ_CONFIG@*/",
                           "window.ORLOJ_CONFIG = " + json.dumps(config) + ";")
        # Es fa l'últim perquè el codi no es torni a escanejar a la recerca de marcadors.
        html = substitueix(html, "/*@ORLOJ_JS@*/", js)
        (DIST / nom).write_text(html, encoding="utf-8")
        print(f"  {nom:34s} {len(html.encode('utf-8')) // 1024:5d} KB")

    for fitxer in (ARREL / "pwa").iterdir():
        shutil.copy2(fitxer, DIST / fitxer.name)


if __name__ == "__main__":
    print("Construint l'Orloj:")
    construeix()
    print(f"Fet. Resultat a {DIST}")
