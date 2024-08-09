import Link from "next/link";
import { Button } from "../ui/button";
import UsernameMenu from "./UserMenu";
import { Instagram } from "lucide-react";



const MenuLogin = () => {
  return (
    <span className="flex space-x-2 items-center">
        <Link href="/" className="flex gap-2 font-semibold font-sans border-2 p-2 rounded-md hover:text-[#1e733d]">
        <Instagram className="hover:text-[#1e733d]" />
         Eco Media
        </Link>
      {
        0 ? <>
        <UsernameMenu />
        </> : <Button
        className="font-semibold font-sans hover:text-white bg-transparent border-2 rounded-md text-[#1e733d] hover:bg-[#1e733d]"
        onClick={async () => console.log("hello")}
      >
        Log In
      </Button>
      }
    </span>
    
  );
};

export default MenuLogin;
