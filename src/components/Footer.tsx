import { person, social } from "@/resources";
import { IconButton, Row, SmartLink, Text } from "@once-ui-system/core";

export const Footer = () => {
  const footerLinks = social.filter((item) => item.link);

  return (
    <Row as="footer" fillWidth paddingY="8" horizontal="center" className="footer-bar">
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
          <SmartLink href="/" className="footer-name-link">
            <Text as="span" onBackground="neutral-strong">
              {person.name}
            </Text>
          </SmartLink>
          {" "}{new Date().getFullYear()}
        </Text>

        {/* Non-essential social icon links (essential ones live on the profile card) */}
        <Row gap="8" wrap horizontal="center">
          {footerLinks.map((item) => (
            <IconButton
              key={item.name}
              href={item.link}
              icon={item.icon}
              tooltip={item.name}
              size="s"
              variant="ghost"
              className="footer-icon"
            />
          ))}
        </Row>
      </Row>

      {/* Spacer: hidden on desktop, shown on mobile to clear the fixed bottom navbar */}
      <Row hide s={{ hide: false }} className="footer-mobile-spacer" />
    </Row>
  );
};
