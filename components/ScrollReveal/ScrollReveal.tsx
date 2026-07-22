"use client";

import {
  type CSSProperties,
  type ReactNode,
  useEffect,
  useRef,
} from "react";

import styles from "./ScrollReveal.module.css";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  observeChildren?: string;
};

type RevealStyle = CSSProperties & {
  "--reveal-delay"?: string;
};

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  observeChildren,
}: ScrollRevealProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;

    if (!root) {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const childTargets = observeChildren
      ? Array.from(root.querySelectorAll<HTMLElement>(observeChildren))
      : [];

    const targets: HTMLElement[] = [root, ...childTargets];

    targets.forEach((target, index) => {
      target.classList.add(styles.item);

      const targetDelay =
        index === 0 ? delay : Math.min(delay + index * 70, 210);

      target.style.setProperty(
        "--reveal-delay",
        `${targetDelay}ms`,
      );

      if (reducedMotion) {
        target.dataset.revealState = "visible";
        return;
      }

      const bounds = target.getBoundingClientRect();
      const alreadyVisible =
        bounds.top < window.innerHeight * 0.92 &&
        bounds.bottom > 0;

      target.dataset.revealState = alreadyVisible
        ? "visible"
        : "hidden";
    });

    if (reducedMotion) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const target = entry.target as HTMLElement;

          target.dataset.revealState = "visible";
          observer.unobserve(target);
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.08,
      },
    );

    targets.forEach((target) => {
      if (target.dataset.revealState === "hidden") {
        observer.observe(target);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [delay, observeChildren]);

  const revealStyle: RevealStyle = {
    "--reveal-delay": `${delay}ms`,
  };

  return (
    <div
      ref={rootRef}
      className={`${styles.reveal} ${className}`.trim()}
      style={revealStyle}
    >
      {children}
    </div>
  );
}