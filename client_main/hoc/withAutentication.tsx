// hoc/withAuthentication.tsx
"use client"; // Ensure the client side only

import Spinner from "@/components/Spinner";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export const WithAuthentication = (Component: React.ComponentType) => {
  return function AuthenticatedComponent(props: any) {
    const { user, isLoading } = useUser();
    const router = useRouter();

    useEffect(() => {
      if (!isLoading && !user) {
        router.push("/api/auth/login");
      }
    }, [user, isLoading, router]);

    if (isLoading || !user) {
      return <Spinner />;
    }

    return <Component {...props} />;
  };
};
