"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import Image from "next/image";
import { useEffect, useState } from "react";
import meter1 from "@/public/meter.jpg";
import meter2 from "@/public/Single-Phase-Static-Meter-Electricity-Meter-Dry-Dial-Meter-Electronic-Multi-Rate-Energy-Meter-.jpg";

const DialogPage = () => {
  const [dialogOpen, setDialogOpen] = useState(true);

  useEffect(() => {
    setDialogOpen(true);
  }, []);
  return (
    <div>
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="p-12">
          <DialogTitle className="text-xl text-[#1e733d] font-bold">Important Notice</DialogTitle>
          <DialogDescription className="text-l bg-gray-50">
            Please crop your meter images like these and then upload it to get
            the accurate extractions ↓ ↓
            <div className="flex gap-4 items-center mt-2">
              <Image src={meter1} width={100} height={100} alt="meter" />
              <Image src={meter2} width={100} height={100} alt="meter" />
            </div>
          </DialogDescription>
          <DialogClose asChild>
            <Button className="mt-4">Close</Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DialogPage;
