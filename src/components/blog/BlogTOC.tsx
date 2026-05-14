"use client";

import { useEffect, useState } from "react";
import type { TocHeading } from "@/utils/extractHeadings";
import styles from "./BlogTOC.module.scss";

interface BlogTOCProps {
  headings: TocHeading[];
}

export function BlogTOC({ headings }: BlogTOCProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "0px 0px -60% 0px", threshold: 0 },
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length < 2) return null;

  return (
    <div className={styles.toc}>
      <span className={styles.label}>ON THIS PAGE</span>
      <div className={styles.list}>
        {headings.map(({ level, text, id }) => (
          <a
            key={id}
            href={`#${id}`}
            className={styles.link}
            data-active={activeId === id}
          >
            <div className={styles.item} style={{ paddingLeft: level === 3 ? 8 : 0 }}>
              <span
                className={styles.dot}
                data-active={activeId === id}
                data-sub={level === 3}
              />
              <span className={styles.text} data-active={activeId === id}>
                {text}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
