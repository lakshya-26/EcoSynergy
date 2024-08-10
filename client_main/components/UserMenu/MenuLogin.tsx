import Link from "next/link";
import { Button } from "../ui/button";
import UsernameMenu from "./UserMenu";
import { Instagram } from "lucide-react";



const MenuLogin = () => {
  return (
    <>
    <span className="flex space-x-2 items-center">
        <Link href="/" className="flex gap-2 font-semibold font-sans bor-3 rounded-md">
        <Instagram className="" />
         Eco Media
        </Link>
      {
        1 ? <>
        <UsernameMenu />
        </> : <Button
        className="font-semibold font-sans hover:text-white bg-white text-[#1e733d] bor-3"
        onClick={async () => console.log("hello")}
      >
        Log In
      </Button>
      }
    </span>
    </>
    
  );
};

export default MenuLogin;
