import { Button, Column, Row, Text } from "@once-ui-system/core";
import { person, social } from "@/resources";
import styles from "./ProfileCard.module.scss";

export function ProfileCard() {
  return (
    <Row
      border="neutral-alpha-weak"
      radius="l"
      shadow="l"
      overflow="hidden"
      className="page-card"
      s={{ direction: "column" }}
    >
      {/* Profile photo */}
      <Column className={styles.avatar}>
        <img src={person.avatar} alt={person.name} className={styles.avatarImg} />
      </Column>

      {/* Name, role, contact info, social buttons */}
      <Column gap="8" fillWidth vertical="center" className={styles.info}>
        <Text className={styles.name}>{person.name}</Text>
        <Text className="profile-text" onBackground="neutral-weak">{person.role}</Text>
        <Text className="profile-text" onBackground="brand-medium">Department of Computer Science</Text>
        <Text className="profile-text" onBackground="brand-medium">Old Dominion University, USA</Text>
        {person.address && (
          <Text className="profile-text">{person.address}</Text>
        )}
        {person.email && (
          <Text className="profile-text">Email: {person.email}</Text>
        )}
        {social.filter((item) => item.essential).length > 0 && (
          <Row gap="8" wrap paddingTop="4" className={`social-buttons ${styles.socialRow}`}>
            {social.filter((item) => item.essential).map((item) =>
              item.link ? (
                <Button
                  key={item.name}
                  href={item.link}
                  prefixIcon={item.icon}
                  label={item.name}
                  size="s"
                  variant="tertiary"
                />
              ) : null,
            )}
          </Row>
        )}
      </Column>

      {/* Empty spacer column — keeps right side padding on desktop, hidden on mobile */}
      <Column
        vertical="center"
        horizontal="center"
        className="profile-card-spacer"
        s={{ hide: true }}
      />
    </Row>
  );
}
