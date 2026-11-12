import React, { useState, useEffect, useRef, useMemo, useId } from 'react';
import {
  Search,
  MapPin,
  Clock,
  Briefcase,
  CheckCircle2,
  AlertCircle,
  User,
  Building2,
  FileText,
  Plus,
  Download,
  ShieldCheck,
  Check,
  X,
  Calendar,
  Wallet,
  ArrowRight,
  SlidersHorizontal,
  PlayCircle,
  Sparkles,
  TrendingUp,
  Award,
  Layers,
  ChevronRight,
  ChevronDown,
  RefreshCw,
  FileSpreadsheet,
  MessageSquareOff,
  HelpCircle,
  Pencil,
  Trash2,
  Upload,
  Eye,
  Lock,
  Unlock,
  CreditCard,
  Copy
} from 'lucide-react';

// ============================================================================
// 1. SINGLE-SOURCE CSS VARIABLES (:root) & GLOBAL 60FPS MATTE FROSTED GLASS STYLES
// ============================================================================
const GlobalLightThemeStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;600;700&display=swap');

    :root {
      --bg: #F3F7FF;
      --bg-soft: #EBF2FF;
      --surface: rgba(255, 255, 255, 0.72);
      --surface-strong: rgba(255, 255, 255, 0.86);
      --surface-input: rgba(244, 248, 255, 0.78);
      --border: rgba(255, 255, 255, 0.88);
      --border-subtle: rgba(203, 220, 252, 0.65);
      --primary: #1D6FE8;
      --primary-dark: #1555B8;
      --primary-light: rgba(220, 232, 253, 0.75);
      --text: #091326;
      --text-muted: #334463;
      --gradient-accent: linear-gradient(92deg, #1E90FF 0%, #246BFD 52%, #3949FF 100%);
      --shadow-card:
        0 24px 64px rgba(32, 84, 198, 0.10),
        0 4px 16px rgba(32, 84, 198, 0.04),
        inset 0 1.5px 2px rgba(255, 255, 255, 0.95);
      --shadow-card-hover:
        0 30px 76px rgba(32, 84, 198, 0.16),
        0 8px 24px rgba(32, 84, 198, 0.07),
        inset 0 1.5px 3px rgba(255, 255, 255, 1);
      --shadow-btn: 0 12px 28px rgba(36, 107, 253, 0.30);
    }

    * {
      box-sizing: border-box;
    }

    html {
      margin: 0;
      padding: 0;
      background-color: var(--bg);
      overflow-x: hidden;
      overflow-y: auto;
      scroll-behavior: smooth;
    }

    body {
      margin: 0;
      padding: 0;
      width: 100%;
      min-height: 100%;
      background-color: var(--bg);
      color: var(--text-muted);
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      font-weight: 500;
      -webkit-font-smoothing: antialiased;
      overflow: visible;
    }

    #root {
      width: 100%;
      overflow-x: clip;
    }

    h1, h2, h3, h4, .heading-tight {
      color: var(--text);
      font-weight: 700;
      letter-spacing: -0.03em;
    }

    p, span, label, input, select, textarea, button {
      letter-spacing: -0.01em;
    }

    .font-mono-metric {
      font-family: 'JetBrains Mono', monospace;
      font-variant-numeric: tabular-nums;
    }

    .text-accent-primary {
      color: var(--primary);
    }

    /* Ambient Clarity-Engine Cobalt Blue, Periwinkle & Warm Ivory Mesh Canvas */
    .navos-ambient-canvas {
      background:
        radial-gradient(circle at 15% 18%, rgba(26, 86, 219, 0.28) 0%, rgba(26, 86, 219, 0) 46%),
        radial-gradient(circle at 84% 22%, rgba(59, 130, 246, 0.26) 0%, rgba(59, 130, 246, 0) 48%),
        radial-gradient(circle at 72% 58%, rgba(255, 244, 228, 0.85) 0%, rgba(255, 244, 228, 0) 45%),
        radial-gradient(circle at 24% 76%, rgba(37, 99, 235, 0.24) 0%, rgba(37, 99, 235, 0) 52%),
        linear-gradient(135deg, #DCE9FF 0%, #EAF2FF 38%, #F4F6FB 70%, #E2ECFF 100%);
      background-attachment: fixed;
    }

    /* Pastel Sky, Cobalt Glow & Acrylic Hero Mist */
    .hero-pastel-sky {
      background:
        radial-gradient(circle at 22% 62%, rgba(24, 90, 219, 0.26) 0%, rgba(24, 90, 219, 0) 48%),
        radial-gradient(circle at 78% 68%, rgba(255, 243, 224, 0.78) 0%, rgba(255, 243, 224, 0) 46%),
        radial-gradient(circle at 50% 24%, rgba(255, 255, 255, 0.88) 0%, rgba(255, 255, 255, 0) 55%);
    }

    /* Smooth Section Gradient Blending (Translucent so Acrylic Backdrop Shines Through) */
    .section-blend-soft {
      background:
        radial-gradient(circle at 72% 50%, rgba(29, 111, 232, 0.22) 0%, rgba(29, 111, 232, 0) 52%),
        radial-gradient(circle at 28% 60%, rgba(255, 246, 232, 0.75) 0%, rgba(255, 246, 232, 0) 50%);
    }

    /* Tactile Matte Frosted Glass Boxes (High-Contrast Text & Frosted Depth) */
    .harian-surface-card {
      position: relative;
      background: linear-gradient(
        145deg,
        rgba(255, 255, 255, 0.82) 0%,
        rgba(246, 250, 255, 0.64) 50%,
        rgba(235, 243, 255, 0.78) 100%
      );
      backdrop-filter: blur(44px) saturate(210%);
      -webkit-backdrop-filter: blur(44px) saturate(210%);
      border: 1.5px solid rgba(255, 255, 255, 0.94);
      outline: 1px solid rgba(15, 27, 51, 0.06);
      border-radius: 30px;
      box-shadow:
        0 30px 72px -14px rgba(15, 27, 51, 0.16),
        0 12px 28px -8px rgba(29, 111, 232, 0.12),
        inset 0 2px 3px rgba(255, 255, 255, 1),
        inset 0 -1.5px 2px rgba(29, 111, 232, 0.08);
      transition:
        transform 0.42s cubic-bezier(0.16, 1, 0.3, 1),
        border-color 0.32s ease,
        box-shadow 0.42s cubic-bezier(0.16, 1, 0.3, 1);
      will-change: transform, opacity;
    }

    .harian-role-frosted-card {
      position: relative;
      background:
        radial-gradient(circle at 12% 10%, rgba(255, 255, 255, 0.92) 0%, rgba(255, 255, 255, 0) 55%),
        linear-gradient(
          155deg,
          rgba(255, 255, 255, 0.84) 0%,
          rgba(244, 249, 255, 0.66) 52%,
          rgba(230, 240, 255, 0.80) 100%
        );
      backdrop-filter: blur(48px) saturate(215%);
      -webkit-backdrop-filter: blur(48px) saturate(215%);
      border: 1.5px solid rgba(255, 255, 255, 0.96);
      outline: 1px solid rgba(15, 27, 51, 0.07);
      border-radius: 30px;
      box-shadow:
        0 34px 80px -16px rgba(15, 27, 51, 0.20),
        0 14px 32px -8px rgba(29, 111, 232, 0.14),
        inset 0 2px 4px rgba(255, 255, 255, 1),
        inset 0 -2px 4px rgba(29, 111, 232, 0.10);
      transition:
        transform 0.45s cubic-bezier(0.16, 1, 0.3, 1),
        box-shadow 0.45s cubic-bezier(0.16, 1, 0.3, 1),
        border-color 0.3s ease;
      overflow: hidden;
      will-change: transform, opacity;
    }

    .harian-role-frosted-card::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image: radial-gradient(rgba(15, 27, 51, 0.035) 1px, transparent 0);
      background-size: 12px 12px;
      pointer-events: none;
    }

    .harian-role-frosted-card:hover {
      transform: translate3d(0, -8px, 0) scale(1.012);
      border-color: #FFFFFF;
      box-shadow:
        0 42px 92px -14px rgba(15, 27, 51, 0.24),
        0 18px 38px -8px rgba(29, 111, 232, 0.20),
        inset 0 2.5px 5px rgba(255, 255, 255, 1);
    }

    .harian-blog-card {
      position: relative;
      background:
        radial-gradient(circle at 14% 12%, rgba(255, 255, 255, 0.88) 0%, rgba(255, 255, 255, 0) 52%),
        linear-gradient(
          145deg,
          rgba(255, 255, 255, 0.82) 0%,
          rgba(245, 249, 255, 0.64) 54%,
          rgba(234, 243, 255, 0.78) 100%
        );
      backdrop-filter: blur(44px) saturate(205%);
      -webkit-backdrop-filter: blur(44px) saturate(205%);
      border: 1.5px solid rgba(255, 255, 255, 0.94);
      outline: 1px solid rgba(15, 27, 51, 0.06);
      border-radius: 28px;
      box-shadow:
        0 28px 68px -14px rgba(15, 27, 51, 0.16),
        0 10px 24px -6px rgba(29, 111, 232, 0.10),
        inset 0 2px 3px rgba(255, 255, 255, 0.98),
        inset 0 -1.5px 2px rgba(29, 111, 232, 0.08);
      transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.28s ease, box-shadow 0.35s ease;
      will-change: transform;
    }

    .harian-blog-card:hover {
      transform: translate3d(0, -6px, 0);
      border-color: #FFFFFF;
      box-shadow:
        0 36px 84px -12px rgba(15, 27, 51, 0.22),
        0 14px 30px -6px rgba(29, 111, 232, 0.15),
        inset 0 2px 4px rgba(255, 255, 255, 1);
    }

    /* Frosted Matte Input Fields (Translucent Acrylic) */
    .frosted-input {
      background: rgba(255, 255, 255, 0.48) !important;
      backdrop-filter: blur(18px) saturate(170%);
      -webkit-backdrop-filter: blur(18px) saturate(170%);
      border: 1px solid rgba(255, 255, 255, 0.78) !important;
      color: var(--text) !important;
      box-shadow: inset 0 1px 2px rgba(15, 27, 51, 0.04), 0 1px 0 rgba(255, 255, 255, 0.85);
      transition: all 0.2s ease;
    }

    .frosted-input:focus {
      background: rgba(255, 255, 255, 0.74) !important;
      border-color: var(--primary) !important;
      box-shadow: 0 0 0 4px rgba(29, 111, 232, 0.14);
    }

    /* Floating Frosted Chat Bubble (Acrylic Pill) */
    .navos-chat-bubble {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.62) 0%, rgba(255, 255, 255, 0.36) 100%);
      backdrop-filter: blur(24px) saturate(180%);
      -webkit-backdrop-filter: blur(24px) saturate(180%);
      border: 1px solid rgba(255, 255, 255, 0.86);
      box-shadow: 0 14px 34px rgba(20, 64, 160, 0.12), inset 0 1px 1px rgba(255, 255, 255, 0.92);
      border-radius: 16px;
      color: var(--text);
    }

    /* Primary & Secondary Pill Buttons */
    .btn-pill-primary {
      background: var(--gradient-accent);
      color: #FFFFFF;
      border-radius: 14px;
      font-weight: 700;
      border: 1px solid rgba(255, 255, 255, 0.28);
      box-shadow: var(--shadow-btn), inset 0 1px 1px rgba(255, 255, 255, 0.35);
      transition: transform 0.22s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.22s ease, opacity 0.22s ease;
      will-change: transform;
    }

    .btn-pill-primary:hover {
      transform: translate3d(0, -2px, 0);
      box-shadow: 0 16px 34px rgba(36, 107, 253, 0.38), inset 0 1px 2px rgba(255, 255, 255, 0.45);
    }

    .btn-pill-secondary {
      background: rgba(255, 255, 255, 0.76);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      color: var(--text);
      border: 1.5px solid rgba(255, 255, 255, 0.92);
      outline: 1px solid rgba(190, 212, 250, 0.45);
      border-radius: 14px;
      font-weight: 700;
      box-shadow: 0 8px 24px rgba(32, 84, 198, 0.06);
      transition: transform 0.22s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.22s ease, background-color 0.22s ease, color 0.22s ease;
      will-change: transform;
    }

    .btn-pill-secondary:hover {
      transform: translate3d(0, -2px, 0);
      background: rgba(255, 255, 255, 0.94);
      color: var(--primary);
    }

    .btn-pill-navy {
      background: linear-gradient(135deg, #16284C 0%, #0F1B33 100%);
      color: #FFFFFF;
      border-radius: 14px;
      font-weight: 700;
      border: 1px solid rgba(255, 255, 255, 0.18);
      box-shadow: 0 12px 28px rgba(15, 27, 51, 0.18);
      transition: transform 0.22s cubic-bezier(0.22, 1, 0.36, 1), background-color 0.22s ease;
      will-change: transform;
    }

    .btn-pill-navy:hover {
      transform: translate3d(0, -2px, 0);
      background: var(--gradient-accent);
    }

    /* Sticky Matte Frosted White Navbar */
    .sticky-glass-nav {
      background: rgba(255, 255, 255, 0.68);
      backdrop-filter: blur(24px) saturate(180%);
      -webkit-backdrop-filter: blur(24px) saturate(180%);
      border-bottom: 1px solid rgba(255, 255, 255, 0.85);
      box-shadow: 0 8px 32px rgba(32, 84, 198, 0.05);
      transition: padding 0.25s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.25s ease;
    }

    .nav-link-animated {
      position: relative;
      color: var(--text-muted);
      font-weight: 600;
      transition: color 0.2s ease;
    }

    .nav-link-animated:hover,
    .nav-link-animated.active {
      color: var(--primary);
    }

    .nav-link-animated::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -4px;
      width: 100%;
      height: 2px;
      background: var(--primary);
      border-radius: 2px;
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1);
    }

    /* CreateUI-Style Animated Vertical Step Indicator (Translucent Frosted Acrylic) */
    .createui-stepper-card {
      background:
        radial-gradient(circle at 15% 12%, rgba(255, 255, 255, 0.88) 0%, rgba(255, 255, 255, 0) 55%),
        linear-gradient(
          145deg,
          rgba(255, 255, 255, 0.82) 0%,
          rgba(244, 249, 255, 0.64) 52%,
          rgba(234, 243, 255, 0.78) 100%
        );
      backdrop-filter: blur(46px) saturate(210%);
      -webkit-backdrop-filter: blur(46px) saturate(210%);
      border: 1.5px solid rgba(255, 255, 255, 0.94);
      outline: 1px solid rgba(15, 27, 51, 0.06);
      border-radius: 32px;
      box-shadow:
        0 32px 78px -14px rgba(15, 27, 51, 0.18),
        0 10px 26px -6px rgba(29, 111, 232, 0.10),
        inset 0 2px 3px rgba(255, 255, 255, 0.98),
        inset 0 -1.5px 2px rgba(29, 111, 232, 0.08);
      position: relative;
      overflow: hidden;
    }

    .createui-step-node {
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition:
        background-color 0.25s cubic-bezier(0.22, 1, 0.36, 1),
        border-radius 0.25s cubic-bezier(0.22, 1, 0.36, 1),
        transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1),
        box-shadow 0.25s ease;
      will-change: transform, background-color, border-radius;
    }

    .createui-step-node.is-completed {
      background-color: #16A34A;
      color: #FFFFFF;
      border-radius: 9999px;
      transform: scale(1);
      box-shadow: 0 6px 16px rgba(22, 163, 74, 0.25);
    }

    .createui-step-node.is-active {
      background-color: var(--primary);
      color: #FFFFFF;
      border-radius: 9px;
      transform: scale(1.04);
      box-shadow:
        0 0 0 4px rgba(29, 111, 232, 0.16),
        0 8px 18px rgba(29, 111, 232, 0.28);
    }

    .createui-step-node.is-upcoming {
      background-color: rgba(216, 227, 246, 0.72);
      color: #94A3B8;
      border-radius: 9px;
      border: 1px solid rgba(255, 255, 255, 0.85);
      transform: scale(0.94);
    }

    .createui-connector-track {
      width: 2px;
      background-color: rgba(203, 218, 245, 0.65);
      border-radius: 999px;
      overflow: hidden;
      position: relative;
    }

    .createui-connector-fill {
      width: 100%;
      border-radius: 999px;
      transition: height 0.32s cubic-bezier(0.22, 1, 0.36, 1), background-color 0.25s ease;
    }

    /* GPU-Only View Switch Transition */
    .view-transition-enter {
      animation: viewEnter 0.48s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      will-change: transform, opacity, filter;
    }

    @keyframes viewEnter {
      from {
        opacity: 0;
        filter: blur(8px);
        transform: translate3d(0, 20px, 0) scale(0.985);
      }
      to {
        opacity: 1;
        filter: blur(0px);
        transform: translate3d(0, 0, 0) scale(1);
      }
    }

    /* Bidirectional Smooth Scroll Transitions (Scroll Down & Scroll Up) */
    .scroll-reveal-section {
      opacity: 0;
      filter: blur(10px);
      transform: translate3d(0, 56px, 0) scale(0.955);
      transition:
        opacity 0.78s cubic-bezier(0.16, 1, 0.3, 1),
        filter 0.78s cubic-bezier(0.16, 1, 0.3, 1),
        transform 0.78s cubic-bezier(0.16, 1, 0.3, 1);
      will-change: transform, opacity, filter;
    }

    /* When scrolled past and exiting at the top (so scrolling back UP animates smoothly from top) */
    .scroll-reveal-section.is-above {
      opacity: 0;
      filter: blur(8px);
      transform: translate3d(0, -48px, 0) scale(0.965);
    }

    .scroll-reveal-section.is-inview {
      opacity: 1;
      filter: blur(0px);
      transform: translate3d(0, 0, 0) scale(1);
    }

    .scroll-reveal-card {
      opacity: 0;
      filter: blur(8px);
      transform: translate3d(0, 44px, 0) scale(0.945);
      transition:
        opacity 0.74s cubic-bezier(0.16, 1, 0.3, 1),
        filter 0.74s cubic-bezier(0.16, 1, 0.3, 1),
        transform 0.74s cubic-bezier(0.16, 1, 0.3, 1),
        border-color 0.28s ease,
        box-shadow 0.28s ease;
      transition-delay: var(--stagger-delay, 0ms);
      will-change: transform, opacity, filter;
    }

    .scroll-reveal-card.is-above {
      opacity: 0;
      filter: blur(6px);
      transform: translate3d(0, -36px, 0) scale(0.955);
    }

    .scroll-reveal-card.is-inview {
      opacity: 1;
      filter: blur(0px);
      transform: translate3d(0, 0, 0) scale(1);
    }

    .hero-scroll-layer {
      transition: transform 0.16s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.16s linear, filter 0.16s linear;
      will-change: transform, opacity, filter;
    }

    /* ==========================================================================
       INITIAL WEBSITE OPEN ANIMATION (STAGGERED FROSTED ENTRANCE CHOREOGRAPHY)
       ========================================================================== */
    .initial-boot-splash {
      position: fixed;
      inset: 0;
      z-index: 60;
      display: flex;
       flex-direction: column;
      align-items: center;
      justify-content: center;
      background:
        radial-gradient(circle at 50% 42%, rgba(255, 255, 255, 0.94) 0%, rgba(232, 241, 255, 0.88) 60%, rgba(216, 232, 255, 0.92) 100%);
      backdrop-filter: blur(36px) saturate(190%);
      -webkit-backdrop-filter: blur(36px) saturate(190%);
      animation: splashCurtainOut 0.65s cubic-bezier(0.22, 1, 0.36, 1) 0.52s forwards;
      pointer-events: none;
    }

    .initial-boot-logo-pill {
      padding: 18px 34px;
      border-radius: 28px;
      background: linear-gradient(145deg, rgba(255, 255, 255, 0.92) 0%, rgba(240, 247, 255, 0.72) 100%);
      border: 1.5px solid rgba(255, 255, 255, 0.98);
      box-shadow:
        0 28px 68px -12px rgba(29, 111, 232, 0.22),
        inset 0 2px 4px rgba(255, 255, 255, 1);
      animation: splashLogoPop 0.55s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }

    @keyframes splashLogoPop {
      0% {
        opacity: 0;
        filter: blur(12px);
        transform: translate3d(0, 18px, 0) scale(0.9);
      }
      100% {
        opacity: 1;
        filter: blur(0px);
        transform: translate3d(0, 0, 0) scale(1);
      }
    }

    @keyframes splashCurtainOut {
      0% {
        opacity: 1;
        filter: blur(0px);
        transform: scale(1);
      }
      100% {
        opacity: 0;
        filter: blur(14px);
        transform: scale(1.035);
        visibility: hidden;
      }
    }

    .initial-nav-drop {
      opacity: 0;
      animation: initialNavSlideDown 0.78s cubic-bezier(0.16, 1, 0.3, 1) 0.32s forwards;
      will-change: transform, opacity, filter;
    }

    @keyframes initialNavSlideDown {
      0% {
        opacity: 0;
        filter: blur(8px);
        transform: translate3d(0, -28px, 0);
      }
      100% {
        opacity: 1;
        filter: blur(0px);
        transform: translate3d(0, 0, 0);
      }
    }

    .initial-hero-item {
      opacity: 0;
      animation: initialHeroReveal 0.88s cubic-bezier(0.16, 1, 0.3, 1) var(--enter-delay, 0.38s) forwards;
      will-change: transform, opacity, filter;
    }

    @keyframes initialHeroReveal {
      0% {
        opacity: 0;
        filter: blur(14px);
        transform: translate3d(0, 34px, 0) scale(0.955);
      }
      100% {
        opacity: 1;
        filter: blur(0px);
        transform: translate3d(0, 0, 0) scale(1);
      }
    }

    .initial-role-card-enter {
      opacity: 0;
      animation: initialRoleCardRise 0.92s cubic-bezier(0.16, 1, 0.3, 1) var(--card-enter-delay, 0.62s) forwards;
      will-change: transform, opacity, filter;
    }

    @keyframes initialRoleCardRise {
      0% {
        opacity: 0;
        filter: blur(16px);
        transform: translate3d(0, 52px, 0) scale(0.935);
      }
      100% {
        opacity: 1;
        filter: blur(0px);
        transform: translate3d(0, 0, 0) scale(1);
      }
    }

    /* Mobile Optimization: Fast GPU-Only Transitions & Lightweight Glass Blur */
    @media (max-width: 768px) {
      .navos-ambient-canvas {
        background-attachment: scroll;
      }

      .harian-surface-card,
      .harian-role-frosted-card,
      .harian-blog-card,
      .createui-stepper-card {
        backdrop-filter: blur(12px) saturate(145%);
        -webkit-backdrop-filter: blur(12px) saturate(145%);
        background: linear-gradient(
          155deg,
          rgba(255, 255, 255, 0.90) 0%,
          rgba(244, 249, 255, 0.82) 100%
        );
        border-radius: 22px;
        box-shadow:
          0 14px 32px -8px rgba(15, 27, 51, 0.12),
          inset 0 1.5px 2px rgba(255, 255, 255, 0.95);
        transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.25s ease;
      }

      .sticky-glass-nav,
      .navos-chat-bubble,
      .frosted-input,
      .btn-pill-secondary {
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
      }

      /* Eliminate expensive filter: blur() keyframes & shorten duration on mobile */
      .initial-boot-splash {
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        animation: splashCurtainOutMobile 0.32s cubic-bezier(0.22, 1, 0.36, 1) 0.24s forwards;
      }

      .initial-boot-logo-pill {
        animation: splashLogoPopMobile 0.28s cubic-bezier(0.22, 1, 0.36, 1) forwards;
      }

      @keyframes splashLogoPopMobile {
        from { opacity: 0; transform: translate3d(0, 10px, 0) scale(0.96); }
        to { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
      }

      @keyframes splashCurtainOutMobile {
        from { opacity: 1; transform: scale(1); }
        to { opacity: 0; transform: scale(1.015); visibility: hidden; }
      }

      .initial-nav-drop {
        animation: initialNavSlideDownMobile 0.36s cubic-bezier(0.22, 1, 0.36, 1) 0.14s forwards;
      }

      @keyframes initialNavSlideDownMobile {
        from { opacity: 0; transform: translate3d(0, -14px, 0); }
        to { opacity: 1; transform: translate3d(0, 0, 0); }
      }

      .initial-hero-item,
      .initial-role-card-enter {
        animation: initialFastRiseMobile 0.42s cubic-bezier(0.22, 1, 0.36, 1) calc(var(--enter-delay, var(--card-enter-delay, 0.24s)) * 0.45) forwards;
      }

      @keyframes initialFastRiseMobile {
        from { opacity: 0; transform: translate3d(0, 18px, 0) scale(0.98); }
        to { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
      }

      .view-transition-enter {
        animation: viewEnterMobile 0.24s cubic-bezier(0.22, 1, 0.36, 1) forwards;
      }

      @keyframes viewEnterMobile {
        from { opacity: 0; transform: translate3d(0, 10px, 0); }
        to { opacity: 1; transform: translate3d(0, 0, 0); }
      }

      .scroll-reveal-section,
      .scroll-reveal-card {
        filter: none !important;
        transform: translate3d(0, 22px, 0) scale(0.985);
        transition:
          opacity 0.36s cubic-bezier(0.22, 1, 0.36, 1),
          transform 0.36s cubic-bezier(0.22, 1, 0.36, 1);
        transition-delay: calc(var(--stagger-delay, 0ms) * 0.45);
      }

      .scroll-reveal-section.is-above,
      .scroll-reveal-card.is-above {
        filter: none !important;
        transform: translate3d(0, -18px, 0) scale(0.985);
      }

      .scroll-reveal-section.is-inview,
      .scroll-reveal-card.is-inview {
        filter: none !important;
        transform: translate3d(0, 0, 0) scale(1);
      }
    }

    /* Native Modal Dialog & Accessible Form Utilities (Modern Web Guidance) */
    dialog.harian-native-dialog {
      border: none;
      padding: 0;
      background: transparent;
      max-width: min(94vw, 44rem);
      max-height: 92vh;
      width: 100%;
      margin: auto;
      color: var(--text);
    }

    dialog.harian-native-dialog[open] {
      display: block;
    }

    dialog.harian-native-dialog:modal {
      overscroll-behavior: contain;
    }

    dialog.harian-native-dialog::backdrop {
      background: rgba(15, 27, 51, 0.48);
      backdrop-filter: blur(6px);
      -webkit-backdrop-filter: blur(6px);
      overflow: hidden;
      overscroll-behavior: contain;
    }

    .visually-hidden:where(:not(:focus-within, :active)) {
      position: absolute !important;
      clip-path: inset(50%) !important;
      overflow: hidden !important;
      width: 1px !important;
      height: 1px !important;
      margin: -1px !important;
      padding: 0 !important;
      border: 0 !important;
      white-space: nowrap !important;
    }

    :is(input, select, textarea):is(:user-invalid, .field-invalid) {
      border-color: #DC2626 !important;
      background-color: rgba(254, 242, 242, 0.9) !important;
    }

    @media (prefers-reduced-motion: reduce) {
      *, ::before, ::after {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
      .scroll-reveal-section,
      .scroll-reveal-card {
        opacity: 1 !important;
        transform: none !important;
      }
    }
  `}</style>
);

// ============================================================================
// 1B. IRIDESCENT 3D SILK RIBBON WAVE & COBALT ACRYLIC BACKDROP
// ============================================================================
const NavosSilkWaveBackdrop = () => (
  <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none">
    {/* Deep Cobalt & Sapphire Orbs + Warm Ivory Glow Behind Acrylic Cards */}
    <div
      className="absolute -top-20 left-[6%] w-[540px] h-[540px] rounded-full opacity-80"
      style={{
        background:
          'radial-gradient(circle, rgba(25, 92, 226, 0.34) 0%, rgba(25, 92, 226, 0) 68%)'
      }}
    />
    <div
      className="absolute top-[18%] right-[4%] w-[620px] h-[620px] rounded-full opacity-85"
      style={{
        background:
          'radial-gradient(circle, rgba(37, 99, 235, 0.32) 0%, rgba(96, 165, 250, 0) 70%)'
      }}
    />
    <div
      className="absolute top-[42%] right-[18%] w-[520px] h-[520px] rounded-full opacity-90"
      style={{
        background:
          'radial-gradient(circle, rgba(255, 241, 218, 0.85) 0%, rgba(255, 241, 218, 0) 68%)'
      }}
    />
    <div
      className="absolute bottom-[-8%] left-[14%] w-[680px] h-[480px] rounded-full opacity-80"
      style={{
        background:
          'radial-gradient(circle, rgba(29, 78, 216, 0.30) 0%, rgba(147, 197, 253, 0) 72%)'
      }}
    />

    {/* Flowing Translucent 3D Silk Wave SVG */}
    <svg
      className="absolute bottom-0 left-0 w-full h-[54vh] min-h-[360px]"
      viewBox="0 0 1440 600"
      fill="none"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="navosWaveMain" x1="0%" y1="20%" x2="100%" y2="80%">
          <stop offset="0%" stopColor="#9AB8FF" stopOpacity="0.22" />
          <stop offset="42%" stopColor="#5D87FF" stopOpacity="0.52" />
          <stop offset="76%" stopColor="#7DA3FF" stopOpacity="0.34" />
          <stop offset="100%" stopColor="#DCE8FF" stopOpacity="0.18" />
        </linearGradient>
        <linearGradient id="navosWaveFrost" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.88" />
          <stop offset="50%" stopColor="#E6F0FF" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.92" />
        </linearGradient>
        <linearGradient id="navosRimGlow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
          <stop offset="48%" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#BFD6FF" stopOpacity="0.5" />
        </linearGradient>
      </defs>

      {/* Deep Iridescent Blue-Periwinkle Silk Fold */}
      <path
        d="M-80 470 C 210 460, 430 170, 770 210 C 1080 245, 1240 410, 1520 350 L 1520 620 L -80 620 Z"
        fill="url(#navosWaveMain)"
      />

      {/* Secondary Translucent Frosted Ribbon */}
      <path
        d="M-60 530 C 260 490, 510 240, 860 280 C 1140 312, 1290 450, 1520 420 L 1520 620 L -60 620 Z"
        fill="url(#navosWaveFrost)"
      />

      {/* Specular White Glass Highlight Edge Along the Wave Crest */}
      <path
        d="M-80 470 C 210 460, 430 170, 770 210 C 1080 245, 1240 410, 1520 350"
        stroke="url(#navosRimGlow)"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M-60 530 C 260 490, 510 240, 860 280 C 1140 312, 1290 450, 1520 420"
        stroke="#FFFFFF"
        strokeOpacity="0.8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  </div>
);

// ============================================================================
// 2. OFFICIAL "har/an" LOGO SVG (WITH MAGNIFYING GLASS SLASH)
// ============================================================================
const HarianLogo = ({ size = 'md' }) => {
  const dims = {
    sm: { w: 98, h: 34 },
    md: { w: 118, h: 42 },
    lg: { w: 148, h: 52 }
  }[size] || { w: 118, h: 42 };

  return (
    <span className="inline-flex items-center select-none">
      <svg
        width={dims.w}
        height={dims.h}
        viewBox="0 0 232 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        <text
          x="2"
          y="76"
          fill="var(--primary)"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 800,
            fontSize: '66px',
            letterSpacing: '-0.045em'
          }}
        >
          har
        </text>
        <path
          d="M111 76 L127 40"
          stroke="var(--primary)"
          strokeWidth="12"
          strokeLinecap="round"
        />
        <circle
          cx="143"
          cy="21"
          r="18.5"
          stroke="var(--primary)"
          strokeWidth="6.5"
          fill="var(--surface)"
        />
        <path
          d="M131.5 16.5 A12.5 12.5 0 0 1 139.5 9.5"
          stroke="var(--primary)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="144.5" cy="9" r="2.2" fill="var(--primary)" />
        <text
          x="133"
          y="76"
          fill="var(--text)"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 800,
            fontSize: '66px',
            letterSpacing: '-0.045em'
          }}
        >
          an
        </text>
      </svg>
    </span>
  );
};

// ============================================================================
// 3. SPRINT 3 PERSISTENCE LAYER, FILE HELPERS, NATIVE DIALOG & INITIAL DATA
// ============================================================================
const HARIAN_DB_STORAGE_KEY = 'harian_sprint3_db_v1';
const RUNTIME_LARGE_FILE_CACHE = new Map();
const ALLOWED_DOC_EXTENSIONS = ['pdf', 'jpg', 'jpeg', 'png', 'doc', 'docx'];
const MAX_DOC_SIZE_BYTES = 5 * 1024 * 1024; // 5 MB

const formatFileSize = (bytes) => {
  const num = Number(bytes || 0);
  if (num < 1024) return `${num} B`;
  if (num < 1024 * 1024) return `${(num / 1024).toFixed(1)} KB`;
  return `${(num / (1024 * 1024)).toFixed(2)} MB`;
};

const createSeedDoc = (id, docType, fileName, fileSize, mimeType = 'application/pdf') => ({
  id,
  docType,
  fileName,
  fileSize,
  mimeType,
  uploadedAt: 'Terverifikasi Sistem',
  dataUrl: null
});

const buildGeneratedDocumentHtml = (doc, ownerName = 'Kandidat Harian') => {
  const safeOwner = String(ownerName || 'Kandidat Harian').replace(/[<>&"]/g, '');
  const safeName = String(doc?.fileName || 'Dokumen.pdf').replace(/[<>&"]/g, '');
  const safeType = String(doc?.docType || 'Dokumen Persyaratan').replace(/[<>&"]/g, '');
  return [
    '<!doctype html><html lang="id"><head><meta charset="utf-8"><title>' + safeName + '</title>',
    '<style>body{font-family:Inter,Arial,sans-serif;background:#F3F7FF;color:#091326;margin:0;padding:28px}',
    '.sheet{max-width:640px;margin:0 auto;background:#fff;border:1px solid #CBDDFC;border-radius:16px;padding:28px;box-shadow:0 12px 32px rgba(29,111,232,0.08)}',
    '.badge{display:inline-block;padding:4px 10px;border-radius:999px;background:#DCE8FD;color:#1D6FE8;font-size:11px;font-weight:700}',
    'h1{font-size:18px;margin:12px 0 4px}p,li{font-size:13px;line-height:1.6;color:#334463}',
    '.meta{margin-top:16px;padding:14px;border-radius:12px;background:#F5F8FF;border:1px solid #DCE8FD;font-size:12px}</style></head><body>',
    '<div class="sheet"><span class="badge">BERKAS PERSYARATAN HARIAN • ' + safeType.toUpperCase() + '</span>',
    '<h1>' + safeName + '</h1>',
    '<p>Pemilik Berkas: <strong>' + safeOwner + '</strong></p>',
    '<div class="meta"><div><strong>Jenis Dokumen:</strong> ' + safeType + '</div>',
    '<div><strong>Ukuran File:</strong> ' + formatFileSize(doc?.fileSize || 184320) + '</div>',
    '<div><strong>Status Verifikasi:</strong> Format &amp; Ukuran Valid (&le; 5 MB) — Terhubung ke Database Lamaran HRD</div></div>',
    '<p style="margin-top:18px">Dokumen ini tersimpan di ekosistem rekrutmen <strong>har/an</strong> untuk keperluan verifikasi kelayakan kandidat oleh Instansi/HRD.</p>',
    '</div></body></html>'
  ].join('');
};

const validateAndReadUploadFile = (file, docType) =>
  new Promise((resolve) => {
    if (!file) {
      resolve({ ok: false, error: 'Silakan pilih file dokumen terlebih dahulu.' });
      return;
    }
    const ext = (file.name.split('.').pop() || '').toLowerCase();
    if (!ALLOWED_DOC_EXTENSIONS.includes(ext)) {
      resolve({
        ok: false,
        error: `Format file "${file.name}" tidak didukung. Gunakan format PDF, JPG, PNG, DOC, atau DOCX.`
      });
      return;
    }
    if (file.size <= 0) {
      resolve({
        ok: false,
        error: `File "${file.name}" kosong (0 byte). Pilih berkas yang valid.`
      });
      return;
    }
    if (file.size > MAX_DOC_SIZE_BYTES) {
      resolve({
        ok: false,
        error: `Ukuran file "${file.name}" (${formatFileSize(file.size)}) melebihi batas maksimal 5 MB.`
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const docId = `doc-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
      const resultDataUrl = typeof reader.result === 'string' ? reader.result : null;
      if (resultDataUrl) {
        RUNTIME_LARGE_FILE_CACHE.set(docId, resultDataUrl);
      }
      resolve({
        ok: true,
        doc: {
          id: docId,
          docType,
          fileName: file.name,
          fileSize: file.size,
          mimeType: file.type || (ext === 'pdf' ? 'application/pdf' : 'application/octet-stream'),
          uploadedAt: new Date().toLocaleTimeString('id-ID', {
            hour: '2-digit',
            minute: '2-digit'
          }) + ' WIB',
          dataUrl: resultDataUrl
        }
      });
    };
    reader.onerror = () => {
      resolve({
        ok: false,
        error: `Gagal membaca berkas "${file.name}". Silakan coba unggah ulang.`
      });
    };
    reader.readAsDataURL(file);
  });

const NativeModalDialog = ({
  open,
  onClose,
  labelledBy,
  allowOutsideClose = true,
  maxWidthClass = 'max-w-xl',
  children
}) => {
  const dialogRef = useRef(null);
  const pressedOutsideRef = useRef(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open) {
      if (!dialog.open) {
        try {
          dialog.showModal();
        } catch {
          dialog.setAttribute('open', '');
        }
      }
    } else if (dialog.open) {
      dialog.close();
    }
  }, [open]);

  const isPointerOutside = (e) => {
    const dialog = dialogRef.current;
    if (!dialog) return false;
    const rect = dialog.getBoundingClientRect();
    return (
      e.clientX < rect.left ||
      e.clientX > rect.right ||
      e.clientY < rect.top ||
      e.clientY > rect.bottom
    );
  };

  if (!open) return null;

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={labelledBy}
      {...{ closedby: allowOutsideClose ? 'any' : 'closerequest' }}
      onClose={() => {
        if (dialogRef.current) dialogRef.current.returnValue = '';
        if (onClose) onClose();
      }}
      onPointerDown={(e) => {
        if (!allowOutsideClose) return;
        pressedOutsideRef.current = isPointerOutside(e);
      }}
      onPointerUp={(e) => {
        if (!allowOutsideClose) return;
        if (pressedOutsideRef.current && isPointerOutside(e)) {
          dialogRef.current?.close();
        }
        pressedOutsideRef.current = false;
      }}
      className={`harian-native-dialog ${maxWidthClass}`}
    >
      <div className="harian-surface-card w-full p-6 sm:p-7 max-h-[88vh] overflow-y-auto text-left">
        {children}
      </div>
    </dialog>
  );
};

const INITIAL_WORKER_PROFILE = {
  fullName: 'Budi Santoso',
  phone: '+62 812-3456-7890',
  city: 'Bekasi, Jawa Barat',
  bio: 'Pekerja harian cekatan dengan pengalaman lebih dari 1 tahun di operasional gudang, sortir paket logistik, dan pelayanan event dengan kehadiran 100% tepat waktu.',
  bankAccount: 'BCA - 7410889210 (Budi Santoso)',
  experiences: [
    {
      id: 'exp-1',
      role: 'Delivery Driver & Warehouse Helper',
      company: 'Speedy Deliveries Inc',
      period: 'Jan 2025 - Des 2025'
    }
  ]
};

const INITIAL_HRD_PROFILE = {
  companyName: 'PT Karya Maju',
  industry: 'Event & Logistik Terpadu',
  picContact: 'Rina Wijaya (+62 811-2233-4455)',
  location: 'Jakarta & Tangerang',
  description:
    'Instansi penyelenggara pameran nasional dan manajemen operasional gudang terpadu yang berkomitmen pada transparansi upah harian H+2.',
  paymentMethod: 'Virtual Account BCA (Escrow HarianPay)'
};

const INITIAL_JOBS = [
  {
    id: 'job-1',
    title: 'Warehouse Packer (Night Shift)',
    company: 'FastLogistics ID',
    location: 'Bekasi',
    rate: 175000,
    workTime: '22:00 - 06:00',
    scheduleType: 'Night Shift',
    category: 'Logistics & Warehouse',
    quota: 15,
    applicantsCount: 12,
    integrityScore: '4.9 / 5.0 (Verified Partner)',
    escrowHeld: 2625000,
    escrowStage: 'HELD',
    status: 'OPEN',
    matchScore: 98,
    picName: 'Budi Hartono (Supervisor Shift Malam)',
    picPhone: '+62 812-8890-1122',
    dresscode: 'Sepatu tertutup (safety shoes diutamakan), celana panjang rapi.',
    description:
      'Mencari tenaga packer harian cekatan untuk memenuhi lonjakan pesanan kampanye bulanan di gudang utama Bekasi. Melakukan pemindaian barcode dan pelabelan paket sesuai SOP.'
  },
  {
    id: 'job-2',
    title: 'SPG Event Pameran',
    company: 'PT Karya Maju',
    location: 'ICE BSD',
    rate: 250000,
    workTime: '09:00 - 17:00',
    scheduleType: 'Morning Shift',
    category: 'Event Staff',
    quota: 10,
    applicantsCount: 24,
    integrityScore: '4.8 / 5.0 (Top Employer)',
    escrowHeld: 2500000,
    escrowStage: 'HELD',
    status: 'OPEN',
    matchScore: 92,
    picName: 'Rina Wijaya (Event Coordinator)',
    picPhone: '+62 811-9021-3344',
    dresscode: 'Kemeja putih bersih, celana bahan rapi, sepatu kets bersih.',
    description:
      'Menyambut pengunjung booth pameran elektronik nasional, menjelaskan katalog promo produk, serta membantu registrasi pengunjung di aplikasi acara.'
  },
  {
    id: 'job-3',
    title: 'Banquet Waiter / Waitress',
    company: 'Hotel Mulia Senayan',
    location: 'Jakarta',
    rate: 185000,
    workTime: '07:00 - 15:00',
    scheduleType: 'Morning Shift',
    category: 'Hospitality',
    quota: 20,
    applicantsCount: 9,
    integrityScore: '4.9 / 5.0 (Verified Partner)',
    escrowHeld: 3700000,
    escrowStage: 'HELD',
    status: 'OPEN',
    matchScore: 95,
    picName: 'Hendra Kusuma (Banquet Captain)',
    picPhone: '+62 813-7788-9900',
    dresscode: 'Kemeja putih lengan panjang, celana kain formal, pantofel.',
    description:
      'Melayani jamuan konferensi nasional di ballroom utama, menata table set-up standar perhotelan bintang lima, dan menjaga kerapihan area prasmanan.'
  },
  {
    id: 'job-4',
    title: 'Kitchen Helper Harian',
    company: 'Restoran FGH Sudirman',
    location: 'Jakarta',
    rate: 150000,
    workTime: '10:00 - 18:00',
    scheduleType: 'Morning Shift',
    category: 'Hospitality',
    quota: 8,
    applicantsCount: 8,
    integrityScore: '4.7 / 5.0 (Verified)',
    escrowHeld: 1200000,
    escrowStage: 'PAID_H2',
    status: 'COMPLETED',
    matchScore: 89,
    picName: 'Chef Antonius',
    picPhone: '+62 815-4433-2211',
    dresscode: 'Kaos polos rapi, apron disediakan di lokasi, sepatu anti-slip.',
    description:
      'Membantu persiapan bahan masakan dapur utama, menjaga sanitasi peralatan masak, dan membantu pengemasan pesanan pesan-antar.'
  }
];

const INITIAL_APPLICATIONS = [
  {
    id: 'app-1',
    jobId: 'job-1',
    jobTitle: 'Warehouse Packer (Night Shift)',
    company: 'FastLogistics ID',
    rate: 175000,
    status: 'Pending',
    appliedAt: 'Hari ini, 14:20 WIB',
    documents: [
      createSeedDoc('seed-app1-cv', 'CV', 'CV_Budi_Santoso_2026.pdf', 248000),
      createSeedDoc('seed-app1-ktp', 'KTP', 'KTP_Budi_Santoso_Verified.jpg', 192000, 'image/jpeg')
    ]
  },
  {
    id: 'app-2',
    jobId: 'job-4',
    jobTitle: 'Kitchen Helper Harian',
    company: 'Restoran FGH Sudirman',
    rate: 150000,
    status: 'Gaji Cair H+2',
    appliedAt: '2 Hari Lalu',
    documents: [
      createSeedDoc('seed-app2-cv', 'CV', 'CV_Budi_Santoso_2026.pdf', 248000),
      createSeedDoc('seed-app2-ktp', 'KTP', 'KTP_Budi_Santoso_Verified.jpg', 192000, 'image/jpeg')
    ]
  }
];

const INITIAL_CANDIDATES = [
  {
    id: 'cand-1',
    applicationId: 'app-1',
    jobId: 'job-1',
    name: 'Budi Santoso',
    email: 'budisantoso@gmail.com',
    phone: '+62 812-3456-7890',
    city: 'Bekasi, Jawa Barat',
    roleTarget: 'Warehouse Packer (Night Shift)',
    exp: 95,
    avail: 92,
    dist: 90,
    doc: 100,
    status: 'Pending',
    appliedAt: 'Hari ini, 14:20 WIB',
    notes: 'Berpengalaman sortir paket & siap shift malam.',
    documents: [
      createSeedDoc('seed-c1-cv', 'CV', 'CV_Budi_Santoso_2026.pdf', 248000),
      createSeedDoc('seed-c1-ktp', 'KTP', 'KTP_Budi_Santoso_Verified.jpg', 192000, 'image/jpeg'),
      createSeedDoc('seed-c1-sk', 'Surat Pendukung', 'Paklaring_SpeedyDeliveries.pdf', 310000)
    ]
  },
  {
    id: 'cand-2',
    applicationId: null,
    jobId: 'job-1',
    name: 'Gede Bagus Teguh Saka Phalguna',
    email: 'gede.saka@gmail.com',
    phone: '+62 813-9988-7766',
    city: 'Bekasi Barat',
    roleTarget: 'Warehouse Packer (Night Shift)',
    exp: 89,
    avail: 90,
    dist: 86,
    doc: 95,
    status: 'Diterima',
    appliedAt: 'Kemarin, 19:10 WIB',
    notes: 'Dokumen KTP & CV lengkap, fisik prima.',
    documents: [
      createSeedDoc('seed-c2-cv', 'CV', 'CV_Gede_Bagus_Teguh.pdf', 276000),
      createSeedDoc('seed-c2-ktp', 'KTP', 'KTP_Gede_Bagus.pdf', 164000)
    ]
  },
  {
    id: 'cand-3',
    applicationId: null,
    jobId: 'job-2',
    name: 'Ida Bagus Ngurah Sanjaya',
    email: 'ngurah.sanjaya@gmail.com',
    phone: '+62 817-6655-4433',
    city: 'BSD, Tangerang Selatan',
    roleTarget: 'SPG Event Pameran',
    exp: 84,
    avail: 86,
    dist: 82,
    doc: 90,
    status: 'Pending',
    appliedAt: 'Kemarin, 11:05 WIB',
    notes: 'Komunikatif, pernah bertugas di pameran ICE BSD.',
    documents: [
      createSeedDoc('seed-c3-cv', 'CV', 'CV_Ngurah_Sanjaya_Event.pdf', 312000),
      createSeedDoc('seed-c3-ktp', 'KTP', 'KTP_Ngurah_Sanjaya.jpg', 205000, 'image/jpeg')
    ]
  },
  {
    id: 'cand-4',
    applicationId: null,
    jobId: 'job-3',
    name: 'Dwito Fajar Septianto',
    email: 'dwito.fajar@gmail.com',
    phone: '+62 857-2211-3399',
    city: 'Jakarta Pusat',
    roleTarget: 'Banquet Waiter / Waitress',
    exp: 78,
    avail: 82,
    dist: 79,
    doc: 88,
    status: 'Pending',
    appliedAt: '2 Hari Lalu',
    notes: 'Memiliki pengalaman table service perhotelan.',
    documents: [
      createSeedDoc('seed-c4-cv', 'CV', 'CV_Dwito_Fajar_Hospitality.pdf', 229000),
      createSeedDoc('seed-c4-ktp', 'KTP', 'KTP_Dwito_Fajar.pdf', 178000)
    ]
  }
];

const INITIAL_TRANSACTIONS = [
  {
    id: 'tx-1',
    invoiceId: 'INV-HPY-2026-0891',
    type: 'TOP_UP',
    title: 'Top-Up Saldo Escrow Korporat Awal',
    method: 'Virtual Account BCA (Escrow HarianPay)',
    amount: 35000000,
    status: 'Berhasil',
    createdAt: '19 Nov 2026, 09:00 WIB'
  },
  {
    id: 'tx-2',
    invoiceId: 'INV-HPY-2026-0914',
    type: 'ESCROW_LOCK',
    title: 'Penguncian Dana Escrow: SPG Event Pameran (10 Kuota)',
    method: 'Saldo HarianPay Korporat',
    amount: 2500000,
    status: 'Terkunci di Escrow',
    createdAt: '20 Nov 2026, 10:15 WIB'
  },
  {
    id: 'tx-3',
    invoiceId: 'INV-HPY-2026-0942',
    type: 'PAYOUT_H2',
    title: 'Distribusi Gaji H+2: Kitchen Helper Harian (8 Pekerja)',
    method: 'Auto-Disbursement HarianPay',
    amount: 1200000,
    status: 'Telah Dicairkan',
    createdAt: '22 Nov 2026, 16:30 WIB'
  }
];

const loadPersistedSprint3Db = () => {
  if (typeof window === 'undefined') {
    return {
      workerProfile: INITIAL_WORKER_PROFILE,
      hrdProfile: INITIAL_HRD_PROFILE,
      jobs: INITIAL_JOBS,
      applications: INITIAL_APPLICATIONS,
      candidates: INITIAL_CANDIDATES,
      hrdWalletBalance: 25000000,
      paymentTransactions: INITIAL_TRANSACTIONS
    };
  }
  try {
    const raw = window.localStorage.getItem(HARIAN_DB_STORAGE_KEY);
    if (!raw) throw new Error('empty');
    const parsed = JSON.parse(raw);
    return {
      workerProfile: { ...INITIAL_WORKER_PROFILE, ...(parsed.workerProfile || {}) },
      hrdProfile: { ...INITIAL_HRD_PROFILE, ...(parsed.hrdProfile || {}) },
      jobs: Array.isArray(parsed.jobs)
        ? parsed.jobs.map((j) => ({ status: 'OPEN', ...j }))
        : INITIAL_JOBS,
      applications: Array.isArray(parsed.applications)
        ? parsed.applications.map((a) => ({ documents: [], ...a }))
        : INITIAL_APPLICATIONS,
      candidates: Array.isArray(parsed.candidates)
        ? parsed.candidates.map((c) => ({
            email: 'kandidat@harian.id',
            phone: '+62 812-0000-0000',
            city: 'Jabodetabek',
            notes: '',
            documents: [],
            ...c
          }))
        : INITIAL_CANDIDATES,
      hrdWalletBalance:
        typeof parsed.hrdWalletBalance === 'number' ? parsed.hrdWalletBalance : 25000000,
      paymentTransactions: Array.isArray(parsed.paymentTransactions)
        ? parsed.paymentTransactions
        : INITIAL_TRANSACTIONS
    };
  } catch {
    return {
      workerProfile: INITIAL_WORKER_PROFILE,
      hrdProfile: INITIAL_HRD_PROFILE,
      jobs: INITIAL_JOBS,
      applications: INITIAL_APPLICATIONS,
      candidates: INITIAL_CANDIDATES,
      hrdWalletBalance: 25000000,
      paymentTransactions: INITIAL_TRANSACTIONS
    };
  }
};

const CARA_KERJA_STEPS = {
  worker: [
    {
      step: '01',
      title: 'Buat akun Harian kamu',
      desc: 'Akun kamu langsung siap dipakai. Cukup daftar dengan email aktif dan setujui simulasi nota upah bersih 90% di awal tanpa perlu instal aplikasi.',
      badge: null,
      hasActions: false
    },
    {
      step: '02',
      title: 'Lengkapi pengalaman & rekening H+2',
      desc: 'Terkonfirmasi. Kami menyimpan riwayat kerja harian dan nomor rekening bank/e-wallet kamu agar pencairan gaji berjalan otomatis.',
      badge: null,
      hasActions: false
    },
    {
      step: '03',
      title: 'Pilih lowongan & satu klik lamar',
      desc: 'Saring kerjaan harian sesuai lokasi, jam shift, dan upah minimum, lalu kirim lamaran beserta dokumen KTP dalam satu klik.',
      badge: null,
      hasActions: true,
      primaryActionLabel: 'Lanjutkan',
      secondaryActionLabel: 'Coba Daftar Sekarang'
    },
    {
      step: '04',
      title: 'Pantau status lamaran real-time',
      desc: 'Begitu HRD mengevaluasi berkasmu dengan metode MFEP, status Pending, Diterima, atau Ditolak langsung ter-update di layar.',
      badge: 'Real-Time',
      hasActions: false
    },
    {
      step: '05',
      title: 'Kerja selesai, gaji cair maksimal H+2',
      desc: 'Dana upah yang sudah dikunci di Escrow Payment Gateway otomatis ditransfer ke rekening kamu maksimal 2 hari setelah shift selesai.',
      badge: 'Jaminan H+2',
      hasActions: false
    }
  ],
  hrd: [
    {
      step: '01',
      title: 'Daftarkan akun instansi / HRD',
      desc: 'Profil perusahaan Anda siap digunakan. Anda dapat mengatur identitas instansi dan kontak PIC lapangan kapan saja di pengaturan.',
      badge: null,
      hasActions: false
    },
    {
      step: '02',
      title: 'Pasang lowongan & kunci dana Escrow',
      desc: 'Terkonfirmasi. Sistem memvalidasi standar upah layak dan mengunci total dana upah (Kuota × Upah Harian) di HarianPay sebelum lowongan tayang.',
      badge: null,
      hasActions: false
    },
    {
      step: '03',
      title: 'Seleksi kandidat otomatis dengan MFEP',
      desc: 'Tentukan bobot pengalaman, ketersediaan shift, domisili, dan berkas. Sistem otomatis mengurutkan skor kelayakan pelamar secara transparan.',
      badge: null,
      hasActions: true,
      primaryActionLabel: 'Lanjutkan',
      secondaryActionLabel: 'Buka Simulasi HRD'
    },
    {
      step: '04',
      title: 'Terima pelamar dalam satu klik',
      desc: 'Pilih kandidat terbaik dari tabel peringkat MFEP dan kirimkan notifikasi penerimaan otomatis secara real-time ke pekerja.',
      badge: 'Upcoming',
      hasActions: false
    },
    {
      step: '05',
      title: 'Cairkan gaji H+2 & unduh laporan CSV',
      desc: 'Tandai shift pekerjaan selesai untuk mencairkan dana ke pekerja dan ekspor rekapitulasi laporan rekrutmen resmi dalam hitungan detik.',
      badge: 'Laporan Instan',
      hasActions: false
    }
  ]
};

const KENAPA_HARIAN_POINTS = [
  {
    id: 'kh-1',
    title: 'Gaji maksimal 2 hari setelah kerja selesai.',
    desc: 'Dana upah dikelola secara aman lewat payment gateway sehingga kamu nggak perlu cemas gaji ditahan berminggu-minggu.'
  },
  {
    id: 'kh-2',
    title: 'Status lamaran real-time, jadi nggak perlu menebak-nebak.',
    desc: 'Begitu HRD memproses berkasmu, status Pending, Diterima, atau Ditolak langsung ter-update otomatis di layar kamu.'
  },
  {
    id: 'kh-3',
    title: 'Seleksi transparan dengan skor yang bisa ditelusuri.',
    desc: 'Sistem menggunakan perhitungan metode MFEP berdasarkan pengalaman, ketersediaan waktu, domisili, dan kelengkapan dokumen.'
  },
  {
    id: 'kh-4',
    title: 'Integritas perusahaan ditampilkan sebelum kamu melamar.',
    desc: 'Setiap lowongan memuat rating rekam jejak pemberi kerja dan rincian tugas yang jelas sejak awal.'
  }
];

const WA_VS_HARIAN_ROWS = [
  {
    wa: 'Info tenggelam di chat',
    harian: 'Lowongan rapi dan bisa difilter'
  },
  {
    wa: 'Status lamaran nggak jelas',
    harian: 'Status terlihat real-time'
  },
  {
    wa: 'Gaji tergantung kepercayaan',
    harian: 'Pembayaran lewat payment gateway'
  }
];

const FAQ_ITEMS = [
  {
    q: 'Ada potongan?',
    a: 'Ada service fee 10%. Contoh: upah Rp150.000, kamu terima Rp135.000.'
  },
  {
    q: 'Perlu instal aplikasi?',
    a: 'Nggak, cukup buka di browser.'
  },
  {
    q: 'Lamaran ditolak?',
    a: 'Tenang, kamu langsung bisa lihat lowongan lain.'
  },
  {
    q: 'Kapan gaji cair?',
    a: 'Maksimal 2 hari setelah pekerjaan ditandai selesai.'
  }
];

const FOOTER_INFO_CONTENT = {
  Tentang: {
    title: 'Tentang Harian',
    body: 'Harian adalah platform web pencari kerja harian (daily worker) yang mempertemukan pekerja harian dan instansi pemberi kerja secara transparan, dilengkapi filter pencarian cepat, seleksi metode MFEP, dan pembayaran via payment gateway.'
  },
  Kontak: {
    title: 'Kontak Kami',
    body: 'Butuh bantuan operasional atau kerjasama instansi? Hubungi tim Harian melalui email halo@harian.id atau WhatsApp Layanan Pengguna di +62 811-3000-2026 (Aktif 24 Jam).'
  },
  'Syarat dan Ketentuan': {
    title: 'Syarat dan Ketentuan',
    body: 'Setiap lowongan wajib mencantumkan upah layak, jam kerja jelas, serta mengunci dana pembayaran melalui payment gateway sebelum pekerjaan dimulai. Potongan biaya layanan (service fee) sebesar 10% dikenakan saat pencairan upah.'
  },
  'Kebijakan Privasi': {
    title: 'Kebijakan Privasi',
    body: 'Data identitas KTP, nomor rekening, dan riwayat pengalaman kerja Anda dienkripsi dan hanya digunakan untuk keperluan verifikasi rekrutmen serta pencairan upah maksimal H+2.'
  }
};

// ============================================================================
// 4. MAIN REACT APPLICATION COMPONENT
// ============================================================================
export default function App() {
  // Navigation & View State
  // 'landing' | 'login' | 'register' | 'onboarding-worker' | 'onboarding-hrd' | 'profile' | 'worker' | 'hrd'
  const [activeView, setActiveView] = useState('landing');
  const [authenticatedRole, setAuthenticatedRole] = useState(null); // null | 'worker' | 'hrd'
  const [isNavScrolled, setIsNavScrolled] = useState(false);
  const [showInitialBootSplash, setShowInitialBootSplash] = useState(true);
  const [toastMessage, setToastMessage] = useState(null);

  // Unmount initial boot splash overlay once its entrance curtain finishes
  useEffect(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
    const timer = setTimeout(() => {
      setShowInitialBootSplash(false);
    }, isMobile ? 580 : 1220);
    return () => clearTimeout(timer);
  }, []);

  // Landing Page (Versi Gaya D) Interactive States
  const [heroRoleSegment, setHeroRoleSegment] = useState('all'); // 'all' | 'worker' | 'hrd'
  const [caraKerjaTab, setCaraKerjaTab] = useState('worker'); // 'worker' | 'hrd'
  const [activeAccessStep, setActiveAccessStep] = useState(0);
  const [footerModalKey, setFooterModalKey] = useState(null);
  const [showHowItWorksModal, setShowHowItWorksModal] = useState(false);

  // Auto-advance the CreateUI Step Indicator in a 7-second infinite loop (7000ms per full cycle)
  useEffect(() => {
    if (activeView !== 'landing') return;
    const stepsLen =
      (CARA_KERJA_STEPS[caraKerjaTab] || CARA_KERJA_STEPS.worker).length;
    const stepIntervalMs = Math.round(7000 / (stepsLen + 1)); // ~1167ms per state -> 7.0s full cycle loop
    const interval = setInterval(() => {
      setActiveAccessStep((prev) => (prev >= stepsLen ? 0 : prev + 1));
    }, stepIntervalMs);
    return () => clearInterval(interval);
  }, [activeView, caraKerjaTab]);

  // Registration & Post-Register Onboarding States (With Receipt & Service Fee Consent)
  const [registerRole, setRegisterRole] = useState('worker'); // 'worker' | 'hrd'
  const [registerEmail, setRegisterEmail] = useState('budi.santoso@gmail.com');
  const [registerPassword, setRegisterPassword] = useState('harian123');
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState('harian123');
  const [sampleReceiptRate, setSampleReceiptRate] = useState(150000);
  const [agreeServiceFee, setAgreeServiceFee] = useState(false);
  const [showTermsServiceModal, setShowTermsServiceModal] = useState(false);
  const [workerOnboardStep, setWorkerOnboardStep] = useState(1);
  const [workerFavLocation, setWorkerFavLocation] = useState('Bekasi');
  const [workerFavCategory, setWorkerFavCategory] = useState(
    'Logistics & Warehouse'
  );
  const initialDb = useMemo(() => loadPersistedSprint3Db(), []);
  const [hrdOnboardStep, setHrdOnboardStep] = useState(1);
  const [hrdProfile, setHrdProfile] = useState(initialDb.hrdProfile);

  // Auth & Profile State (UC-01, US-07, US-11)
  const [loginRole, setLoginRole] = useState('worker'); // 'worker' | 'hrd'
  const [loginEmail, setLoginEmail] = useState('budisantoso@gmail.com');
  const [loginPassword, setLoginPassword] = useState('harian123');
  const [loginError, setLoginError] = useState('');
  const [profileStep, setProfileStep] = useState(1);
  const [workerProfile, setWorkerProfile] = useState(initialDb.workerProfile);
  const [profileRoleTab, setProfileRoleTab] = useState('worker'); // 'worker' | 'hrd'
  const [workerProfileDraft, setWorkerProfileDraft] = useState(initialDb.workerProfile);
  const [hrdProfileDraft, setHrdProfileDraft] = useState(initialDb.hrdProfile);
  const [profileFormFeedback, setProfileFormFeedback] = useState(null);
  const [profileSubmittedOnce, setProfileSubmittedOnce] = useState(false);
  const [newExpRole, setNewExpRole] = useState('');
  const [newExpCompany, setNewExpCompany] = useState('');
  const [newExpPeriod, setNewExpPeriod] = useState('2025 - Sekarang');
  const [editingExpId, setEditingExpId] = useState(null);
  const profileFormRef = useRef(null);

  // Core Portal Data State (Jobs, Applications, Candidates, Wallet, Transactions)
  const [jobs, setJobs] = useState(initialDb.jobs);
  const [applications, setApplications] = useState(initialDb.applications);
  const [candidates, setCandidates] = useState(initialDb.candidates);
  const [selectedJobId, setSelectedJobId] = useState(
    initialDb.jobs[0]?.id || INITIAL_JOBS[0].id
  );
  const [jobDetailModalId, setJobDetailModalId] = useState(null);
  const [workerSubTab, setWorkerSubTab] = useState('explore'); // 'explore' | 'applications'
  const [hrdSubTab, setHrdSubTab] = useState('jobs'); // 'jobs' | 'applicants' | 'mfep' | 'escrow'
  const [hrdWalletBalance, setHrdWalletBalance] = useState(initialDb.hrdWalletBalance);
  const [paymentTransactions, setPaymentTransactions] = useState(
    initialDb.paymentTransactions
  );

  // US-08: Edit, Close, Delete Job States
  const [hrdJobStatusFilter, setHrdJobStatusFilter] = useState('ALL');
  const [editingJobModal, setEditingJobModal] = useState(null);
  const [editJobError, setEditJobError] = useState('');
  const [confirmJobActionModal, setConfirmJobActionModal] = useState(null);

  // US-10: Requirement Document Upload States (Apply Job)
  const [applyUploadDocs, setApplyUploadDocs] = useState({
    CV: null,
    KTP: null,
    'Surat Pendukung': null
  });
  const [applyUploadError, setApplyUploadError] = useState('');

  // US-12: Applicant CRUD ("Kelola Pelamar") & Document Viewer States
  const [applicantSearchQuery, setApplicantSearchQuery] = useState('');
  const [applicantRoleFilter, setApplicantRoleFilter] = useState('ALL');
  const [applicantStatusFilter, setApplicantStatusFilter] = useState('ALL');
  const [applicantCrudModal, setApplicantCrudModal] = useState(null);
  const [applicantFormError, setApplicantFormError] = useState('');
  const [applicantDetailModal, setApplicantDetailModal] = useState(null);
  const [confirmDeleteApplicant, setConfirmDeleteApplicant] = useState(null);
  const [previewDocModal, setPreviewDocModal] = useState(null);

  // US-17: Payment Processor (HarianPay Gateway) States
  const [paymentModal, setPaymentModal] = useState(null);
  const [paymentModalError, setPaymentModalError] = useState('');
  const [receiptPreviewTx, setReceiptPreviewTx] = useState(null);
  const [liveAnnouncement, setLiveAnnouncement] = useState('');

  // Filter State (UC-05)
  const [filterKeyword, setFilterKeyword] = useState('');
  const [filterLocation, setFilterLocation] = useState('ALL');
  const [filterCategory, setFilterCategory] = useState('ALL');
  const [filterShift, setFilterShift] = useState('ALL');
  const [filterMinRate, setFilterMinRate] = useState('');

  // MFEP Weights State (UC-08)
  const [mfepWeights, setMfepWeights] = useState({
    exp: 40,
    avail: 30,
    dist: 20,
    doc: 10
  });

  // Create Job Modal State (UC-03)
  const [showCreateJobModal, setShowCreateJobModal] = useState(false);
  const [createJobError, setCreateJobError] = useState('');
  const [newJobForm, setNewJobForm] = useState({
    title: 'Crew Gudang & Logistik Harian',
    location: 'Bekasi',
    rate: 175000,
    quota: 10,
    workTime: '08:00 - 16:00',
    scheduleType: 'Morning Shift',
    category: 'Logistics & Warehouse',
    picName: 'Budi Hartono (Supervisor)',
    picPhone: '+62 812-8890-1122',
    dresscode: 'Kaos rapi, celana panjang, sepatu tertutup.',
    description:
      'Membantu proses sortir barang masuk, pelabelan paket harian, dan menjaga kerapihan area gudang sesuai SOP.'
  });

  // Dialog Heading Accessibility IDs
  const editJobDialogTitleId = useId();
  const confirmJobDialogTitleId = useId();
  const applicantCrudDialogTitleId = useId();
  const applicantDetailDialogTitleId = useId();
  const deleteApplicantDialogTitleId = useId();
  const previewDocDialogTitleId = useId();
  const paymentDialogTitleId = useId();
  const receiptDialogTitleId = useId();

  // Persist Sprint 3 Database State to localStorage Consistently
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const compactDocs = (docs) =>
      Array.isArray(docs)
        ? docs.map((d) => {
            if (d?.dataUrl && d.dataUrl.length > 650000) {
              RUNTIME_LARGE_FILE_CACHE.set(d.id, d.dataUrl);
              return { ...d, dataUrl: null };
            }
            return d;
          })
        : [];

    const payload = {
      workerProfile,
      hrdProfile,
      jobs,
      applications: applications.map((a) => ({
        ...a,
        documents: compactDocs(a.documents)
      })),
      candidates: candidates.map((c) => ({
        ...c,
        documents: compactDocs(c.documents)
      })),
      hrdWalletBalance,
      paymentTransactions
    };

    try {
      window.localStorage.setItem(HARIAN_DB_STORAGE_KEY, JSON.stringify(payload));
    } catch {
      try {
        const slimPayload = {
          ...payload,
          applications: payload.applications.map((a) => ({
            ...a,
            documents: (a.documents || []).map((d) => ({ ...d, dataUrl: null }))
          })),
          candidates: payload.candidates.map((c) => ({
            ...c,
            documents: (c.documents || []).map((d) => ({ ...d, dataUrl: null }))
          }))
        };
        window.localStorage.setItem(
          HARIAN_DB_STORAGE_KEY,
          JSON.stringify(slimPayload)
        );
      } catch {
        // Ignore storage errors in restricted modes
      }
    }
  }, [
    workerProfile,
    hrdProfile,
    jobs,
    applications,
    candidates,
    hrdWalletBalance,
    paymentTransactions
  ]);

  // Scroll & Animation Refs
  const landingRootRef = useRef(null);
  const heroSectionRef = useRef(null);
  const heroHeadlineRef = useRef(null);
  const heroMockupRef = useRef(null);
  const heroHorizonArchRef = useRef(null);
  const cloudLayerSlowRef = useRef(null);
  const cloudLayerFastRef = useRef(null);
  const footerSectionRef = useRef(null);
  const footerPeekMockupRef = useRef(null);
  const toastTimerRef = useRef(null);

  const formatRupiah = (num) =>
    'Rp ' + Number(num || 0).toLocaleString('id-ID');

  const nowTimeLabel = () =>
    new Date().toLocaleDateString('id-ID', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    }) +
    ', ' +
    new Date().toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit'
    }) +
    ' WIB';

  const triggerToast = (message) => {
    const text = String(message || '');
    setToastMessage(text);
    setLiveAnnouncement(text);
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    toastTimerRef.current = setTimeout(() => {
      setToastMessage(null);
    }, 3600);
  };

  // Sticky Navbar Shrink Listener + Smooth Scroll Parallax & Reveal Observer (60fps)
  useEffect(() => {
    let rafId = null;

    const updateScrollTransforms = () => {
      const y = window.scrollY || window.pageYOffset;
      const scrolled = y > 24;
      setIsNavScrolled((prev) => (prev !== scrolled ? scrolled : prev));

      const isMobileViewport = window.innerWidth <= 768;

      // Apply smooth GPU parallax on Landing Hero elements (skip expensive per-frame blur on mobile)
      if (heroHeadlineRef.current) {
        if (isMobileViewport) {
          const progress = Math.min(1, Math.max(0, y / 420));
          heroHeadlineRef.current.style.transform = `translate3d(0, ${(-y * 0.08).toFixed(1)}px, 0)`;
          heroHeadlineRef.current.style.opacity = Math.max(0.2, 1 - progress * 0.75).toFixed(3);
          heroHeadlineRef.current.style.filter = 'none';
        } else {
          const progress = Math.min(1, Math.max(0, y / 500));
          const translateY = -y * 0.16;
          const scale = 1 - progress * 0.065;
          const blurPx = progress * 6;
          const opacity = Math.max(0.08, 1 - progress * 0.88);
          heroHeadlineRef.current.style.transform = `translate3d(0, ${translateY.toFixed(1)}px, 0) scale(${scale.toFixed(3)})`;
          heroHeadlineRef.current.style.opacity = opacity.toFixed(3);
          heroHeadlineRef.current.style.filter = `blur(${blurPx.toFixed(1)}px)`;
        }
      }

      if (heroMockupRef.current) {
        if (isMobileViewport) {
          heroMockupRef.current.style.transform = 'translate3d(0, 0, 0)';
          heroMockupRef.current.style.opacity = '1';
          heroMockupRef.current.style.filter = 'none';
        } else {
          const progress = Math.min(1, Math.max(0, y / 560));
          const liftY = -progress * 28;
          const scale = 1 - progress * 0.035;
          const blurPx = progress * 4;
          const opacity = Math.max(0.18, 1 - progress * 0.72);
          heroMockupRef.current.style.transform = `translate3d(0, ${liftY.toFixed(1)}px, 0) scale(${scale.toFixed(3)})`;
          heroMockupRef.current.style.opacity = opacity.toFixed(3);
          heroMockupRef.current.style.filter = `blur(${blurPx.toFixed(1)}px)`;
        }
      }

      if (cloudLayerSlowRef.current && !isMobileViewport) {
        cloudLayerSlowRef.current.style.transform = `translate3d(0, ${(y * 0.14).toFixed(1)}px, 0)`;
      }

      if (cloudLayerFastRef.current && !isMobileViewport) {
        cloudLayerFastRef.current.style.transform = `translate3d(0, ${(y * -0.10).toFixed(1)}px, 0)`;
      }

      if (footerPeekMockupRef.current && footerSectionRef.current) {
        if (isMobileViewport) {
          footerPeekMockupRef.current.style.transform = 'translate3d(0, 0, 0)';
          footerPeekMockupRef.current.style.opacity = '1';
        } else {
          const rect = footerSectionRef.current.getBoundingClientRect();
          const vh = window.innerHeight || 800;
          const enterRatio = Math.min(1, Math.max(0, (vh - rect.top) / (vh * 0.75)));
          const peekY = (1 - enterRatio) * 42;
          const peekScale = 0.95 + enterRatio * 0.05;
          footerPeekMockupRef.current.style.transform = `translate3d(0, ${peekY.toFixed(1)}px, 0) scale(${peekScale.toFixed(3)})`;
          footerPeekMockupRef.current.style.opacity = (0.35 + enterRatio * 0.65).toFixed(3);
        }
      }

      rafId = null;
    };

    const handleScroll = () => {
      if (rafId === null) {
        rafId = window.requestAnimationFrame(updateScrollTransforms);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateScrollTransforms();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, [activeView]);

  // IntersectionObserver for Bidirectional Scroll (Scroll Down & Scroll Up) Transitions
  useEffect(() => {
    const rootEl = document;
    const targets = rootEl.querySelectorAll(
      '.scroll-reveal-section, .scroll-reveal-card'
    );
    if (!targets.length) return;

    if (!('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-inview'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('is-above');
            entry.target.classList.add('is-inview');
          } else {
            entry.target.classList.remove('is-inview');
            if (entry.boundingClientRect.top < 0) {
              // Element scrolled past the top -> set 'is-above' so scrolling back UP animates down smoothly
              entry.target.classList.add('is-above');
            } else {
              // Element is below viewport -> default state so scrolling DOWN animates up smoothly
              entry.target.classList.remove('is-above');
            }
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '-32px 0px -48px 0px'
      }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [activeView, workerSubTab, hrdSubTab]);

  // ============================================================================
  // 5. NAVIGATION, DERIVED DATA & SPRINT 3 ACTION HANDLERS
  // ============================================================================
  const switchView = (nextView) => {
    setActiveView(nextView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openProfileEditor = (preferredRole) => {
    const targetRole =
      preferredRole || (authenticatedRole === 'hrd' ? 'hrd' : 'worker');
    setWorkerProfileDraft({ ...workerProfile });
    setHrdProfileDraft({ ...hrdProfile });
    setProfileRoleTab(targetRole);
    setProfileStep(1);
    setProfileFormFeedback(null);
    setProfileSubmittedOnce(false);
    switchView('profile');
  };

  const scrollToLandingSection = (sectionId) => {
    if (activeView !== 'landing') {
      setActiveView('landing');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 90);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openRoleRegister = (role) => {
    setRegisterRole(role);
    setRegisterEmail(
      role === 'hrd' ? 'rekrutmen@karyamaju.co.id' : 'budi.santoso@gmail.com'
    );
    setAgreeServiceFee(false);
    switchView('register');
  };

  // Filtered Active Jobs for Applicants (UC-05 & US-08: exclude CLOSED jobs!)
  const filteredJobs = useMemo(() => {
    const kw = filterKeyword.trim().toLowerCase();
    const minRateVal = Number(filterMinRate || 0);
    return jobs.filter((job) => {
      if (job.status === 'CLOSED') return false;
      const matchKw =
        !kw ||
        job.title.toLowerCase().includes(kw) ||
        job.company.toLowerCase().includes(kw);
      const matchLoc =
        filterLocation === 'ALL' ||
        job.location.toLowerCase().includes(filterLocation.toLowerCase());
      const matchCat =
        filterCategory === 'ALL' || job.category === filterCategory;
      const matchShift =
        filterShift === 'ALL' || job.scheduleType === filterShift;
      const matchRate = job.rate >= minRateVal;
      return matchKw && matchLoc && matchCat && matchShift && matchRate;
    });
  }, [jobs, filterKeyword, filterLocation, filterCategory, filterShift, filterMinRate]);

  // Filtered Jobs for HRD Management Table (US-08)
  const hrdFilteredJobs = useMemo(() => {
    if (hrdJobStatusFilter === 'ALL') return jobs;
    return jobs.filter((j) => (j.status || 'OPEN') === hrdJobStatusFilter);
  }, [jobs, hrdJobStatusFilter]);

  const selectedJob = useMemo(() => {
    return (
      filteredJobs.find((j) => j.id === selectedJobId) ||
      filteredJobs[0] ||
      jobs[0]
    );
  }, [filteredJobs, jobs, selectedJobId]);

  // MFEP Ranked Candidates (UC-08)
  const rankedCandidates = useMemo(() => {
    const totalWeight =
      mfepWeights.exp +
        mfepWeights.avail +
        mfepWeights.dist +
        mfepWeights.doc || 100;
    const wExp = mfepWeights.exp / totalWeight;
    const wAvail = mfepWeights.avail / totalWeight;
    const wDist = mfepWeights.dist / totalWeight;
    const wDoc = mfepWeights.doc / totalWeight;

    return candidates
      .map((c) => {
        const weightedExp = (c.exp * wExp).toFixed(1);
        const weightedAvail = (c.avail * wAvail).toFixed(1);
        const weightedDist = (c.dist * wDist).toFixed(1);
        const weightedDoc = (c.doc * wDoc).toFixed(1);
        const mfepScore = (
          (c.exp * wExp +
            c.avail * wAvail +
            c.dist * wDist +
            c.doc * wDoc) /
          100
        ).toFixed(3);
        return {
          ...c,
          weightedExp,
          weightedAvail,
          weightedDist,
          weightedDoc,
          mfepScore
        };
      })
      .sort((a, b) => Number(b.mfepScore) - Number(a.mfepScore));
  }, [candidates, mfepWeights]);

  // Filtered Candidates for US-12 "Kelola Pelamar"
  const filteredApplicantsList = useMemo(() => {
    const q = applicantSearchQuery.trim().toLowerCase();
    return rankedCandidates.filter((cand) => {
      const matchQuery =
        !q ||
        cand.name.toLowerCase().includes(q) ||
        (cand.email || '').toLowerCase().includes(q) ||
        (cand.phone || '').toLowerCase().includes(q) ||
        (cand.city || '').toLowerCase().includes(q);
      const matchRole =
        applicantRoleFilter === 'ALL' || cand.roleTarget === applicantRoleFilter;
      const matchStatus =
        applicantStatusFilter === 'ALL' || cand.status === applicantStatusFilter;
      return matchQuery && matchRole && matchStatus;
    });
  }, [rankedCandidates, applicantSearchQuery, applicantRoleFilter, applicantStatusFilter]);

  const recordTransaction = (type, title, method, amount, status = 'Berhasil') => {
    const tx = {
      id: 'tx-' + Date.now() + '-' + Math.random().toString(36).slice(2, 5),
      invoiceId:
        'INV-HPY-2026-' + String(Math.floor(1000 + Math.random() * 9000)),
      type,
      title,
      method,
      amount: Number(amount || 0),
      status,
      createdAt: nowTimeLabel()
    };
    setPaymentTransactions((prev) => [tx, ...prev]);
    return tx;
  };

  // Auth Handlers
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!agreeServiceFee) {
      triggerToast(
        'Mohon centang persetujuan Syarat & Ketentuan serta Service Charge 10% terlebih dahulu.'
      );
      return;
    }
    if (registerPassword !== registerConfirmPassword) {
      triggerToast('Konfirmasi kata sandi belum sesuai!');
      return;
    }
    if (registerRole === 'worker') {
      if (newExpRole.trim()) {
        setWorkerProfile((prev) => ({
          ...prev,
          experiences: [
            {
              id: 'exp-' + Date.now(),
              role: newExpRole.trim(),
              company: 'Pengalaman Harian Terverifikasi',
              period: '2025 - 2026'
            },
            ...prev.experiences
          ]
        }));
      }
      setFilterCategory(workerFavCategory);
      setAuthenticatedRole('worker');
      triggerToast(
        `Pendaftaran berhasil! Selamat datang di Portal Pekerja, ${workerProfile.fullName}.`
      );
      switchView('worker');
    } else {
      setAuthenticatedRole('hrd');
      triggerToast(
        `Akun Instansi ${hrdProfile.companyName} aktif! Selamat datang di Portal Instansi.`
      );
      switchView('hrd');
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (loginPassword === 'salah123') {
      setLoginError('Email atau Password salah, silahkan coba lagi.');
      return;
    }
    setLoginError('');
    if (loginRole === 'hrd') {
      setAuthenticatedRole('hrd');
      triggerToast('Berhasil masuk ke Portal Instansi (HRD).');
      switchView('hrd');
    } else {
      setAuthenticatedRole('worker');
      triggerToast(`Selamat datang kembali, ${workerProfile.fullName}!`);
      switchView('worker');
    }
  };

  // US-07: Save Basic Profile for Worker OR Instansi/HRD
  const handleSaveBasicProfile = (e) => {
    e.preventDefault();
    setProfileSubmittedOnce(true);

    if (profileRoleTab === 'worker') {
      const isMissing =
        !workerProfileDraft.fullName?.trim() ||
        !workerProfileDraft.phone?.trim() ||
        !workerProfileDraft.bio?.trim() ||
        !workerProfileDraft.city?.trim();

      if (isMissing) {
        setProfileFormFeedback({
          type: 'error',
          message: 'Kolom wajib isi tidak boleh kosong'
        });
        triggerToast('Kolom wajib isi tidak boleh kosong');
        const firstEmpty = profileFormRef.current?.querySelector(
          'input[data-empty="true"], textarea[data-empty="true"]'
        );
        firstEmpty?.focus();
        return;
      }

      const prevName = workerProfile.fullName;
      const updatedWorker = {
        ...workerProfile,
        fullName: workerProfileDraft.fullName.trim(),
        phone: workerProfileDraft.phone.trim(),
        city: workerProfileDraft.city.trim(),
        bio: workerProfileDraft.bio.trim(),
        bankAccount:
          workerProfileDraft.bankAccount?.trim() || workerProfile.bankAccount
      };
      setWorkerProfile(updatedWorker);
      setWorkerProfileDraft(updatedWorker);

      setCandidates((prev) =>
        prev.map((c) =>
          c.name === prevName || c.id === 'cand-1'
            ? {
                ...c,
                name: updatedWorker.fullName,
                phone: updatedWorker.phone,
                city: updatedWorker.city
              }
            : c
        )
      );

      setProfileFormFeedback({
        type: 'success',
        message: 'Profil berhasil diperbarui'
      });
      triggerToast('Profil berhasil diperbarui');
    } else {
      const isMissing =
        !hrdProfileDraft.companyName?.trim() ||
        !hrdProfileDraft.picContact?.trim() ||
        !hrdProfileDraft.description?.trim() ||
        !hrdProfileDraft.industry?.trim();

      if (isMissing) {
        setProfileFormFeedback({
          type: 'error',
          message: 'Kolom wajib isi tidak boleh kosong'
        });
        triggerToast('Kolom wajib isi tidak boleh kosong');
        const firstEmpty = profileFormRef.current?.querySelector(
          'input[data-empty="true"], textarea[data-empty="true"]'
        );
        firstEmpty?.focus();
        return;
      }

      const oldCompanyName = hrdProfile.companyName;
      const updatedHrd = {
        ...hrdProfile,
        companyName: hrdProfileDraft.companyName.trim(),
        industry: hrdProfileDraft.industry.trim(),
        picContact: hrdProfileDraft.picContact.trim(),
        location: hrdProfileDraft.location?.trim() || 'Jakarta',
        description: hrdProfileDraft.description.trim(),
        paymentMethod:
          hrdProfileDraft.paymentMethod || hrdProfile.paymentMethod
      };
      setHrdProfile(updatedHrd);
      setHrdProfileDraft(updatedHrd);

      if (oldCompanyName && oldCompanyName !== updatedHrd.companyName) {
        setJobs((prev) =>
          prev.map((j) =>
            j.company === oldCompanyName
              ? { ...j, company: updatedHrd.companyName }
              : j
          )
        );
      }

      setProfileFormFeedback({
        type: 'success',
        message: 'Profil berhasil diperbarui'
      });
      triggerToast('Profil berhasil diperbarui');
    }
  };

  // US-11: Experience CRUD & Bank Account Validation
  const handleAddExperience = () => {
    if (!newExpRole.trim()) {
      triggerToast('Tuliskan posisi pengalaman kerja terlebih dahulu.');
      return;
    }
    const nextExperiences = editingExpId
      ? workerProfile.experiences.map((item) =>
          item.id === editingExpId
            ? {
                ...item,
                role: newExpRole.trim(),
                company: newExpCompany.trim() || 'Mitra Harian',
                period: newExpPeriod.trim() || '2025 - Sekarang'
              }
            : item
        )
      : [
          ...workerProfile.experiences,
          {
            id: 'exp-' + Date.now(),
            role: newExpRole.trim(),
            company: newExpCompany.trim() || 'Mitra Harian',
            period: newExpPeriod.trim() || '2025 - Sekarang'
          }
        ];

    const newExpScore = Math.min(100, 75 + nextExperiences.length * 8);
    setWorkerProfile((prev) => ({ ...prev, experiences: nextExperiences }));
    setWorkerProfileDraft((prev) => ({ ...prev, experiences: nextExperiences }));
    setCandidates((prev) =>
      prev.map((c) =>
        c.id === 'cand-1' || c.name === workerProfile.fullName
          ? { ...c, exp: newExpScore }
          : c
      )
    );
    setNewExpRole('');
    setNewExpCompany('');
    setNewExpPeriod('2025 - Sekarang');
    setEditingExpId(null);
    triggerToast(
      editingExpId
        ? 'Riwayat pengalaman kerja berhasil diperbarui.'
        : 'Pengalaman kerja baru berhasil ditambahkan.'
    );
  };

  const handleDeleteExperience = (expId) => {
    const nextExperiences = workerProfile.experiences.filter(
      (item) => item.id !== expId
    );
    const newExpScore = Math.min(100, 72 + nextExperiences.length * 8);
    setWorkerProfile((prev) => ({ ...prev, experiences: nextExperiences }));
    setWorkerProfileDraft((prev) => ({ ...prev, experiences: nextExperiences }));
    setCandidates((prev) =>
      prev.map((c) =>
        c.id === 'cand-1' || c.name === workerProfile.fullName
          ? { ...c, exp: newExpScore }
          : c
      )
    );
    if (editingExpId === expId) {
      setEditingExpId(null);
      setNewExpRole('');
      setNewExpCompany('');
    }
    triggerToast('Riwayat pengalaman kerja berhasil dihapus.');
  };

  const handleSaveBankAccount = () => {
    const val = (workerProfileDraft.bankAccount || '').trim();
    const digits = val.replace(/\D/g, '');
    if (!val || digits.length < 6) {
      triggerToast(
        'Masukkan format nomor rekening bank/e-wallet yang valid (min. 6 digit nomor rekening).'
      );
      return;
    }
    setWorkerProfile((prev) => ({ ...prev, bankAccount: val }));
    triggerToast('Nomor rekening pencairan gaji berhasil disimpan.');
  };

  // US-10: Requirement Document Upload Handlers for Job Application
  const handleSelectApplyFile = async (docType, event) => {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;
    const res = await validateAndReadUploadFile(file, docType);
    if (!res.ok) {
      setApplyUploadError(res.error);
      triggerToast(res.error);
      return;
    }
    setApplyUploadError('');
    setApplyUploadDocs((prev) => ({ ...prev, [docType]: res.doc }));
    triggerToast(`Berkas ${docType} (${res.doc.fileName}) berhasil dipilih.`);
  };

  const handleQuickFillVerifiedDocs = () => {
    const safeSlug =
      workerProfile.fullName.replace(/\s+/g, '_') || 'Pekerja_Harian';
    setApplyUploadDocs({
      CV: createSeedDoc(
        'doc-cv-' + Date.now(),
        'CV',
        `CV_${safeSlug}_2026.pdf`,
        254000
      ),
      KTP: createSeedDoc(
        'doc-ktp-' + Date.now(),
        'KTP',
        `KTP_${safeSlug}_Verified.jpg`,
        188000,
        'image/jpeg'
      ),
      'Surat Pendukung': createSeedDoc(
        'doc-sk-' + Date.now(),
        'Surat Pendukung',
        `Surat_Pengalaman_${safeSlug}.pdf`,
        215000
      )
    });
    setApplyUploadError('');
    triggerToast('Berkas profil tersimpan (CV, KTP, Surat Pendukung) siap dilampirkan.');
  };

  const handleApplyToJob = (job) => {
    if (!job || job.status === 'CLOSED') {
      triggerToast('Lowongan ini sudah ditutup dan tidak menerima lamaran baru.');
      return false;
    }
    const exists = applications.some(
      (a) => a.jobId === job.id && a.status !== 'Dibatalkan'
    );
    if (exists) {
      triggerToast('Anda sudah melamar pada lowongan ini.');
      return false;
    }

    if (!applyUploadDocs.CV || !applyUploadDocs.KTP) {
      const msg =
        'Mohon unggah berkas wajib (CV dan KTP) sesuai format (PDF/JPG/PNG/DOCX, maks. 5 MB) sebelum mengirim lamaran.';
      setApplyUploadError(msg);
      triggerToast(msg);
      return false;
    }

    const attachedDocs = [
      applyUploadDocs.CV,
      applyUploadDocs.KTP,
      applyUploadDocs['Surat Pendukung']
    ].filter(Boolean);

    const newAppId = 'app-' + Date.now();
    const appliedTime = nowTimeLabel();

    setApplications((prev) => [
      {
        id: newAppId,
        jobId: job.id,
        jobTitle: job.title,
        company: job.company,
        rate: job.rate,
        status: 'Pending',
        appliedAt: appliedTime,
        documents: attachedDocs
      },
      ...prev
    ]);

    setJobs((prev) =>
      prev.map((j) =>
        j.id === job.id
          ? { ...j, applicantsCount: j.applicantsCount + 1 }
          : j
      )
    );

    const expScore = Math.min(100, 78 + workerProfile.experiences.length * 8);
    const distScore = workerProfile.city
      .toLowerCase()
      .includes(job.location.toLowerCase())
      ? 94
      : 84;
    const docScore = attachedDocs.length >= 3 ? 100 : 95;

    setCandidates((prev) => [
      {
        id: 'cand-' + Date.now(),
        applicationId: newAppId,
        jobId: job.id,
        name: workerProfile.fullName,
        email: loginEmail || registerEmail || 'pekerja@harian.id',
        phone: workerProfile.phone,
        city: workerProfile.city,
        roleTarget: job.title,
        exp: expScore,
        avail: 92,
        dist: distScore,
        doc: docScore,
        status: 'Pending',
        appliedAt: appliedTime,
        notes: workerProfile.bio || 'Melamar melalui Portal Pekerja Harian.',
        documents: attachedDocs
      },
      ...prev
    ]);

    setApplyUploadDocs({ CV: null, KTP: null, 'Surat Pendukung': null });
    setApplyUploadError('');
    triggerToast(
      `Berkas berhasil diunggah & lamaran ke ${job.title} tersimpan untuk diperiksa HRD!`
    );
    return true;
  };

  const handleCancelApplication = (appId) => {
    setApplications((prev) =>
      prev.map((a) =>
        a.id === appId && a.status === 'Pending'
          ? { ...a, status: 'Dibatalkan' }
          : a
      )
    );
    setCandidates((prev) =>
      prev.filter((c) => !(c.applicationId === appId && c.status === 'Pending'))
    );
    triggerToast('Lamaran berstatus Pending berhasil dibatalkan.');
  };

  const handleCandidateDecision = (candId, decision) => {
    const target = candidates.find((c) => c.id === candId);
    setCandidates((prev) =>
      prev.map((c) => (c.id === candId ? { ...c, status: decision } : c))
    );
    if (target) {
      setApplications((prev) =>
        prev.map((a) => {
          if (target.applicationId && a.id === target.applicationId) {
            return { ...a, status: decision };
          }
          if (
            target.name === workerProfile.fullName &&
            (a.jobId === target.jobId || a.jobTitle === target.roleTarget)
          ) {
            return { ...a, status: decision };
          }
          return a;
        })
      );
    }
    triggerToast(
      `Status kandidat diperbarui menjadi "${decision}" secara real-time.`
    );
  };

  const handleReleaseEscrowH2 = (jobId) => {
    const targetJob = jobs.find((j) => j.id === jobId);
    setJobs((prev) =>
      prev.map((j) =>
        j.id === jobId
          ? { ...j, escrowStage: 'PAID_H2', status: 'COMPLETED' }
          : j
      )
    );
    setApplications((prev) =>
      prev.map((a) =>
        a.jobId === jobId ? { ...a, status: 'Gaji Cair H+2' } : a
      )
    );
    if (targetJob) {
      recordTransaction(
        'PAYOUT_H2',
        `Pencairan Gaji H+2: ${targetJob.title} (${targetJob.quota} Kuota)`,
        'Auto-Disbursement Escrow HarianPay',
        targetJob.escrowHeld,
        'Telah Dicairkan'
      );
    }
    triggerToast(
      'Pekerjaan ditandai selesai! Dana Escrow otomatis dicairkan ke rekening pekerja (H+2).'
    );
  };

  // US-17: Open Payment Processor Modal
  const openPaymentGatewayModal = (
    purpose = 'TOPUP',
    amount = 2500000,
    pendingJobPayload = null
  ) => {
    setPaymentModalError('');
    setPaymentModal({
      purpose,
      amount: Number(amount || 2500000),
      method: hrdProfile.paymentMethod || 'Virtual Account BCA (Escrow HarianPay)',
      invoiceId:
        'INV-HPY-2026-' + String(Math.floor(1000 + Math.random() * 9000)),
      vaNumber: '88019 ' + String(Math.floor(1000000000 + Math.random() * 8999999999)),
      pendingJobPayload
    });
  };

  const handleProcessGatewayPayment = (e) => {
    e.preventDefault();
    if (!paymentModal) return;
    const payAmount = Number(paymentModal.amount || 0);
    if (payAmount < 50000) {
      setPaymentModalError('Nominal pembayaran minimum adalah Rp 50.000.');
      return;
    }

    if (paymentModal.purpose === 'JOB_ESCROW' && paymentModal.pendingJobPayload) {
      const jobPayload = paymentModal.pendingJobPayload;
      recordTransaction(
        'TOP_UP',
        `Pembayaran Gateway (${paymentModal.invoiceId}) untuk Escrow Lowongan`,
        paymentModal.method,
        payAmount,
        'Berhasil'
      );
      const escrowNeeded = Number(jobPayload.rate) * Number(jobPayload.quota);
      const nextBalance = hrdWalletBalance + payAmount - escrowNeeded;
      const created = {
        ...jobPayload,
        id: 'job-' + Date.now(),
        escrowHeld: escrowNeeded,
        escrowStage: 'HELD',
        status: 'OPEN'
      };
      setHrdWalletBalance(Math.max(0, nextBalance));
      setJobs((prev) => [created, ...prev]);
      recordTransaction(
        'ESCROW_LOCK',
        `Penguncian Dana Escrow: ${created.title} (${created.quota} Kuota)`,
        paymentModal.method,
        escrowNeeded,
        'Terkunci di Escrow'
      );
      setPaymentModal(null);
      setShowCreateJobModal(false);
      triggerToast(
        `Pembayaran lunas & lowongan "${created.title}" resmi tayang di pencarian pelamar!`
      );
      return;
    }

    setHrdWalletBalance((prev) => prev + payAmount);
    recordTransaction(
      'TOP_UP',
      `Top-Up Saldo Escrow Korporat (${paymentModal.invoiceId})`,
      paymentModal.method,
      payAmount,
      'Berhasil'
    );
    setPaymentModal(null);
    triggerToast(
      `Pembayaran ${formatRupiah(payAmount)} melalui ${paymentModal.method} berhasil dikonfirmasi!`
    );
  };

  const handleCreateJobSubmit = (e) => {
    e.preventDefault();
    if (
      !newJobForm.title?.trim() ||
      !newJobForm.location?.trim() ||
      !newJobForm.workTime?.trim() ||
      !newJobForm.description?.trim()
    ) {
      setCreateJobError('Kolom wajib isi tidak boleh kosong.');
      return;
    }
    const rateNum = Number(newJobForm.rate || 0);
    const quotaNum = Number(newJobForm.quota || 0);
    if (rateNum < 100000) {
      setCreateJobError(
        'Upah harian minimum adalah Rp 100.000 sesuai standar kelayakan Harian.'
      );
      return;
    }
    if (quotaNum < 1) {
      setCreateJobError('Kuota pekerja minimal adalah 1 orang.');
      return;
    }
    const escrowNeeded = rateNum * quotaNum;
    const draftJobPayload = {
      title: newJobForm.title.trim(),
      company: hrdProfile.companyName || 'PT Karya Maju',
      location: newJobForm.location.trim(),
      rate: rateNum,
      workTime: newJobForm.workTime.trim(),
      scheduleType: newJobForm.scheduleType || 'Morning Shift',
      category: newJobForm.category || 'Logistics & Warehouse',
      quota: quotaNum,
      applicantsCount: 0,
      integrityScore: '4.9 / 5.0 (Verified Partner)',
      matchScore: 96,
      picName: newJobForm.picName?.trim() || hrdProfile.picContact,
      picPhone: newJobForm.picPhone?.trim() || '+62 811-2233-4455',
      dresscode:
        newJobForm.dresscode?.trim() || 'Pakaian rapi dan sepatu tertutup.',
      description: newJobForm.description.trim()
    };

    if (escrowNeeded > hrdWalletBalance) {
      const shortfall = escrowNeeded - hrdWalletBalance;
      setCreateJobError(
        `Saldo HarianPay kurang ${formatRupiah(
          shortfall
        )}. Silakan proses pembayaran kekurangan melalui Pemroses Pembayaran HarianPay.`
      );
      openPaymentGatewayModal('JOB_ESCROW', shortfall, draftJobPayload);
      return;
    }

    const created = {
      ...draftJobPayload,
      id: 'job-' + Date.now(),
      escrowHeld: escrowNeeded,
      escrowStage: 'HELD',
      status: 'OPEN'
    };
    setJobs((prev) => [created, ...prev]);
    setHrdWalletBalance((prev) => prev - escrowNeeded);
    recordTransaction(
      'ESCROW_LOCK',
      `Penguncian Dana Escrow: ${created.title} (${created.quota} Kuota)`,
      'Saldo HarianPay Korporat',
      escrowNeeded,
      'Terkunci di Escrow'
    );
    setShowCreateJobModal(false);
    triggerToast(
      `Lowongan "${created.title}" berhasil tayang & dana Escrow ${formatRupiah(
        escrowNeeded
      )} dikunci!`
    );
  };

  // US-08: Edit, Close/Reopen, and Delete Job Handlers
  const handleOpenEditJob = (job) => {
    setEditJobError('');
    setEditingJobModal({ ...job });
  };

  const handleEditJobSubmit = (e) => {
    e.preventDefault();
    if (!editingJobModal) return;
    if (
      !editingJobModal.title?.trim() ||
      !editingJobModal.location?.trim() ||
      !editingJobModal.workTime?.trim() ||
      !editingJobModal.description?.trim()
    ) {
      setEditJobError('Kolom wajib isi tidak boleh kosong.');
      return;
    }
    const rateNum = Number(editingJobModal.rate || 0);
    const quotaNum = Number(editingJobModal.quota || 0);
    if (rateNum < 100000) {
      setEditJobError(
        'Upah harian minimum adalah Rp 100.000 sesuai standar kelayakan Harian.'
      );
      return;
    }
    if (quotaNum < 1) {
      setEditJobError('Kuota pekerja minimal adalah 1 orang.');
      return;
    }

    const originalJob = jobs.find((j) => j.id === editingJobModal.id);
    if (!originalJob) return;

    let nextWallet = hrdWalletBalance;
    let nextEscrowHeld = originalJob.escrowHeld;
    let nextEscrowStage = originalJob.escrowStage;
    const nextStatus = editingJobModal.status || originalJob.status || 'OPEN';

    if (originalJob.escrowStage !== 'PAID_H2') {
      if (nextStatus === 'CLOSED') {
        if (originalJob.escrowStage === 'HELD' && originalJob.escrowHeld > 0) {
          nextWallet += originalJob.escrowHeld;
          recordTransaction(
            'ESCROW_REFUND',
            `Pengembalian Dana Escrow (Lowongan Ditutup): ${editingJobModal.title.trim()}`,
            'Saldo HarianPay Korporat',
            originalJob.escrowHeld,
            'Dikembalikan'
          );
        }
        nextEscrowHeld = 0;
        nextEscrowStage = 'REFUNDED_CLOSED';
      } else {
        const requiredEscrow = rateNum * quotaNum;
        const currentlyHeld =
          originalJob.escrowStage === 'HELD' ? originalJob.escrowHeld : 0;
        const diff = requiredEscrow - currentlyHeld;
        if (diff > nextWallet) {
          setEditJobError(
            `Saldo HarianPay tidak cukup untuk penambahan Escrow sebesar ${formatRupiah(
              diff
            )}. Silakan Top-Up terlebih dahulu.`
          );
          return;
        }
        nextWallet -= diff;
        nextEscrowHeld = requiredEscrow;
        nextEscrowStage = 'HELD';
        if (diff > 0) {
          recordTransaction(
            'ESCROW_LOCK',
            `Penyesuaian Tambahan Escrow: ${editingJobModal.title.trim()}`,
            'Saldo HarianPay Korporat',
            diff,
            'Terkunci di Escrow'
          );
        } else if (diff < 0) {
          recordTransaction(
            'ESCROW_REFUND',
            `Pengembalian Selisih Escrow: ${editingJobModal.title.trim()}`,
            'Saldo HarianPay Korporat',
            Math.abs(diff),
            'Dikembalikan'
          );
        }
      }
    }

    const updatedJob = {
      ...originalJob,
      ...editingJobModal,
      title: editingJobModal.title.trim(),
      location: editingJobModal.location.trim(),
      workTime: editingJobModal.workTime.trim(),
      description: editingJobModal.description.trim(),
      rate: rateNum,
      quota: quotaNum,
      status: nextStatus,
      escrowHeld: nextEscrowHeld,
      escrowStage: nextEscrowStage
    };

    setHrdWalletBalance(nextWallet);
    setJobs((prev) =>
      prev.map((j) => (j.id === updatedJob.id ? updatedJob : j))
    );
    setApplications((prev) =>
      prev.map((a) =>
        a.jobId === updatedJob.id
          ? { ...a, jobTitle: updatedJob.title, rate: updatedJob.rate }
          : a
      )
    );
    setCandidates((prev) =>
      prev.map((c) =>
        c.jobId === updatedJob.id || c.roleTarget === originalJob.title
          ? { ...c, roleTarget: updatedJob.title }
          : c
      )
    );
    if (nextStatus === 'CLOSED' && jobDetailModalId === updatedJob.id) {
      setJobDetailModalId(null);
    }
    setEditingJobModal(null);
    triggerToast(
      nextStatus === 'CLOSED'
        ? `Lowongan "${updatedJob.title}" ditutup dan tidak lagi muncul di pencarian aktif pelamar.`
        : `Detail lowongan "${updatedJob.title}" berhasil diperbarui di database.`
    );
  };

  const handleConfirmJobStatusOrDelete = () => {
    if (!confirmJobActionModal?.job) return;
    const { mode, job } = confirmJobActionModal;

    if (mode === 'close') {
      if (job.escrowStage === 'HELD' && job.escrowHeld > 0) {
        setHrdWalletBalance((prev) => prev + job.escrowHeld);
        recordTransaction(
          'ESCROW_REFUND',
          `Pengembalian Dana Escrow (Lowongan Ditutup): ${job.title}`,
          'Saldo HarianPay Korporat',
          job.escrowHeld,
          'Dikembalikan'
        );
      }
      setJobs((prev) =>
        prev.map((j) =>
          j.id === job.id
            ? {
                ...j,
                status: 'CLOSED',
                escrowHeld:
                  j.escrowStage === 'PAID_H2' ? j.escrowHeld : 0,
                escrowStage:
                  j.escrowStage === 'PAID_H2' ? 'PAID_H2' : 'REFUNDED_CLOSED'
              }
            : j
        )
      );
      if (jobDetailModalId === job.id) setJobDetailModalId(null);
      setConfirmJobActionModal(null);
      triggerToast(
        `Lowongan "${job.title}" berhasil ditutup dan dihapus dari pencarian aktif pelamar.`
      );
      return;
    }

    if (mode === 'reopen') {
      const escrowRequired = Number(job.rate) * Number(job.quota);
      if (escrowRequired > hrdWalletBalance) {
        setConfirmJobActionModal(null);
        openPaymentGatewayModal(
          'TOPUP',
          escrowRequired - hrdWalletBalance
        );
        triggerToast(
          'Saldo HarianPay belum mencukupi untuk mengunci ulang dana Escrow lowongan.'
        );
        return;
      }
      setHrdWalletBalance((prev) => prev - escrowRequired);
      setJobs((prev) =>
        prev.map((j) =>
          j.id === job.id
            ? {
                ...j,
                status: 'OPEN',
                escrowHeld: escrowRequired,
                escrowStage: 'HELD'
              }
            : j
        )
      );
      recordTransaction(
        'ESCROW_LOCK',
        `Penguncian Ulang Dana Escrow: ${job.title}`,
        'Saldo HarianPay Korporat',
        escrowRequired,
        'Terkunci di Escrow'
      );
      setConfirmJobActionModal(null);
      triggerToast(
        `Lowongan "${job.title}" kembali aktif di pencarian pelamar.`
      );
      return;
    }

    if (mode === 'delete') {
      if (job.escrowStage === 'HELD' && job.escrowHeld > 0) {
        setHrdWalletBalance((prev) => prev + job.escrowHeld);
        recordTransaction(
          'ESCROW_REFUND',
          `Pengembalian Dana Escrow (Lowongan Dihapus): ${job.title}`,
          'Saldo HarianPay Korporat',
          job.escrowHeld,
          'Dikembalikan'
        );
      }
      setJobs((prev) => prev.filter((j) => j.id !== job.id));
      if (jobDetailModalId === job.id) setJobDetailModalId(null);
      setConfirmJobActionModal(null);
      triggerToast(
        `Lowongan "${job.title}" berhasil dihapus dari database dan tidak lagi muncul di pencarian pelamar.`
      );
    }
  };

  // US-12: Applicant CRUD ("Kelola Pelamar") & Document Handlers
  const handleOpenCreateApplicant = () => {
    const defaultJob = jobs.find((j) => j.status !== 'CLOSED') || jobs[0];
    setApplicantFormError('');
    setApplicantCrudModal({
      mode: 'create',
      data: {
        id: '',
        applicationId: null,
        jobId: defaultJob?.id || 'job-1',
        name: '',
        email: '',
        phone: '',
        city: '',
        roleTarget: defaultJob?.title || 'Warehouse Packer (Night Shift)',
        exp: 85,
        avail: 88,
        dist: 85,
        doc: 90,
        status: 'Pending',
        notes: '',
        documents: []
      }
    });
  };

  const handleOpenEditApplicant = (cand) => {
    setApplicantFormError('');
    setApplicantCrudModal({
      mode: 'edit',
      data: {
        ...cand,
        documents: Array.isArray(cand.documents) ? [...cand.documents] : []
      }
    });
  };

  const handleApplicantModalFileUpload = async (docType, event) => {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file || !applicantCrudModal) return;
    const res = await validateAndReadUploadFile(file, docType);
    if (!res.ok) {
      setApplicantFormError(res.error);
      triggerToast(res.error);
      return;
    }
    setApplicantFormError('');
    setApplicantCrudModal((prev) => {
      if (!prev) return prev;
      const filtered = (prev.data.documents || []).filter(
        (d) => d.docType !== docType
      );
      const nextDocs = [...filtered, res.doc];
      return {
        ...prev,
        data: {
          ...prev.data,
          doc: Math.min(100, 80 + nextDocs.length * 7),
          documents: nextDocs
        }
      };
    });
    triggerToast(`Berkas ${docType} (${res.doc.fileName}) berhasil dilampirkan.`);
  };

  const handleRemoveApplicantModalDoc = (docId) => {
    setApplicantCrudModal((prev) => {
      if (!prev) return prev;
      const nextDocs = (prev.data.documents || []).filter((d) => d.id !== docId);
      return {
        ...prev,
        data: {
          ...prev.data,
          documents: nextDocs
        }
      };
    });
  };

  const handleSaveApplicantCrud = (e) => {
    e.preventDefault();
    if (!applicantCrudModal) return;
    const d = applicantCrudModal.data;
    if (!d.name?.trim() || !d.phone?.trim() || !d.city?.trim() || !d.roleTarget?.trim()) {
      setApplicantFormError(
        'Nama lengkap, nomor kontak, domisili, dan posisi lamaran wajib diisi.'
      );
      return;
    }

    const matchedJob = jobs.find(
      (j) => j.id === d.jobId || j.title === d.roleTarget
    );
    const cleanedCandidate = {
      ...d,
      id: applicantCrudModal.mode === 'create' ? 'cand-' + Date.now() : d.id,
      jobId: matchedJob?.id || d.jobId || 'job-1',
      roleTarget: matchedJob?.title || d.roleTarget.trim(),
      name: d.name.trim(),
      email: d.email?.trim() || 'kandidat@harian.id',
      phone: d.phone.trim(),
      city: d.city.trim(),
      exp: Math.min(100, Math.max(0, Number(d.exp || 80))),
      avail: Math.min(100, Math.max(0, Number(d.avail || 80))),
      dist: Math.min(100, Math.max(0, Number(d.dist || 80))),
      doc: Math.min(100, Math.max(0, Number(d.doc || 85))),
      appliedAt: d.appliedAt || nowTimeLabel(),
      notes: d.notes?.trim() || '',
      documents: Array.isArray(d.documents) ? d.documents : []
    };

    if (applicantCrudModal.mode === 'create') {
      setCandidates((prev) => [cleanedCandidate, ...prev]);
      if (matchedJob) {
        setJobs((prev) =>
          prev.map((j) =>
            j.id === matchedJob.id
              ? { ...j, applicantsCount: j.applicantsCount + 1 }
              : j
          )
        );
      }
      setApplicantCrudModal(null);
      triggerToast(
        `Data pelamar "${cleanedCandidate.name}" berhasil ditambahkan ke database.`
      );
    } else {
      setCandidates((prev) =>
        prev.map((c) => (c.id === cleanedCandidate.id ? cleanedCandidate : c))
      );
      setApplications((prev) =>
        prev.map((a) => {
          if (
            (cleanedCandidate.applicationId &&
              a.id === cleanedCandidate.applicationId) ||
            (cleanedCandidate.name === workerProfile.fullName &&
              a.jobTitle === cleanedCandidate.roleTarget)
          ) {
            return {
              ...a,
              status: cleanedCandidate.status,
              documents:
                cleanedCandidate.documents.length > 0
                  ? cleanedCandidate.documents
                  : a.documents
            };
          }
          return a;
        })
      );
      setApplicantCrudModal(null);
      triggerToast(
        `Perubahan data pelamar "${cleanedCandidate.name}" berhasil disimpan di database.`
      );
    }
  };

  const handleConfirmDeleteApplicantNow = () => {
    if (!confirmDeleteApplicant) return;
    const target = confirmDeleteApplicant;
    setCandidates((prev) => prev.filter((c) => c.id !== target.id));
    setConfirmDeleteApplicant(null);
    if (applicantDetailModal?.id === target.id) {
      setApplicantDetailModal(null);
    }
    triggerToast(
      `Data pelamar "${target.name}" berhasil dihapus secara konsisten dari database.`
    );
  };

  const resolveDocDataUrl = (doc) => {
    if (!doc) return null;
    return doc.dataUrl || RUNTIME_LARGE_FILE_CACHE.get(doc.id) || null;
  };

  const handleDownloadDocumentFile = (doc, ownerName = 'Kandidat Harian') => {
    if (!doc) return;
    const rawDataUrl = resolveDocDataUrl(doc);
    if (rawDataUrl) {
      const a = document.createElement('a');
      a.href = rawDataUrl;
      a.download = doc.fileName || 'Berkas_Lamaran_Harian.pdf';
      a.click();
      triggerToast(`Berkas "${doc.fileName}" berhasil diunduh.`);
      return;
    }
    const htmlContent = buildGeneratedDocumentHtml(doc, ownerName);
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    const baseName = (doc.fileName || 'Berkas_Persyaratan').replace(/\.[^.]+$/, '');
    a.download = `${baseName}_Verified.html`;
    a.click();
    URL.revokeObjectURL(url);
    triggerToast(`Salinan berkas terverifikasi "${doc.fileName}" berhasil diunduh.`);
  };

  const handleDownloadCsv = () => {
    const headers = [
      'Rank,Nama Kandidat,Kontak,Domisili,Posisi,Jumlah Berkas,Skor MFEP,Status\n'
    ];
    const rows = rankedCandidates.map(
      (c, i) =>
        `${i + 1},"${c.name}","${c.phone || '-'}","${c.city || '-'}","${
          c.roleTarget
        }",${(c.documents || []).length},${c.mfepScore},${c.status}`
    );
    const blob = new Blob([headers.concat(rows.join('\n'))], {
      type: 'text/csv;charset=utf-8;'
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Laporan_Rekrutmen_MFEP_Harian.csv';
    a.click();
    URL.revokeObjectURL(url);
    triggerToast('Laporan Rekrutmen (CSV) berhasil diunduh.');
  };

  const handleDownloadTermsPdfFile = () => {
    const content = [
      'DOKUMEN RESMI SYARAT DAN KETENTUAN PLATFORM HARIAN (2026)',
      '==========================================================',
      'PASAL 1 - DEFINISI PLATFORM: Ekosistem kerja harian berbasis web.',
      'PASAL 2 - JAMINAN ESCROW H+2: Dana upah dikunci 100% di awal oleh instansi dan cair maksimal H+2.',
      'PASAL 3 - SERVICE CHARGE 10%: Potongan biaya layanan platform 10%, pekerja menerima bersih 90%.',
      'PASAL 4 - SELEKSI MFEP: Evaluasi kandidat menggunakan Multi-Factor Evaluation Process.',
      'PASAL 5 - PEMBATALAN: Lamaran berstatus Pending dapat dibatalkan kapan saja.'
    ].join('\n\n');
    const blob = new Blob([content], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Syarat_dan_Ketentuan_Harian_2026.pdf';
    a.click();
    URL.revokeObjectURL(url);
    triggerToast('File Syarat_dan_Ketentuan_Harian_2026.pdf berhasil diunduh.');
  };

  // ============================================================================
  // 8. STICKY MATTE FROSTED NAVBAR (PORTAL & PROFIL MUNCUL SETELAH LOGIN)
  // ============================================================================
  const renderStickyNavbar = () => (
    <header
      className={`sticky-glass-nav initial-nav-drop fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 ${
        isNavScrolled ? 'py-2.5' : 'py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => switchView('landing')}
          className="flex items-center gap-2 focus:outline-none"
        >
          <HarianLogo size="sm" />
        </button>

        <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm">
          <button
            type="button"
            onClick={() => switchView('landing')}
            className={`nav-link-animated ${
              activeView === 'landing' ? 'active' : ''
            }`}
          >
            Get Started
          </button>
          <button
            type="button"
            onClick={() => scrollToLandingSection('caraAksesSection')}
            className="nav-link-animated"
          >
            Cara Akses
          </button>
          <button
            type="button"
            onClick={() => scrollToLandingSection('kenapaHarianSection')}
            className="nav-link-animated"
          >
            Kenapa Harian?
          </button>

          {authenticatedRole === 'worker' && (
            <>
              <button
                type="button"
                onClick={() => switchView('worker')}
                className={`nav-link-animated font-semibold ${
                  activeView === 'worker' ? 'active' : ''
                }`}
              >
                Portal Pekerja
              </button>
              <button
                type="button"
                onClick={() => openProfileEditor('worker')}
                className={`nav-link-animated font-semibold ${
                  activeView === 'profile' ? 'active' : ''
                }`}
              >
                Profil Saya
              </button>
            </>
          )}

          {authenticatedRole === 'hrd' && (
            <>
              <button
                type="button"
                onClick={() => switchView('hrd')}
                className={`nav-link-animated font-semibold ${
                  activeView === 'hrd' ? 'active' : ''
                }`}
              >
                Portal Instansi
              </button>
              <button
                type="button"
                onClick={() => openProfileEditor('hrd')}
                className={`nav-link-animated font-semibold ${
                  activeView === 'profile' ? 'active' : ''
                }`}
              >
                Profil Instansi
              </button>
            </>
          )}
        </nav>

        <div className="flex items-center gap-2">
          {authenticatedRole ? (
            <>
              <button
                type="button"
                onClick={() => openProfileEditor(authenticatedRole)}
                className="btn-pill-secondary px-3.5 py-2 text-xs sm:text-sm inline-flex items-center gap-1.5"
              >
                <User className="w-3.5 h-3.5 text-accent-primary" />
                <span className="hidden sm:inline">Edit Profil</span>
              </button>
              <button
                type="button"
                onClick={() =>
                  switchView(authenticatedRole === 'hrd' ? 'hrd' : 'worker')
                }
                className="btn-pill-secondary px-3.5 py-2 text-xs sm:text-sm"
              >
                {authenticatedRole === 'hrd'
                  ? 'Dasbor Instansi'
                  : 'Portal Pekerja'}
              </button>
              <button
                type="button"
                onClick={() => {
                  setAuthenticatedRole(null);
                  switchView('landing');
                  triggerToast('Anda telah keluar dari sesi akun.');
                }}
                className="btn-pill-primary px-4 py-2 text-xs sm:text-sm"
              >
                Keluar
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={() => switchView('login')}
                className="btn-pill-secondary px-4 py-2 text-xs sm:text-sm"
              >
                Masuk
              </button>
              <button
                type="button"
                onClick={() => openRoleRegister('worker')}
                className="btn-pill-primary px-4 sm:px-5 py-2 text-xs sm:text-sm inline-flex items-center gap-1.5"
              >
                <span>Daftar</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );

  // ============================================================================
  // 9A. RENDER VIEW 1: GET STARTED LANDING VIEW (DESAIN LAMA DIPERTAHANKAN + KOTAK FROSTED & TRANSISI SCROLL ATAS/BAWAH)
  // ============================================================================
  const renderLandingView = () => {
    const activeSteps =
      CARA_KERJA_STEPS[caraKerjaTab] || CARA_KERJA_STEPS.worker;

    return (
      <main ref={landingRootRef} className="pt-20 pb-20 overflow-x-clip view-transition-enter">
        {/* 1. HERO SECTION (DESAIN LAMA DIPERTAHANKAN + KOTAK FROSTED KONTRAS JELAS) */}
        <section
          ref={heroSectionRef}
          className="hero-pastel-sky relative pt-10 sm:pt-14 pb-20 px-4 sm:px-8 overflow-hidden"
        >
          {/* Ambient Under-Card Glows so Frosted Glass Boxes Refract Real Depth */}
          <div
            ref={cloudLayerSlowRef}
            className="pointer-events-none absolute top-16 left-[12%] w-80 h-80 rounded-full opacity-80"
            style={{
              background:
                'radial-gradient(circle, rgba(29, 111, 232, 0.34) 0%, rgba(29, 111, 232, 0) 70%)',
              filter: 'blur(24px)'
            }}
          />
          <div
            ref={cloudLayerFastRef}
            className="pointer-events-none absolute top-24 right-[10%] w-96 h-96 rounded-full opacity-85"
            style={{
              background:
                'radial-gradient(circle, rgba(96, 165, 250, 0.32) 0%, rgba(255, 241, 218, 0.65) 50%, rgba(255, 255, 255, 0) 72%)',
              filter: 'blur(26px)'
            }}
          />

          <div className="max-w-5xl mx-auto relative z-10 text-center">
            <div ref={heroHeadlineRef} className="hero-scroll-layer max-w-3xl mx-auto mb-12">
              <div
                style={{ '--enter-delay': '0.38s' }}
                className="initial-hero-item"
              >
                <span
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-5 border"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.85)',
                    borderColor: 'rgba(255, 255, 255, 0.96)',
                    color: 'var(--primary)'
                  }}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Platform Kerja Harian &amp; Escrow Payment Gateway</span>
                </span>
              </div>

              <h1
                style={{ color: '#0B1528', '--enter-delay': '0.48s' }}
                className="initial-hero-item heading-tight text-4xl sm:text-6xl leading-[1.08] mb-4"
              >
                Butuh cuan hari ini?{' '}
                <span className="text-accent-primary">Cari di Harian.</span>
              </h1>

              <p
                style={{ color: '#2B3B55', '--enter-delay': '0.58s' }}
                className="initial-hero-item text-sm sm:text-lg max-w-xl mx-auto leading-relaxed font-medium"
              >
                Banyak kerjaan harian, satu klik lamar. Gaji jelas, cair maksimal H+2.
              </p>
            </div>

            {/* 2 Kotak Utama (Desain Lama Dipertahankan, Material Kotak Diubah ke Frosted Glass) */}
            <div
              ref={heroMockupRef}
              className="hero-scroll-layer grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto"
            >
              {/* Kotak 1: Cari Kerja */}
              <div
                style={{ '--card-enter-delay': '0.68s' }}
                className="initial-role-card-enter harian-role-frosted-card p-7 sm:p-9 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white/95 border border-white flex items-center justify-center text-[#1D6FE8] mb-5 shadow-md">
                    <User className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold tracking-wider uppercase text-[#1555B8]">
                    UNTUK PENCARI KERJA HARIAN
                  </span>
                  <h2
                    className="heading-tight text-2xl sm:text-3xl mt-1 mb-2"
                    style={{ color: '#0B1528' }}
                  >
                    Cari Kerja
                  </h2>
                  <p
                    className="text-xs sm:text-sm leading-relaxed mb-6 font-medium"
                    style={{ color: '#2B3B55' }}
                  >
                    Temukan kerjaan harian sesuai lokasi dan jam kosong kamu, langsung lamar, dan pantau statusnya secara real-time.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => openRoleRegister('worker')}
                  className="btn-pill-primary w-full py-3.5 px-6 text-sm inline-flex items-center justify-center gap-2"
                >
                  <span>Mulai sebagai Pekerja</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Kotak 2: Cari Pekerja */}
              <div
                style={{ '--card-enter-delay': '0.80s' }}
                className="initial-role-card-enter harian-role-frosted-card p-7 sm:p-9 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white/95 border border-white flex items-center justify-center text-[#0F1B33] mb-5 shadow-md">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold tracking-wider uppercase text-[#1555B8]">
                    UNTUK PERUSAHAAN / INSTANSI
                  </span>
                  <h2
                    className="heading-tight text-2xl sm:text-3xl mt-1 mb-2"
                    style={{ color: '#0B1528' }}
                  >
                    Cari Pekerja
                  </h2>
                  <p
                    className="text-xs sm:text-sm leading-relaxed mb-6 font-medium"
                    style={{ color: '#2B3B55' }}
                  >
                    Dapatkan tenaga kerja harian terverifikasi dengan seleksi otomatis metode MFEP tanpa ribet bolak-balik chat.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => openRoleRegister('hrd')}
                  className="btn-pill-navy w-full py-3.5 px-6 text-sm inline-flex items-center justify-center gap-2"
                >
                  <span>Mulai sebagai Instansi</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 2. CARA AKSES (CREATEUI 7-SECOND INFINITE LOOP STEPPER) */}
        <section
          id="caraAksesSection"
          className="scroll-reveal-section section-blend-soft py-16 sm:py-24 px-4 sm:px-8"
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-5">
              <span
                className="inline-block text-xs font-semibold px-3.5 py-1 rounded-full"
                style={{
                  backgroundColor: 'var(--primary-light)',
                  color: 'var(--primary)'
                }}
              >
                Cara Akses Ekosistem Harian
              </span>
              <h2 className="heading-tight text-3xl sm:text-4xl leading-tight">
                Alur akses cepat dari{' '}
                <span className="text-accent-primary">daftar</span> sampai{' '}
                <span className="text-accent-primary">gaji cair H+2</span>.
              </h2>
              <p className="text-sm sm:text-base leading-relaxed">
                Pilih tab peran di bawah untuk melihat tahapan otomatis mulai dari pengisian biodata hingga pencairan dana Escrow.
              </p>

              <div className="inline-flex p-1.5 rounded-2xl bg-white/60 border border-white backdrop-blur-md">
                <button
                  type="button"
                  onClick={() => {
                    setCaraKerjaTab('worker');
                    setActiveAccessStep(0);
                  }}
                  className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition ${
                    caraKerjaTab === 'worker'
                      ? 'bg-[#1D6FE8] text-white shadow-sm'
                      : 'text-[#526382]'
                  }`}
                >
                  Alur Pekerja
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setCaraKerjaTab('hrd');
                    setActiveAccessStep(0);
                  }}
                  className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition ${
                    caraKerjaTab === 'hrd'
                      ? 'bg-[#1D6FE8] text-white shadow-sm'
                      : 'text-[#526382]'
                  }`}
                >
                  Alur Instansi
                </button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="createui-stepper-card p-6 sm:p-9 pointer-events-none select-none">
                <div className="space-y-1">
                  {activeSteps.map((item, idx) => {
                    const isCompleted = idx < activeAccessStep;
                    const isActive = idx === activeAccessStep;
                    const isLast = idx === activeSteps.length - 1;

                    return (
                      <div key={item.step} className="flex items-stretch gap-4">
                        <div className="flex flex-col items-center">
                          <div
                            className={`createui-step-node shrink-0 ${
                              isCompleted
                                ? 'is-completed'
                                : isActive
                                ? 'is-active'
                                : 'is-upcoming'
                            }`}
                          >
                            {isCompleted ? (
                              <Check className="w-4 h-4 stroke-[2.6]" />
                            ) : (
                              <span className="text-[11px] font-mono-metric font-bold">
                                {item.step}
                              </span>
                            )}
                          </div>
                          {!isLast && (
                            <div className="createui-connector-track flex-1 my-1.5 min-h-[26px]">
                              <div
                                className="createui-connector-fill"
                                style={{
                                  height: isCompleted
                                    ? '100%'
                                    : isActive
                                    ? '55%'
                                    : '0%',
                                  backgroundColor: isCompleted
                                    ? '#16A34A'
                                    : 'var(--primary)'
                                }}
                              />
                            </div>
                          )}
                        </div>

                        <div className="pb-5 flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <h3
                              className="text-sm sm:text-base font-semibold transition-colors"
                              style={{
                                color:
                                  isCompleted || isActive
                                    ? 'var(--text)'
                                    : '#8A9AB8'
                              }}
                            >
                              {item.title}
                            </h3>
                            {item.badge && (
                              <span
                                className="text-[10px] font-mono-metric font-semibold px-2.5 py-0.5 rounded-full"
                                style={{
                                  backgroundColor: 'var(--primary-light)',
                                  color: 'var(--primary)'
                                }}
                              >
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p
                            className="text-xs sm:text-sm mt-1 leading-relaxed transition-opacity"
                            style={{
                              opacity: isCompleted || isActive ? 0.92 : 0.55
                            }}
                          >
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. KENAPA HARIAN? (4 POIN) */}
        <section
          id="kenapaHarianSection"
          className="scroll-reveal-section py-16 sm:py-24 px-4 sm:px-8"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span
                className="inline-block text-xs font-semibold px-3.5 py-1 rounded-full mb-3"
                style={{
                  backgroundColor: 'var(--primary-light)',
                  color: 'var(--primary)'
                }}
              >
                Kenapa Harian?
              </span>
              <h2 className="heading-tight text-3xl sm:text-4xl">
                Dirancang agar kerja harian lebih{' '}
                <span className="text-accent-primary">pasti &amp; transparan</span>.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {KENAPA_HARIAN_POINTS.map((pt, idx) => (
                <div
                  key={pt.id}
                  style={{ '--stagger-delay': `${idx * 110}ms` }}
                  className="scroll-reveal-card harian-blog-card p-6 sm:p-8"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="w-10 h-10 rounded-2xl flex items-center justify-center font-mono-metric font-bold text-xs"
                      style={{
                        backgroundColor: 'var(--primary-light)',
                        color: 'var(--primary)'
                      }}
                    >
                      0{idx + 1}
                    </span>
                    <ShieldCheck className="w-5 h-5 text-accent-primary" />
                  </div>
                  <h3 className="heading-tight text-lg sm:text-xl mb-2">
                    {pt.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed">{pt.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. CTA PENUTUP & FOOTER */}
        <section
          ref={footerSectionRef}
          className="scroll-reveal-section pt-8 pb-12 px-4 sm:px-8"
        >
          <div
            ref={footerPeekMockupRef}
            className="max-w-5xl mx-auto harian-surface-card p-8 sm:p-12 text-center"
          >
            <h2 className="heading-tight text-2xl sm:text-4xl mb-3">
              Siap kerja hari ini? Daftar sekarang, isi biodata &amp; sandi sekaligus.
            </h2>
            <p className="text-xs sm:text-base max-w-xl mx-auto mb-6">
              Transparan sejak awal dengan simulasi nota Service Charge 10% di dalam Syarat &amp; Ketentuan.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => openRoleRegister('worker')}
                className="btn-pill-primary px-8 py-3.5 text-sm"
              >
                Daftar Gratis
              </button>
              <button
                type="button"
                onClick={() => switchView('login')}
                className="btn-pill-secondary px-7 py-3.5 text-sm"
              >
                Sudah Punya Akun? Masuk
              </button>
            </div>

            <div className="mt-10 pt-6 border-t border-white/70 flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-2">
                <HarianLogo size="sm" />
                <span>&copy; 2026 Harian</span>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                {Object.keys(FOOTER_INFO_CONTENT).map((label) => (
                  <button
                    key={label}
                    type="button"
                    onClick={() => {
                      if (label === 'Syarat dan Ketentuan') {
                        setShowTermsServiceModal(true);
                      } else {
                        setFooterModalKey(label);
                      }
                    }}
                    className="hover:text-[#1D6FE8] font-medium transition"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  };

  // ============================================================================
  // 9B. RENDER VIEW: REGISTER DENGAN BIODATA LENGKAP + MODAL LINK S&K (SERVICE CHARGE 10%)
  // ============================================================================
  const renderRegisterView = () => {
    const grossWage = Number(sampleReceiptRate || 150000);
    const serviceFeeAmount = Math.round(grossWage * 0.1);
    const netReceivedAmount = grossWage - serviceFeeAmount;

    return (
      <section className="min-h-screen pt-24 pb-20 px-4 sm:px-8 flex items-center relative z-10 view-transition-enter">
        <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Side: Navos-Style Brand Showcase & Floating Frosted Bubbles */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="space-y-2.5 max-w-sm">
              <div className="navos-chat-bubble px-4 py-2.5 text-xs opacity-60 w-fit">
                &ldquo;Daftar akun langsung isi biodata lengkap?&rdquo;
              </div>
              <div className="navos-chat-bubble px-4 py-2.5 text-xs opacity-80 w-fit ml-4">
                &ldquo;Iya, sekali isi langsung siap lamar kerja &amp; terima gaji H+2.&rdquo;
              </div>
              <div className="navos-chat-bubble px-4 py-2.5 text-xs font-semibold w-fit ml-8 border-[#1D6FE8]/30">
                &ldquo;Cek rincian Service Charge 10% lewat link S&amp;K di bawah!&rdquo;
              </div>
            </div>

            <div className="pt-2">
              <div className="text-xs font-mono-metric tracking-[0.22em] uppercase text-[#526382] mb-2">
                THE FUTURE OF DAILY WORK
              </div>
              <div className="mb-3">
                <HarianLogo size="lg" />
              </div>
              <p className="text-sm sm:text-base leading-relaxed max-w-md">
                Lengkapi biodata dan kata sandi Anda dalam satu langkah. Rincian potongan layanan dan simulasi upah bersih tersedia transparan di halaman Syarat &amp; Ketentuan.
              </p>
            </div>
          </div>

          {/* Right Side: Matte Frosted White Glass Complete Biodata + Password Registration Card */}
          <div className="lg:col-span-7 harian-surface-card p-7 sm:p-10">
            <div className="mb-5">
              <h2 className="heading-tight text-2xl">Daftar Akun Harian</h2>
              <p className="text-xs sm:text-sm mt-1">
                Isi biodata lengkap dan buat kata sandi Anda untuk langsung mengakses ekosistem Harian.
              </p>
            </div>

            {/* Underline Tab Switcher Like Navos */}
            <div className="flex items-center gap-6 border-b border-[#DCE8FD] mb-6">
              <button
                type="button"
                onClick={() => {
                  setRegisterRole('worker');
                  setRegisterEmail('budi.santoso@gmail.com');
                  setAgreeServiceFee(false);
                }}
                className={`pb-3 text-sm font-semibold transition relative ${
                  registerRole === 'worker'
                    ? 'text-[#1D6FE8]'
                    : 'text-[#526382]'
                }`}
              >
                Daftar sebagai Pekerja
                {registerRole === 'worker' && (
                  <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#1D6FE8] rounded-full" />
                )}
              </button>
              <button
                type="button"
                onClick={() => {
                  setRegisterRole('hrd');
                  setRegisterEmail('rekrutmen@karyamaju.co.id');
                  setAgreeServiceFee(false);
                }}
                className={`pb-3 text-sm font-semibold transition relative ${
                  registerRole === 'hrd' ? 'text-[#1D6FE8]' : 'text-[#526382]'
                }`}
              >
                Daftar sebagai Instansi
                {registerRole === 'hrd' && (
                  <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#1D6FE8] rounded-full" />
                )}
              </button>
            </div>

            <form onSubmit={handleRegisterSubmit} className="space-y-4">
              {registerRole === 'worker' ? (
                <>
                  {/* Biodata Lengkap Pekerja Harian */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: 'var(--text)' }}
                      >
                        Nama Lengkap (Sesuai KTP) *
                      </label>
                      <input
                        type="text"
                        required
                        value={workerProfile.fullName}
                        onChange={(e) =>
                          setWorkerProfile({
                            ...workerProfile,
                            fullName: e.target.value
                          })
                        }
                        placeholder="Contoh: Budi Santoso"
                        className="frosted-input w-full px-4 py-2.5 rounded-xl text-sm focus:outline-none"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: 'var(--text)' }}
                      >
                        Nomor WhatsApp Aktif *
                      </label>
                      <input
                        type="text"
                        required
                        value={workerProfile.phone}
                        onChange={(e) =>
                          setWorkerProfile({
                            ...workerProfile,
                            phone: e.target.value
                          })
                        }
                        placeholder="+62 812-xxxx-xxxx"
                        className="frosted-input w-full px-4 py-2.5 rounded-xl text-sm focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: 'var(--text)' }}
                      >
                        Domisili Saat Ini *
                      </label>
                      <input
                        type="text"
                        required
                        value={workerProfile.city}
                        onChange={(e) =>
                          setWorkerProfile({
                            ...workerProfile,
                            city: e.target.value
                          })
                        }
                        placeholder="Contoh: Bekasi, Jawa Barat"
                        className="frosted-input w-full px-4 py-2.5 rounded-xl text-sm focus:outline-none"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: 'var(--text)' }}
                      >
                        Rekening Bank / E-Wallet (Pencairan H+2) *
                      </label>
                      <input
                        type="text"
                        required
                        value={workerProfile.bankAccount}
                        onChange={(e) =>
                          setWorkerProfile({
                            ...workerProfile,
                            bankAccount: e.target.value
                          })
                        }
                        placeholder="BCA - No. Rekening (Atas Nama)"
                        className="frosted-input w-full px-4 py-2.5 rounded-xl text-sm focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: 'var(--text)' }}
                      >
                        Pengalaman Kerja Terakhir
                      </label>
                      <input
                        type="text"
                        value={newExpRole}
                        onChange={(e) => setNewExpRole(e.target.value)}
                        placeholder="Contoh: Warehouse Helper / SPG"
                        className="frosted-input w-full px-4 py-2.5 rounded-xl text-sm focus:outline-none"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: 'var(--text)' }}
                      >
                        Kategori Kerja Favorit
                      </label>
                      <select
                        value={workerFavCategory}
                        onChange={(e) => setWorkerFavCategory(e.target.value)}
                        className="frosted-input w-full px-4 py-2.5 rounded-xl text-sm focus:outline-none"
                      >
                        <option value="Logistics & Warehouse">
                          Logistics &amp; Warehouse
                        </option>
                        <option value="Event Staff">Event Staff</option>
                        <option value="Hospitality">Hospitality</option>
                      </select>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Biodata Lengkap Instansi / Perusahaan */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: 'var(--text)' }}
                      >
                        Nama Perusahaan / Instansi *
                      </label>
                      <input
                        type="text"
                        required
                        value={hrdProfile.companyName}
                        onChange={(e) =>
                          setHrdProfile({
                            ...hrdProfile,
                            companyName: e.target.value
                          })
                        }
                        placeholder="Contoh: PT Karya Maju"
                        className="frosted-input w-full px-4 py-2.5 rounded-xl text-sm focus:outline-none"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: 'var(--text)' }}
                      >
                        Bidang Industri *
                      </label>
                      <input
                        type="text"
                        required
                        value={hrdProfile.industry}
                        onChange={(e) =>
                          setHrdProfile({
                            ...hrdProfile,
                            industry: e.target.value
                          })
                        }
                        placeholder="Contoh: Logistik / Event / Perhotelan"
                        className="frosted-input w-full px-4 py-2.5 rounded-xl text-sm focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: 'var(--text)' }}
                      >
                        Nama &amp; WhatsApp PIC HRD *
                      </label>
                      <input
                        type="text"
                        required
                        value={hrdProfile.picContact}
                        onChange={(e) =>
                          setHrdProfile({
                            ...hrdProfile,
                            picContact: e.target.value
                          })
                        }
                        placeholder="Nama PIC (+62 811-xxxx-xxxx)"
                        className="frosted-input w-full px-4 py-2.5 rounded-xl text-sm focus:outline-none"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: 'var(--text)' }}
                      >
                        Metode Pembayaran Escrow Default *
                      </label>
                      <select
                        value={hrdProfile.paymentMethod}
                        onChange={(e) =>
                          setHrdProfile({
                            ...hrdProfile,
                            paymentMethod: e.target.value
                          })
                        }
                        className="frosted-input w-full px-4 py-2.5 rounded-xl text-sm focus:outline-none"
                      >
                        <option value="Virtual Account BCA (Escrow HarianPay)">
                          Virtual Account BCA (Escrow HarianPay)
                        </option>
                        <option value="Virtual Account Mandiri (Escrow HarianPay)">
                          Virtual Account Mandiri (Escrow HarianPay)
                        </option>
                        <option value="QRIS Korporat Instan">
                          QRIS Korporat Instan
                        </option>
                      </select>
                    </div>
                  </div>
                </>
              )}

              {/* Email & Kata Sandi Sekaligus */}
              <div className="pt-2 border-t border-[#DCE8FD]/80 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label
                    className="block text-xs font-semibold mb-1.5"
                    style={{ color: 'var(--text)' }}
                  >
                    Email Aktif *
                  </label>
                  <input
                    type="email"
                    required
                    value={registerEmail}
                    onChange={(e) => setRegisterEmail(e.target.value)}
                    placeholder="nama@email.com"
                    className="frosted-input w-full px-4 py-2.5 rounded-xl text-sm focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    className="block text-xs font-semibold mb-1.5"
                    style={{ color: 'var(--text)' }}
                  >
                    Buat Kata Sandi *
                  </label>
                  <input
                    type="password"
                    required
                    value={registerPassword}
                    onChange={(e) => setRegisterPassword(e.target.value)}
                    placeholder="Min. 4 karakter"
                    className="frosted-input w-full px-4 py-2.5 rounded-xl text-sm focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    className="block text-xs font-semibold mb-1.5"
                    style={{ color: 'var(--text)' }}
                  >
                    Konfirmasi Sandi *
                  </label>
                  <input
                    type="password"
                    required
                    value={registerConfirmPassword}
                    onChange={(e) => setRegisterConfirmPassword(e.target.value)}
                    placeholder="Ulangi kata sandi"
                    className="frosted-input w-full px-4 py-2.5 rounded-xl text-sm focus:outline-none"
                  />
                </div>
              </div>

              {/* Kotak Persetujuan S&K dengan Link Klik untuk Rincian Service Charge 10% */}
              <div
                className="p-4 rounded-2xl border transition"
                style={{
                  background: 'rgba(255, 255, 255, 0.72)',
                  borderColor: agreeServiceFee
                    ? 'var(--primary)'
                    : 'var(--border)'
                }}
              >
                <div className="flex items-start gap-3">
                  <input
                    id="agreeTermsCheckbox"
                    type="checkbox"
                    checked={agreeServiceFee}
                    onChange={(e) => setAgreeServiceFee(e.target.checked)}
                    className="mt-0.5 w-4 h-4 accent-[#1D6FE8] rounded cursor-pointer"
                  />
                  <div className="text-xs leading-relaxed" style={{ color: 'var(--text)' }}>
                    <label htmlFor="agreeTermsCheckbox" className="cursor-pointer">
                      Saya menyatakan data biodata di atas benar dan menyetujui{' '}
                    </label>
                    <button
                      type="button"
                      onClick={() => setShowTermsServiceModal(true)}
                      className="font-bold text-accent-primary underline hover:opacity-80"
                    >
                      Syarat &amp; Ketentuan (S&amp;K) serta Ketentuan Service Charge 10%
                    </button>{' '}
                    <span>
                      (contoh simulasi: dari upah{' '}
                      <strong className="font-mono-metric">
                        {formatRupiah(grossWage)}
                      </strong>
                      , saldo bersih diterima{' '}
                      <strong className="font-mono-metric text-accent-primary">
                        {formatRupiah(netReceivedAmount)}
                      </strong>{' '}
                      cair maksimal H+2).
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="btn-pill-primary w-full py-3.5 text-sm"
                style={{
                  opacity: agreeServiceFee ? 1 : 0.68
                }}
              >
                {registerRole === 'worker'
                  ? 'Daftar & Masuk sebagai Pekerja'
                  : 'Daftar & Masuk sebagai Instansi'}
              </button>
            </form>

            <div className="mt-5 text-center text-xs">
              <span>Sudah punya akun? </span>
              <button
                onClick={() => switchView('login')}
                className="font-semibold text-accent-primary hover:underline"
              >
                Masuk di sini
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const renderWorkerOnboardingView = () => (
    <section
      className="min-h-screen pt-28 pb-20 px-4 sm:px-8 view-transition-enter"
      style={{ backgroundColor: 'var(--bg-soft)' }}
    >
      <div className="max-w-2xl mx-auto harian-surface-card p-7 sm:p-10">
        <div className="mb-6">
          <span
            className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-2"
            style={{
              backgroundColor: 'var(--primary-light)',
              color: 'var(--primary)'
            }}
          >
            Onboarding Pekerja Baru
          </span>
          <h2 className="heading-tight text-2xl">
            Siapkan akunmu biar gampang lamar kerja
          </h2>
          <p className="text-xs sm:text-sm mt-1">
            Lengkapi 3 langkah singkat berikut sebelum masuk ke beranda lowongan.
          </p>
        </div>

        {/* 3 Steps Header */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[
            { s: 1, label: '1. Isi Pengalaman' },
            { s: 2, label: '2. Tambah Rekening' },
            { s: 3, label: '3. Lokasi & Favorit' }
          ].map((st) => (
            <button
              key={st.s}
              onClick={() => setWorkerOnboardStep(st.s)}
              className="p-3 rounded-2xl border text-left text-xs font-semibold transition"
              style={{
                backgroundColor:
                  workerOnboardStep === st.s
                    ? 'var(--bg-soft)'
                    : 'var(--surface)',
                borderColor:
                  workerOnboardStep === st.s
                    ? 'var(--primary)'
                    : 'var(--border)',
                color:
                  workerOnboardStep === st.s ? 'var(--primary)' : 'var(--text)'
              }}
            >
              {st.label}
            </button>
          ))}
        </div>

        {workerOnboardStep === 1 && (
          <div className="space-y-4">
            <div>
              <label
                className="block text-xs font-semibold mb-1"
                style={{ color: 'var(--text)' }}
              >
                Nama Lengkap (Sesuai KTP)
              </label>
              <input
                type="text"
                value={workerProfile.fullName}
                onChange={(e) =>
                  setWorkerProfile({
                    ...workerProfile,
                    fullName: e.target.value
                  })
                }
                className="w-full px-4 py-2.5 rounded-xl border text-sm"
                style={{
                  backgroundColor: 'var(--bg-soft)',
                  borderColor: 'var(--border)',
                  color: 'var(--text)'
                }}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-xs font-semibold mb-1"
                  style={{ color: 'var(--text)' }}
                >
                  Pengalaman Kerja Terakhir
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Crew Gudang / Waiter"
                  value={newExpRole}
                  onChange={(e) => setNewExpRole(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border text-sm"
                  style={{
                    backgroundColor: 'var(--bg-soft)',
                    borderColor: 'var(--border)',
                    color: 'var(--text)'
                  }}
                />
              </div>
              <div>
                <label
                  className="block text-xs font-semibold mb-1"
                  style={{ color: 'var(--text)' }}
                >
                  Tempat / Perusahaan
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Gudang Logistik Bekasi"
                  value={newExpCompany}
                  onChange={(e) => setNewExpCompany(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border text-sm"
                  style={{
                    backgroundColor: 'var(--bg-soft)',
                    borderColor: 'var(--border)',
                    color: 'var(--text)'
                  }}
                />
              </div>
            </div>
            <div className="flex justify-end pt-4">
              <button
                onClick={() => {
                  if (newExpRole.trim() && newExpCompany.trim()) {
                    handleAddExperience();
                  }
                  setWorkerOnboardStep(2);
                }}
                className="btn-pill-primary px-6 py-2.5 text-sm"
              >
                Lanjut Tambah Rekening &rarr;
              </button>
            </div>
          </div>
        )}

        {workerOnboardStep === 2 && (
          <div className="space-y-4">
            <div>
              <label
                className="block text-xs font-semibold mb-1"
                style={{ color: 'var(--text)' }}
              >
                Rekening Bank / E-Wallet Pencairan Gaji (Maksimal H+2)
              </label>
              <input
                type="text"
                value={workerProfile.bankAccount}
                onChange={(e) =>
                  setWorkerProfile({
                    ...workerProfile,
                    bankAccount: e.target.value
                  })
                }
                className="w-full px-4 py-2.5 rounded-xl border text-sm"
                style={{
                  backgroundColor: 'var(--bg-soft)',
                  borderColor: 'var(--border)',
                  color: 'var(--text)'
                }}
              />
              <p className="text-[11px] mt-1.5">
                Gaji kamu otomatis ditransfer ke rekening ini maksimal 2 hari setelah kerja selesai (dipotong service fee 10%).
              </p>
            </div>
            <div className="flex justify-between pt-4">
              <button
                onClick={() => setWorkerOnboardStep(1)}
                className="btn-pill-secondary px-5 py-2.5 text-sm"
              >
                &larr; Kembali
              </button>
              <button
                onClick={() => setWorkerOnboardStep(3)}
                className="btn-pill-primary px-6 py-2.5 text-sm"
              >
                Lanjut Pilih Lokasi Favorit &rarr;
              </button>
            </div>
          </div>
        )}

        {workerOnboardStep === 3 && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-xs font-semibold mb-1"
                  style={{ color: 'var(--text)' }}
                >
                  Pilih Lokasi Kerja Favorit
                </label>
                <select
                  value={workerFavLocation}
                  onChange={(e) => setWorkerFavLocation(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border text-sm"
                  style={{
                    backgroundColor: 'var(--bg-soft)',
                    borderColor: 'var(--border)',
                    color: 'var(--text)'
                  }}
                >
                  <option value="ALL">Semua Lokasi</option>
                  <option value="Bekasi">Bekasi</option>
                  <option value="Jakarta">Jakarta</option>
                  <option value="ICE BSD">ICE BSD / Tangerang</option>
                </select>
              </div>
              <div>
                <label
                  className="block text-xs font-semibold mb-1"
                  style={{ color: 'var(--text)' }}
                >
                  Pilih Jenis Kerja Favorit
                </label>
                <select
                  value={workerFavCategory}
                  onChange={(e) => setWorkerFavCategory(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border text-sm"
                  style={{
                    backgroundColor: 'var(--bg-soft)',
                    borderColor: 'var(--border)',
                    color: 'var(--text)'
                  }}
                >
                  <option value="ALL">Semua Kategori</option>
                  <option value="Logistics & Warehouse">
                    Logistics &amp; Warehouse
                  </option>
                  <option value="Event Staff">Event Staff</option>
                  <option value="Hospitality">Hospitality</option>
                </select>
              </div>
            </div>
            <div className="flex justify-between pt-4">
              <button
                onClick={() => setWorkerOnboardStep(2)}
                className="btn-pill-secondary px-5 py-2.5 text-sm"
              >
                &larr; Kembali
              </button>
              <button
                onClick={() => {
                  setFilterLocation(workerFavLocation);
                  setFilterCategory(workerFavCategory);
                  triggerToast(
                    'Onboarding selesai! Menampilkan lowongan sesuai lokasi & jenis kerja favoritmu.'
                  );
                  switchView('worker');
                }}
                className="btn-pill-primary px-7 py-3 text-sm"
              >
                Selesai &amp; Mulai Cari Kerja &rarr;
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );

  const renderHrdOnboardingView = () => (
    <section
      className="min-h-screen pt-28 pb-20 px-4 sm:px-8 view-transition-enter"
      style={{ backgroundColor: 'var(--bg-soft)' }}
    >
      <div className="max-w-2xl mx-auto harian-surface-card p-7 sm:p-10">
        <div className="mb-6">
          <span
            className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-2"
            style={{
              backgroundColor: 'var(--primary-light)',
              color: 'var(--primary)'
            }}
          >
            Onboarding Instansi Baru
          </span>
          <h2 className="heading-tight text-2xl">
            Siapkan akun instansi untuk mulai merekrut
          </h2>
          <p className="text-xs sm:text-sm mt-1">
            Lengkapi profil perusahaan, draf lowongan pertama, dan metode pembayaran.
          </p>
        </div>

        {/* 3 Steps Header */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[
            { s: 1, label: '1. Profil Perusahaan' },
            { s: 2, label: '2. Lowongan Pertama' },
            { s: 3, label: '3. Metode Pembayaran' }
          ].map((st) => (
            <button
              key={st.s}
              onClick={() => setHrdOnboardStep(st.s)}
              className="p-3 rounded-2xl border text-left text-xs font-semibold transition"
              style={{
                backgroundColor:
                  hrdOnboardStep === st.s ? 'var(--bg-soft)' : 'var(--surface)',
                borderColor:
                  hrdOnboardStep === st.s ? 'var(--primary)' : 'var(--border)',
                color:
                  hrdOnboardStep === st.s ? 'var(--primary)' : 'var(--text)'
              }}
            >
              {st.label}
            </button>
          ))}
        </div>

        {hrdOnboardStep === 1 && (
          <div className="space-y-4">
            <div>
              <label
                className="block text-xs font-semibold mb-1"
                style={{ color: 'var(--text)' }}
              >
                Nama Perusahaan / Instansi
              </label>
              <input
                type="text"
                value={hrdProfile.companyName}
                onChange={(e) =>
                  setHrdProfile({ ...hrdProfile, companyName: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-xl border text-sm"
                style={{
                  backgroundColor: 'var(--bg-soft)',
                  borderColor: 'var(--border)',
                  color: 'var(--text)'
                }}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-xs font-semibold mb-1"
                  style={{ color: 'var(--text)' }}
                >
                  Bidang Industri
                </label>
                <input
                  type="text"
                  value={hrdProfile.industry}
                  onChange={(e) =>
                    setHrdProfile({ ...hrdProfile, industry: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border text-sm"
                  style={{
                    backgroundColor: 'var(--bg-soft)',
                    borderColor: 'var(--border)',
                    color: 'var(--text)'
                  }}
                />
              </div>
              <div>
                <label
                  className="block text-xs font-semibold mb-1"
                  style={{ color: 'var(--text)' }}
                >
                  Kontak Penanggung Jawab (PIC)
                </label>
                <input
                  type="text"
                  value={hrdProfile.picContact}
                  onChange={(e) =>
                    setHrdProfile({ ...hrdProfile, picContact: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border text-sm"
                  style={{
                    backgroundColor: 'var(--bg-soft)',
                    borderColor: 'var(--border)',
                    color: 'var(--text)'
                  }}
                />
              </div>
            </div>
            <div className="flex justify-end pt-4">
              <button
                onClick={() => setHrdOnboardStep(2)}
                className="btn-pill-primary px-6 py-2.5 text-sm"
              >
                Lanjut Buat Lowongan Pertama &rarr;
              </button>
            </div>
          </div>
        )}

        {hrdOnboardStep === 2 && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-xs font-semibold mb-1"
                  style={{ color: 'var(--text)' }}
                >
                  Judul Lowongan Pertama
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Helper Gudang Harian"
                  value={newJobForm.title}
                  onChange={(e) =>
                    setNewJobForm({ ...newJobForm, title: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border text-sm"
                  style={{
                    backgroundColor: 'var(--bg-soft)',
                    borderColor: 'var(--border)',
                    color: 'var(--text)'
                  }}
                />
              </div>
              <div>
                <label
                  className="block text-xs font-semibold mb-1"
                  style={{ color: 'var(--text)' }}
                >
                  Upah Harian (Rp)
                </label>
                <input
                  type="number"
                  value={newJobForm.rate}
                  onChange={(e) =>
                    setNewJobForm({ ...newJobForm, rate: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border text-sm font-mono-metric"
                  style={{
                    backgroundColor: 'var(--bg-soft)',
                    borderColor: 'var(--border)',
                    color: 'var(--text)'
                  }}
                />
              </div>
            </div>
            <div className="flex justify-between pt-4">
              <button
                onClick={() => setHrdOnboardStep(1)}
                className="btn-pill-secondary px-5 py-2.5 text-sm"
              >
                &larr; Kembali
              </button>
              <button
                onClick={() => setHrdOnboardStep(3)}
                className="btn-pill-primary px-6 py-2.5 text-sm"
              >
                Lanjut Metode Pembayaran &rarr;
              </button>
            </div>
          </div>
        )}

        {hrdOnboardStep === 3 && (
          <div className="space-y-4">
            <div>
              <label
                className="block text-xs font-semibold mb-1"
                style={{ color: 'var(--text)' }}
              >
                Pilih Metode Pembayaran Payment Gateway
              </label>
              <select
                value={hrdProfile.paymentMethod}
                onChange={(e) =>
                  setHrdProfile({
                    ...hrdProfile,
                    paymentMethod: e.target.value
                  })
                }
                className="w-full px-4 py-2.5 rounded-xl border text-sm"
                style={{
                  backgroundColor: 'var(--bg-soft)',
                  borderColor: 'var(--border)',
                  color: 'var(--text)'
                }}
              >
                <option value="Virtual Account BCA (Escrow HarianPay)">
                  Virtual Account BCA (Escrow HarianPay)
                </option>
                <option value="Virtual Account Mandiri (Escrow HarianPay)">
                  Virtual Account Mandiri (Escrow HarianPay)
                </option>
                <option value="QRIS Korporat Instan">
                  QRIS Korporat Instan
                </option>
              </select>
            </div>
            <div className="flex justify-between pt-4">
              <button
                onClick={() => setHrdOnboardStep(2)}
                className="btn-pill-secondary px-5 py-2.5 text-sm"
              >
                &larr; Kembali
              </button>
              <button
                onClick={() => {
                  triggerToast(
                    'Onboarding Instansi selesai! Selamat datang di Dasbor HRD.'
                  );
                  switchView('hrd');
                }}
                className="btn-pill-primary px-7 py-3 text-sm"
              >
                Masuk ke Dasbor Instansi &rarr;
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );

  // ============================================================================
  // 10. RENDER VIEW 2: LOGIN & ROLE SWITCHER (GAYA NAVOS 2-KOLOM KACA PUTIH DOFF)
  // ============================================================================
  const renderLoginView = () => (
    <section className="min-h-screen pt-24 pb-20 px-4 sm:px-8 flex items-center relative z-10 view-transition-enter">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Navos-Inspired Brand Showcase & Floating Frosted Bubbles */}
        <div className="lg:col-span-6 space-y-6 text-left">
          {/* Staggered Frosted Glass Conversation Pills (Like Navos Reference) */}
          <div className="space-y-2.5 max-w-md">
            <div className="navos-chat-bubble px-4 py-2 text-xs opacity-50 w-fit">
              Of course, ada lowongan shift malam hari ini?
            </div>
            <div className="navos-chat-bubble px-4 py-2.5 text-xs opacity-75 w-fit ml-4">
              Ada 15 posisi Warehouse Packer di Bekasi, upah Rp175.000/hari.
            </div>
            <div className="navos-chat-bubble px-4 py-2.5 text-xs opacity-90 w-fit ml-8">
              Tunggu sebentar, dana Escrow perusahaan sudah dikunci 100%.
            </div>
            <div className="navos-chat-bubble px-4 py-2.5 text-xs font-semibold w-fit ml-12 border-[#1D6FE8]/30">
              Silakan masuk ke akun Harian Anda untuk langsung melamar.
            </div>
          </div>

          <div className="pt-2">
            <div className="text-xs font-mono-metric tracking-[0.24em] uppercase text-[#526382] mb-2">
              THE FUTURE OF DAILY WORK
            </div>
            <div className="mb-3">
              <HarianLogo size="lg" />
            </div>
            <p className="text-sm sm:text-base leading-relaxed max-w-md">
              Solusi cepat untuk kebutuhan tenaga kerja harian dengan seleksi objektif MFEP dan pencairan upah maksimal H+2.
            </p>
          </div>
        </div>

        {/* Right Column: Matte Frosted White Glass Login Card (Like Navos Card) */}
        <div className="lg:col-span-6">
          <div className="max-w-md mx-auto lg:ml-auto harian-surface-card p-8 sm:p-10">
            <div className="mb-6">
              <h2 className="heading-tight text-2xl">Masuk ke Akun Harian</h2>
              <p className="text-xs sm:text-sm mt-1">
                Pilih peran akses Anda di bawah ini.
              </p>
            </div>

            {/* Clean Underline Role Tabs Matching Navos */}
            <div className="flex items-center gap-7 border-b border-[#DCE8FD] mb-6">
              <button
                type="button"
                onClick={() => {
                  setLoginRole('worker');
                  setLoginEmail('budisantoso@gmail.com');
                  setLoginError('');
                }}
                className={`pb-3 text-sm font-semibold transition relative ${
                  loginRole === 'worker'
                    ? 'text-[#1D6FE8]'
                    : 'text-[#526382]'
                }`}
              >
                Pekerja Harian
                {loginRole === 'worker' && (
                  <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#1D6FE8] rounded-full" />
                )}
              </button>
              <button
                type="button"
                onClick={() => {
                  setLoginRole('hrd');
                  setLoginEmail('hrd@karyamaju.co.id');
                  setLoginError('');
                }}
                className={`pb-3 text-sm font-semibold transition relative ${
                  loginRole === 'hrd' ? 'text-[#1D6FE8]' : 'text-[#526382]'
                }`}
              >
                Perusahaan / HRD
                {loginRole === 'hrd' && (
                  <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#1D6FE8] rounded-full" />
                )}
              </button>
            </div>

            {loginError && (
              <div
                className="mb-4 p-3.5 rounded-2xl border text-xs font-semibold flex items-center gap-2"
                style={{
                  backgroundColor: 'var(--primary-light)',
                  borderColor: 'var(--primary)',
                  color: 'var(--primary-dark)'
                }}
              >
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{loginError}</span>
              </div>
            )}

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label
                  className="block text-xs font-semibold mb-1.5"
                  style={{ color: 'var(--text)' }}
                >
                  Email / ID Akun
                </label>
                <input
                  type="email"
                  required
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  className="frosted-input w-full px-4 py-3.5 rounded-xl text-sm focus:outline-none"
                />
              </div>

              <div>
                <label
                  className="block text-xs font-semibold mb-1.5"
                  style={{ color: 'var(--text)' }}
                >
                  Kata Sandi
                </label>
                <input
                  type="password"
                  required
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  className="frosted-input w-full px-4 py-3.5 rounded-xl text-sm focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-4 h-4 accent-[#1D6FE8] rounded"
                  />
                  <span>Saya menyetujui </span>
                </label>
                <button
                  type="button"
                  onClick={() => setShowTermsServiceModal(true)}
                  className="font-semibold text-accent-primary underline hover:opacity-80 ml-1 mr-auto"
                >
                  Syarat &amp; Ketentuan Harian (PDF)
                </button>
              </div>

              <button
                type="submit"
                className="btn-pill-primary w-full py-3.5 text-sm mt-2"
              >
                {loginRole === 'worker'
                  ? 'Masuk ke Portal Pekerja'
                  : 'Masuk ke Portal Perusahaan (HRD)'}
              </button>
            </form>

            <div className="mt-5 flex items-center justify-between text-xs">
              <button
                type="button"
                onClick={() => {
                  setLoginPassword('salah123');
                  setLoginError(
                    'Email atau Password salah, silahkan coba lagi.'
                  );
                }}
                className="text-[#526382] hover:text-[#1D6FE8] transition"
              >
                Simulasi Sandi Salah
              </button>
              <div>
                <span>Belum punya akun? </span>
                <button
                  onClick={() => openRoleRegister(loginRole)}
                  className="font-semibold text-accent-primary hover:underline"
                >
                  Daftar sekarang
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // ============================================================================
  // 11. RENDER VIEW 3: MEMPERBARUI PROFIL DASAR PEKERJA & INSTANSI (US-07 & US-11)
  // ============================================================================
  const renderProfileView = () => {
    const isWorkerTab = profileRoleTab === 'worker';
    const wEmptyName = profileSubmittedOnce && !workerProfileDraft.fullName?.trim();
    const wEmptyPhone = profileSubmittedOnce && !workerProfileDraft.phone?.trim();
    const wEmptyCity = profileSubmittedOnce && !workerProfileDraft.city?.trim();
    const wEmptyBio = profileSubmittedOnce && !workerProfileDraft.bio?.trim();

    const hEmptyName = profileSubmittedOnce && !hrdProfileDraft.companyName?.trim();
    const hEmptyIndustry = profileSubmittedOnce && !hrdProfileDraft.industry?.trim();
    const hEmptyContact = profileSubmittedOnce && !hrdProfileDraft.picContact?.trim();
    const hEmptyDesc = profileSubmittedOnce && !hrdProfileDraft.description?.trim();

    return (
      <section
        className="min-h-screen pt-28 pb-20 px-4 sm:px-8 view-transition-enter"
        style={{ backgroundColor: 'var(--bg-soft)' }}
      >
        <div className="max-w-3xl mx-auto harian-surface-card p-7 sm:p-10">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div>
              <span
                className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-2"
                style={{
                  backgroundColor: 'var(--primary-light)',
                  color: 'var(--primary)'
                }}
              >
                Formulir Profil Digital &bull; Tersimpan Akurat
              </span>
              <h2 id="profileFormHeading" className="heading-tight text-2xl">
                Perbarui Profil Dasar {isWorkerTab ? 'Pekerja Harian' : 'Instansi / HRD'}
              </h2>
              <p className="text-xs sm:text-sm mt-0.5">
                Isi nama, kontak aktif, dan deskripsi singkat secara lengkap lalu tekan Simpan.
              </p>
            </div>
            <button
              type="button"
              onClick={() =>
                switchView(
                  authenticatedRole === 'hrd' || !isWorkerTab ? 'hrd' : 'worker'
                )
              }
              className="btn-pill-secondary px-4 py-2 text-xs font-semibold"
            >
              {authenticatedRole === 'hrd' || !isWorkerTab
                ? 'Ke Dasbor Instansi \u2192'
                : 'Ke Portal Pekerja \u2192'}
            </button>
          </div>

          {/* Role Switcher Tabs (Supports Worker & Instansi in US-07) */}
          <div className="flex flex-wrap items-center gap-2 pb-5 mb-6 border-b border-[#DCE8FD]">
            <button
              type="button"
              onClick={() => {
                setProfileRoleTab('worker');
                setProfileFormFeedback(null);
                setProfileSubmittedOnce(false);
              }}
              className={
                isWorkerTab
                  ? 'btn-pill-primary px-4 py-2 text-xs sm:text-sm inline-flex items-center gap-1.5'
                  : 'btn-pill-secondary px-4 py-2 text-xs sm:text-sm inline-flex items-center gap-1.5'
              }
            >
              <User className="w-3.5 h-3.5" />
              <span>Profil Pekerja Harian</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setProfileRoleTab('hrd');
                setProfileFormFeedback(null);
                setProfileSubmittedOnce(false);
              }}
              className={
                !isWorkerTab
                  ? 'btn-pill-primary px-4 py-2 text-xs sm:text-sm inline-flex items-center gap-1.5'
                  : 'btn-pill-secondary px-4 py-2 text-xs sm:text-sm inline-flex items-center gap-1.5'
              }
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>Profil Instansi / Perusahaan</span>
            </button>
          </div>

          {isWorkerTab && (
            <nav aria-label="Tahapan Profil Pekerja" className="grid grid-cols-2 gap-3 mb-6">
              {[
                {
                  s: 1,
                  title: '01 • Profil Dasar (US-07)',
                  sub: 'Nama, Kontak & Deskripsi Singkat'
                },
                {
                  s: 2,
                  title: '02 • Pengalaman & Rekening',
                  sub: 'Portofolio MFEP & Rekening H+2'
                }
              ].map((item) => (
                <button
                  key={item.s}
                  type="button"
                  aria-current={profileStep === item.s ? 'step' : undefined}
                  onClick={() => setProfileStep(item.s)}
                  className="p-3.5 rounded-2xl border text-left transition"
                  style={{
                    backgroundColor:
                      profileStep === item.s ? 'var(--bg-soft)' : 'var(--surface)',
                    borderColor:
                      profileStep === item.s ? 'var(--primary)' : 'var(--border)'
                  }}
                >
                  <div className="text-[11px] font-mono-metric font-bold text-accent-primary">
                    {item.title}
                  </div>
                  <div
                    className="text-xs font-semibold mt-0.5"
                    style={{ color: 'var(--text)' }}
                  >
                    {item.sub}
                  </div>
                </button>
              ))}
            </nav>
          )}

          {profileFormFeedback && (
            <div
              role="alert"
              className="mb-5 p-4 rounded-2xl border text-xs sm:text-sm font-semibold flex items-center gap-2.5"
              style={{
                backgroundColor:
                  profileFormFeedback.type === 'error'
                    ? 'rgba(254, 226, 226, 0.9)'
                    : 'rgba(220, 252, 231, 0.9)',
                borderColor:
                  profileFormFeedback.type === 'error' ? '#DC2626' : '#16A34A',
                color:
                  profileFormFeedback.type === 'error' ? '#991B1B' : '#166534'
              }}
            >
              {profileFormFeedback.type === 'error' ? (
                <AlertCircle className="w-4 h-4 shrink-0" />
              ) : (
                <CheckCircle2 className="w-4 h-4 shrink-0" />
              )}
              <span>{profileFormFeedback.message}</span>
            </div>
          )}

          {isWorkerTab && profileStep === 2 ? (
            <div className="space-y-5">
              <div
                className="p-4 sm:p-5 rounded-2xl border space-y-3"
                style={{
                  backgroundColor: 'var(--bg-soft)',
                  borderColor: 'var(--border)'
                }}
              >
                <label
                  htmlFor="workerBankAccountInput"
                  className="block text-xs font-semibold"
                  style={{ color: 'var(--text)' }}
                >
                  Nomor Rekening Bank / E-Wallet Pencairan Gaji H+2 *
                </label>
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <input
                    id="workerBankAccountInput"
                    name="bankAccount"
                    type="text"
                    aria-invalid="false"
                    value={workerProfileDraft.bankAccount || ''}
                    onChange={(e) =>
                      setWorkerProfileDraft({
                        ...workerProfileDraft,
                        bankAccount: e.target.value
                      })
                    }
                    placeholder="Contoh: BCA - 7410889210 (Budi Santoso)"
                    className="frosted-input flex-1 px-4 py-2.5 rounded-xl text-sm focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={handleSaveBankAccount}
                    className="btn-pill-primary px-5 py-2.5 text-xs sm:text-sm shrink-0"
                  >
                    Simpan Rekening
                  </button>
                </div>
              </div>

              <div className="space-y-2.5">
                <div
                  className="text-xs font-semibold"
                  style={{ color: 'var(--text)' }}
                >
                  Daftar Riwayat Pengalaman Kerja ({workerProfile.experiences.length})
                </div>
                {workerProfile.experiences.length === 0 ? (
                  <p className="text-xs py-3">
                    Belum ada pengalaman kerja tercatat. Tambahkan di bawah agar skor MFEP meningkat.
                  </p>
                ) : (
                  workerProfile.experiences.map((exp) => (
                    <div
                      key={exp.id}
                      className="p-4 rounded-2xl border flex flex-wrap items-center justify-between gap-3"
                      style={{
                        backgroundColor: 'var(--bg-soft)',
                        borderColor: 'var(--border)'
                      }}
                    >
                      <div>
                        <div
                          className="text-sm font-semibold"
                          style={{ color: 'var(--text)' }}
                        >
                          {exp.role}
                        </div>
                        <div className="text-xs">
                          {exp.company} &bull; {exp.period}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            setEditingExpId(exp.id);
                            setNewExpRole(exp.role);
                            setNewExpCompany(exp.company);
                            setNewExpPeriod(exp.period);
                          }}
                          className="btn-pill-secondary px-3 py-1.5 text-xs inline-flex items-center gap-1"
                        >
                          <Pencil className="w-3 h-3" />
                          <span>Edit</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteExperience(exp.id)}
                          className="btn-pill-secondary px-3 py-1.5 text-xs text-red-600 inline-flex items-center gap-1"
                        >
                          <Trash2 className="w-3 h-3" />
                          <span>Hapus</span>
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div>
                  <label
                    htmlFor="expRoleInput"
                    className="block text-xs font-semibold mb-1"
                    style={{ color: 'var(--text)' }}
                  >
                    Posisi Pengalaman
                  </label>
                  <input
                    id="expRoleInput"
                    name="expRole"
                    type="text"
                    aria-invalid="false"
                    placeholder="Contoh: Staff Gudang Harian"
                    value={newExpRole}
                    onChange={(e) => setNewExpRole(e.target.value)}
                    className="frosted-input w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="expCompanyInput"
                    className="block text-xs font-semibold mb-1"
                    style={{ color: 'var(--text)' }}
                  >
                    Nama Instansi / Tempat
                  </label>
                  <input
                    id="expCompanyInput"
                    name="expCompany"
                    type="text"
                    aria-invalid="false"
                    placeholder="Contoh: PT Logistik Cepat"
                    value={newExpCompany}
                    onChange={(e) => setNewExpCompany(e.target.value)}
                    className="frosted-input w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="expPeriodInput"
                    className="block text-xs font-semibold mb-1"
                    style={{ color: 'var(--text)' }}
                  >
                    Periode Kerja
                  </label>
                  <input
                    id="expPeriodInput"
                    name="expPeriod"
                    type="text"
                    aria-invalid="false"
                    placeholder="Contoh: Jan 2025 - Jun 2025"
                    value={newExpPeriod}
                    onChange={(e) => setNewExpPeriod(e.target.value)}
                    className="frosted-input w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={handleAddExperience}
                  className="btn-pill-secondary px-4 py-2 text-xs inline-flex items-center gap-1.5"
                >
                  <Plus className="w-3.5 h-3.5 text-accent-primary" />
                  <span>
                    {editingExpId
                      ? 'Perbarui Pengalaman Kerja'
                      : 'Tambahkan Pengalaman Kerja'}
                  </span>
                </button>
                {editingExpId && (
                  <button
                    type="button"
                    onClick={() => {
                      setEditingExpId(null);
                      setNewExpRole('');
                      setNewExpCompany('');
                      setNewExpPeriod('2025 - Sekarang');
                    }}
                    className="btn-pill-secondary px-3.5 py-2 text-xs"
                  >
                    Batal Edit
                  </button>
                )}
              </div>

              <div className="flex justify-between pt-4 border-t border-[#DCE8FD]">
                <button
                  type="button"
                  onClick={() => setProfileStep(1)}
                  className="btn-pill-secondary px-5 py-2.5 text-sm"
                >
                  &larr; Kembali ke Profil Dasar
                </button>
                <button
                  type="button"
                  onClick={() => switchView('worker')}
                  className="btn-pill-primary px-6 py-2.5 text-sm"
                >
                  Selesai &amp; Buka Portal Pekerja &rarr;
                </button>
              </div>
            </div>
          ) : (
            <form
              ref={profileFormRef}
              aria-labelledby="profileFormHeading"
              noValidate
              onSubmit={handleSaveBasicProfile}
              className="space-y-4"
            >
              {isWorkerTab ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="profWorkerName"
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: 'var(--text)' }}
                      >
                        Nama Lengkap (Sesuai KTP) *
                      </label>
                      <input
                        id="profWorkerName"
                        name="fullName"
                        type="text"
                        autoComplete="name"
                        data-empty={wEmptyName ? 'true' : 'false'}
                        aria-invalid={wEmptyName ? 'true' : 'false'}
                        aria-describedby={wEmptyName ? 'errWorkerName' : undefined}
                        value={workerProfileDraft.fullName}
                        onChange={(e) => {
                          setWorkerProfileDraft({
                            ...workerProfileDraft,
                            fullName: e.target.value
                          });
                          if (profileFormFeedback?.type === 'error') {
                            setProfileFormFeedback(null);
                          }
                        }}
                        placeholder="Masukkan nama lengkap Anda"
                        className={`frosted-input w-full px-4 py-2.5 rounded-xl text-sm focus:outline-none ${
                          wEmptyName ? 'field-invalid' : ''
                        }`}
                      />
                      {wEmptyName && (
                        <span
                          id="errWorkerName"
                          className="block text-[11px] font-semibold text-red-600 mt-1"
                        >
                          Nama lengkap wajib diisi.
                        </span>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="profWorkerPhone"
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: 'var(--text)' }}
                      >
                        Kontak / Nomor WhatsApp Aktif *
                      </label>
                      <input
                        id="profWorkerPhone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        data-empty={wEmptyPhone ? 'true' : 'false'}
                        aria-invalid={wEmptyPhone ? 'true' : 'false'}
                        aria-describedby={wEmptyPhone ? 'errWorkerPhone' : undefined}
                        value={workerProfileDraft.phone}
                        onChange={(e) => {
                          setWorkerProfileDraft({
                            ...workerProfileDraft,
                            phone: e.target.value
                          });
                          if (profileFormFeedback?.type === 'error') {
                            setProfileFormFeedback(null);
                          }
                        }}
                        placeholder="Contoh: +62 812-3456-7890"
                        className={`frosted-input w-full px-4 py-2.5 rounded-xl text-sm focus:outline-none ${
                          wEmptyPhone ? 'field-invalid' : ''
                        }`}
                      />
                      {wEmptyPhone && (
                        <span
                          id="errWorkerPhone"
                          className="block text-[11px] font-semibold text-red-600 mt-1"
                        >
                          Kontak wajib diisi.
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="profWorkerCity"
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: 'var(--text)' }}
                      >
                        Domisili Saat Ini *
                      </label>
                      <input
                        id="profWorkerCity"
                        name="city"
                        type="text"
                        data-empty={wEmptyCity ? 'true' : 'false'}
                        aria-invalid={wEmptyCity ? 'true' : 'false'}
                        aria-describedby={wEmptyCity ? 'errWorkerCity' : undefined}
                        value={workerProfileDraft.city}
                        onChange={(e) => {
                          setWorkerProfileDraft({
                            ...workerProfileDraft,
                            city: e.target.value
                          });
                          if (profileFormFeedback?.type === 'error') {
                            setProfileFormFeedback(null);
                          }
                        }}
                        placeholder="Contoh: Bekasi, Jawa Barat"
                        className={`frosted-input w-full px-4 py-2.5 rounded-xl text-sm focus:outline-none ${
                          wEmptyCity ? 'field-invalid' : ''
                        }`}
                      />
                      {wEmptyCity && (
                        <span
                          id="errWorkerCity"
                          className="block text-[11px] font-semibold text-red-600 mt-1"
                        >
                          Domisili wajib diisi.
                        </span>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="profWorkerBank"
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: 'var(--text)' }}
                      >
                        Rekening Pencairan Gaji H+2
                      </label>
                      <input
                        id="profWorkerBank"
                        name="bankAccount"
                        type="text"
                        aria-invalid="false"
                        value={workerProfileDraft.bankAccount || ''}
                        onChange={(e) =>
                          setWorkerProfileDraft({
                            ...workerProfileDraft,
                            bankAccount: e.target.value
                          })
                        }
                        placeholder="BCA - No. Rekening (Atas Nama)"
                        className="frosted-input w-full px-4 py-2.5 rounded-xl text-sm focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="profWorkerBio"
                      className="block text-xs font-semibold mb-1.5"
                      style={{ color: 'var(--text)' }}
                    >
                      Deskripsi Singkat Diri &amp; Keahlian *
                    </label>
                    <textarea
                      id="profWorkerBio"
                      name="bio"
                      rows="3"
                      data-empty={wEmptyBio ? 'true' : 'false'}
                      aria-invalid={wEmptyBio ? 'true' : 'false'}
                      aria-describedby={wEmptyBio ? 'errWorkerBio' : undefined}
                      value={workerProfileDraft.bio || ''}
                      onChange={(e) => {
                        setWorkerProfileDraft({
                          ...workerProfileDraft,
                          bio: e.target.value
                        });
                        if (profileFormFeedback?.type === 'error') {
                          setProfileFormFeedback(null);
                        }
                      }}
                      placeholder="Tuliskan ringkasan pengalaman, keahlian kerja harian, dan kesiapan shift Anda..."
                      className={`frosted-input w-full px-4 py-2.5 rounded-xl text-sm focus:outline-none ${
                        wEmptyBio ? 'field-invalid' : ''
                      }`}
                    />
                    {wEmptyBio && (
                      <span
                        id="errWorkerBio"
                        className="block text-[11px] font-semibold text-red-600 mt-1"
                      >
                        Deskripsi singkat wajib diisi.
                      </span>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="profHrdName"
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: 'var(--text)' }}
                      >
                        Nama Instansi / Perusahaan *
                      </label>
                      <input
                        id="profHrdName"
                        name="companyName"
                        type="text"
                        autoComplete="organization"
                        data-empty={hEmptyName ? 'true' : 'false'}
                        aria-invalid={hEmptyName ? 'true' : 'false'}
                        aria-describedby={hEmptyName ? 'errHrdName' : undefined}
                        value={hrdProfileDraft.companyName || ''}
                        onChange={(e) => {
                          setHrdProfileDraft({
                            ...hrdProfileDraft,
                            companyName: e.target.value
                          });
                          if (profileFormFeedback?.type === 'error') {
                            setProfileFormFeedback(null);
                          }
                        }}
                        placeholder="Contoh: PT Karya Maju"
                        className={`frosted-input w-full px-4 py-2.5 rounded-xl text-sm focus:outline-none ${
                          hEmptyName ? 'field-invalid' : ''
                        }`}
                      />
                      {hEmptyName && (
                        <span
                          id="errHrdName"
                          className="block text-[11px] font-semibold text-red-600 mt-1"
                        >
                          Nama instansi wajib diisi.
                        </span>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="profHrdContact"
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: 'var(--text)' }}
                      >
                        Kontak PIC / HRD Aktif *
                      </label>
                      <input
                        id="profHrdContact"
                        name="picContact"
                        type="text"
                        data-empty={hEmptyContact ? 'true' : 'false'}
                        aria-invalid={hEmptyContact ? 'true' : 'false'}
                        aria-describedby={hEmptyContact ? 'errHrdContact' : undefined}
                        value={hrdProfileDraft.picContact || ''}
                        onChange={(e) => {
                          setHrdProfileDraft({
                            ...hrdProfileDraft,
                            picContact: e.target.value
                          });
                          if (profileFormFeedback?.type === 'error') {
                            setProfileFormFeedback(null);
                          }
                        }}
                        placeholder="Contoh: Rina Wijaya (+62 811-2233-4455)"
                        className={`frosted-input w-full px-4 py-2.5 rounded-xl text-sm focus:outline-none ${
                          hEmptyContact ? 'field-invalid' : ''
                        }`}
                      />
                      {hEmptyContact && (
                        <span
                          id="errHrdContact"
                          className="block text-[11px] font-semibold text-red-600 mt-1"
                        >
                          Kontak PIC instansi wajib diisi.
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="profHrdIndustry"
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: 'var(--text)' }}
                      >
                        Bidang Industri *
                      </label>
                      <input
                        id="profHrdIndustry"
                        name="industry"
                        type="text"
                        data-empty={hEmptyIndustry ? 'true' : 'false'}
                        aria-invalid={hEmptyIndustry ? 'true' : 'false'}
                        aria-describedby={hEmptyIndustry ? 'errHrdIndustry' : undefined}
                        value={hrdProfileDraft.industry || ''}
                        onChange={(e) => {
                          setHrdProfileDraft({
                            ...hrdProfileDraft,
                            industry: e.target.value
                          });
                          if (profileFormFeedback?.type === 'error') {
                            setProfileFormFeedback(null);
                          }
                        }}
                        placeholder="Contoh: Logistik / Event / Perhotelan"
                        className={`frosted-input w-full px-4 py-2.5 rounded-xl text-sm focus:outline-none ${
                          hEmptyIndustry ? 'field-invalid' : ''
                        }`}
                      />
                      {hEmptyIndustry && (
                        <span
                          id="errHrdIndustry"
                          className="block text-[11px] font-semibold text-red-600 mt-1"
                        >
                          Bidang industri wajib diisi.
                        </span>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="profHrdLocation"
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: 'var(--text)' }}
                      >
                        Lokasi Operasional Utama
                      </label>
                      <input
                        id="profHrdLocation"
                        name="location"
                        type="text"
                        aria-invalid="false"
                        value={hrdProfileDraft.location || ''}
                        onChange={(e) =>
                          setHrdProfileDraft({
                            ...hrdProfileDraft,
                            location: e.target.value
                          })
                        }
                        placeholder="Contoh: Jakarta & Tangerang"
                        className="frosted-input w-full px-4 py-2.5 rounded-xl text-sm focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="profHrdDesc"
                      className="block text-xs font-semibold mb-1.5"
                      style={{ color: 'var(--text)' }}
                    >
                      Deskripsi Singkat Instansi *
                    </label>
                    <textarea
                      id="profHrdDesc"
                      name="description"
                      rows="3"
                      data-empty={hEmptyDesc ? 'true' : 'false'}
                      aria-invalid={hEmptyDesc ? 'true' : 'false'}
                      aria-describedby={hEmptyDesc ? 'errHrdDesc' : undefined}
                      value={hrdProfileDraft.description || ''}
                      onChange={(e) => {
                        setHrdProfileDraft({
                          ...hrdProfileDraft,
                          description: e.target.value
                        });
                        if (profileFormFeedback?.type === 'error') {
                          setProfileFormFeedback(null);
                        }
                      }}
                      placeholder="Jelaskan profil singkat perusahaan, ruang lingkup operasional, dan komitmen kerja harian..."
                      className={`frosted-input w-full px-4 py-2.5 rounded-xl text-sm focus:outline-none ${
                        hEmptyDesc ? 'field-invalid' : ''
                      }`}
                    />
                    {hEmptyDesc && (
                      <span
                        id="errHrdDesc"
                        className="block text-[11px] font-semibold text-red-600 mt-1"
                      >
                        Deskripsi singkat instansi wajib diisi.
                      </span>
                    )}
                  </div>
                </>
              )}

              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#DCE8FD]">
                <span className="text-xs text-[#526382]">
                  Tanda (*) wajib diisi sebelum menekan tombol Simpan.
                </span>
                <div className="flex flex-wrap items-center gap-2.5">
                  {isWorkerTab && (
                    <button
                      type="button"
                      onClick={() => setProfileStep(2)}
                      className="btn-pill-secondary px-4 py-2.5 text-xs sm:text-sm"
                    >
                      Kelola Pengalaman &rarr;
                    </button>
                  )}
                  <button
                    type="submit"
                    className="btn-pill-primary px-7 py-2.5 text-xs sm:text-sm inline-flex items-center gap-2"
                  >
                    <Check className="w-4 h-4" />
                    <span>Simpan</span>
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </section>
    );
  };

  // ============================================================================
  // 12. RENDER VIEW 4: PORTAL PEKERJA HARIAN (UC-05, US-07, US-10, UC-12)
  // ============================================================================
  const renderWorkerPortalView = () => {
    const modalJob = jobDetailModalId
      ? jobs.find((j) => j.id === jobDetailModalId && j.status !== 'CLOSED') ||
        null
      : null;
    const alreadyAppliedModal = modalJob
      ? applications.some(
          (a) => a.jobId === modalJob.id && a.status !== 'Dibatalkan'
        )
      : false;

    return (
      <section
        className="min-h-screen pt-24 pb-20 px-4 sm:px-8 view-transition-enter"
        style={{ backgroundColor: 'var(--bg-soft)' }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Top Worker Header Card */}
          <div className="harian-surface-card p-6 sm:p-7 mb-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-accent-primary mb-1">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: 'var(--primary)' }}
                />
                <span>
                  Portal Pekerja Harian &bull; {workerProfile.fullName} (
                  {workerProfile.city})
                </span>
              </div>
              <h2 className="heading-tight text-2xl sm:text-3xl">
                Temukan Kerja Harian Sekarang
              </h2>
              <p className="text-xs sm:text-sm mt-0.5 max-w-2xl">
                {workerProfile.bio ||
                  'Rekomendasi diurutkan otomatis berdasarkan pengalaman kerja Anda. Dana upah telah diamankan di Escrow dan cair maksimal H+2.'}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={() => setWorkerSubTab('explore')}
                className={
                  workerSubTab === 'explore'
                    ? 'btn-pill-primary px-5 py-2.5 text-xs sm:text-sm'
                    : 'btn-pill-secondary px-5 py-2.5 text-xs sm:text-sm'
                }
              >
                Cari &amp; Filter Lowongan ({filteredJobs.length})
              </button>
              <button
                type="button"
                onClick={() => setWorkerSubTab('applications')}
                className={
                  workerSubTab === 'applications'
                    ? 'btn-pill-primary px-5 py-2.5 text-xs sm:text-sm inline-flex items-center gap-2'
                    : 'btn-pill-secondary px-5 py-2.5 text-xs sm:text-sm inline-flex items-center gap-2'
                }
              >
                <span>Status Lamaran &amp; Gaji H+2</span>
                <span
                  className="px-2 py-0.5 rounded-full text-[11px] font-mono-metric font-bold"
                  style={{
                    backgroundColor: 'var(--primary-light)',
                    color: 'var(--primary)'
                  }}
                >
                  {applications.length}
                </span>
              </button>
              <button
                type="button"
                onClick={() => openProfileEditor('worker')}
                className="btn-pill-secondary px-4 py-2.5 text-xs sm:text-sm inline-flex items-center gap-1.5"
              >
                <Pencil className="w-3.5 h-3.5 text-accent-primary" />
                <span>Perbarui Profil</span>
              </button>
            </div>
          </div>

          {workerSubTab === 'explore' ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Sidebar Filter (UC-05) */}
              <aside className="lg:col-span-3 harian-surface-card p-5 sm:p-6 self-start">
                <search className="space-y-4 block">
                  <div
                    className="flex items-center justify-between pb-3 border-b"
                    style={{ borderColor: 'var(--border)' }}
                  >
                    <h3 className="text-sm font-semibold">Filter Pencarian</h3>
                    <button
                      type="button"
                      onClick={() => {
                        setFilterKeyword('');
                        setFilterLocation('ALL');
                        setFilterCategory('ALL');
                        setFilterShift('ALL');
                        setFilterMinRate('');
                      }}
                      className="text-xs font-semibold text-accent-primary hover:underline"
                    >
                      Reset
                    </button>
                  </div>

                  <div>
                    <label
                      htmlFor="filterKwInput"
                      className="block text-xs font-semibold mb-1"
                      style={{ color: 'var(--text)' }}
                    >
                      Kata Kunci Posisi / Perusahaan
                    </label>
                    <input
                      id="filterKwInput"
                      type="search"
                      aria-invalid="false"
                      placeholder="Packer, SPG, Waiter..."
                      value={filterKeyword}
                      onChange={(e) => setFilterKeyword(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border text-xs"
                      style={{
                        backgroundColor: 'var(--bg-soft)',
                        borderColor: 'var(--border)',
                        color: 'var(--text)'
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="filterLocSelect"
                      className="block text-xs font-semibold mb-1"
                      style={{ color: 'var(--text)' }}
                    >
                      Lokasi Kerja
                    </label>
                    <select
                      id="filterLocSelect"
                      aria-invalid="false"
                      value={filterLocation}
                      onChange={(e) => setFilterLocation(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border text-xs"
                      style={{
                        backgroundColor: 'var(--bg-soft)',
                        borderColor: 'var(--border)',
                        color: 'var(--text)'
                      }}
                    >
                      <option value="ALL">Semua Lokasi</option>
                      <option value="Bekasi">Bekasi</option>
                      <option value="Jakarta">Jakarta</option>
                      <option value="ICE BSD">ICE BSD / Tangerang</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="filterCatSelect"
                      className="block text-xs font-semibold mb-1"
                      style={{ color: 'var(--text)' }}
                    >
                      Kategori Pekerjaan
                    </label>
                    <select
                      id="filterCatSelect"
                      aria-invalid="false"
                      value={filterCategory}
                      onChange={(e) => setFilterCategory(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border text-xs"
                      style={{
                        backgroundColor: 'var(--bg-soft)',
                        borderColor: 'var(--border)',
                        color: 'var(--text)'
                      }}
                    >
                      <option value="ALL">Semua Kategori</option>
                      <option value="Logistics & Warehouse">
                        Logistics &amp; Warehouse
                      </option>
                      <option value="Event Staff">Event Staff</option>
                      <option value="Hospitality">Hospitality</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="filterShiftSelect"
                      className="block text-xs font-semibold mb-1"
                      style={{ color: 'var(--text)' }}
                    >
                      Jadwal Shift
                    </label>
                    <select
                      id="filterShiftSelect"
                      aria-invalid="false"
                      value={filterShift}
                      onChange={(e) => setFilterShift(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border text-xs"
                      style={{
                        backgroundColor: 'var(--bg-soft)',
                        borderColor: 'var(--border)',
                        color: 'var(--text)'
                      }}
                    >
                      <option value="ALL">Semua Shift</option>
                      <option value="Morning Shift">Shift Pagi</option>
                      <option value="Night Shift">Shift Malam</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="filterMinRateInput"
                      className="block text-xs font-semibold mb-1"
                      style={{ color: 'var(--text)' }}
                    >
                      Upah Minimum Harian (Rp)
                    </label>
                    <input
                      id="filterMinRateInput"
                      type="number"
                      step="10000"
                      aria-invalid="false"
                      placeholder="Contoh: 160000"
                      value={filterMinRate}
                      onChange={(e) => setFilterMinRate(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border text-xs font-mono-metric"
                      style={{
                        backgroundColor: 'var(--bg-soft)',
                        borderColor: 'var(--border)',
                        color: 'var(--text)'
                      }}
                    />
                  </div>
                </search>
              </aside>

              {/* Right Column: Active Job List + Apply Modal with Document Upload (US-10) */}
              <div className="lg:col-span-9 space-y-6">
                {filteredJobs.length === 0 ? (
                  <div className="harian-surface-card p-8 text-center">
                    <h4 className="text-base font-semibold mb-1">
                      Tidak ada lowongan aktif yang sesuai dengan filter Anda.
                    </h4>
                    <p className="text-xs mb-4">
                      Lowongan yang telah ditutup atau dihapus oleh instansi otomatis disembunyikan dari pencarian aktif.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setFilterKeyword('');
                        setFilterLocation('ALL');
                        setFilterCategory('ALL');
                        setFilterShift('ALL');
                        setFilterMinRate('');
                      }}
                      className="btn-pill-secondary px-5 py-2 text-xs"
                    >
                      Reset Filter Pencarian
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredJobs.map((job) => {
                      const isSelected = job.id === jobDetailModalId;
                      return (
                        <div
                          key={job.id}
                          onClick={() => {
                            setSelectedJobId(job.id);
                            setApplyUploadError('');
                            setJobDetailModalId(job.id);
                          }}
                          className="harian-surface-card p-5 cursor-pointer hover:border-[#1D6FE8] transition"
                          style={{
                            borderColor: isSelected
                              ? 'var(--primary)'
                              : 'var(--border)',
                            borderWidth: isSelected ? '2px' : '1.5px'
                          }}
                        >
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span
                              className="text-[11px] font-mono-metric font-semibold px-2.5 py-0.5 rounded-full"
                              style={{
                                backgroundColor: 'var(--primary-light)',
                                color: 'var(--primary)'
                              }}
                            >
                              Match {job.matchScore}% &bull; Escrow Lunas
                            </span>
                            <span className="text-[11px] font-medium">
                              {job.location}
                            </span>
                          </div>
                          <h4 className="text-base font-semibold">
                            {job.title}
                          </h4>
                          <p className="text-xs mt-0.5">{job.company}</p>

                          <div
                            className="flex items-center justify-between pt-3 mt-3 border-t"
                            style={{ borderColor: 'var(--border)' }}
                          >
                            <div>
                              <div className="text-sm font-bold font-mono-metric text-accent-primary">
                                {formatRupiah(job.rate)}/hari
                              </div>
                              <div className="text-[11px]">{job.workTime}</div>
                            </div>
                            <span className="text-xs font-semibold text-accent-primary">
                              Detail &amp; Unggah Berkas &rarr;
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Popup Window Modal Detail Informasi Lowongan & Unggah Berkas Lamaran (US-10) */}
                {modalJob && (
                  <div
                    onClick={() => setJobDetailModalId(null)}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    style={{
                      backgroundColor: 'rgba(15, 27, 51, 0.48)',
                      backdropFilter: 'blur(6px)'
                    }}
                  >
                    <div
                      onClick={(e) => e.stopPropagation()}
                      className="harian-surface-card max-w-2xl w-full p-6 sm:p-7 max-h-[90vh] overflow-y-auto view-transition-enter"
                    >
                      <div
                        className="flex items-start justify-between gap-3 pb-4 mb-4 border-b"
                        style={{ borderColor: 'var(--border)' }}
                      >
                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-1.5">
                            <span
                              className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full"
                              style={{
                                backgroundColor: 'var(--primary-light)',
                                color: 'var(--primary)'
                              }}
                            >
                              {modalJob.category}
                            </span>
                            <span className="text-[11px] font-medium">
                              Integritas:{' '}
                              <strong style={{ color: 'var(--text)' }}>
                                {modalJob.integrityScore}
                              </strong>
                            </span>
                          </div>
                          <h3 className="heading-tight text-xl sm:text-2xl">
                            {modalJob.title}
                          </h3>
                          <p className="text-xs sm:text-sm mt-0.5">
                            {modalJob.company} &bull; Lokasi:{' '}
                            {modalJob.location}
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() => setJobDetailModalId(null)}
                          className="p-2 rounded-full bg-white/70 hover:bg-white text-[#526382] hover:text-[#091326] transition shrink-0"
                          aria-label="Tutup detail lowongan"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>

                      <div
                        className="p-3.5 rounded-2xl border mb-4 flex items-center justify-between"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.72)',
                          borderColor: 'var(--border)'
                        }}
                      >
                        <div>
                          <div className="text-[11px]">Upah Harian</div>
                          <div className="text-lg sm:text-xl font-bold font-mono-metric text-accent-primary">
                            {formatRupiah(modalJob.rate)}{' '}
                            <span className="text-xs font-normal text-[#5B6B88]">
                              / hari
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-[11px]">
                            Bersih Diterima H+2 (Fee 10%)
                          </div>
                          <div
                            className="text-sm sm:text-base font-bold font-mono-metric"
                            style={{ color: 'var(--text)' }}
                          >
                            {formatRupiah(modalJob.rate * 0.9)}
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div
                          className="p-3 rounded-2xl border"
                          style={{
                            backgroundColor: 'var(--bg-soft)',
                            borderColor: 'var(--border)'
                          }}
                        >
                          <div className="text-[10px]">Jadwal Shift</div>
                          <div
                            className="text-xs sm:text-sm font-semibold font-mono-metric mt-0.5"
                            style={{ color: 'var(--text)' }}
                          >
                            {modalJob.workTime}
                          </div>
                        </div>
                        <div
                          className="p-3 rounded-2xl border"
                          style={{
                            backgroundColor: 'var(--bg-soft)',
                            borderColor: 'var(--border)'
                          }}
                        >
                          <div className="text-[10px]">Kuota &amp; Pelamar</div>
                          <div
                            className="text-xs sm:text-sm font-semibold font-mono-metric mt-0.5"
                            style={{ color: 'var(--text)' }}
                          >
                            {modalJob.applicantsCount} / {modalJob.quota} Kuota
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2 text-xs leading-relaxed mb-5">
                        <p>
                          <strong style={{ color: 'var(--text)' }}>
                            Deskripsi Tugas:
                          </strong>{' '}
                          {modalJob.description}
                        </p>
                        <p>
                          <strong style={{ color: 'var(--text)' }}>
                            Perlengkapan / Dresscode Wajib:
                          </strong>{' '}
                          {modalJob.dresscode}
                        </p>
                        <p>
                          <strong style={{ color: 'var(--text)' }}>
                            Kontak Penanggung Jawab (PIC):
                          </strong>{' '}
                          {modalJob.picName} ({modalJob.picPhone})
                        </p>
                      </div>

                      {/* US-10: Unggah Dokumen Persyaratan Lamaran */}
                      {!alreadyAppliedModal && (
                        <div
                          className="p-4 rounded-2xl border mb-4 space-y-3"
                          style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.78)',
                            borderColor: 'var(--border-subtle)'
                          }}
                        >
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <div>
                              <h4
                                className="text-xs sm:text-sm font-bold"
                                style={{ color: 'var(--text)' }}
                              >
                                Unggah Dokumen Persyaratan Lamaran
                              </h4>
                              <p className="text-[11px]">
                                Format didukung: PDF, JPG, PNG, DOC, DOCX &bull; Maksimal 5 MB per berkas. Berkas otomatis terhubung ke dashboard HRD.
                              </p>
                            </div>
                            <button
                              type="button"
                              onClick={handleQuickFillVerifiedDocs}
                              className="btn-pill-secondary px-3 py-1.5 text-[11px] inline-flex items-center gap-1"
                            >
                              <FileText className="w-3 h-3 text-accent-primary" />
                              <span>Gunakan Berkas Tersimpan</span>
                            </button>
                          </div>

                          {applyUploadError && (
                            <div
                              role="alert"
                              className="p-3 rounded-xl border border-red-400 bg-red-50 text-red-800 text-xs font-semibold flex items-center gap-2"
                            >
                              <AlertCircle className="w-4 h-4 shrink-0" />
                              <span>{applyUploadError}</span>
                            </div>
                          )}

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                            {[
                              {
                                key: 'CV',
                                label: 'CV / Riwayat Hidup *',
                                inputId: 'applyUploadCv'
                              },
                              {
                                key: 'KTP',
                                label: 'Foto / Scan KTP *',
                                inputId: 'applyUploadKtp'
                              },
                              {
                                key: 'Surat Pendukung',
                                label: 'Surat Pendukung (Opsional)',
                                inputId: 'applyUploadSk'
                              }
                            ].map((slot) => {
                              const currentDoc = applyUploadDocs[slot.key];
                              return (
                                <div
                                  key={slot.key}
                                  className="p-3 rounded-xl border flex flex-col justify-between gap-2"
                                  style={{
                                    backgroundColor: 'var(--bg-soft)',
                                    borderColor: currentDoc
                                      ? '#16A34A'
                                      : 'var(--border)'
                                  }}
                                >
                                  <div>
                                    <div
                                      className="text-[11px] font-bold"
                                      style={{ color: 'var(--text)' }}
                                    >
                                      {slot.label}
                                    </div>
                                    {currentDoc ? (
                                      <div className="mt-1">
                                        <div className="text-[11px] font-semibold text-emerald-700 truncate">
                                          {currentDoc.fileName}
                                        </div>
                                        <div className="text-[10px] font-mono-metric text-[#526382]">
                                          {formatFileSize(currentDoc.fileSize)} &bull; Siap Unggah
                                        </div>
                                      </div>
                                    ) : (
                                      <div className="text-[10px] text-[#526382] mt-1">
                                        Belum ada file dipilih
                                      </div>
                                    )}
                                  </div>

                                  <div className="flex items-center gap-1.5">
                                    <input
                                      id={slot.inputId}
                                      type="file"
                                      accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                                      aria-invalid="false"
                                      onChange={(e) =>
                                        handleSelectApplyFile(slot.key, e)
                                      }
                                      className="visually-hidden"
                                    />
                                    <label
                                      htmlFor={slot.inputId}
                                      className="btn-pill-secondary px-2.5 py-1.5 text-[11px] cursor-pointer inline-flex items-center gap-1 flex-1 justify-center"
                                    >
                                      <Upload className="w-3 h-3 text-accent-primary" />
                                      <span>
                                        {currentDoc ? 'Ganti File' : 'Pilih File'}
                                      </span>
                                    </label>
                                    {currentDoc && (
                                      <button
                                        type="button"
                                        onClick={() =>
                                          setApplyUploadDocs((prev) => ({
                                            ...prev,
                                            [slot.key]: null
                                          }))
                                        }
                                        className="p-1.5 rounded-lg bg-white/80 hover:bg-red-50 text-red-600 border border-red-200"
                                        aria-label={`Hapus berkas ${slot.key}`}
                                      >
                                        <X className="w-3 h-3" />
                                      </button>
                                    )}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      <div
                        className="pt-4 border-t flex flex-wrap items-center justify-end gap-2.5"
                        style={{ borderColor: 'var(--border)' }}
                      >
                        <button
                          type="button"
                          onClick={() => setJobDetailModalId(null)}
                          className="btn-pill-secondary px-4 py-2.5 text-xs"
                        >
                          Tutup
                        </button>
                        {alreadyAppliedModal ? (
                          <button
                            type="button"
                            onClick={() => {
                              setJobDetailModalId(null);
                              setWorkerSubTab('applications');
                            }}
                            className="btn-pill-primary px-5 py-2.5 text-xs"
                          >
                            Sudah Dilamar &bull; Pantau Status &rarr;
                          </button>
                        ) : (
                          <button
                            type="button"
                            onClick={() => {
                              const ok = handleApplyToJob(modalJob);
                              if (ok) setJobDetailModalId(null);
                            }}
                            className="btn-pill-primary px-6 py-2.5 text-xs inline-flex items-center gap-1.5"
                          >
                            <Upload className="w-3.5 h-3.5" />
                            <span>Unggah &amp; Kirim Lamaran</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* Worker Sub-Tab: Real-Time Application Tracking, Attached Docs & H+2 Salary Payout */
            <div className="harian-surface-card p-6 sm:p-8">
              <div
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 mb-6 border-b"
                style={{ borderColor: 'var(--border)' }}
              >
                <div>
                  <h3 className="heading-tight text-xl">
                    Pelacakan Status Lamaran Real-Time &amp; Pencairan Gaji H+2
                  </h3>
                  <p className="text-xs sm:text-sm">
                    Berkas persyaratan Anda terhubung langsung ke HRD. Lamaran berstatus Pending dapat dibatalkan kapan saja.
                  </p>
                </div>
                <span
                  className="text-xs font-mono-metric font-semibold px-3.5 py-1.5 rounded-full"
                  style={{
                    backgroundColor: 'var(--primary-light)',
                    color: 'var(--primary)'
                  }}
                >
                  Rekening Tujuan: {workerProfile.bankAccount}
                </span>
              </div>

              <div className="space-y-4">
                {applications.map((app) => {
                  const netSalary = app.rate * 0.9;
                  return (
                    <div
                      key={app.id}
                      className="p-5 rounded-2xl border flex flex-col lg:flex-row lg:items-center justify-between gap-4"
                      style={{
                        backgroundColor: 'var(--bg-soft)',
                        borderColor: 'var(--border)'
                      }}
                    >
                      <div className="space-y-1.5">
                        <div className="flex flex-wrap items-center gap-2">
                          <span
                            className="text-xs font-semibold px-3 py-0.5 rounded-full"
                            style={{
                              backgroundColor: 'var(--primary-light)',
                              color: 'var(--primary)'
                            }}
                          >
                            Status: {app.status}
                          </span>
                          <span className="text-xs">{app.appliedAt}</span>
                        </div>
                        <h4 className="text-base font-semibold">
                          {app.jobTitle}
                        </h4>
                        <div className="text-xs">
                          {app.company} &bull; Upah Kotor:{' '}
                          <span className="font-mono-metric">
                            {formatRupiah(app.rate)}
                          </span>{' '}
                          &bull; Bersih Diterima H+2 (Potong 10%):{' '}
                          <strong className="font-mono-metric text-accent-primary">
                            {formatRupiah(netSalary)}
                          </strong>
                        </div>

                        {Array.isArray(app.documents) &&
                          app.documents.length > 0 && (
                            <div className="flex flex-wrap items-center gap-1.5 pt-1">
                              <span className="text-[11px] font-semibold text-[#526382]">
                                Berkas Terkirim:
                              </span>
                              {app.documents.map((doc) => (
                                <button
                                  key={doc.id}
                                  type="button"
                                  onClick={() =>
                                    setPreviewDocModal({
                                      doc,
                                      ownerName: workerProfile.fullName
                                    })
                                  }
                                  className="px-2.5 py-1 rounded-lg bg-white/85 hover:bg-white border border-[#CBDDFC] text-[11px] font-semibold text-[#1D6FE8] inline-flex items-center gap-1 transition"
                                >
                                  <FileText className="w-3 h-3" />
                                  <span>
                                    {doc.docType}: {doc.fileName}
                                  </span>
                                </button>
                              ))}
                            </div>
                          )}
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        {app.status === 'Pending' ? (
                          <button
                            type="button"
                            onClick={() => handleCancelApplication(app.id)}
                            className="btn-pill-secondary px-4 py-2 text-xs"
                          >
                            Batalkan Lamaran
                          </button>
                        ) : (
                          <span
                            className="text-xs font-semibold px-4 py-2 rounded-full border bg-white"
                            style={{
                              borderColor: 'var(--border)',
                              color: 'var(--primary)'
                            }}
                          >
                            {app.status === 'Gaji Cair H+2'
                              ? 'Telah Ditransfer ke Rekening'
                              : 'Keputusan Terkunci'}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>
    );
  };

  // ============================================================================
  // 13. RENDER VIEW 5: PORTAL PERUSAHAAN / HRD (US-07, US-08, US-12, MFEP, US-17)
  // ============================================================================
  const renderHrdPortalView = () => {
    const totalEscrowHeld = jobs
      .filter((j) => j.escrowStage === 'HELD')
      .reduce((acc, j) => acc + Number(j.escrowHeld || 0), 0);
    const totalPaidOutH2 = jobs
      .filter((j) => j.escrowStage === 'PAID_H2')
      .reduce((acc, j) => acc + Number(j.escrowHeld || 0), 0);

    return (
      <section
        className="min-h-screen pt-24 pb-20 px-4 sm:px-8 view-transition-enter"
        style={{ backgroundColor: 'var(--bg-soft)' }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar HRD */}
          <aside className="lg:col-span-3 harian-surface-card p-6 self-start flex flex-col justify-between min-h-[560px]">
            <div className="space-y-5">
              <div
                className="pb-4 border-b"
                style={{ borderColor: 'var(--border)' }}
              >
                <div className="text-xs font-bold text-accent-primary">
                  PORTAL INSTANSI &amp; HRD
                </div>
                <div
                  className="text-lg font-semibold mt-0.5"
                  style={{ color: 'var(--text)' }}
                >
                  {hrdProfile.companyName}
                </div>
                <div className="text-[11px] text-[#526382] mt-0.5">
                  {hrdProfile.industry} &bull; {hrdProfile.picContact}
                </div>
                <div className="text-xs mt-3">Saldo HarianPay Korporat:</div>
                <div className="text-lg font-bold font-mono-metric text-accent-primary">
                  {formatRupiah(hrdWalletBalance)}
                </div>
                <button
                  type="button"
                  onClick={() => openPaymentGatewayModal('TOPUP', 2500000)}
                  className="mt-2 text-xs font-semibold text-accent-primary hover:underline inline-flex items-center gap-1"
                >
                  <CreditCard className="w-3.5 h-3.5" />
                  <span>+ Top-Up via Payment Gateway</span>
                </button>
              </div>

              <div className="space-y-2">
                {[
                  {
                    id: 'jobs',
                    label: 'Kelola Lowongan',
                    badge: jobs.length
                  },
                  {
                    id: 'applicants',
                    label: 'Kelola Pelamar',
                    badge: candidates.length
                  },
                  {
                    id: 'mfep',
                    label: 'Seleksi Kandidat MFEP',
                    badge: 'Otomatis'
                  },
                  {
                    id: 'escrow',
                    label: 'Pemroses Pembayaran & Escrow',
                    badge: 'HarianPay'
                  }
                ].map((tab) => {
                  const active = hrdSubTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setHrdSubTab(tab.id)}
                      className="w-full text-left px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition flex items-center justify-between"
                      style={{
                        backgroundColor: active
                          ? 'var(--primary)'
                          : 'transparent',
                        color: active ? '#FFFFFF' : 'var(--text)'
                      }}
                    >
                      <span>{tab.label}</span>
                      <span
                        className="text-[11px] font-mono-metric px-2 py-0.5 rounded-full"
                        style={{
                          backgroundColor: active
                            ? 'rgba(255,255,255,0.2)'
                            : 'var(--primary-light)',
                          color: active ? '#FFFFFF' : 'var(--primary)'
                        }}
                      >
                        {tab.badge}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div
              className="pt-6 border-t space-y-2.5"
              style={{ borderColor: 'var(--border)' }}
            >
              <button
                type="button"
                onClick={() => {
                  setCreateJobError('');
                  setShowCreateJobModal(true);
                }}
                className="btn-pill-primary w-full py-3 text-xs sm:text-sm inline-flex items-center justify-center gap-1.5"
              >
                <Plus className="w-4 h-4" />
                <span>Pasang Lowongan Baru</span>
              </button>
              <button
                type="button"
                onClick={() => openProfileEditor('hrd')}
                className="btn-pill-secondary w-full py-2.5 text-xs inline-flex items-center justify-center gap-1.5"
              >
                <Pencil className="w-3.5 h-3.5 text-accent-primary" />
                <span>Perbarui Profil Instansi</span>
              </button>
              <button
                type="button"
                onClick={handleDownloadCsv}
                className="btn-pill-secondary w-full py-2.5 text-xs inline-flex items-center justify-center gap-1.5"
              >
                <Download className="w-4 h-4 text-accent-primary" />
                <span>Unduh Laporan Rekrutmen (CSV)</span>
              </button>
            </div>
          </aside>

          {/* Right Main HRD Content */}
          <div className="lg:col-span-9">
            {/* TAB 1: KELOLA LOWONGAN (US-08: Create, Edit, Close/Reopen, Delete) */}
            {hrdSubTab === 'jobs' && (
              <div className="harian-surface-card p-6 sm:p-8">
                <div
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 mb-5 border-b"
                  style={{ borderColor: 'var(--border)' }}
                >
                  <div>
                    <h2 className="heading-tight text-2xl">
                      Kelola Lowongan Pekerjaan
                    </h2>
                    <p className="text-xs sm:text-sm">
                      Edit detail lowongan, tutup rekrutmen, atau hapus lowongan. Lowongan yang ditutup/dihapus otomatis tidak muncul di pencarian aktif pelamar.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setCreateJobError('');
                      setShowCreateJobModal(true);
                    }}
                    className="btn-pill-primary px-5 py-2.5 text-xs sm:text-sm self-start sm:self-auto"
                  >
                    + Pasang Lowongan Baru
                  </button>
                </div>

                {/* Status Filter Pills */}
                <div className="flex flex-wrap items-center gap-2 mb-5">
                  {[
                    { id: 'ALL', label: `Semua (${jobs.length})` },
                    {
                      id: 'OPEN',
                      label: `Aktif (${
                        jobs.filter((j) => (j.status || 'OPEN') === 'OPEN').length
                      })`
                    },
                    {
                      id: 'CLOSED',
                      label: `Ditutup (${
                        jobs.filter((j) => j.status === 'CLOSED').length
                      })`
                    },
                    {
                      id: 'COMPLETED',
                      label: `Selesai H+2 (${
                        jobs.filter((j) => j.status === 'COMPLETED').length
                      })`
                    }
                  ].map((pill) => (
                    <button
                      key={pill.id}
                      type="button"
                      onClick={() => setHrdJobStatusFilter(pill.id)}
                      className={
                        hrdJobStatusFilter === pill.id
                          ? 'btn-pill-primary px-3.5 py-1.5 text-xs'
                          : 'btn-pill-secondary px-3.5 py-1.5 text-xs'
                      }
                    >
                      {pill.label}
                    </button>
                  ))}
                </div>

                <div className="space-y-3.5">
                  {hrdFilteredJobs.length === 0 ? (
                    <div className="p-8 text-center rounded-2xl border border-dashed border-[#CBDDFC]">
                      <p className="text-xs sm:text-sm font-semibold">
                        Tidak ada lowongan pada kategori status ini.
                      </p>
                    </div>
                  ) : (
                    hrdFilteredJobs.map((job) => {
                      const isClosed = job.status === 'CLOSED';
                      const isCompleted =
                        job.escrowStage === 'PAID_H2' ||
                        job.status === 'COMPLETED';

                      return (
                        <div
                          key={job.id}
                          className="p-5 rounded-2xl border flex flex-col lg:flex-row lg:items-center justify-between gap-4"
                          style={{
                            backgroundColor: isClosed
                              ? 'rgba(241, 245, 249, 0.85)'
                              : 'var(--bg-soft)',
                            borderColor: 'var(--border)'
                          }}
                        >
                          <div>
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                              <span
                                className="text-xs font-semibold px-3 py-0.5 rounded-full"
                                style={{
                                  backgroundColor: isClosed
                                    ? 'rgba(254, 226, 226, 0.9)'
                                    : isCompleted
                                    ? 'rgba(220, 252, 231, 0.9)'
                                    : 'var(--primary-light)',
                                  color: isClosed
                                    ? '#B91C1C'
                                    : isCompleted
                                    ? '#15803D'
                                    : 'var(--primary)'
                                }}
                              >
                                {isClosed
                                  ? 'DITUTUP • DISEMBUNYIKAN DARI PELAMAR'
                                  : isCompleted
                                  ? 'SELESAI • GAJI CAIR H+2'
                                  : 'AKTIF • ESCROW TERKUNCI'}
                              </span>
                              <span className="text-xs font-mono-metric">
                                Dana Ditahan: {formatRupiah(job.escrowHeld)}
                              </span>
                            </div>
                            <h4 className="text-base font-semibold">
                              {job.title}
                            </h4>
                            <div className="text-xs mt-0.5">
                              {job.company} &bull; {job.location} &bull;{' '}
                              <strong className="font-mono-metric text-accent-primary">
                                {formatRupiah(job.rate)}/hari
                              </strong>{' '}
                              &bull; {job.workTime} &bull; {job.applicantsCount}{' '}
                              Pelamar ({job.quota} Kuota)
                            </div>
                          </div>

                          <div className="flex flex-wrap items-center gap-2 shrink-0">
                            <button
                              type="button"
                              onClick={() => handleOpenEditJob(job)}
                              className="btn-pill-secondary px-3.5 py-2 text-xs inline-flex items-center gap-1"
                            >
                              <Pencil className="w-3.5 h-3.5 text-accent-primary" />
                              <span>Edit</span>
                            </button>

                            {!isCompleted &&
                              (isClosed ? (
                                <button
                                  type="button"
                                  onClick={() =>
                                    setConfirmJobActionModal({
                                      mode: 'reopen',
                                      job
                                    })
                                  }
                                  className="btn-pill-secondary px-3.5 py-2 text-xs inline-flex items-center gap-1 text-emerald-700"
                                >
                                  <Unlock className="w-3.5 h-3.5" />
                                  <span>Buka Kembali</span>
                                </button>
                              ) : (
                                <button
                                  type="button"
                                  onClick={() =>
                                    setConfirmJobActionModal({
                                      mode: 'close',
                                      job
                                    })
                                  }
                                  className="btn-pill-secondary px-3.5 py-2 text-xs inline-flex items-center gap-1 text-amber-700"
                                >
                                  <Lock className="w-3.5 h-3.5" />
                                  <span>Tutup</span>
                                </button>
                              ))}

                            <button
                              type="button"
                              onClick={() =>
                                setConfirmJobActionModal({
                                  mode: 'delete',
                                  job
                                })
                              }
                              className="btn-pill-secondary px-3.5 py-2 text-xs inline-flex items-center gap-1 text-red-600"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                              <span>Hapus</span>
                            </button>

                            <button
                              type="button"
                              onClick={() => {
                                setApplicantRoleFilter(job.title);
                                setHrdSubTab('applicants');
                              }}
                              className="btn-pill-primary px-3.5 py-2 text-xs"
                            >
                              Pelamar
                            </button>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            )}

            {/* TAB 2: KELOLA PELAMAR (US-12: Full CRUD + Document Links & Viewer) */}
            {hrdSubTab === 'applicants' && (
              <div className="harian-surface-card p-6 sm:p-8">
                <div
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 mb-5 border-b"
                  style={{ borderColor: 'var(--border)' }}
                >
                  <div>
                    <span className="text-xs font-semibold text-accent-primary">
                      Manajemen Kandidat &amp; Pemeriksaan Berkas Persyaratan
                    </span>
                    <h2 className="heading-tight text-2xl">Kelola Pelamar</h2>
                    <p className="text-xs sm:text-sm">
                      Lihat, tambah, ubah, dan hapus data pelamar beserta tautan berkas CV, KTP, dan Surat Pendukung secara konsisten.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleOpenCreateApplicant}
                    className="btn-pill-primary px-5 py-2.5 text-xs sm:text-sm inline-flex items-center gap-1.5 self-start sm:self-auto"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Tambah Pelamar</span>
                  </button>
                </div>

                {/* Search & Filter Bar */}
                <search className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
                  <div>
                    <label
                      htmlFor="searchApplicantInput"
                      className="block text-[11px] font-semibold mb-1"
                      style={{ color: 'var(--text)' }}
                    >
                      Cari Nama / Kontak / Domisili
                    </label>
                    <input
                      id="searchApplicantInput"
                      type="search"
                      aria-invalid="false"
                      placeholder="Ketik nama atau nomor WA..."
                      value={applicantSearchQuery}
                      onChange={(e) => setApplicantSearchQuery(e.target.value)}
                      className="frosted-input w-full px-3.5 py-2 rounded-xl text-xs focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="filterApplicantRole"
                      className="block text-[11px] font-semibold mb-1"
                      style={{ color: 'var(--text)' }}
                    >
                      Filter Posisi Lowongan
                    </label>
                    <select
                      id="filterApplicantRole"
                      aria-invalid="false"
                      value={applicantRoleFilter}
                      onChange={(e) => setApplicantRoleFilter(e.target.value)}
                      className="frosted-input w-full px-3.5 py-2 rounded-xl text-xs focus:outline-none"
                    >
                      <option value="ALL">Semua Posisi Lowongan</option>
                      {Array.from(
                        new Set([
                          ...jobs.map((j) => j.title),
                          ...candidates.map((c) => c.roleTarget)
                        ])
                      ).map((roleTitle) => (
                        <option key={roleTitle} value={roleTitle}>
                          {roleTitle}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="filterApplicantStatus"
                      className="block text-[11px] font-semibold mb-1"
                      style={{ color: 'var(--text)' }}
                    >
                      Filter Status Kandidat
                    </label>
                    <select
                      id="filterApplicantStatus"
                      aria-invalid="false"
                      value={applicantStatusFilter}
                      onChange={(e) => setApplicantStatusFilter(e.target.value)}
                      className="frosted-input w-full px-3.5 py-2 rounded-xl text-xs focus:outline-none"
                    >
                      <option value="ALL">Semua Status</option>
                      <option value="Pending">Pending</option>
                      <option value="Diterima">Diterima</option>
                      <option value="Ditolak">Ditolak</option>
                    </select>
                  </div>
                </search>

                {/* Applicants CRUD List */}
                <div className="space-y-3.5">
                  {filteredApplicantsList.length === 0 ? (
                    <div className="p-8 text-center rounded-2xl border border-dashed border-[#CBDDFC]">
                      <p className="text-xs sm:text-sm font-semibold mb-3">
                        Tidak ada data pelamar yang cocok dengan pencarian Anda.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setApplicantSearchQuery('');
                          setApplicantRoleFilter('ALL');
                          setApplicantStatusFilter('ALL');
                        }}
                        className="btn-pill-secondary px-4 py-2 text-xs"
                      >
                        Reset Pencarian
                      </button>
                    </div>
                  ) : (
                    filteredApplicantsList.map((cand) => (
                      <div
                        key={cand.id}
                        className="p-5 rounded-2xl border flex flex-col lg:flex-row lg:items-center justify-between gap-4"
                        style={{
                          backgroundColor: 'var(--bg-soft)',
                          borderColor: 'var(--border)'
                        }}
                      >
                        <div className="space-y-1.5 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span
                              className="text-xs font-semibold px-3 py-0.5 rounded-full"
                              style={{
                                backgroundColor:
                                  cand.status === 'Diterima'
                                    ? 'rgba(220, 252, 231, 0.92)'
                                    : cand.status === 'Ditolak'
                                    ? 'rgba(254, 226, 226, 0.92)'
                                    : 'var(--primary-light)',
                                color:
                                  cand.status === 'Diterima'
                                    ? '#15803D'
                                    : cand.status === 'Ditolak'
                                    ? '#B91C1C'
                                    : 'var(--primary)'
                              }}
                            >
                              {cand.status}
                            </span>
                            <span className="text-xs font-mono-metric font-semibold text-accent-primary">
                              Skor MFEP: {cand.mfepScore}
                            </span>
                            <span className="text-[11px] text-[#526382]">
                              {cand.appliedAt || 'Terdaftar'}
                            </span>
                          </div>

                          <h4 className="text-base font-semibold">
                            {cand.name}
                          </h4>

                          <div className="text-xs text-[#334463]">
                            Posisi: <strong>{cand.roleTarget}</strong> &bull;{' '}
                            {cand.phone} &bull; {cand.city}
                          </div>

                          {/* Clickable Requirement Document Links */}
                          <div className="flex flex-wrap items-center gap-1.5 pt-1">
                            <span className="text-[11px] font-semibold text-[#526382]">
                              Tautan Berkas ({(cand.documents || []).length}):
                            </span>
                            {Array.isArray(cand.documents) &&
                            cand.documents.length > 0 ? (
                              cand.documents.map((doc) => (
                                <button
                                  key={doc.id}
                                  type="button"
                                  onClick={() =>
                                    setPreviewDocModal({
                                      doc,
                                      ownerName: cand.name
                                    })
                                  }
                                  className="px-2.5 py-1 rounded-lg bg-white/90 hover:bg-white border border-[#CBDDFC] text-[11px] font-semibold text-[#1D6FE8] inline-flex items-center gap-1 transition"
                                >
                                  <FileText className="w-3 h-3" />
                                  <span>
                                    {doc.docType}: {doc.fileName}
                                  </span>
                                </button>
                              ))
                            ) : (
                              <span className="text-[11px] italic text-[#526382]">
                                Belum ada berkas terlampir
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-2 shrink-0">
                          <button
                            type="button"
                            onClick={() => setApplicantDetailModal(cand)}
                            className="btn-pill-secondary px-3 py-2 text-xs inline-flex items-center gap-1"
                          >
                            <Eye className="w-3.5 h-3.5 text-accent-primary" />
                            <span>Detail</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => handleOpenEditApplicant(cand)}
                            className="btn-pill-secondary px-3 py-2 text-xs inline-flex items-center gap-1"
                          >
                            <Pencil className="w-3.5 h-3.5 text-accent-primary" />
                            <span>Edit</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => setConfirmDeleteApplicant(cand)}
                            className="btn-pill-secondary px-3 py-2 text-xs inline-flex items-center gap-1 text-red-600"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            <span>Hapus</span>
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}

            {/* TAB 3: SELEKSI KANDIDAT MFEP */}
            {hrdSubTab === 'mfep' && (
              <div className="harian-surface-card p-6 sm:p-8">
                <div
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 mb-6 border-b"
                  style={{ borderColor: 'var(--border)' }}
                >
                  <div>
                    <span className="text-xs font-semibold text-accent-primary">
                      Multi-Factor Evaluation Process (MFEP)
                    </span>
                    <h2 className="heading-tight text-2xl">
                      Kalkulator &amp; Pemeringkatan Kandidat Otomatis
                    </h2>
                    <p className="text-xs sm:text-sm">
                      Sesuaikan bobot kriteria di bawah untuk melihat transparansi perhitungan matematika MFEP secara langsung.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleDownloadCsv}
                    className="btn-pill-secondary px-4 py-2.5 text-xs inline-flex items-center gap-1.5 self-start sm:self-auto"
                  >
                    <FileSpreadsheet className="w-4 h-4 text-accent-primary" />
                    <span>Generate Laporan CSV (&le; 10s)</span>
                  </button>
                </div>

                {/* Interactive MFEP Weight Sliders */}
                <div
                  className="p-4 sm:p-5 rounded-2xl border mb-6 grid grid-cols-2 sm:grid-cols-4 gap-4"
                  style={{
                    backgroundColor: 'var(--bg-soft)',
                    borderColor: 'var(--border)'
                  }}
                >
                  {[
                    { key: 'exp', label: 'Pengalaman' },
                    { key: 'avail', label: 'Ketersediaan Shift' },
                    { key: 'dist', label: 'Jarak Domisili' },
                    { key: 'doc', label: 'Kelengkapan Berkas' }
                  ].map((f) => (
                    <div key={f.key}>
                      <div className="flex items-center justify-between text-xs font-semibold mb-1">
                        <label
                          htmlFor={`mfepSlider_${f.key}`}
                          style={{ color: 'var(--text)' }}
                        >
                          {f.label}
                        </label>
                        <span className="font-mono-metric text-accent-primary">
                          {mfepWeights[f.key]}%
                        </span>
                      </div>
                      <input
                        id={`mfepSlider_${f.key}`}
                        type="range"
                        min="5"
                        max="70"
                        step="5"
                        aria-invalid="false"
                        value={mfepWeights[f.key]}
                        onChange={(e) =>
                          setMfepWeights({
                            ...mfepWeights,
                            [f.key]: Number(e.target.value)
                          })
                        }
                        className="w-full accent-[#1D6FE8]"
                      />
                    </div>
                  ))}
                </div>

                {/* Ranked Candidates List */}
                <div className="space-y-3.5">
                  {rankedCandidates.map((cand, idx) => (
                    <div
                      key={cand.id}
                      className="p-5 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                      style={{
                        backgroundColor: 'var(--bg-soft)',
                        borderColor: 'var(--border)'
                      }}
                    >
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span
                            className="text-xs font-mono-metric font-bold px-3 py-0.5 rounded-full"
                            style={{
                              backgroundColor: 'var(--primary-light)',
                              color: 'var(--primary)'
                            }}
                          >
                            Rank #{idx + 1} &bull; Skor MFEP: {cand.mfepScore}
                          </span>
                          <span
                            className="text-xs font-semibold"
                            style={{ color: 'var(--text)' }}
                          >
                            Status: {cand.status}
                          </span>
                        </div>
                        <h4 className="text-base font-semibold">{cand.name}</h4>
                        <div className="text-xs text-[#526382]">
                          Posisi: {cand.roleTarget} &bull; Berkas:{' '}
                          {(cand.documents || []).length} Dokumen
                        </div>
                        <div className="text-xs font-mono-metric mt-1">
                          Rumus: Exp({cand.weightedExp}) + Shift(
                          {cand.weightedAvail}) + Jarak({cand.weightedDist}) +
                          Berkas({cand.weightedDoc}) ={' '}
                          <strong className="text-accent-primary">
                            {cand.mfepScore}
                          </strong>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          type="button"
                          onClick={() =>
                            handleCandidateDecision(cand.id, 'Diterima')
                          }
                          className="btn-pill-primary px-4 py-2 text-xs"
                        >
                          Terima
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            handleCandidateDecision(cand.id, 'Ditolak')
                          }
                          className="btn-pill-secondary px-4 py-2 text-xs"
                        >
                          Tolak
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 4: PEMROSES PEMBAYARAN HARIANPAY & ESCROW H+2 (US-17) */}
            {hrdSubTab === 'escrow' && (
              <div className="space-y-6">
                <div className="harian-surface-card p-6 sm:p-8">
                  <div
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 mb-6 border-b"
                    style={{ borderColor: 'var(--border)' }}
                  >
                    <div>
                      <span className="text-xs font-semibold text-accent-primary">
                        Pemroses Pembayaran Terintegrasi &amp; Rekening Bersama (US-17)
                      </span>
                      <h2 className="heading-tight text-2xl">
                        HarianPay Payment Gateway &amp; Pencairan Gaji H+2
                      </h2>
                      <p className="text-xs sm:text-sm">
                        Kelola pengisian saldo korporat via Virtual Account / QRIS, penguncian dana Escrow lowongan, dan distribusi upah bersih 90%.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => openPaymentGatewayModal('TOPUP', 2500000)}
                      className="btn-pill-primary px-5 py-2.5 text-xs sm:text-sm inline-flex items-center gap-1.5 self-start sm:self-auto"
                    >
                      <CreditCard className="w-4 h-4" />
                      <span>+ Top-Up / Bayar via Gateway</span>
                    </button>
                  </div>

                  {/* Summary Metrics */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div
                      className="p-4 rounded-2xl border"
                      style={{
                        backgroundColor: 'var(--bg-soft)',
                        borderColor: 'var(--border)'
                      }}
                    >
                      <div className="text-xs">Saldo Korporat Tersedia</div>
                      <div className="text-xl font-bold font-mono-metric text-accent-primary mt-1">
                        {formatRupiah(hrdWalletBalance)}
                      </div>
                      <div className="text-[11px] text-[#526382] mt-1">
                        Siap dikunci untuk lowongan baru
                      </div>
                    </div>

                    <div
                      className="p-4 rounded-2xl border"
                      style={{
                        backgroundColor: 'var(--bg-soft)',
                        borderColor: 'var(--border)'
                      }}
                    >
                      <div className="text-xs">Total Dana Ditahan di Escrow</div>
                      <div
                        className="text-xl font-bold font-mono-metric mt-1"
                        style={{ color: 'var(--text)' }}
                      >
                        {formatRupiah(totalEscrowHeld)}
                      </div>
                      <div className="text-[11px] text-[#526382] mt-1">
                        Dijamin 100% oleh HarianPay
                      </div>
                    </div>

                    <div
                      className="p-4 rounded-2xl border"
                      style={{
                        backgroundColor: 'var(--bg-soft)',
                        borderColor: 'var(--border)'
                      }}
                    >
                      <div className="text-xs">Total Upah Telah Dicairkan (H+2)</div>
                      <div className="text-xl font-bold font-mono-metric text-emerald-700 mt-1">
                        {formatRupiah(totalPaidOutH2)}
                      </div>
                      <div className="text-[11px] text-[#526382] mt-1">
                        Termasuk kliring otomatis Service Fee 10%
                      </div>
                    </div>
                  </div>

                  {/* Job Escrow Disbursement List */}
                  <h3 className="text-sm font-bold mb-3">
                    Status Penguncian Escrow per Lowongan
                  </h3>
                  <div className="space-y-3.5">
                    {jobs.map((job) => {
                      const serviceFee = job.escrowHeld * 0.1;
                      const workerNet = job.escrowHeld * 0.9;
                      const isClosedRefunded = job.status === 'CLOSED';
                      return (
                        <div
                          key={job.id}
                          className="p-5 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                          style={{
                            backgroundColor: 'var(--bg-soft)',
                            borderColor: 'var(--border)'
                          }}
                        >
                          <div>
                            <div className="text-xs font-mono-metric font-semibold text-accent-primary mb-1">
                              {job.escrowStage === 'PAID_H2'
                                ? 'STATUS: DANA TELAH DICAIRKAN KE PEKERJA (H+2)'
                                : isClosedRefunded
                                ? 'STATUS: LOWONGAN DITUTUP • ESCROW DIKEMBALIKAN'
                                : 'STATUS: DANA TERKUNCI DI ESCROW HARIANPAY'}
                            </div>
                            <h4 className="text-base font-semibold">
                              {job.title} ({job.quota} Kuota Pekerja)
                            </h4>
                            <div className="text-xs font-mono-metric mt-1">
                              Total Ditahan: {formatRupiah(job.escrowHeld)} &rarr;
                              Bersih ke Pekerja (90%):{' '}
                              <strong style={{ color: 'var(--text)' }}>
                                {formatRupiah(workerNet)}
                              </strong>{' '}
                              | Biaya Layanan (10%): {formatRupiah(serviceFee)}
                            </div>
                          </div>

                          <div className="shrink-0">
                            {job.escrowStage === 'PAID_H2' ? (
                              <span
                                className="inline-block text-xs font-semibold px-4 py-2 rounded-full"
                                style={{
                                  backgroundColor: 'var(--primary-light)',
                                  color: 'var(--primary)'
                                }}
                              >
                                Lunas Terdistribusi
                              </span>
                            ) : isClosedRefunded ? (
                              <span className="inline-block text-xs font-semibold px-4 py-2 rounded-full bg-slate-200 text-slate-700">
                                Ditutup (Refunded)
                              </span>
                            ) : (
                              <button
                                type="button"
                                onClick={() => handleReleaseEscrowH2(job.id)}
                                className="btn-pill-primary px-5 py-2.5 text-xs"
                              >
                                Tandai Selesai &amp; Cairkan Gaji H+2
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Payment Processor Transaction Ledger */}
                <div className="harian-surface-card p-6 sm:p-8">
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#DCE8FD]">
                    <div>
                      <h3 className="heading-tight text-lg">
                        Riwayat Mutasi &amp; Bukti Pemroses Pembayaran
                      </h3>
                      <p className="text-xs">
                        Seluruh transaksi Payment Gateway (Top-Up, Penguncian Escrow, Refund, dan Pencairan H+2) tercatat otomatis.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {paymentTransactions.map((tx) => (
                      <div
                        key={tx.id}
                        className="p-4 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                        style={{
                          backgroundColor: 'var(--bg-soft)',
                          borderColor: 'var(--border)'
                        }}
                      >
                        <div>
                          <div className="flex flex-wrap items-center gap-2 text-xs">
                            <span className="font-mono-metric font-bold text-accent-primary">
                              {tx.invoiceId}
                            </span>
                            <span>&bull;</span>
                            <span>{tx.createdAt}</span>
                            <span
                              className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold"
                              style={{
                                backgroundColor: 'var(--primary-light)',
                                color: 'var(--primary)'
                              }}
                            >
                              {tx.status}
                            </span>
                          </div>
                          <div
                            className="text-sm font-semibold mt-0.5"
                            style={{ color: 'var(--text)' }}
                          >
                            {tx.title}
                          </div>
                          <div className="text-xs text-[#526382]">
                            Metode: {tx.method}
                          </div>
                        </div>

                        <div className="flex items-center gap-3 shrink-0">
                          <span
                            className="text-sm font-bold font-mono-metric"
                            style={{
                              color:
                                tx.type === 'TOP_UP' ||
                                tx.type === 'ESCROW_REFUND'
                                  ? '#15803D'
                                  : 'var(--text)'
                            }}
                          >
                            {tx.type === 'TOP_UP' || tx.type === 'ESCROW_REFUND'
                              ? '+'
                              : ''}
                            {formatRupiah(tx.amount)}
                          </span>
                          <button
                            type="button"
                            onClick={() => setReceiptPreviewTx(tx)}
                            className="btn-pill-secondary px-3 py-1.5 text-xs inline-flex items-center gap-1"
                          >
                            <FileText className="w-3.5 h-3.5 text-accent-primary" />
                            <span>Nota</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  };

  // ============================================================================
  // 14. MAIN COMPONENT RETURN & MODALS
  // ============================================================================
  return (
    <div className="navos-ambient-canvas min-h-screen relative">
      <GlobalLightThemeStyles />
      <NavosSilkWaveBackdrop />

      {/* INITIAL WEBSITE OPEN FROSTED REVEAL CURTAIN */}
      {showInitialBootSplash && (
        <div className="initial-boot-splash">
          <div className="initial-boot-logo-pill flex flex-col items-center gap-2">
            <HarianLogo size="md" />
            <span className="text-[11px] font-mono-metric font-semibold tracking-widest uppercase text-[#1D6FE8]">
              Daily Work &bull; Escrow H+2
            </span>
          </div>
        </div>
      )}

      {renderStickyNavbar()}

      <div className="relative z-10">
        {activeView === 'landing' && renderLandingView()}
        {activeView === 'register' && renderRegisterView()}
        {activeView === 'onboarding-worker' && renderWorkerOnboardingView()}
        {activeView === 'onboarding-hrd' && renderHrdOnboardingView()}
        {activeView === 'login' && renderLoginView()}
        {activeView === 'profile' && renderProfileView()}
        {activeView === 'worker' && renderWorkerPortalView()}
        {activeView === 'hrd' && renderHrdPortalView()}
      </div>

      {/* MODAL: FOOTER INFO (TENTANG, KONTAK, KEBIJAKAN PRIVASI) */}
      {footerModalKey && FOOTER_INFO_CONTENT[footerModalKey] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(15, 27, 51, 0.45)' }}
        >
          <div className="harian-surface-card max-w-md w-full p-6 sm:p-8 view-transition-enter">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E4EAF5]">
              <h3 className="heading-tight text-lg">
                {FOOTER_INFO_CONTENT[footerModalKey].title}
              </h3>
              <button
                type="button"
                onClick={() => setFooterModalKey(null)}
                className="p-1.5 rounded-full hover:bg-white/60"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed mb-6">
              {FOOTER_INFO_CONTENT[footerModalKey].body}
            </p>
            <button
              type="button"
              onClick={() => setFooterModalKey(null)}
              className="btn-pill-primary w-full py-2.5 text-xs sm:text-sm"
            >
              Tutup Informasi
            </button>
          </div>
        </div>
      )}

      {/* MODAL: SYARAT & KETENTUAN (S&K) BERGAYA DOKUMEN PDF VIEWER */}
      {showTermsServiceModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5"
          style={{ backgroundColor: 'rgba(15, 27, 51, 0.55)' }}
        >
          <div className="harian-surface-card max-w-2xl w-full overflow-hidden flex flex-col max-h-[92vh] view-transition-enter">
            {/* PDF Viewer Top Toolbar */}
            <div
              className="px-5 py-3.5 flex items-center justify-between border-b"
              style={{
                backgroundColor: '#0F1B33',
                borderColor: 'rgba(255,255,255,0.14)',
                color: '#FFFFFF'
              }}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="px-2 py-0.5 rounded bg-red-600 text-[10px] font-mono-metric font-bold tracking-wider uppercase text-white">
                  PDF
                </span>
                <span className="text-xs sm:text-sm font-mono-metric truncate">
                  Syarat_dan_Ketentuan_Harian_2026.pdf
                </span>
                <span className="hidden sm:inline-block text-[11px] text-slate-300 font-mono-metric">
                  (Halaman 1 / 1 &bull; 100%)
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleDownloadTermsPdfFile}
                  className="px-3 py-1.5 rounded-lg bg-white/15 hover:bg-white/25 text-xs font-semibold inline-flex items-center gap-1.5 text-white transition"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Unduh PDF</span>
                </button>
                <button
                  type="button"
                  onClick={() => setShowTermsServiceModal(false)}
                  className="p-1.5 rounded-lg hover:bg-white/20 text-white transition"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* PDF Gray Canvas Area with A4 Document Paper */}
            <div
              className="p-4 sm:p-7 overflow-y-auto flex-1 space-y-5"
              style={{ backgroundColor: '#DCE4F2' }}
            >
              <div className="bg-white text-[#0F1B33] rounded-xl shadow-xl border border-slate-200 p-6 sm:p-9 mx-auto max-w-xl font-sans">
                {/* Document Header / Letterhead */}
                <div className="flex items-start justify-between pb-4 mb-5 border-b-2 border-[#0F1B33]">
                  <div>
                    <HarianLogo size="sm" />
                    <div className="text-[11px] text-[#526382] mt-1 font-mono-metric">
                      DOKUMEN LEGAL &bull; SK-HARIAN/ESCROW/2026/V1.4
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2.5 py-1 rounded bg-[#DCE8FD] text-[#1D6FE8] text-[10px] font-mono-metric font-bold">
                      BERLAKU RESMI 2026
                    </span>
                  </div>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-center uppercase tracking-tight mb-4">
                  Syarat dan Ketentuan Penggunaan Platform Harian &amp; Ketentuan Service Charge 10%
                </h4>

                <div className="space-y-3.5 text-xs leading-relaxed text-slate-700">
                  <div>
                    <div className="font-bold text-[#0F1B33]">
                      PASAL 1 &mdash; DEFINISI &amp; RUANG LINGKUP PLATFORM
                    </div>
                    <p>
                      Platform Harian (&ldquo;Sistem&rdquo;) adalah ekosistem rekrutmen pekerja harian (<em>daily worker</em>) berbasis web yang menghubungkan Pencari Kerja Harian dengan Instansi Pemberi Kerja secara transparan tanpa perantara tidak resmi.
                    </p>
                  </div>

                  <div>
                    <div className="font-bold text-[#0F1B33]">
                      PASAL 2 &mdash; PENAHANAN DANA ESCROW &amp; JAMINAN CAIR H+2
                    </div>
                    <p>
                      Instansi Pemberi Kerja wajib menyetorkan 100% total anggaran upah harian ke Rekening Bersama (<em>Escrow HarianPay</em>) pada saat membuka lowongan. Sistem menjamin pencairan upah ke rekening pekerja maksimal <strong>2&times;24 jam (H+2)</strong> setelah shift pekerjaan ditandai selesai.
                    </p>
                  </div>

                  <div>
                    <div className="font-bold text-[#0F1B33]">
                      PASAL 3 &mdash; KETENTUAN BIAYA LAYANAN (SERVICE CHARGE 10%)
                    </div>
                    <p>
                      Setiap pencairan upah pekerja harian dikenakan potongan biaya layanan platform (<em>Service Charge</em>) sebesar <strong>10% (sepuluh persen)</strong> untuk biaya kliring <em>Payment Gateway</em>, proteksi <em>Escrow</em>, dan pemeliharaan infrastruktur 24 jam. Pekerja menerima bersih <strong>90%</strong> dari upah kotor harian.
                    </p>
                  </div>

                  {/* Embedded Official Receipt Box inside PDF Page */}
                  <div className="p-4 rounded-xl bg-[#F5F8FF] border border-[#BFD6FA] my-3">
                    <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-dashed border-[#BFD6FA]">
                      <span className="text-[11px] font-bold text-[#0F1B33]">
                        LAMPIRAN SIMULASI NOTA UPAH &amp; SERVICE CHARGE 10%
                      </span>
                      <span className="text-[10px] font-mono-metric font-bold text-[#1D6FE8]">
                        90% Net Pekerja
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mb-2.5">
                      {[150000, 175000, 250000].map((preset) => (
                        <button
                          key={preset}
                          type="button"
                          onClick={() => setSampleReceiptRate(preset)}
                          className="py-1 px-2 rounded-lg text-[11px] font-mono-metric font-semibold border transition"
                          style={{
                            backgroundColor:
                              Number(sampleReceiptRate) === preset
                                ? '#1D6FE8'
                                : '#FFFFFF',
                            borderColor:
                              Number(sampleReceiptRate) === preset
                                ? '#1D6FE8'
                                : '#CBDDFC',
                            color:
                              Number(sampleReceiptRate) === preset
                                ? '#FFFFFF'
                                : '#0F1B33'
                          }}
                        >
                          {formatRupiah(preset)}
                        </button>
                      ))}
                    </div>

                    <div className="space-y-1 text-xs font-mono-metric">
                      <div className="flex justify-between">
                        <span className="font-sans text-slate-600">
                          Upah Kotor Harian (Escrow Instansi)
                        </span>
                        <span className="font-semibold text-[#0F1B33]">
                          {formatRupiah(Number(sampleReceiptRate || 0))}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-sans text-slate-600">
                          Potongan Service Charge Harian (10%)
                        </span>
                        <span className="font-semibold text-red-600">
                          &minus;{' '}
                          {formatRupiah(
                            Math.round(Number(sampleReceiptRate || 0) * 0.1)
                          )}
                        </span>
                      </div>
                      <div className="pt-1.5 mt-1.5 border-t border-dashed border-[#BFD6FA] flex justify-between text-xs font-bold">
                        <span className="font-sans text-[#0F1B33]">
                          Saldo Bersih Diterima Pekerja (H+2)
                        </span>
                        <span className="text-[#1D6FE8]">
                          {formatRupiah(
                            Number(sampleReceiptRate || 0) -
                              Math.round(Number(sampleReceiptRate || 0) * 0.1)
                          )}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="font-bold text-[#0F1B33]">
                      PASAL 4 &mdash; SELEKSI OBJEKTIF METODE MFEP &amp; KEAKURATAN DATA
                    </div>
                    <p>
                      Pemeringkatan kandidat dilakukan secara otomatis menggunakan metode matematika <em>Multi-Factor Evaluation Process (MFEP)</em> berdasarkan bobot pengalaman kerja, kecocokan jadwal shift, jarak domisili, dan kelengkapan dokumen KTP.
                    </p>
                  </div>

                  <div>
                    <div className="font-bold text-[#0F1B33]">
                      PASAL 5 &mdash; PEMBATALAN LAMARAN &amp; KETENTUAN PENUTUP
                    </div>
                    <p>
                      Pekerja berhak membatalkan lamaran secara mandiri selama status masih <em>Pending</em>. Apabila lamaran telah berstatus <em>Diterima</em>, pembatalan sepihak tanpa konfirmasi PIC akan tercatat pada riwayat reputasi pekerja.
                    </p>
                  </div>
                </div>

                {/* Digital Stamp Footer inside PDF */}
                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500 font-mono-metric">
                  <span>Disahkan secara elektronik oleh Harian Legal &amp; Escrow</span>
                  <span>Halaman 1 dari 1</span>
                </div>
              </div>
            </div>

            {/* Bottom Action Bar */}
            <div
              className={`px-6 py-4 bg-white border-t border-[#E4EAF5] flex flex-wrap items-center gap-3 ${
                activeView === 'register' ? 'justify-between' : 'justify-end'
              }`}
            >
              {activeView === 'register' && (
                <span className="text-xs text-[#526382]">
                  Dengan menekan tombol setuju, kotak persetujuan S&amp;K otomatis tercentang.
                </span>
              )}
              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => setShowTermsServiceModal(false)}
                  className="btn-pill-secondary px-4 py-2 text-xs sm:text-sm"
                >
                  Tutup Pratinjau PDF
                </button>
                {activeView === 'register' && (
                  <button
                    type="button"
                    onClick={() => {
                      setAgreeServiceFee(true);
                      setShowTermsServiceModal(false);
                      triggerToast(
                        'Anda telah menyetujui dokumen PDF Syarat & Ketentuan serta Service Charge 10%.'
                      );
                    }}
                    className="btn-pill-primary px-5 py-2 text-xs sm:text-sm"
                  >
                    Saya Setuju dengan Isi PDF S&amp;K
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: PASANG LOWONGAN BARU + PENAHANAN DANA ESCROW DI AWAL */}
      {showCreateJobModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(15, 27, 51, 0.35)' }}
        >
          <div className="harian-surface-card max-w-xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            <div
              className="flex items-center justify-between pb-4 mb-5 border-b"
              style={{ borderColor: 'var(--border)' }}
            >
              <div>
                <h3 className="heading-tight text-xl">
                  Pasang Lowongan Harian Baru
                </h3>
                <p className="text-xs">
                  Isi deskripsi permintaan tenaga kerja; dana upah langsung ditahan di awal.
                </p>
              </div>
              <button
                onClick={() => setShowCreateJobModal(false)}
                className="p-2 rounded-full hover:bg-[#F5F8FF]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {createJobError && (
              <div
                className="mb-4 p-3.5 rounded-xl border text-xs font-semibold"
                style={{
                  backgroundColor: 'var(--primary-light)',
                  borderColor: 'var(--primary)',
                  color: 'var(--primary-dark)'
                }}
              >
                {createJobError}
              </div>
            )}

            <form onSubmit={handleCreateJobSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-xs font-semibold mb-1"
                    style={{ color: 'var(--text)' }}
                  >
                    Judul Posisi Pekerjaan *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Crew Event Pameran"
                    value={newJobForm.title}
                    onChange={(e) =>
                      setNewJobForm({ ...newJobForm, title: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm"
                    style={{
                      backgroundColor: 'var(--bg-soft)',
                      borderColor: 'var(--border)',
                      color: 'var(--text)'
                    }}
                  />
                </div>
                <div>
                  <label
                    className="block text-xs font-semibold mb-1"
                    style={{ color: 'var(--text)' }}
                  >
                    Lokasi Kerja *
                  </label>
                  <input
                    type="text"
                    required
                    value={newJobForm.location}
                    onChange={(e) =>
                      setNewJobForm({ ...newJobForm, location: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm"
                    style={{
                      backgroundColor: 'var(--bg-soft)',
                      borderColor: 'var(--border)',
                      color: 'var(--text)'
                    }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label
                    className="block text-xs font-semibold mb-1"
                    style={{ color: 'var(--text)' }}
                  >
                    Upah / Hari (Rp) *
                  </label>
                  <input
                    type="number"
                    required
                    value={newJobForm.rate}
                    onChange={(e) =>
                      setNewJobForm({ ...newJobForm, rate: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm font-mono-metric"
                    style={{
                      backgroundColor: 'var(--bg-soft)',
                      borderColor: 'var(--border)',
                      color: 'var(--text)'
                    }}
                  />
                </div>
                <div>
                  <label
                    className="block text-xs font-semibold mb-1"
                    style={{ color: 'var(--text)' }}
                  >
                    Kuota Pekerja *
                  </label>
                  <input
                    type="number"
                    min="1"
                    required
                    value={newJobForm.quota}
                    onChange={(e) =>
                      setNewJobForm({ ...newJobForm, quota: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm font-mono-metric"
                    style={{
                      backgroundColor: 'var(--bg-soft)',
                      borderColor: 'var(--border)',
                      color: 'var(--text)'
                    }}
                  />
                </div>
                <div>
                  <label
                    className="block text-xs font-semibold mb-1"
                    style={{ color: 'var(--text)' }}
                  >
                    Jam Kerja Shift *
                  </label>
                  <input
                    type="text"
                    required
                    value={newJobForm.workTime}
                    onChange={(e) =>
                      setNewJobForm({ ...newJobForm, workTime: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm"
                    style={{
                      backgroundColor: 'var(--bg-soft)',
                      borderColor: 'var(--border)',
                      color: 'var(--text)'
                    }}
                  />
                </div>
              </div>

              <div>
                <label
                  className="block text-xs font-semibold mb-1"
                  style={{ color: 'var(--text)' }}
                >
                  Deskripsi Permintaan &amp; Rincian Tugas *
                </label>
                <textarea
                  rows="2"
                  required
                  value={newJobForm.description}
                  onChange={(e) =>
                    setNewJobForm({
                      ...newJobForm,
                      description: e.target.value
                    })
                  }
                  className="w-full px-3.5 py-2 rounded-xl border text-xs sm:text-sm"
                  style={{
                    backgroundColor: 'var(--bg-soft)',
                    borderColor: 'var(--border)',
                    color: 'var(--text)'
                  }}
                />
              </div>

              <div
                className="p-4 rounded-2xl border flex items-center justify-between"
                style={{
                  backgroundColor: 'var(--bg-soft)',
                  borderColor: 'var(--primary-light)'
                }}
              >
                <div>
                  <div
                    className="text-xs font-semibold"
                    style={{ color: 'var(--text)' }}
                  >
                    Total Dana Escrow Ditahan di Awal
                  </div>
                  <div className="text-[11px]">
                    Otomatis cair ke pekerja maksimal H+2 setelah pekerjaan selesai
                  </div>
                </div>
                <div className="text-lg font-bold font-mono-metric text-accent-primary">
                  {formatRupiah(
                    Number(newJobForm.rate || 0) * Number(newJobForm.quota || 0)
                  )}
                </div>
              </div>

              <div className="flex justify-end gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => setShowCreateJobModal(false)}
                  className="btn-pill-secondary px-5 py-2.5 text-xs sm:text-sm"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="btn-pill-primary px-6 py-2.5 text-xs sm:text-sm"
                >
                  Kunci Dana Escrow &amp; Publikasikan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: RINGKASAN CARA KERJA HARIAN */}
      {showHowItWorksModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(15, 27, 51, 0.35)' }}
        >
          <div className="harian-surface-card max-w-lg w-full p-6 sm:p-8">
            <div
              className="flex items-center justify-between pb-4 mb-4 border-b"
              style={{ borderColor: 'var(--border)' }}
            >
              <h3 className="heading-tight text-lg">
                Ringkasan Ekosistem Kerja Harian
              </h3>
              <button
                type="button"
                onClick={() => setShowHowItWorksModal(false)}
                className="p-2 rounded-full hover:bg-[#F5F8FF]"
                aria-label="Tutup panduan"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-3 text-xs sm:text-sm mb-6">
              <div
                className="p-3.5 rounded-xl border"
                style={{
                  backgroundColor: 'var(--bg-soft)',
                  borderColor: 'var(--border)'
                }}
              >
                <strong style={{ color: 'var(--text)' }}>
                  1. Instansi Pasang Loker &amp; Kunci Escrow:
                </strong>{' '}
                Dana upah ditahan di awal sebelum lowongan tampil di beranda pekerja.
              </div>
              <div
                className="p-3.5 rounded-xl border"
                style={{
                  backgroundColor: 'var(--bg-soft)',
                  borderColor: 'var(--border)'
                }}
              >
                <strong style={{ color: 'var(--text)' }}>
                  2. Pekerja Filter &amp; Lamar Online:
                </strong>{' '}
                Cari lowongan sesuai lokasi, waktu shift, dan upah lalu unggah dokumen KTP &amp; CV.
              </div>
              <div
                className="p-3.5 rounded-xl border"
                style={{
                  backgroundColor: 'var(--bg-soft)',
                  borderColor: 'var(--border)'
                }}
              >
                <strong style={{ color: 'var(--text)' }}>
                  3. Penilaian Otomatis MFEP:
                </strong>{' '}
                Sistem menghitung skor kelayakan kandidat secara objektif untuk membantu keputusan HRD.
              </div>
              <div
                className="p-3.5 rounded-xl border"
                style={{
                  backgroundColor: 'var(--bg-soft)',
                  borderColor: 'var(--border)'
                }}
              >
                <strong style={{ color: 'var(--text)' }}>
                  4. Gaji Cair Maksimal H+2:
                </strong>{' '}
                Begitu shift selesai, dana otomatis ditransfer ke pekerja (dipotong biaya layanan 10%).
              </div>
            </div>
            <button
              type="button"
              onClick={() => setShowHowItWorksModal(false)}
              className="btn-pill-primary w-full py-3 text-sm"
            >
              Mengerti, Tutup Panduan
            </button>
          </div>
        </div>
      )}

      {/* NATIVE MODAL (US-08): EDIT DETAIL LOWONGAN PEKERJAAN */}
      <NativeModalDialog
        open={Boolean(editingJobModal)}
        onClose={() => setEditingJobModal(null)}
        labelledBy={editJobDialogTitleId}
        maxWidthClass="max-w-2xl"
      >
        {editingJobModal && (
          <div>
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#DCE8FD]">
              <div>
                <h1 id={editJobDialogTitleId} className="heading-tight text-xl">
                  Edit Lowongan Pekerjaan
                </h1>
                <p className="text-xs">
                  Perubahan detail valid atau penutupan status langsung diperbarui ke database &amp; pencarian pelamar.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setEditingJobModal(null)}
                className="p-2 rounded-full hover:bg-white/80"
                aria-label="Tutup form edit lowongan"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {editJobError && (
              <div
                role="alert"
                className="mb-4 p-3.5 rounded-xl border border-red-400 bg-red-50 text-red-800 text-xs font-semibold"
              >
                {editJobError}
              </div>
            )}

            <form onSubmit={handleEditJobSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="editJobTitle"
                    className="block text-xs font-semibold mb-1"
                    style={{ color: 'var(--text)' }}
                  >
                    Judul Posisi Pekerjaan *
                  </label>
                  <input
                    id="editJobTitle"
                    type="text"
                    required
                    aria-invalid="false"
                    value={editingJobModal.title}
                    onChange={(e) =>
                      setEditingJobModal({
                        ...editingJobModal,
                        title: e.target.value
                      })
                    }
                    className="frosted-input w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="editJobLocation"
                    className="block text-xs font-semibold mb-1"
                    style={{ color: 'var(--text)' }}
                  >
                    Lokasi Kerja *
                  </label>
                  <input
                    id="editJobLocation"
                    type="text"
                    required
                    aria-invalid="false"
                    value={editingJobModal.location}
                    onChange={(e) =>
                      setEditingJobModal({
                        ...editingJobModal,
                        location: e.target.value
                      })
                    }
                    className="frosted-input w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label
                    htmlFor="editJobRate"
                    className="block text-xs font-semibold mb-1"
                    style={{ color: 'var(--text)' }}
                  >
                    Upah / Hari (Rp) *
                  </label>
                  <input
                    id="editJobRate"
                    type="number"
                    required
                    aria-invalid="false"
                    value={editingJobModal.rate}
                    onChange={(e) =>
                      setEditingJobModal({
                        ...editingJobModal,
                        rate: e.target.value
                      })
                    }
                    className="frosted-input w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-mono-metric focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="editJobQuota"
                    className="block text-xs font-semibold mb-1"
                    style={{ color: 'var(--text)' }}
                  >
                    Kuota Pekerja *
                  </label>
                  <input
                    id="editJobQuota"
                    type="number"
                    min="1"
                    required
                    aria-invalid="false"
                    value={editingJobModal.quota}
                    onChange={(e) =>
                      setEditingJobModal({
                        ...editingJobModal,
                        quota: e.target.value
                      })
                    }
                    className="frosted-input w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-mono-metric focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="editJobStatus"
                    className="block text-xs font-semibold mb-1"
                    style={{ color: 'var(--text)' }}
                  >
                    Status Lowongan *
                  </label>
                  <select
                    id="editJobStatus"
                    aria-invalid="false"
                    disabled={editingJobModal.escrowStage === 'PAID_H2'}
                    value={editingJobModal.status || 'OPEN'}
                    onChange={(e) =>
                      setEditingJobModal({
                        ...editingJobModal,
                        status: e.target.value
                      })
                    }
                    className="frosted-input w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm focus:outline-none"
                  >
                    <option value="OPEN">Aktif (Tampil di Pencarian)</option>
                    <option value="CLOSED">
                      Ditutup (Sembunyikan dari Pencarian)
                    </option>
                    {editingJobModal.escrowStage === 'PAID_H2' && (
                      <option value="COMPLETED">Selesai (Gaji Cair H+2)</option>
                    )}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label
                    htmlFor="editJobCategory"
                    className="block text-xs font-semibold mb-1"
                    style={{ color: 'var(--text)' }}
                  >
                    Kategori Pekerjaan
                  </label>
                  <select
                    id="editJobCategory"
                    aria-invalid="false"
                    value={editingJobModal.category}
                    onChange={(e) =>
                      setEditingJobModal({
                        ...editingJobModal,
                        category: e.target.value
                      })
                    }
                    className="frosted-input w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm focus:outline-none"
                  >
                    <option value="Logistics & Warehouse">
                      Logistics &amp; Warehouse
                    </option>
                    <option value="Event Staff">Event Staff</option>
                    <option value="Hospitality">Hospitality</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="editJobShiftType"
                    className="block text-xs font-semibold mb-1"
                    style={{ color: 'var(--text)' }}
                  >
                    Tipe Shift
                  </label>
                  <select
                    id="editJobShiftType"
                    aria-invalid="false"
                    value={editingJobModal.scheduleType}
                    onChange={(e) =>
                      setEditingJobModal({
                        ...editingJobModal,
                        scheduleType: e.target.value
                      })
                    }
                    className="frosted-input w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm focus:outline-none"
                  >
                    <option value="Morning Shift">Morning Shift</option>
                    <option value="Night Shift">Night Shift</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="editJobWorkTime"
                    className="block text-xs font-semibold mb-1"
                    style={{ color: 'var(--text)' }}
                  >
                    Jam Kerja Shift *
                  </label>
                  <input
                    id="editJobWorkTime"
                    type="text"
                    required
                    aria-invalid="false"
                    value={editingJobModal.workTime}
                    onChange={(e) =>
                      setEditingJobModal({
                        ...editingJobModal,
                        workTime: e.target.value
                      })
                    }
                    className="frosted-input w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="editJobDesc"
                  className="block text-xs font-semibold mb-1"
                  style={{ color: 'var(--text)' }}
                >
                  Deskripsi Tugas &amp; Kebutuhan Tenaga Kerja *
                </label>
                <textarea
                  id="editJobDesc"
                  rows="3"
                  required
                  aria-invalid="false"
                  value={editingJobModal.description}
                  onChange={(e) =>
                    setEditingJobModal({
                      ...editingJobModal,
                      description: e.target.value
                    })
                  }
                  className="frosted-input w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm focus:outline-none"
                />
              </div>

              <div className="flex justify-end gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => setEditingJobModal(null)}
                  className="btn-pill-secondary px-5 py-2.5 text-xs sm:text-sm"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="btn-pill-primary px-6 py-2.5 text-xs sm:text-sm"
                >
                  Simpan Perubahan Lowongan
                </button>
              </div>
            </form>
          </div>
        )}
      </NativeModalDialog>

      {/* NATIVE MODAL (US-08): KONFIRMASI TUTUP / BUKA / HAPUS LOWONGAN */}
      <NativeModalDialog
        open={Boolean(confirmJobActionModal)}
        onClose={() => setConfirmJobActionModal(null)}
        labelledBy={confirmJobDialogTitleId}
        maxWidthClass="max-w-md"
      >
        {confirmJobActionModal && (
          <div>
            <h1 id={confirmJobDialogTitleId} className="heading-tight text-lg mb-2">
              {confirmJobActionModal.mode === 'delete'
                ? 'Hapus Lowongan Pekerjaan?'
                : confirmJobActionModal.mode === 'close'
                ? 'Tutup Lowongan Pekerjaan?'
                : 'Buka Kembali Lowongan Pekerjaan?'}
            </h1>
            <p className="text-xs sm:text-sm leading-relaxed mb-5">
              {confirmJobActionModal.mode === 'delete' ? (
                <>
                  Lowongan <strong>{confirmJobActionModal.job.title}</strong> akan dihapus permanen dari database dan tidak lagi muncul di pencarian aktif pelamar. Dana Escrow yang belum dicairkan otomatis dikembalikan ke Saldo HarianPay.
                </>
              ) : confirmJobActionModal.mode === 'close' ? (
                <>
                  Lowongan <strong>{confirmJobActionModal.job.title}</strong> akan diubah menjadi berstatus <strong>Ditutup</strong> dan disembunyikan dari pencarian aktif pelamar.
                </>
              ) : (
                <>
                  Lowongan <strong>{confirmJobActionModal.job.title}</strong> akan diaktifkan kembali di pencarian pelamar dengan mengunci dana Escrow sebesar{' '}
                  <strong className="font-mono-metric">
                    {formatRupiah(
                      Number(confirmJobActionModal.job.rate) *
                        Number(confirmJobActionModal.job.quota)
                    )}
                  </strong>
                  .
                </>
              )}
            </p>
            <div className="flex justify-end gap-2.5">
              <button
                type="button"
                autoFocus
                onClick={() => setConfirmJobActionModal(null)}
                className="btn-pill-secondary px-4 py-2 text-xs sm:text-sm"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={handleConfirmJobStatusOrDelete}
                className="btn-pill-primary px-5 py-2 text-xs sm:text-sm"
                style={
                  confirmJobActionModal.mode === 'delete'
                    ? { background: '#DC2626' }
                    : undefined
                }
              >
                {confirmJobActionModal.mode === 'delete'
                  ? 'Ya, Hapus Lowongan'
                  : confirmJobActionModal.mode === 'close'
                  ? 'Ya, Tutup Lowongan'
                  : 'Ya, Buka Kembali'}
              </button>
            </div>
          </div>
        )}
      </NativeModalDialog>

      {/* NATIVE MODAL (US-12): TAMBAH / UBAH DATA PELAMAR & BERKAS PERSYARATAN */}
      <NativeModalDialog
        open={Boolean(applicantCrudModal)}
        onClose={() => setApplicantCrudModal(null)}
        labelledBy={applicantCrudDialogTitleId}
        maxWidthClass="max-w-2xl"
      >
        {applicantCrudModal && (
          <div>
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#DCE8FD]">
              <div>
                <h1
                  id={applicantCrudDialogTitleId}
                  className="heading-tight text-xl"
                >
                  {applicantCrudModal.mode === 'create'
                    ? 'Tambah Data Pelamar Baru'
                    : 'Ubah Data Pelamar & Berkas Persyaratan'}
                </h1>
                <p className="text-xs">
                  Seluruh perubahan data kandidat dan berkas tersimpan konsisten di database.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setApplicantCrudModal(null)}
                className="p-2 rounded-full hover:bg-white/80"
                aria-label="Tutup form pelamar"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {applicantFormError && (
              <div
                role="alert"
                className="mb-4 p-3.5 rounded-xl border border-red-400 bg-red-50 text-red-800 text-xs font-semibold"
              >
                {applicantFormError}
              </div>
            )}

            <form onSubmit={handleSaveApplicantCrud} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="candNameInput"
                    className="block text-xs font-semibold mb-1"
                    style={{ color: 'var(--text)' }}
                  >
                    Nama Lengkap Kandidat *
                  </label>
                  <input
                    id="candNameInput"
                    type="text"
                    required
                    aria-invalid="false"
                    value={applicantCrudModal.data.name}
                    onChange={(e) =>
                      setApplicantCrudModal({
                        ...applicantCrudModal,
                        data: {
                          ...applicantCrudModal.data,
                          name: e.target.value
                        }
                      })
                    }
                    placeholder="Contoh: Raka Pratama"
                    className="frosted-input w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="candPhoneInput"
                    className="block text-xs font-semibold mb-1"
                    style={{ color: 'var(--text)' }}
                  >
                    Kontak / WhatsApp *
                  </label>
                  <input
                    id="candPhoneInput"
                    type="tel"
                    required
                    aria-invalid="false"
                    value={applicantCrudModal.data.phone}
                    onChange={(e) =>
                      setApplicantCrudModal({
                        ...applicantCrudModal,
                        data: {
                          ...applicantCrudModal.data,
                          phone: e.target.value
                        }
                      })
                    }
                    placeholder="+62 812-xxxx-xxxx"
                    className="frosted-input w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="candEmailInput"
                    className="block text-xs font-semibold mb-1"
                    style={{ color: 'var(--text)' }}
                  >
                    Alamat Email
                  </label>
                  <input
                    id="candEmailInput"
                    type="email"
                    aria-invalid="false"
                    value={applicantCrudModal.data.email || ''}
                    onChange={(e) =>
                      setApplicantCrudModal({
                        ...applicantCrudModal,
                        data: {
                          ...applicantCrudModal.data,
                          email: e.target.value
                        }
                      })
                    }
                    placeholder="kandidat@email.com"
                    className="frosted-input w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="candCityInput"
                    className="block text-xs font-semibold mb-1"
                    style={{ color: 'var(--text)' }}
                  >
                    Domisili *
                  </label>
                  <input
                    id="candCityInput"
                    type="text"
                    required
                    aria-invalid="false"
                    value={applicantCrudModal.data.city || ''}
                    onChange={(e) =>
                      setApplicantCrudModal({
                        ...applicantCrudModal,
                        data: {
                          ...applicantCrudModal.data,
                          city: e.target.value
                        }
                      })
                    }
                    placeholder="Contoh: Bekasi / Jakarta"
                    className="frosted-input w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="candRoleSelect"
                    className="block text-xs font-semibold mb-1"
                    style={{ color: 'var(--text)' }}
                  >
                    Posisi Lowongan Dilamar *
                  </label>
                  <select
                    id="candRoleSelect"
                    aria-invalid="false"
                    value={applicantCrudModal.data.roleTarget}
                    onChange={(e) => {
                      const chosenTitle = e.target.value;
                      const foundJob = jobs.find((j) => j.title === chosenTitle);
                      setApplicantCrudModal({
                        ...applicantCrudModal,
                        data: {
                          ...applicantCrudModal.data,
                          roleTarget: chosenTitle,
                          jobId: foundJob?.id || applicantCrudModal.data.jobId
                        }
                      });
                    }}
                    className="frosted-input w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm focus:outline-none"
                  >
                    {Array.from(
                      new Set([
                        ...jobs.map((j) => j.title),
                        applicantCrudModal.data.roleTarget
                      ].filter(Boolean))
                    ).map((titleOpt) => (
                      <option key={titleOpt} value={titleOpt}>
                        {titleOpt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="candStatusSelect"
                    className="block text-xs font-semibold mb-1"
                    style={{ color: 'var(--text)' }}
                  >
                    Status Seleksi Kandidat *
                  </label>
                  <select
                    id="candStatusSelect"
                    aria-invalid="false"
                    value={applicantCrudModal.data.status}
                    onChange={(e) =>
                      setApplicantCrudModal({
                        ...applicantCrudModal,
                        data: {
                          ...applicantCrudModal.data,
                          status: e.target.value
                        }
                      })
                    }
                    className="frosted-input w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm focus:outline-none"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Diterima">Diterima</option>
                    <option value="Ditolak">Ditolak</option>
                  </select>
                </div>
              </div>

              {/* Nilai Kriteria MFEP */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { key: 'exp', label: 'Nilai Pengalaman' },
                  { key: 'avail', label: 'Nilai Shift' },
                  { key: 'dist', label: 'Nilai Domisili' },
                  { key: 'doc', label: 'Nilai Berkas' }
                ].map((metric) => (
                  <div key={metric.key}>
                    <label
                      htmlFor={`candMetric_${metric.key}`}
                      className="block text-[11px] font-semibold mb-1"
                      style={{ color: 'var(--text)' }}
                    >
                      {metric.label} (0-100)
                    </label>
                    <input
                      id={`candMetric_${metric.key}`}
                      type="number"
                      min="0"
                      max="100"
                      aria-invalid="false"
                      value={applicantCrudModal.data[metric.key]}
                      onChange={(e) =>
                        setApplicantCrudModal({
                          ...applicantCrudModal,
                          data: {
                            ...applicantCrudModal.data,
                            [metric.key]: e.target.value
                          }
                        })
                      }
                      className="frosted-input w-full px-3 py-2 rounded-xl text-xs font-mono-metric focus:outline-none"
                    />
                  </div>
                ))}
              </div>

              <div>
                <label
                  htmlFor="candNotesInput"
                  className="block text-xs font-semibold mb-1"
                  style={{ color: 'var(--text)' }}
                >
                  Catatan Evaluasi HRD
                </label>
                <textarea
                  id="candNotesInput"
                  rows="2"
                  aria-invalid="false"
                  value={applicantCrudModal.data.notes || ''}
                  onChange={(e) =>
                    setApplicantCrudModal({
                      ...applicantCrudModal,
                      data: {
                        ...applicantCrudModal.data,
                        notes: e.target.value
                      }
                    })
                  }
                  placeholder="Catatan tambahan mengenai kualifikasi atau kelengkapan berkas pelamar..."
                  className="frosted-input w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm focus:outline-none"
                />
              </div>

              {/* Kelola Berkas Persyaratan Kandidat */}
              <div
                className="p-4 rounded-2xl border space-y-3"
                style={{
                  backgroundColor: 'var(--bg-soft)',
                  borderColor: 'var(--border)'
                }}
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span
                    className="text-xs font-bold"
                    style={{ color: 'var(--text)' }}
                  >
                    Berkas Persyaratan Kandidat (PDF/JPG/PNG/DOCX, maks. 5 MB)
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {['CV', 'KTP', 'Surat Pendukung'].map((docType) => {
                      const inputId = `hrdCandUpload_${docType.replace(/\s+/g, '_')}`;
                      return (
                        <span key={docType}>
                          <input
                            id={inputId}
                            type="file"
                            accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                            aria-invalid="false"
                            onChange={(e) =>
                              handleApplicantModalFileUpload(docType, e)
                            }
                            className="visually-hidden"
                          />
                          <label
                            htmlFor={inputId}
                            className="btn-pill-secondary px-2.5 py-1 text-[11px] cursor-pointer inline-flex items-center gap-1"
                          >
                            <Upload className="w-3 h-3 text-accent-primary" />
                            <span>+ {docType}</span>
                          </label>
                        </span>
                      );
                    })}
                  </div>
                </div>

                {(applicantCrudModal.data.documents || []).length === 0 ? (
                  <p className="text-xs text-[#526382]">
                    Belum ada dokumen diunggah untuk kandidat ini. Gunakan tombol di atas untuk melampirkan berkas.
                  </p>
                ) : (
                  <div className="space-y-2">
                    {applicantCrudModal.data.documents.map((doc) => (
                      <div
                        key={doc.id}
                        className="p-2.5 rounded-xl bg-white/85 border border-[#DCE8FD] flex items-center justify-between gap-2 text-xs"
                      >
                        <div className="min-w-0">
                          <span className="font-bold text-accent-primary">
                            [{doc.docType}]
                          </span>{' '}
                          <span className="font-medium truncate">
                            {doc.fileName}
                          </span>{' '}
                          <span className="text-[11px] font-mono-metric text-[#526382]">
                            ({formatFileSize(doc.fileSize)})
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleRemoveApplicantModalDoc(doc.id)}
                          className="text-red-600 hover:underline text-[11px] font-semibold shrink-0"
                        >
                          Hapus
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex justify-end gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => setApplicantCrudModal(null)}
                  className="btn-pill-secondary px-5 py-2.5 text-xs sm:text-sm"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="btn-pill-primary px-6 py-2.5 text-xs sm:text-sm"
                >
                  {applicantCrudModal.mode === 'create'
                    ? 'Simpan Pelamar Baru'
                    : 'Simpan Perubahan Pelamar'}
                </button>
              </div>
            </form>
          </div>
        )}
      </NativeModalDialog>

      {/* NATIVE MODAL (US-12): DETAIL LENGKAP PELAMAR & TAUTAN BERKAS */}
      <NativeModalDialog
        open={Boolean(applicantDetailModal)}
        onClose={() => setApplicantDetailModal(null)}
        labelledBy={applicantDetailDialogTitleId}
        maxWidthClass="max-w-lg"
      >
        {applicantDetailModal && (
          <div>
            <div className="flex items-start justify-between pb-4 mb-4 border-b border-[#DCE8FD]">
              <div>
                <span className="text-xs font-semibold text-accent-primary">
                  Detail Profil &amp; Berkas Kandidat
                </span>
                <h1
                  id={applicantDetailDialogTitleId}
                  className="heading-tight text-xl"
                >
                  {applicantDetailModal.name}
                </h1>
                <p className="text-xs">
                  Melamar: <strong>{applicantDetailModal.roleTarget}</strong>
                </p>
              </div>
              <button
                type="button"
                onClick={() => setApplicantDetailModal(null)}
                className="p-2 rounded-full hover:bg-white/80"
                aria-label="Tutup detail kandidat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2.5 text-xs sm:text-sm mb-5">
              <div className="grid grid-cols-2 gap-3 p-3.5 rounded-2xl bg-[#F5F8FF] border border-[#DCE8FD]">
                <div>
                  <div className="text-[11px] text-[#526382]">Kontak WA</div>
                  <div className="font-semibold">{applicantDetailModal.phone}</div>
                </div>
                <div>
                  <div className="text-[11px] text-[#526382]">Email</div>
                  <div className="font-semibold truncate">
                    {applicantDetailModal.email}
                  </div>
                </div>
                <div>
                  <div className="text-[11px] text-[#526382]">Domisili</div>
                  <div className="font-semibold">{applicantDetailModal.city}</div>
                </div>
                <div>
                  <div className="text-[11px] text-[#526382]">
                    Status &amp; Skor MFEP
                  </div>
                  <div className="font-semibold text-accent-primary font-mono-metric">
                    {applicantDetailModal.status} ({applicantDetailModal.mfepScore})
                  </div>
                </div>
              </div>

              {applicantDetailModal.notes && (
                <p className="text-xs leading-relaxed">
                  <strong>Catatan Kandidat / HRD:</strong>{' '}
                  {applicantDetailModal.notes}
                </p>
              )}

              <div className="pt-2">
                <div className="text-xs font-bold mb-2">
                  Dokumen Persyaratan Terlampir:
                </div>
                {(applicantDetailModal.documents || []).length === 0 ? (
                  <p className="text-xs italic">Tidak ada berkas terlampir.</p>
                ) : (
                  <div className="space-y-2">
                    {applicantDetailModal.documents.map((doc) => (
                      <div
                        key={doc.id}
                        className="p-3 rounded-xl border border-[#CBDDFC] bg-white flex items-center justify-between gap-2"
                      >
                        <div className="text-xs min-w-0">
                          <div className="font-bold text-[#091326] truncate">
                            {doc.docType} &mdash; {doc.fileName}
                          </div>
                          <div className="text-[11px] font-mono-metric text-[#526382]">
                            {formatFileSize(doc.fileSize)} &bull; {doc.uploadedAt}
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <button
                            type="button"
                            onClick={() =>
                              setPreviewDocModal({
                                doc,
                                ownerName: applicantDetailModal.name
                              })
                            }
                            className="btn-pill-secondary px-2.5 py-1.5 text-[11px]"
                          >
                            Buka
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              handleDownloadDocumentFile(
                                doc,
                                applicantDetailModal.name
                              )
                            }
                            className="btn-pill-primary px-2.5 py-1.5 text-[11px]"
                          >
                            Unduh
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => {
                  const cand = applicantDetailModal;
                  setApplicantDetailModal(null);
                  handleOpenEditApplicant(cand);
                }}
                className="btn-pill-secondary px-4 py-2 text-xs"
              >
                Edit Pelamar
              </button>
              <button
                type="button"
                onClick={() => setApplicantDetailModal(null)}
                className="btn-pill-primary px-5 py-2 text-xs"
              >
                Tutup
              </button>
            </div>
          </div>
        )}
      </NativeModalDialog>

      {/* NATIVE MODAL (US-12): KONFIRMASI HAPUS PELAMAR */}
      <NativeModalDialog
        open={Boolean(confirmDeleteApplicant)}
        onClose={() => setConfirmDeleteApplicant(null)}
        labelledBy={deleteApplicantDialogTitleId}
        maxWidthClass="max-w-md"
      >
        {confirmDeleteApplicant && (
          <div>
            <h1
              id={deleteApplicantDialogTitleId}
              className="heading-tight text-lg mb-2"
            >
              Hapus Data Pelamar?
            </h1>
            <p className="text-xs sm:text-sm leading-relaxed mb-5">
              Anda yakin ingin menghapus kandidat{' '}
              <strong>{confirmDeleteApplicant.name}</strong> ({confirmDeleteApplicant.roleTarget}) beserta tautan berkasnya dari database?
            </p>
            <div className="flex justify-end gap-2.5">
              <button
                type="button"
                autoFocus
                onClick={() => setConfirmDeleteApplicant(null)}
                className="btn-pill-secondary px-4 py-2 text-xs sm:text-sm"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={handleConfirmDeleteApplicantNow}
                className="btn-pill-primary px-5 py-2 text-xs sm:text-sm"
                style={{ background: '#DC2626' }}
              >
                Ya, Hapus Pelamar
              </button>
            </div>
          </div>
        )}
      </NativeModalDialog>

      {/* NATIVE MODAL (US-10 & US-12): PRATINJAU & UNDUH BERKAS PERSYARATAN */}
      <NativeModalDialog
        open={Boolean(previewDocModal)}
        onClose={() => setPreviewDocModal(null)}
        labelledBy={previewDocDialogTitleId}
        maxWidthClass="max-w-2xl"
      >
        {previewDocModal && (() => {
          const { doc, ownerName } = previewDocModal;
          const liveDataUrl = resolveDocDataUrl(doc);
          const isImage =
            liveDataUrl &&
            (doc.mimeType?.startsWith('image/') ||
              /\.(jpg|jpeg|png)$/i.test(doc.fileName || ''));
          const isPdf =
            liveDataUrl &&
            (doc.mimeType === 'application/pdf' ||
              /\.pdf$/i.test(doc.fileName || ''));

          return (
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#DCE8FD]">
                <div className="min-w-0">
                  <span className="text-[11px] font-bold text-accent-primary uppercase">
                    Pemeriksaan Berkas HRD &bull; {doc.docType}
                  </span>
                  <h1
                    id={previewDocDialogTitleId}
                    className="heading-tight text-lg truncate"
                  >
                    {doc.fileName}
                  </h1>
                  <p className="text-xs text-[#526382]">
                    Kandidat: <strong>{ownerName}</strong> &bull; Ukuran:{' '}
                    {formatFileSize(doc.fileSize)}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setPreviewDocModal(null)}
                  className="p-2 rounded-full hover:bg-white/80 shrink-0"
                  aria-label="Tutup pratinjau berkas"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="rounded-2xl border border-[#CBDDFC] bg-white p-4 mb-4 max-h-[56vh] overflow-y-auto">
                {isImage ? (
                  <img
                    src={liveDataUrl}
                    alt={`Pratinjau ${doc.fileName}`}
                    className="max-h-[48vh] mx-auto rounded-xl object-contain"
                  />
                ) : isPdf ? (
                  <iframe
                    title={`Pratinjau PDF ${doc.fileName}`}
                    src={liveDataUrl}
                    className="w-full h-[48vh] rounded-xl border-0"
                  />
                ) : (
                  <div className="p-5 space-y-3 text-xs leading-relaxed">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DCE8FD] text-[#1D6FE8] font-bold">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>BERKAS TERVERIFIKASI SISTEM HARIAN</span>
                    </div>
                    <h4 className="text-base font-bold text-[#091326]">
                      {doc.docType} &mdash; {doc.fileName}
                    </h4>
                    <div className="p-3.5 rounded-xl bg-[#F5F8FF] border border-[#DCE8FD] space-y-1 font-mono-metric text-[11px]">
                      <div>Pemilik Dokumen: {ownerName}</div>
                      <div>Ukuran Berkas: {formatFileSize(doc.fileSize)}</div>
                      <div>Waktu Unggah: {doc.uploadedAt || 'Terverifikasi'}</div>
                      <div>Status: Tersimpan &amp; Terhubung ke Data Lamaran HRD</div>
                    </div>
                    <p className="text-[#334463]">
                      Berkas persyaratan ini telah melewati validasi format dan batas ukuran (&le; 5 MB) serta siap diunduh oleh tim HRD untuk proses verifikasi kandidat.
                    </p>
                  </div>
                )}
              </div>

              <div className="flex justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setPreviewDocModal(null)}
                  className="btn-pill-secondary px-4 py-2 text-xs sm:text-sm"
                >
                  Tutup Pratinjau
                </button>
                <button
                  type="button"
                  onClick={() => handleDownloadDocumentFile(doc, ownerName)}
                  className="btn-pill-primary px-5 py-2 text-xs sm:text-sm inline-flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Unduh Berkas</span>
                </button>
              </div>
            </div>
          );
        })()}
      </NativeModalDialog>

      {/* NATIVE MODAL (US-17): PEMROSES PEMBAYARAN HARIANPAY PAYMENT GATEWAY */}
      <NativeModalDialog
        open={Boolean(paymentModal)}
        onClose={() => setPaymentModal(null)}
        labelledBy={paymentDialogTitleId}
        maxWidthClass="max-w-lg"
      >
        {paymentModal && (
          <div>
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#DCE8FD]">
              <div>
                <span className="text-[11px] font-mono-metric font-bold text-accent-primary">
                  HARIANPAY PAYMENT GATEWAY &bull; {paymentModal.invoiceId}
                </span>
                <h1 id={paymentDialogTitleId} className="heading-tight text-xl">
                  {paymentModal.purpose === 'JOB_ESCROW'
                    ? 'Pembayaran Penguncian Dana Escrow'
                    : 'Top-Up Saldo Escrow Korporat'}
                </h1>
              </div>
              <button
                type="button"
                onClick={() => setPaymentModal(null)}
                className="p-2 rounded-full hover:bg-white/80"
                aria-label="Tutup pemroses pembayaran"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {paymentModalError && (
              <div
                role="alert"
                className="mb-4 p-3 rounded-xl border border-red-400 bg-red-50 text-red-800 text-xs font-semibold"
              >
                {paymentModalError}
              </div>
            )}

            <form onSubmit={handleProcessGatewayPayment} className="space-y-4">
              {paymentModal.purpose === 'TOPUP' && (
                <div>
                  <span className="block text-xs font-semibold mb-1.5">
                    Pilih Nominal Cepat
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
                    {[1000000, 2500000, 5000000, 10000000].map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() =>
                          setPaymentModal({ ...paymentModal, amount: preset })
                        }
                        className={
                          Number(paymentModal.amount) === preset
                            ? 'btn-pill-primary py-2 px-2 text-[11px] font-mono-metric'
                            : 'btn-pill-secondary py-2 px-2 text-[11px] font-mono-metric'
                        }
                      >
                        {formatRupiah(preset)}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <label
                  htmlFor="gatewayAmountInput"
                  className="block text-xs font-semibold mb-1"
                  style={{ color: 'var(--text)' }}
                >
                  Nominal Tagihan Pembayaran (Rp) *
                </label>
                <input
                  id="gatewayAmountInput"
                  type="number"
                  min="50000"
                  required
                  aria-invalid="false"
                  value={paymentModal.amount}
                  onChange={(e) =>
                    setPaymentModal({
                      ...paymentModal,
                      amount: e.target.value
                    })
                  }
                  className="frosted-input w-full px-4 py-2.5 rounded-xl text-sm font-mono-metric font-bold focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="gatewayMethodSelect"
                  className="block text-xs font-semibold mb-1"
                  style={{ color: 'var(--text)' }}
                >
                  Kanal Pemroses Pembayaran *
                </label>
                <select
                  id="gatewayMethodSelect"
                  aria-invalid="false"
                  value={paymentModal.method}
                  onChange={(e) =>
                    setPaymentModal({
                      ...paymentModal,
                      method: e.target.value
                    })
                  }
                  className="frosted-input w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm focus:outline-none"
                >
                  <option value="Virtual Account BCA (Escrow HarianPay)">
                    Virtual Account BCA (Escrow HarianPay)
                  </option>
                  <option value="Virtual Account Mandiri (Escrow HarianPay)">
                    Virtual Account Mandiri (Escrow HarianPay)
                  </option>
                  <option value="Virtual Account BNI Korporat">
                    Virtual Account BNI Korporat
                  </option>
                  <option value="QRIS Korporat Instan">
                    QRIS Korporat Instan
                  </option>
                  <option value="GoPay / E-Wallet Korporat">
                    GoPay / E-Wallet Korporat
                  </option>
                </select>
              </div>

              <div className="p-4 rounded-2xl bg-[#F5F8FF] border border-[#BFD6FA] space-y-2 text-xs">
                {paymentModal.method.includes('QRIS') ? (
                  <div className="text-center py-2 space-y-2">
                    <div className="text-[11px] font-bold text-[#0F1B33]">
                      SCAN QRIS RESMI HARIANPAY ESCROW
                    </div>
                    <div className="w-28 h-28 mx-auto rounded-xl bg-white border-2 border-[#0F1B33] p-2 grid grid-cols-5 gap-1">
                      {Array.from({ length: 25 }).map((_, i) => (
                        <span
                          key={i}
                          className="rounded-[2px]"
                          style={{
                            backgroundColor:
                              [0, 1, 3, 4, 5, 6, 8, 10, 12, 14, 16, 18, 20, 21, 23, 24].includes(
                                i
                              )
                                ? '#0F1B33'
                                : '#DCE8FD'
                          }}
                        />
                      ))}
                    </div>
                    <div className="text-[11px] font-mono-metric text-[#526382]">
                      NMID: ID2026088991100 &bull; {hrdProfile.companyName}
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <div className="text-[11px] text-[#526382]">
                        Nomor Virtual Account / Kode Bayar
                      </div>
                      <div className="text-sm font-mono-metric font-bold text-[#091326]">
                        {paymentModal.vaNumber}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        navigator.clipboard?.writeText(
                          paymentModal.vaNumber.replace(/\s+/g, '')
                        );
                        triggerToast('Nomor Virtual Account berhasil disalin.');
                      }}
                      className="btn-pill-secondary px-3 py-1.5 text-[11px] inline-flex items-center gap-1"
                    >
                      <Copy className="w-3 h-3 text-accent-primary" />
                      <span>Salin</span>
                    </button>
                  </div>
                )}

                <div className="pt-2 border-t border-dashed border-[#BFD6FA] flex justify-between font-bold">
                  <span>Total Dibayar (Bebas Biaya Admin Gateway)</span>
                  <span className="font-mono-metric text-accent-primary">
                    {formatRupiah(paymentModal.amount)}
                  </span>
                </div>
              </div>

              <div className="flex justify-end gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => setPaymentModal(null)}
                  className="btn-pill-secondary px-4 py-2.5 text-xs sm:text-sm"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="btn-pill-primary px-6 py-2.5 text-xs sm:text-sm inline-flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>
                    Bayar {formatRupiah(paymentModal.amount)} Sekarang
                  </span>
                </button>
              </div>
            </form>
          </div>
        )}
      </NativeModalDialog>

      {/* NATIVE MODAL (US-17): NOTA BUKTI TRANSAKSI PEMROSES PEMBAYARAN */}
      <NativeModalDialog
        open={Boolean(receiptPreviewTx)}
        onClose={() => setReceiptPreviewTx(null)}
        labelledBy={receiptDialogTitleId}
        maxWidthClass="max-w-md"
      >
        {receiptPreviewTx && (
          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#DCE8FD]">
              <div>
                <span className="text-[11px] font-mono-metric font-bold text-accent-primary">
                  BUKTI RESMI HARIANPAY
                </span>
                <h1 id={receiptDialogTitleId} className="heading-tight text-lg">
                  {receiptPreviewTx.invoiceId}
                </h1>
              </div>
              <button
                type="button"
                onClick={() => setReceiptPreviewTx(null)}
                className="p-2 rounded-full hover:bg-white/80"
                aria-label="Tutup nota transaksi"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-[#F5F8FF] border border-[#CBDDFC] space-y-2 text-xs mb-5">
              <div className="flex justify-between">
                <span className="text-[#526382]">Waktu Transaksi</span>
                <span className="font-semibold">{receiptPreviewTx.createdAt}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#526382]">Instansi</span>
                <span className="font-semibold">{hrdProfile.companyName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#526382]">Metode</span>
                <span className="font-semibold text-right">
                  {receiptPreviewTx.method}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#526382]">Keterangan</span>
                <span className="font-semibold text-right max-w-[60%]">
                  {receiptPreviewTx.title}
                </span>
              </div>
              <div className="pt-2 border-t border-dashed border-[#BFD6FA] flex justify-between text-sm font-bold">
                <span>Nominal</span>
                <span className="font-mono-metric text-accent-primary">
                  {formatRupiah(receiptPreviewTx.amount)}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setReceiptPreviewTx(null)}
              className="btn-pill-primary w-full py-2.5 text-xs sm:text-sm"
            >
              Tutup Bukti Pembayaran
            </button>
          </div>
        )}
      </NativeModalDialog>

      {/* POLITE SCREEN-READER STATUS ANNOUNCER */}
      <div aria-live="polite" className="visually-hidden">
        {liveAnnouncement}
      </div>

      {/* LIGHT-THEME TOAST NOTIFICATION */}
      {toastMessage && (
        <div
          role="status"
          className="fixed bottom-5 right-5 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl border shadow-lg view-transition-enter max-w-md"
          style={{
            backgroundColor: 'var(--surface-strong)',
            borderColor: 'var(--primary)'
          }}
        >
          <span
            className="w-2.5 h-2.5 rounded-full shrink-0"
            style={{ backgroundColor: 'var(--primary)' }}
          />
          <span
            className="text-xs sm:text-sm font-semibold"
            style={{ color: 'var(--text)' }}
          >
            {toastMessage}
          </span>
        </div>
      )}
    </div>
  );
}