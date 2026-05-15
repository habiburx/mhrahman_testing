"use client";

import NotFound from "@/app/not-found";
import { protectedRoutes, routes } from "@/resources";
import { Button, Column, Heading, PasswordInput } from "@once-ui-system/core";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface RouteGuardProps {
  children: React.ReactNode;
}

function checkRouteEnabled(pathname: string): boolean {
  if (pathname in routes) {
    return routes[pathname as keyof typeof routes];
  }
  const dynamicRoutes = ["/blog", "/blogs", "/publications", "/experiences"] as const;
  for (const route of dynamicRoutes) {
    if (pathname.startsWith(route) && routes[route as keyof typeof routes]) {
      return true;
    }
  }
  return false;
}

const RouteGuard: React.FC<RouteGuardProps> = ({ children }) => {
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | undefined>(undefined);
  const [authChecked, setAuthChecked] = useState(false);

  const isRouteEnabled = checkRouteEnabled(pathname ?? "/");
  const isPasswordRequired = !!protectedRoutes[pathname as keyof typeof protectedRoutes];

  useEffect(() => {
    if (!isPasswordRequired) {
      setAuthChecked(true);
      return;
    }
    fetch("/api/check-auth").then((res) => {
      if (res.ok) setIsAuthenticated(true);
      setAuthChecked(true);
    });
  }, [isPasswordRequired]);

  const handlePasswordSubmit = async () => {
    const response = await fetch("/api/authenticate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (response.ok) {
      setIsAuthenticated(true);
      setError(undefined);
    } else {
      setError("Incorrect password");
    }
  };

  if (!isRouteEnabled) return <NotFound />;

  if (isPasswordRequired && authChecked && !isAuthenticated) {
    return (
      <Column paddingY="128" maxWidth={24} gap="24" center>
        <Heading align="center" wrap="balance">
          This page is password protected
        </Heading>
        <Column fillWidth gap="8" horizontal="center">
          <PasswordInput
            id="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            errorMessage={error}
          />
          <Button type="button" onClick={handlePasswordSubmit}>
            Submit
          </Button>
        </Column>
      </Column>
    );
  }

  return <>{children}</>;
};

export { RouteGuard };
