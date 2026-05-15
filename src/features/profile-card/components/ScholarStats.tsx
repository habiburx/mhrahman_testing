"use client";

import { useEffect, useState } from "react";
import styles from "../styles/ScholarStats.module.scss";

type ScholarMetrics = {
  citations: string;
  hIndex: string;
  i10Index: string;
  profileUrl: string;
  updatedAt: string;
};

type ScholarStatsProps = {
  profileUrl: string;
};

function formatDate(value?: string) {
  if (!value) return null;

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;

  return date.toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });
}

export function ScholarStats({ profileUrl }: ScholarStatsProps) {
  const [metrics, setMetrics] = useState<ScholarMetrics | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadMetrics() {
      try {
        const response = await fetch(`/api/scholar?url=${encodeURIComponent(profileUrl)}`);
        if (!response.ok) throw new Error("Scholar metrics unavailable");
        const data = (await response.json()) as ScholarMetrics;
        if (!cancelled) setMetrics(data);
      } catch {
        // Keep the visual layout stable if Scholar blocks the request.
      }
    }

    loadMetrics();

    return () => {
      cancelled = true;
    };
  }, [profileUrl]);

  const items = [
    { label: "Citations", value: metrics?.citations, tone: "primary" },
    { label: "h-index", value: metrics?.hIndex, tone: "secondary" },
    { label: "i10-index", value: metrics?.i10Index, tone: "tertiary" },
  ];
  const updatedAt = formatDate(metrics?.updatedAt);

  return (
    <aside className={styles.stats} aria-label="Google Scholar citation metrics">
      <a
        className={styles.title}
        href={metrics?.profileUrl ?? profileUrl}
        target="_blank"
        rel="noreferrer"
      >
        Google Scholar Profile
      </a>
      <div className={styles.metrics}>
        {items.map((item) => (
          <div className={styles.metricCard} data-tone={item.tone} key={item.label}>
            <div className={styles.value}>{item.value ?? "--"}</div>
            <div className={styles.metric}>{item.label}</div>
          </div>
        ))}
      </div>
      <div className={styles.updated}>Last updated {updatedAt ?? "--/--/----"}</div>
    </aside>
  );
}
