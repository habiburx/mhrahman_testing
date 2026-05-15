import { Column, Row, Tag, Text } from "@once-ui-system/core";
import { newsItems } from "../data/news.data";

/** Renders the full news timeline card body. Drop into any page that needs it. */
export function NewsTimeline() {
  return (
    <Column className="card-section-items card-body" gap="0">
      {newsItems.map((item, i) => (
        <Column key={`${item.date}-${item.category}-${i}`} fillWidth>
          <Row fillWidth gap="16" vertical="start" className="card-item-inner news-item-row">
            <Text variant="body-default-m" onBackground="neutral-weak" className="news-bullet">
              ·
            </Text>
            <Text variant="body-default-s" onBackground="neutral-weak" className="news-date">
              {item.date}
            </Text>
            <Row gap="8" vertical="center" wrap flex={1} className="news-content-row">
              <Tag size="l" className={`news-category news-cat-${item.category.toLowerCase()}`}>
                {item.category.toLowerCase()}
              </Tag>
              <Text variant="body-default-m" className="news-content">
                {item.content}
              </Text>
            </Row>
          </Row>
        </Column>
      ))}
    </Column>
  );
}
