import { Apple, Biohazard, Car, CircleUserRound, HousePlug, Menu, Smartphone } from "lucide-react";
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


const Nav = () => {
  return (
    <div className="">
      <Sheet>
      <SheetTrigger>
        <Menu className="text-[#1e733d] " />
      </SheetTrigger>
      <SheetContent className="space-y-3" side={"left"}>
        <SheetTitle>
          {0 ? (
            <span className="flex items-center font-bold gap-2">
              <CircleUserRound className="text-[#1e733d]" />
              email
            </span>
          ) : (
            <span>Welcome to EcoSynergy</span>
          )}
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex flex-col gap-4">
          {1 ? (
            <>
            <Link href="/order-status" className="flex bg-white items-center font-bold hover:text-[#1e733d]">
            <span className="flex items-center font-bold font-sans gap-2"><HousePlug /> Energy Consumption Tracking</span>
          </Link>
          <Separator />
          <Link href="/manage-restaurant" className="flex bg-white items-center font-bold hover:text-[#1e733d]">
          <span className="flex items-center font-bold font-sans gap-2"><Apple /> Food Consumption Tracking</span>
          </Link>
          <Separator />
          <Link
            href="/user-profile"
            className="flex bg-white items-center font-bold hover:text-[#1e733d]"
          >
            <span className="flex items-center font-bold font-sans gap-2"><Car /> Transport Tracking</span>
          </Link>
          <Separator />
          <Link
            href="/user-profile"
            className="flex bg-white items-center font-bold hover:text-[#1e733d]"
          >
            <span className="flex items-center font-bold font-sans gap-2"><Biohazard /> Waste Tracking</span>
          </Link>
          <Separator />
          <Link
            href="/user-profile"
            className="flex bg-white items-center font-bold hover:text-[#1e733d]"
          >
            <span className="flex items-center font-bold font-sans gap-2"><Smartphone /> Mobile Usage Tracking</span>
          </Link>
          <Separator />
          <Button
            className="flex items-center px-3 font-bold font-sans hover:bg-[#1e733d]"
            onClick={() => console.log("hello")}
          >
            Logout
          </Button>
            </>
          ) : (
            <Button
              className="flex-1 font-bold font-sans bg-[#1e733d]"
              onClick={() => console.log("hello")}
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
