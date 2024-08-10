import React from "react";
import Link from "next/link";
import { blogData } from "@/public/slideData/data";
import { Separator } from "../ui/separator";

function BlogSec() {
  return (
    <div>
        <h1 className="text-[#1e733d] heading text-center text-4xl font-sans font-bold">Top Blogs of the Month</h1>
    {blogData.map((blog) => (
        <div key={blog.id} className="container mx-auto">
            <div className="md:px-4 sm:px-2">
        <div className="w-full p-4 cursor-pointer">
        <Link href={blog.link} className="flex blog-6" passHref>
              <div className="w-full flex flex-col justify-center">
                <h2 className="md:text-2xl sm:text-xl text-md font-Roboto font-semibold">
                  {blog.title}
                </h2>
                <p className="text-gray-500 justify-left">
                  {blog.author ? blog.author : "Anonymous"}
                </p>
              </div>
              <div className="w-1/2 flex justify-end mb-4 sm:ml-0 ml-4">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="rounded-xl w-40 h-24 object-contain"
                />
              </div>
            </Link>
        </div>
      </div>
      <Separator />
        </div>
    ))}
    </div>
  )
    
}

export default BlogSec;





  