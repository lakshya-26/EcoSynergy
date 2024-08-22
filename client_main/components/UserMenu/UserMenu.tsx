//compoent/usermenu/usermenu.tsx

import { ChevronDown, CircleUserRound } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";

const UsernameMenu = () => {
  const {user} = useUser();

  const getFirstName = (fullName: any) => {
    if (!fullName) return '';
    return fullName.split(' ')[0]; 
  };
  return (
    <DropdownMenu>
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
      <DropdownMenuTrigger className="flex items-center px-3 font-semibold font-sans gap-2 bor-3 rounded-md">
      {getFirstName(user?.name)} <ChevronDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link href="/user-profile" className="font-bold hover:text-[#1e733d]">
            User Profile
          </Link>
        </DropdownMenuItem>
        <Separator />
        <DropdownMenuItem>
          <Link href="/user-profile" className="font-bold hover:text-[#1e733d]">
            Leaderboard
          </Link>
        </DropdownMenuItem>
        <Separator />
        <DropdownMenuItem>
          <Button
            className="flex flex-1 font-bold bg-[#1e733d] hover:bg-primary/90"
            onClick={() => (window.location.href = "/api/auth/logout")}
          >
            Logout
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UsernameMenu;
