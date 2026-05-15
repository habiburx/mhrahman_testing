import { person, social } from "@/resources";
import { Button, Column, Row, SmartLink, Text } from "@once-ui-system/core";
import styles from "./ProfileCard.module.scss";
import { ScholarStats } from "./ScholarStats";

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
        <img
          src={person.avatar}
          alt={person.avatarAlt ?? `${person.name} profile photo`}
          className={styles.avatarImg}
          style={{
            objectFit: person.avatarFit ?? "contain",
            objectPosition: person.avatarPosition ?? "center",
          }}
        />
      </Column>

      {/* Name, role, contact info, social buttons */}
      <Column gap="8" fillWidth vertical="center" className={styles.info}>
        <Text className={styles.name}>{person.name}</Text>
        <Text className="profile-text" onBackground="neutral-weak">
          {person.role}
        </Text>
        {person.details?.map((detail) => (
          <Text key={detail} className="profile-text" onBackground="brand-medium">
            {detail}
          </Text>
        ))}
        {person.address && <Text className="profile-text">{person.address}</Text>}
        {person.email && (
          <Text className="profile-text">
            <strong>Academic:</strong>{" "}
            <SmartLink href={`mailto:${person.email}`}>{person.email}</SmartLink>
          </Text>
        )}
        {person.personalEmail && (
          <Text className="profile-text">
            <strong>Personal:</strong>{" "}
            <SmartLink href={`mailto:${person.personalEmail}`}>{person.personalEmail}</SmartLink>
          </Text>
        )}
        {social.filter((item) => item.essential).length > 0 && (
          <Row gap="8" wrap paddingTop="4" className={`social-buttons ${styles.socialRow}`}>
            {social
              .filter((item) => item.essential)
              .map((item) =>
                item.link ? (
                  <Button
                    key={`${item.icon}-${item.link}`}
                    href={item.link}
                    prefixIcon={item.icon}
                    label={item.name}
                    size="s"
                    variant="tertiary"
                    className={styles.socialButton}
                  />
                ) : null,
              )}
          </Row>
        )}
      </Column>

      {person.scholar && <ScholarStats profileUrl={person.scholar} />}
    </Row>
  );
}
