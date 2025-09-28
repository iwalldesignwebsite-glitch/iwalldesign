"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  UploadCloud,
  RotateCw,
  Download,
  Send,
  Image as ImageIcon,
} from "lucide-react";

const LS_KEY = "visualizerProject";

export default function Visualizer() {
  const [bgUrl, setBgUrl] = useState<string | null>(null);
  const [fgUrl, setFgUrl] = useState<string | null>(null);

  const stageRef = useRef<HTMLDivElement | null>(null);
  const bgImgRef = useRef<HTMLImageElement | null>(null);
  const fgImgRef = useRef<HTMLImageElement | null>(null);

  const [stageSize, setStageSize] = useState({ w: 960, h: 540 });
  const [fgNatural, setFgNatural] = useState({ w: 1, h: 1 });
  const [pos, setPos] = useState({ x: 480, y: 270 });
  const [scale, setScale] = useState(1); // 1 = 100%
  const [rotation, setRotation] = useState(0);

  const baseFgWidth = useMemo(() => stageSize.w * 0.4, [stageSize.w]);
  const fgDisplayWidth = baseFgWidth * scale;
  const fgDisplayHeight = (fgNatural.h / fgNatural.w) * fgDisplayWidth;

  /* ---------- pomiar obszaru ---------- */
  useEffect(() => {
    if (!stageRef.current) return;
    const ro = new ResizeObserver(([e]) => {
      const r = e.contentRect;
      setStageSize({ w: Math.round(r.width), h: Math.round(r.height) });
    });
    ro.observe(stageRef.current);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (fgUrl) setPos({ x: stageSize.w / 2, y: stageSize.h / 2 });
  }, [stageSize.w, stageSize.h, fgUrl]);

  /* ---------- inputy ---------- */
  const onPickBackground: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    setBgUrl((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return URL.createObjectURL(f);
    });
  };

  const onPickForeground: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    const url = URL.createObjectURL(f);
    const img = new Image();
    img.onload = () => {
      setFgNatural({ w: img.naturalWidth, h: img.naturalHeight });
      setFgUrl(url);
      setScale(1);
      setRotation(0);
      setPos({ x: stageSize.w / 2, y: stageSize.h / 2 });
    };
    img.src = url;
  };

  /* ---------- drag ---------- */
  const dragRef = useRef<{
    startX: number;
    startY: number;
    x: number;
    y: number;
  } | null>(null);
  const onPointerDown: React.PointerEventHandler<HTMLImageElement> = (e) => {
    e.preventDefault();
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      x: pos.x,
      y: pos.y,
    };
  };
  const onPointerMove: React.PointerEventHandler<HTMLImageElement> = (e) => {
    if (!dragRef.current) return;
    const dx = e.clientX - dragRef.current.startX;
    const dy = e.clientY - dragRef.current.startY;
    setPos({
      x: Math.max(0, Math.min(stageSize.w, dragRef.current.x + dx)),
      y: Math.max(0, Math.min(stageSize.h, dragRef.current.y + dy)),
    });
  };
  const onPointerUp: React.PointerEventHandler<HTMLImageElement> = () => {
    dragRef.current = null;
  };

  /* ---------- reset ---------- */
  const resetAll = () => {
    if (bgUrl) URL.revokeObjectURL(bgUrl);
    if (fgUrl) URL.revokeObjectURL(fgUrl);
    setBgUrl(null);
    setFgUrl(null);
    setScale(1);
    setRotation(0);
    setPos({ x: stageSize.w / 2, y: stageSize.h / 2 });
  };

  /* ---------- rysowanie i eksport ---------- */
  const drawToCanvas = (canvas: HTMLCanvasElement) => {
    if (!stageRef.current) return;
    const ctx = canvas.getContext("2d")!;
    const dpr = Math.max(1, Math.floor(window.devicePixelRatio || 1));
    canvas.width = stageSize.w * dpr;
    canvas.height = stageSize.h * dpr;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, stageSize.w, stageSize.h);

    if (bgImgRef.current) {
      const bg = bgImgRef.current;
      const s = Math.min(
        stageSize.w / bg.naturalWidth,
        stageSize.h / bg.naturalHeight
      );
      const w = bg.naturalWidth * s;
      const h = bg.naturalHeight * s;
      const dx = (stageSize.w - w) / 2;
      const dy = (stageSize.h - h) / 2;
      ctx.drawImage(bg, dx, dy, w, h);
    }

    if (fgImgRef.current) {
      ctx.save();
      ctx.translate(pos.x, pos.y);
      ctx.rotate((rotation * Math.PI) / 180);
      ctx.drawImage(
        fgImgRef.current,
        -fgDisplayWidth / 2,
        -fgDisplayHeight / 2,
        fgDisplayWidth,
        fgDisplayHeight
      );
      ctx.restore();
    }
  };

  const exportPng = () => {
    if (!stageRef.current || !bgImgRef.current) return;
    const canvas = document.createElement("canvas");
    drawToCanvas(canvas);
    const a = document.createElement("a");
    a.download = "projekt.png";
    a.href = canvas.toDataURL("image/png");
    a.click();
  };

  const sendToForm = () => {
    if (!bgUrl) return;
    const canvas = document.createElement("canvas");
    drawToCanvas(canvas);
    const dataUrl = canvas.toDataURL("image/png");
    try {
      localStorage.setItem(LS_KEY, dataUrl);
    } catch {}
    window.open("/#kontakt", "_blank");
  };

  const clamp = (val: number, min: number, max: number) =>
    Math.min(max, Math.max(min, val));

  return (
    <section className="mx-auto max-w-6xl px-4 pt-28 md:pt-24 pb-10">
      {/* toolbar */}
      <div className="mb-3 flex flex-wrap items-center gap-3">
        <label className="flex items-center justify-center cursor-pointer rounded-md border px-3 py-2 text-sm hover:bg-neutral-50">
          <input
            type="file"
            accept="image/*"
            onChange={onPickBackground}
            className="hidden"
          />
          Dodaj tło
        </label>

        <label
          className={`flex items-center justify-center cursor-pointer rounded-md border px-3 py-2 text-sm ${
            bgUrl ? "hover:bg-neutral-50" : "opacity-50 cursor-not-allowed"
          }`}
          aria-disabled={!bgUrl}
        >
          <input
            type="file"
            accept="image/*"
            onChange={onPickForeground}
            className="hidden"
            disabled={!bgUrl}
          />
          Dodaj grafikę
        </label>

        <button
          type="button"
          onClick={resetAll}
          className="inline-flex items-center gap-2 rounded-md border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700 hover:bg-red-100"
        >
          <RotateCw className="h-4 w-4" />
          Zacznij od nowa
        </button>

        <div className="ml-auto flex items-center gap-2">
          {bgUrl && (
            <>
              <button
                type="button"
                onClick={exportPng}
                className="inline-flex items-center gap-2 rounded-md bg-gray-800 px-4 py-2 text-sm text-white hover:bg-black"
              >
                <Download className="h-4 w-4" />
                Eksport PNG
              </button>

              <button
                type="button"
                onClick={sendToForm}
                className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-teal-500 to-cyan-500 px-4 py-2 text-sm font-medium text-white hover:opacity-90"
              >
                <Send className="h-4 w-4" />
                Wyślij projekt do nas
              </button>
            </>
          )}
        </div>
      </div>

      {/* STAGE */}
      <div
        ref={stageRef}
        className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border bg-neutral-100 select-none"
      >
        {/* TŁO */}
        {bgUrl && (
          <img
            ref={bgImgRef}
            src={bgUrl}
            alt="Tło"
            className="absolute inset-0 h-full w-full object-contain pointer-events-none"
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
          />
        )}

        {/* GRAFIKA */}
        {fgUrl && (
          <img
            ref={fgImgRef}
            src={fgUrl}
            alt="Grafika"
            className="absolute left-0 top-0 select-none  border-2 border-blue-400 shadow-sm"
            style={{
              width: `${fgDisplayWidth}px`,
              height: `${fgDisplayHeight}px`,
              transform: `translate(${pos.x - fgDisplayWidth / 2}px, ${
                pos.y - fgDisplayHeight / 2
              }px) rotate(${rotation}deg)`,
              transformOrigin: "center center",
              cursor: dragRef.current ? "grabbing" : "grab",
              touchAction: "none",
            }}
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          />
        )}

        {!bgUrl && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center gap-2 rounded-lg bg-white/80 px-4 py-3 text-neutral-700">
              <UploadCloud className="h-6 w-6" />
              <p className="text-sm">Najpierw dodaj tło</p>
            </div>
          </div>
        )}
      </div>

      {/* TOOLBOX pod canvase */}
      {fgUrl && (
        <div className="mt-4 rounded-md bg-white/90 p-3 shadow flex flex-wrap items-center justify-center gap-6">
          {/* SKALA + input % */}
          <label className="flex items-center gap-2 text-sm">
            Skala
            <input
              type="range"
              min={0.2}
              max={3}
              step={0.01}
              value={scale}
              onChange={(e) => setScale(parseFloat(e.target.value))}
            />
            <div className="flex items-center gap-1">
              <input
                type="number"
                className="w-16 rounded border px-2 py-1 text-xs"
                min={20}
                max={300}
                step={1}
                value={Math.round(scale * 100)}
                onChange={(e) => {
                  const pct = clamp(
                    parseFloat(e.target.value || "100"),
                    20,
                    300
                  );
                  setScale(pct / 100);
                }}
                onBlur={(e) => {
                  const pct = clamp(
                    parseFloat(e.target.value || "100"),
                    20,
                    300
                  );
                  setScale(pct / 100);
                }}
              />
              <span className="text-xs text-neutral-600">%</span>
            </div>
          </label>

          {/* OBRÓT + input ° */}
          <label className="flex items-center gap-2 text-sm">
            Obrót
            <input
              type="range"
              min={-180}
              max={180}
              step={1}
              value={rotation}
              onChange={(e) => setRotation(parseFloat(e.target.value))}
            />
            <div className="flex items-center gap-1">
              <input
                type="number"
                className="w-16 rounded border px-2 py-1 text-xs"
                min={-180}
                max={180}
                step={1}
                value={Math.round(rotation)}
                onChange={(e) =>
                  setRotation(
                    clamp(parseFloat(e.target.value || "0"), -180, 180)
                  )
                }
                onBlur={(e) =>
                  setRotation(
                    clamp(parseFloat(e.target.value || "0"), -180, 180)
                  )
                }
              />
              <span className="text-xs text-neutral-600">°</span>
            </div>
          </label>
        </div>
      )}

      {/* Instrukcja */}
      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-md border bg-white p-4">
          <div className="mb-2 flex items-center gap-2 font-medium">
            <UploadCloud className="h-4 w-4" /> 1. Dodaj tło
          </div>
          <p className="text-sm text-neutral-600">
            Wgraj zdjęcie miejsca (ściana, podłoga, mebel). Tło dopasuje się do
            okna podglądu.
          </p>
        </div>
        <div className="rounded-md border bg-white p-4">
          <div className="mb-2 flex items-center gap-2 font-medium">
            <ImageIcon className="h-4 w-4" /> 2. Dodaj grafikę i ustaw
          </div>
          <p className="text-sm text-neutral-600">
            Przeciągnij, zmieniaj skalę i obrót suwakami lub polami obok (np.{" "}
            <kbd>100%</kbd>, <kbd>0°</kbd>).
          </p>
        </div>
        <div className="rounded-md border bg-white p-4">
          <div className="mb-2 flex items-center gap-2 font-medium">
            <Send className="h-4 w-4" /> 3. Zapisz / wyślij do nas
          </div>
          <p className="text-sm text-neutral-600">
            Pobierz PNG albo kliknij „Wyślij projekt do nas” – otworzymy stronę
            główną i przewiniemy do formularza.
          </p>
        </div>
      </div>
    </section>
  );
}
