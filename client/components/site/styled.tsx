import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const float = keyframes`
  0%, 100% { transform: translate3d(0, 0, 0); }
  50% { transform: translate3d(0, -14px, 0); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.88; }
  50% { transform: scale(1.03); opacity: 1; }
`;

export const GlassPanel = styled.div`
  position: relative;
  overflow: hidden;
  border: 1px solid hsl(var(--border) / 0.65);
  background:
    linear-gradient(180deg, hsl(var(--card) / 0.92), hsl(var(--card) / 0.78)),
    linear-gradient(135deg, hsl(var(--primary) / 0.1), transparent 45%);
  box-shadow:
    0 30px 60px -34px hsl(var(--foreground) / 0.22),
    inset 0 1px 0 hsl(0 0% 100% / 0.35);
  backdrop-filter: blur(22px);
`;

export const FloatingOrb = styled.div<{ tone: string; size?: number }>`
  position: absolute;
  width: ${({ size = 320 }) => `${size}px`};
  height: ${({ size = 320 }) => `${size}px`};
  border-radius: 9999px;
  background: ${({ tone }) => tone};
  filter: blur(12px);
  opacity: 0.7;
  pointer-events: none;
  animation: ${float} 10s ease-in-out infinite;
`;

export const MapSurface = styled.div`
  position: relative;
  min-height: 320px;
  overflow: hidden;
  border-radius: 1.75rem;
  border: 1px solid hsl(var(--border) / 0.65);
  background:
    radial-gradient(circle at 20% 20%, hsl(var(--primary) / 0.22), transparent 32%),
    radial-gradient(circle at 80% 15%, hsl(var(--accent) / 0.28), transparent 28%),
    linear-gradient(180deg, hsl(var(--card)), hsl(var(--muted)));
  box-shadow: 0 30px 70px -42px hsl(var(--foreground) / 0.35);

  &::before,
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  &::before {
    background-image:
      linear-gradient(hsl(var(--border) / 0.55) 1px, transparent 1px),
      linear-gradient(90deg, hsl(var(--border) / 0.55) 1px, transparent 1px);
    background-size: 44px 44px;
    mask-image: linear-gradient(180deg, rgba(255, 255, 255, 0.8), transparent 92%);
  }

  &::after {
    inset: auto 16% 18% auto;
    width: 120px;
    height: 120px;
    border-radius: 9999px;
    background: hsl(var(--primary) / 0.18);
    filter: blur(2px);
    animation: ${pulse} 5s ease-in-out infinite;
  }
`;

export const WhatsAppDock = styled.button`
  position: fixed;
  right: 1.25rem;
  bottom: 1.25rem;
  z-index: 40;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  border: 0;
  border-radius: 9999px;
  padding: 0.85rem 1rem;
  color: white;
  background: linear-gradient(135deg, hsl(150 73% 36%), hsl(162 88% 29%));
  box-shadow: 0 22px 45px -24px hsl(158 80% 20% / 0.72);
  cursor: pointer;
  animation: ${pulse} 4.5s ease-in-out infinite;

  &:focus-visible {
    outline: 3px solid hsl(var(--ring));
    outline-offset: 3px;
  }
`;
