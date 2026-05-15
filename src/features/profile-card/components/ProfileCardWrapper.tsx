"use client";

import { Flex } from "@once-ui-system/core";
import { usePathname } from "next/navigation";
import { ProfileCard } from "./ProfileCard";

const HIDE_PATTERNS = [/^\/blogs\/.+/, /^\/publications\/.+/];

export function ProfileCardWrapper() {
  const pathname = usePathname();
  if (HIDE_PATTERNS.some((p) => p.test(pathname))) return null;
  return (
    <Flex
      id="profile-card-anchor"
      fillWidth
      paddingTop="0"
      paddingBottom="0"
      horizontal="center"
      className="profile-card-wrapper"
    >
      <ProfileCard />
    </Flex>
  );
}
