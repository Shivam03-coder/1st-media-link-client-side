"use client";

import { useToast } from "@/hooks/use-toast";

interface ToastProps {
  title: string;
  description?: string;
}

const SuccessToast = ({ title, description }: ToastProps) => {
  const { toast } = useToast();

  toast({
    title: title || "",
    description: description || "",
    className: "bg-green-300 text-black",
  });
};

const ErrorToast = ({ title, description }: ToastProps) => {
  const { toast } = useToast();

  toast({
    title: title || "",
    description: description || "",
    className: "bg-red-300 text-black",
  });
};

export { SuccessToast, ErrorToast };
