"use client";

import { CheckCircle2 } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface SuccessModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
}

export function SuccessModal({ open, onOpenChange, title, description }: SuccessModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex flex-col items-center text-center">
        <CheckCircle2 className="h-12 w-12 text-brand-600" />
        <DialogTitle className="mt-4">{title}</DialogTitle>
        <DialogDescription className="mt-2">{description}</DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
