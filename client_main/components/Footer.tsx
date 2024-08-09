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
    <footer className="bg-[#1e733d] py-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-0">
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
          <h1 className="text-5xl text-white font-sans">ECOSYNERGY</h1>
          <p className="text-white text-sm mt-4 text-center md:text-left">
            Empowering sustainable living through technology.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
            <h4 className="font-bold mb-2 text-white">Quick Links</h4>
            <ul className="space-y-1">
              <li>
                <Link href="/about" className="text-white hover:text-gray-50">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:text-gray-50">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-white hover:text-gray-50">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
            <h4 className="text-white font-bold mb-2">Resources</h4>
            <ul className="space-y-1">
              <li>
                <Link href="/blog" className="text-white hover:text-gray-50">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-white hover:text-gray-50">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-white hover:text-gray-50">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
            <h4 className="font-bold mb-2 text-white">Contact Us</h4>
            <ul className="space-y-1">
              <li className="flex items-center">
                <Mail className="mr-2 text-white" />{" "}
                <span className="text-white">info@ecosynergy.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-white" /> <span className="text-white">+123 456 7890</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
            <h4 className="font-bold mb-2 text-white">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com">
                <Facebook className="text-white hover:text-gray-50" />
              </Link>
              <Link href="https://www.twitter.com">
                <Twitter className="text-white hover:text-gray-50" />
              </Link>
              <Link href="https://www.instagram.com">
                <Instagram className="text-white hover:text-gray-50" />
              </Link>
              <Link href="https://www.linkedin.com">
                <Linkedin className="text-white hover:text-gray-50" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-8 pt-4 text-center md:text-left">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <span className="flex gap-2 font-semibold font-sans tracking-tight text-white">
            <Copyright className="text-white" />
            Copyright 2024 EcoSynergy. All Rights Reserved.
          </span>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-white hover:text-gray-50">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-white hover:text-gray-50ack">
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
