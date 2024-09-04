"use client";
import {
  Apple,
  Biohazard,
  Car,
  CircleUserRound,
  GlassWater,
  HousePlug,
  Menu,
  Smartphone,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect, useState } from "react";
import { createOrFetchUser } from "@/utils/UserApi";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Nav = () => {
  const { user } = useUser();
  const [isOpen, setIsOpen] = useState(false); // State to manage sheet open/close
  const pathname = usePathname();

  useEffect(() => {
    if (user?.sub && user?.email && user?.name) {
      createOrFetchUser(user.sub, user.email, user.name);
    }
  }, [user]);

  useEffect(() => {
    setIsOpen(false); // Close the sheet on path change
  }, [pathname]); // Run this effect when the path changes

  return (
    <div className="">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Menu className="text-[#1e733d]" />
        </SheetTrigger>
        <SheetContent className="space-y-3" side={"left"}>
          <SheetTitle>
            {user ? (
              <span className="flex items-center font-bold gap-2">
                {user?.picture ? (
                  <Image
                    src={user.picture}
                    alt={user.name || "User"}
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                ) : (
                  <CircleUserRound className="text-[#46484a]" />
                )}
                {user?.name}
              </span>
            ) : (
              <span>Welcome to EcoSynergy</span>
            )}
          </SheetTitle>
          <Separator />
          <SheetDescription className="flex flex-col gap-4">
            {user ? (
              <>
                <Link
                  href="/energy-tracking"
                  className="flex bg-white items-center font-bold hover:text-[#1e733d] curved-6"
                >
                  <span className="flex items-center font-bold font-sans gap-2">
                    <HousePlug /> Energy Consumption Tracking
                  </span>
                </Link>
                <Separator />
                <Link
                  href="/manage-restaurant"
                  className="flex bg-white items-center font-bold hover:text-[#1e733d] curved-6"
                >
                  <span className="flex items-center font-bold font-sans gap-2">
                    <Apple /> Food Consumption Tracking
                  </span>
                </Link>
                <Separator />
                <Link
                  href="/user-profile"
                  className="flex bg-white items-center font-bold hover:text-[#1e733d] curved-6"
                >
                  <span className="flex items-center font-bold font-sans gap-2">
                    <Car /> Transport Tracking
                  </span>
                </Link>
                <Separator />
                <Link
                  href="/user-profile"
                  className="flex bg-white items-center font-bold hover:text-[#1e733d] curved-6"
                >
                  <span className="flex items-center font-bold font-sans gap-2">
                    <Biohazard /> Waste Tracking
                  </span>
                </Link>
                <Separator />
                <Link
                  href="/user-profile"
                  className="flex bg-white items-center font-bold hover:text-[#1e733d] curved-6"
                >
                  <span className="flex items-center font-bold font-sans gap-2">
                    <GlassWater /> Water Tracking
                  </span>
                </Link>
                <Separator />
                <Link
                  href="/user-profile"
                  className="flex bg-white items-center font-bold hover:text-[#1e733d] curved-6"
                >
                  <span className="flex items-center font-bold font-sans gap-2">
                    <Smartphone /> Mobile Usage Tracking
                  </span>
                </Link>
                <Separator />
                <Button
                  className="flex items-center px-3 font-bold font-sans hover:bg-[#1e733d]"
                  onClick={() => (window.location.href = "/api/auth/logout")}
                >
                  Logout
                </Button>
              </>
            ) : (
              <Button
                className="flex-1 font-bold font-sans bg-[#1e733d]"
                onClick={() => (window.location.href = "/api/auth/login")}
              >
                Log In
              </Button>
            )}
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Nav;
