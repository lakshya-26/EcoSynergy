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
      <DropdownMenuTrigger className="flex items-center px-3 font-semibold font-sans hover:text-[#1e733d] gap-2 p-2 border-2 rounded-md">
        <CircleUserRound className="hover:text-[#1e733d]" />
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
          <Button
            className="flex flex-1 font-bold bg-[#1e733d]"
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
