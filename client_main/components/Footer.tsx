"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../public/logoeco.png";
import { Copyright } from "lucide-react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";

const Footer = () => {
  return (
    <>
    <h2 className="footerHeading">
        </h2>
    <footer className="bg-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-0">
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
          <Link href="/">
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 1000, damping: 200 }}
            >
              <Image src={logo} alt="EcoSynergy Logo" className="h-[50px] w-[200px]" />
            </motion.div>
          </Link>
          <p className="text-sm mt-4 text-center md:text-left">
            Empowering sustainable living through technology.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
            <h4 className="font-bold mb-2">Quick Links</h4>
            <ul className="space-y-1">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-black">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-black">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-black">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
            <h4 className="font-bold mb-2">Resources</h4>
            <ul className="space-y-1">
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-black">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-600 hover:text-black">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 hover:text-black">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
            <h4 className="font-bold mb-2">Contact Us</h4>
            <ul className="space-y-1">
              <li className="flex items-center">
                <Mail className="mr-2" />{" "}
                <span>info@ecosynergy.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2" /> <span>+123 456 7890</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
            <h4 className="font-bold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com">
                <Facebook className="text-gray-600 hover:text-black" />
              </Link>
              <Link href="https://www.twitter.com">
                <Twitter className="text-gray-600 hover:text-black" />
              </Link>
              <Link href="https://www.instagram.com">
                <Instagram className="text-gray-600 hover:text-black" />
              </Link>
              <Link href="https://www.linkedin.com">
                <Linkedin className="text-gray-600 hover:text-black" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-8 pt-4 text-center md:text-left">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <span className="flex gap-2 font-semibold font-sans tracking-tight">
            <Copyright />
            Copyright 2024 EcoSynergy. All Rights Reserved.
          </span>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-gray-600 hover:text-black">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-600 hover:text-black">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
