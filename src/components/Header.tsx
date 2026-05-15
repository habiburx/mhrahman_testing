"use client";

import {
  about,
  blog,
  blogs,
  credentials,
  display,
  gallery,
  latest,
  routes,
  work,
} from "@/resources";
import { IconButton, Line, Row, ToggleButton } from "@once-ui-system/core";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./Header.module.scss";
import { ThemeToggle } from "./ThemeToggle";

/* Each nav tab renders two versions:
   - Desktop: icon + label (hidden on mobile)
   - Mobile:  icon only, label appears when the tab is active    */

type NavTabProps = {
  href: string;
  icon: string;
  label: string;
  active: boolean;
};

const NavTab = ({ href, icon, label, active }: NavTabProps) => (
  <>
    <Row s={{ hide: true }} className="nav-tab-row" horizontal="center">
      <ToggleButton
        prefixIcon={icon}
        href={href}
        label={label}
        selected={active}
        size="s"
        className={active ? styles.navBtnActive : ""}
      />
    </Row>
    <Row hide s={{ hide: false }} className="nav-tab-row" horizontal="center">
      <ToggleButton
        prefixIcon={icon}
        href={href}
        label={active ? label : undefined}
        selected={active}
        size="s"
        className={active ? styles.navBtnActive : ""}
      />
    </Row>
  </>
);

export const Header = () => {
  const pathname = usePathname() ?? "";
  const [stuck, setStuck] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(52);

  // Measure the header height once on mount so the spacer matches exactly
  useEffect(() => {
    if (wrapperRef.current) setHeight(wrapperRef.current.offsetHeight);
  }, []);

  // On desktop: fix the navbar once the profile card has scrolled out of view.
  // On mobile: always fixed at the bottom (handled by CSS), skip JS logic.
  // useLayoutEffect for the initial check so it runs before first paint —
  // prevents the navbar from briefly appearing unfixed on pages without a ProfileCard.
  useLayoutEffect(() => {
    const check = () => {
      if (window.innerWidth <= 768) {
        setStuck(false);
        return;
      }
      const anchor = document.getElementById("profile-card-anchor");
      if (!anchor) {
        setStuck(true);
        return;
      }
      setStuck(anchor.getBoundingClientRect().bottom <= 0);
    };
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check, { passive: true });
    check();
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, []);

  return (
    <>
      {/* Placeholder that keeps the layout space when the navbar lifts out of flow */}
      {stuck && <div style={{ height }} aria-hidden="true" />}

      <div ref={wrapperRef} className={`${styles.position} ${stuck ? styles.stuck : ""}`}>
        <Row fitHeight as="header" fillWidth horizontal="center" className="nav-header-inner">
          <Row
            background="page"
            border="neutral-alpha-weak"
            radius="l"
            shadow="l"
            overflow="hidden"
            zIndex={1}
            className={`${styles.navPill} nav-pill-width`}
          >
            <Row
              gap="0"
              vertical="center"
              textVariant="label-default-s"
              fillWidth
              suppressHydrationWarning
              className={styles.navWrapper}
            >
              <NavTab href="/" icon="person" label={about.label} active={pathname === "/"} />

              {routes["/latest"] && (
                <>
                  <Line background="neutral-alpha-medium" vert />
                  <NavTab
                    href="/latest"
                    icon="newspaper"
                    label={latest.label}
                    active={pathname.startsWith("/latest")}
                  />
                </>
              )}

              {routes["/publications"] && (
                <>
                  <Line background="neutral-alpha-medium" vert />
                  <NavTab
                    href="/publications"
                    icon="book"
                    label={blog.label}
                    active={pathname.startsWith("/publications")}
                  />
                </>
              )}

              {routes["/experiences"] && (
                <>
                  <Line background="neutral-alpha-medium" vert />
                  <NavTab
                    href="/experiences"
                    icon="briefcase"
                    label={work.label}
                    active={pathname.startsWith("/experiences")}
                  />
                </>
              )}

              {routes["/credentials"] && (
                <>
                  <Line background="neutral-alpha-medium" vert />
                  <NavTab
                    href="/credentials"
                    icon="award"
                    label={credentials.label}
                    active={pathname.startsWith("/credentials")}
                  />
                </>
              )}

              {routes["/blogs"] && (
                <>
                  <Line background="neutral-alpha-medium" vert />
                  <NavTab
                    href="/blogs"
                    icon="pencil"
                    label={blogs.label}
                    active={pathname.startsWith("/blogs")}
                  />
                </>
              )}

              {routes["/gallery"] && (
                <>
                  <Line background="neutral-alpha-medium" vert />
                  <NavTab
                    href="/gallery"
                    icon="gallery"
                    label={gallery.label}
                    active={pathname.startsWith("/gallery")}
                  />
                </>
              )}

              {display.themeSwitcher && (
                <>
                  <Line background="neutral-alpha-medium" vert />
                  <Row
                    paddingX="8"
                    vertical="center"
                    className={`${styles.themeToggle} ${styles.desktopThemeRow}`}
                  >
                    <ThemeToggle />
                  </Row>
                  <Row
                    paddingX="8"
                    vertical="center"
                    className={styles.mobileThemeRow}
                  >
                    <ThemeToggle />
                    <Line background="neutral-alpha-medium" vert />
                    <span className={styles.arrowUpBtn}>
                      <IconButton
                        icon="arrowUp"
                        variant="ghost"
                        size="s"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                      />
                    </span>
                  </Row>
                </>
              )}
            </Row>
          </Row>
        </Row>
      </div>
    </>
  );
};
