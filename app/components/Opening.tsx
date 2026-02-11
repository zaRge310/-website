"use client";

import { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
  oncePerSession?: boolean;
  /** オープニング全体の時間(ms) */
  durationMs?: number;
};

export default function Opening({
  children,
  oncePerSession = true,
  durationMs = 4200,
}: Props) {
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

    const t = window.setTimeout(() => setShow(false), durationMs);
    return () => window.clearTimeout(t);
  }, [oncePerSession, durationMs]);

  return (
    <>
      {/* サイト本体 */}
      <div
        style={{
          opacity: show ? 0 : 1,
          transition: "opacity 900ms ease",
          pointerEvents: show ? "none" : "auto",
        }}
      >
        {children}
      </div>

      {/* オープニング */}
      {show && (
        <div className="aihashi-opening" aria-hidden="true">
          <div className="aihashi-opening__center">
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
              background: #F7F5F1; /* サイトの白に合わせる */
              animation: overlayAnim ${durationMs}ms ease forwards;
            }

            .aihashi-opening__center{
              opacity: 0;
              transform: translateY(12px);
              filter: blur(10px);
              animation: logoAnim ${durationMs}ms ease forwards;
            }

            .aihashi-opening__logo{
              height: 120px; /* ロゴ大きめ */
              width: auto;
              object-fit: contain;
              mix-blend-mode: multiply;
              filter: drop-shadow(0 18px 35px rgba(0,0,0,0.08));
            }

            /* フェードイン長め / 滞在 / フェードアウト長め */
            @keyframes overlayAnim{
              0%   { opacity: 0; }
              30%  { opacity: 1; }
              70%  { opacity: 1; }
              100% { opacity: 0; pointer-events: none; }
            }

            @keyframes logoAnim{
              0%   { opacity: 0; transform: translateY(16px); filter: blur(14px); }
              30%  { opacity: 1; transform: translateY(0);  filter: blur(0); }
              70%  { opacity: 1; transform: translateY(0);  filter: blur(0); }
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
