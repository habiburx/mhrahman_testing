"use client";

import { ProfileCard } from "@/components";
import { Flex } from "@once-ui-system/core";
import { usePathname } from "next/navigation";

const HIDE_PATTERNS = [/^\/blogs\/.+/, /^\/publications\/.+/];

export function ProfileCardWrapper() {
  const pathname = usePathname();
  if (HIDE_PATTERNS.some((p) => p.test(pathname))) return null;
  return (
    <Flex id="profile-card-anchor" fillWidth paddingTop="s" paddingBottom="4" horizontal="center">
      <ProfileCard />
    </Flex>
  );
}
