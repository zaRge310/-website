"use client";

import { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
  oncePerSession?: boolean;
};

export default function Opening({ children, oncePerSession = true }: Props) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (oncePerSession) {
      const seen = sessionStorage.getItem("aihashi_opening_seen");
      if (seen === "1") {
        setShow(false);
        return;
      }
      sessionStorage.setItem("aihashi_opening_seen", "1");
    }

    // フェードイン→表示→フェードアウト（合計4.2秒）
    const total = 4200;
    const t = window.setTimeout(() => setShow(false), total);
    return () => window.clearTimeout(t);
  }, [oncePerSession]);

  return (
    <>
      {/* 本体 */}
      <div
        style={{
          opacity: show ? 0 : 1,
          transition: "opacity 900ms ease",
          pointerEvents: show ? "none" : "auto",
        }}
      >
        {children}
      </div>

      {show && (
        <div className="aihashi-opening">
          <div className="aihashi-opening__center">
            {/* ロゴ（大きく） */}
            <img
              src="/aihashi-logo-text.png"
              alt="AIHASHI"
              className="aihashi-opening__logo"
            />
          </div>

          <style>{`
            .aihashi-opening{
              position: fixed;
              inset: 0;
              z-index: 9999;
              display: grid;
              place-items: center;
              background: #F7F5F1; /* ← サイトと完全一致 */
              animation: overlayAnim 4200ms ease forwards;
            }

            .aihashi-opening__center{
              opacity: 0;
              transform: translateY(12px);
              filter: blur(10px);
              animation: logoAnim 4200ms ease forwards;
            }

            /* 🔥 サイズ大幅アップ */
            .aihashi-opening__logo{
              height: 120px; /* ← ここでサイズ調整 */
              width: auto;
              object-fit: contain;

              /* ロゴ画像の白背景を消すトリック */
              mix-blend-mode: multiply;
            }

            /* ===== Animation timeline ===== */
            @keyframes overlayAnim{
              0%   { opacity: 0; }
              25%  { opacity: 1; }
              70%  { opacity: 1; }
              100% { opacity: 0; pointer-events: none; }
            }

            @keyframes logoAnim{
              0%   { opacity: 0; transform: translateY(16px); filter: blur(14px); }
              25%  { opacity: 1; transform: translateY(0); filter: blur(0); }
              70%  { opacity: 1; }
              100% { opacity: 0; transform: translateY(-6px); filter: blur(10px); }
            }

            @media (prefers-reduced-motion: reduce){
              .aihashi-opening,
              .aihashi-opening__center{
                animation: none !important;
              }
            }
          `}</style>
        </div>
      )}
    </>
  );
}
