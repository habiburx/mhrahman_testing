import { Row, IconButton, SmartLink, Text } from "@once-ui-system/core";
import { person, social } from "@/resources";

export const Footer = () => {
  return (
    <Row as="footer" fillWidth paddingY="8" horizontal="center">

      {/* Footer bar — same 80 % width as the navbar */}
      <Row
        paddingY="12"
        paddingX="16"
        horizontal="between"
        vertical="center"
        className="footer-inner"
        s={{ direction: "column", horizontal: "center", gap: "12" }}
      >
        {/* Copyright + name link */}
        <Text variant="body-default-s" onBackground="neutral-weak">
          ©{" "}
          <SmartLink href="/">
            <Text as="span" onBackground="neutral-strong">{person.name}</Text>
          </SmartLink>
        </Text>

        {/* Social icon links */}
        <Row gap="8">
          {social.map((item) =>
            item.link ? (
              <IconButton
                key={item.name}
                href={item.link}
                icon={item.icon}
                tooltip={item.name}
                size="s"
                variant="ghost"
              />
            ) : null,
          )}
        </Row>
      </Row>

      {/* Spacer: hidden on desktop, shown on mobile to clear the fixed bottom navbar */}
      <Row hide s={{ hide: false }} className="footer-mobile-spacer" />

    </Row>
  );
};
