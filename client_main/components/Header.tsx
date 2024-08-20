//component/header.tsx

"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../public/logoeco.png";
import Nav from "./Nav/Nav";
import MenuLogin from "./UserMenu/MenuLogin";

const Header = () => {
  return (
    <div className="border-b shadow-xl border-b-[#1e733d] py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="block">
          <Nav />
        </div>
        <div className="flex gap-6">
          <MenuLogin />
          <Link href="/" className="text-3xl font-bold tracking-tight text-orange-500">
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 1000, damping: 200 }}
            >
              <Image
                src={logo}
                alt="logo"
                className="h-[50px] w-[300px]"
              />
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
