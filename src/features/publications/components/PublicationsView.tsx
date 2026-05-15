"use client";

import { publicationsPageContent } from "@/resources/publications-page";
import { Column, Heading, Line, Row, SmartLink, Tag, Text } from "@once-ui-system/core";
import { useMemo, useState } from "react";
import { myName, publications } from "../data/publications.data";
import type { PublicationType } from "../types/publication.types";

const ALL_TYPES: PublicationType[] = [
  "Journal",
  "Conference",
  "Workshop",
  "Preprint",
  "Talk",
  "Presentation",
  "Poster",
  "Report",
];

function renderAuthors(authors: string[]) {
  return authors.map((name, i) => (
    <span key={name}>
      {name === myName ? <strong className="pub-my-name">{name}</strong> : name}
      {i < authors.length - 1 ? ", " : ""}
    </span>
  ));
}

/** Full publications listing with filter pills and search. Edit content in src/resources/publications-page.ts. */
export function PublicationsView() {
  const [query, setQuery] = useState("");
  const [activeType, setActiveType] = useState<PublicationType | null>(null);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return publications.filter((p) => {
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.authors.some((a) => a.toLowerCase().includes(q)) ||
        p.venue.toLowerCase().includes(q) ||
        p.keywords?.some((k) => k.toLowerCase().includes(q));
      const matchesType = !activeType || p.type === activeType;
      return matchesQuery && matchesType;
    });
  }, [query, activeType]);

  const years = useMemo(
    () => [...new Set(filtered.map((p) => p.year))].sort((a, b) => b - a),
    [filtered],
  );
  const byYear = useMemo(
    () =>
      years.reduce<Record<number, typeof publications>>((acc, y) => {
        acc[y] = filtered.filter((p) => p.year === y);
        return acc;
      }, {}),
    [filtered, years],
  );
  return (
    <Column
      border="neutral-alpha-weak"
      radius="l"
      shadow="l"
      overflow="hidden"
      fillWidth
      className="page-card"
    >
      {/* Header */}
      <Column className="card-header">
        <Heading as="h2" variant="heading-strong-l" className="pub-page-title">
          {publicationsPageContent.heading}
        </Heading>
      </Column>
      <Line background="neutral-alpha-weak" />

      {/* Filter pills + Search */}
      <Row fillWidth horizontal="between" vertical="center" gap="16" className="pub-filters">
        <Row gap="8" wrap className="pub-filter-pills">
          <button
            type="button"
            onClick={() => setActiveType(null)}
            className={`pub-filter-btn${activeType === null ? " pub-filter-active" : ""}`}
          >
            All
          </button>
          {ALL_TYPES.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setActiveType(activeType === t ? null : t)}
              className={`pub-filter-btn${activeType === t ? " pub-filter-active" : ""}`}
            >
              {t}
            </button>
          ))}
        </Row>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={publicationsPageContent.searchPlaceholder}
          className="pub-search-input"
        />
      </Row>
      <Line background="neutral-alpha-weak" />

      {/* List */}
      {filtered.length === 0 ? (
        <Column className="card-body">
          <Text onBackground="neutral-weak" className="pub-empty">
            {publicationsPageContent.emptyMessage}
          </Text>
        </Column>
      ) : (
        <Column className="card-section-items card-body" gap="0">
          {years.map((year, yi) => (
            <Column key={year} id={`year-${year}`} fillWidth>
              {yi > 0 && <Line background="neutral-alpha-weak" className="card-divider" />}
              <Row fillWidth gap="24" vertical="start" className="pub-year-group card-item-inner">
                <Column className="pub-year-col">
                  <Text variant="heading-strong-m" className="pub-year-num">
                    {year}
                  </Text>
                </Column>
                <Column flex={1} gap="0">
                  {byYear[year].map((pub, pi) => (
                    <Column key={pub.title} fillWidth>
                      {pi > 0 && (
                        <Line background="neutral-alpha-weak" className="pub-paper-divider" />
                      )}
                      <Column gap="8" className="pub-item">
                        <Text variant="body-strong-m" className="pub-title">
                          {pub.title}
                        </Text>
                        {pub.keywords && pub.keywords.length > 0 && (
                          <Row gap="8" wrap className="pub-keywords">
                            {pub.keywords.map((kw) => (
                              <span key={kw} className="pub-keyword-tag">
                                {kw}
                              </span>
                            ))}
                          </Row>
                        )}
                        <Text variant="body-default-s" className="pub-authors">
                          {renderAuthors(pub.authors)}
                        </Text>
                        <Row gap="8" vertical="center" wrap>
                          <Text
                            variant="body-default-s"
                            onBackground="neutral-medium"
                            className="italic pub-venue"
                          >
                            {pub.venue}
                          </Text>
                          <Tag
                            size="s"
                            className={`pub-type-tag pub-type-${pub.type.toLowerCase().replace(" ", "-")}`}
                          >
                            {pub.type}
                          </Tag>
                        </Row>
                        {pub.links && pub.links.length > 0 && (
                          <Row gap="8" wrap className="pub-links">
                            {pub.links.map((link) => (
                              <SmartLink key={link.label} href={link.href} className="pub-link-btn">
                                {link.label}
                              </SmartLink>
                            ))}
                          </Row>
                        )}
                      </Column>
                    </Column>
                  ))}
                </Column>
              </Row>
            </Column>
          ))}
        </Column>
      )}
    </Column>
  );
}
