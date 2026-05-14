/**
 * Canonical route paths for the portfolio.
 * Use these constants instead of raw strings to avoid typos.
 *
 * Actual route enabling/disabling is controlled by:
 *   src/resources/once-ui.config.ts → routes object
 */
export const ROUTES = {
  HOME:         "/",
  ABOUT:        "/about",
  LATEST:       "/latest",
  PUBLICATIONS: "/publications",
  EXPERIENCES:  "/experiences",
  CREDENTIALS:  "/credentials",
  BLOGS:        "/blogs",
  GALLERY:      "/gallery",
} as const;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];
