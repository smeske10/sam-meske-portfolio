"use client";

import React, { MouseEvent, useEffect, useRef, useState } from "react";

interface TrustBadgeProps {
  text: string;
  className?: string;
}

const identityMatrix =
  "1, 0, 0, 0, " +
  "0, 1, 0, 0, " +
  "0, 0, 1, 0, " +
  "0, 0, 0, 1";

const maxRotate = 0.25;
const minRotate = -0.25;
const maxScale = 1;
const minScale = 0.985;

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export function TrustBadge({ text, className }: TrustBadgeProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [matrix, setMatrix] = useState(identityMatrix);
  const [currentMatrix, setCurrentMatrix] = useState(identityMatrix);
  const [firstOverlayPosition, setFirstOverlayPosition] = useState(0);
  const [disableInOutOverlayAnimation, setDisableInOutOverlayAnimation] =
    useState(true);
  const [isTimeoutFinished, setIsTimeoutFinished] = useState(false);
  const enterTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const leaveTimeout1 = useRef<ReturnType<typeof setTimeout> | null>(null);
  const leaveTimeout2 = useRef<ReturnType<typeof setTimeout> | null>(null);

  const getDimensions = () => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return { left: 0, right: 0, top: 0, bottom: 0 };
    return { left: rect.left, right: rect.right, top: rect.top, bottom: rect.bottom };
  };

  const getMatrix = (clientX: number, clientY: number) => {
    const { left, right, top, bottom } = getDimensions();
    const xCenter = (left + right) / 2;
    const yCenter = (top + bottom) / 2;

    const xNorm = clamp((clientX - xCenter) / (right - left), -0.5, 0.5);
    const yNorm = clamp((clientY - yCenter) / (bottom - top), -0.5, 0.5);

    const s = maxScale - (maxScale - minScale) * (Math.abs(xNorm) + Math.abs(yNorm));
    const rx = maxRotate * -yNorm;
    const ry = maxRotate * xNorm;

    // Simple matrix3d approximation: scale + subtle rotates.
    return (
      `${s}, 0, ${ry}, 0, ` +
      `0, ${s}, ${rx}, 0, ` +
      `${-ry}, ${-rx}, ${s}, 0, ` +
      `0, 0, 0, 1`
    );
  };

  const getOppositeMatrix = (_matrix: string) => {
    // Slightly dampen opposite impulse.
    return _matrix
      .split(", ")
      .map((v, idx) => {
        if (idx === 2 || idx === 6 || idx === 8 || idx === 9) {
          return (-parseFloat(v) / 3).toString();
        }
        if (idx === 0 || idx === 5 || idx === 10) return "1";
        return v;
      })
      .join(", ");
  };

  const onMouseEnter = (e: MouseEvent<HTMLSpanElement>) => {
    if (leaveTimeout1.current) clearTimeout(leaveTimeout1.current);
    if (leaveTimeout2.current) clearTimeout(leaveTimeout2.current);
    if (enterTimeout.current) clearTimeout(enterTimeout.current);

    setDisableInOutOverlayAnimation(false);
    enterTimeout.current = setTimeout(() => setDisableInOutOverlayAnimation(true), 250);

    const { left, right, top, bottom } = getDimensions();
    const xCenter = (left + right) / 2;
    const yCenter = (top + bottom) / 2;
    setFirstOverlayPosition((Math.abs(xCenter - e.clientX) + Math.abs(yCenter - e.clientY)) / 1.75);

    const m = getMatrix(e.clientX, e.clientY);
    setMatrix(getOppositeMatrix(m));
    setIsTimeoutFinished(false);
    setTimeout(() => setIsTimeoutFinished(true), 120);
  };

  const onMouseMove = (e: MouseEvent<HTMLSpanElement>) => {
    const { left, right, top, bottom } = getDimensions();
    const xCenter = (left + right) / 2;
    const yCenter = (top + bottom) / 2;

    setTimeout(() => {
      setFirstOverlayPosition((Math.abs(xCenter - e.clientX) + Math.abs(yCenter - e.clientY)) / 1.75);
    }, 100);

    if (isTimeoutFinished) {
      setCurrentMatrix(getMatrix(e.clientX, e.clientY));
    }
  };

  const onMouseLeave = () => {
    if (enterTimeout.current) clearTimeout(enterTimeout.current);

    setCurrentMatrix(getOppositeMatrix(matrix));
    setTimeout(() => setCurrentMatrix(identityMatrix), 160);

    setDisableInOutOverlayAnimation(false);
    leaveTimeout1.current = setTimeout(() => setFirstOverlayPosition(-firstOverlayPosition / 5), 90);
    leaveTimeout2.current = setTimeout(() => {
      setFirstOverlayPosition(0);
      setDisableInOutOverlayAnimation(true);
    }, 240);
  };

  useEffect(() => {
    if (isTimeoutFinished) setMatrix(currentMatrix);
  }, [currentMatrix, isTimeoutFinished]);

  const overlayAnimations = [...Array(6).keys()]
    .map(
      (e) => `
    @keyframes trustOverlay${e + 1} {
      0% { transform: rotate(${e * 12}deg); }
      50% { transform: rotate(${(e + 1) * 12}deg); }
      100% { transform: rotate(${e * 12}deg); }
    }
  `,
    )
    .join(" ");

  return (
    <span
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={[
        // PH-badge-like container (less "pill", more badge)
        "relative inline-flex h-9 select-none items-center justify-center overflow-hidden rounded-xl",
        "px-3 text-center text-[11px] font-semibold leading-none text-zinc-800",
        "shadow-[0_10px_28px_rgba(0,0,0,0.25)] sm:h-10 sm:px-4 sm:text-sm",
        "will-change-transform",
        className ?? "",
      ].join(" ")}
      style={{
        transform: `perspective(700px) matrix3d(${matrix})`,
        transformOrigin: "center center",
        transition: "transform 180ms ease-out",
        background:
          // base + gentle top highlight
          "linear-gradient(180deg, rgba(255,255,255,0.85), rgba(255,255,255,0.15)), " +
          // warm + cool edge glow like PH badge
          "radial-gradient(circle at 92% 90%, rgba(255,170,80,0.55), rgba(255,255,255,0.0) 60%), " +
          "radial-gradient(circle at 14% 18%, rgba(255,120,170,0.18), rgba(255,255,255,0.0) 55%), " +
          "#ddd",
      }}
    >
      <style>{overlayAnimations}</style>

      <span className="relative z-10">{text}</span>

      {/* outer stroke */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-xl"
        style={{ boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.18)" }}
      />

      {/* inner border (like ProductHunt badge inset) */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-[3px] rounded-full"
        style={{
          borderRadius: 10,
          boxShadow:
            "inset 0 0 0 1px rgba(0,0,0,0.18), inset 0 0 0 2px rgba(255,255,255,0.70)",
        }}
      />

      {/* moving sheen (more obvious than the conic overlay) */}
      <span
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: disableInOutOverlayAnimation ? 0.15 : 0.35,
          transform: `translateX(${(firstOverlayPosition % 30) - 15}px)`,
          transition: "opacity 180ms ease-out, transform 180ms ease-out",
          background:
            "linear-gradient(90deg, rgba(255,255,255,0.0), rgba(255,255,255,0.95), rgba(255,255,255,0.0))",
          filter: "blur(6px)",
        }}
      />

    </span>
  );
}
