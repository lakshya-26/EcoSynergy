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

const UsernameMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center px-3 font-semibold font-sans gap-2 bor-3 rounded-md">
        <CircleUserRound className="" />
        Lakshya <ChevronDown />
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
            onClick={() => console.log('object')}
          >
            Logout
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UsernameMenu;
