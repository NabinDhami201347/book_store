import { AlertTriangle, CheckCircleIcon, StopCircle } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const bannerVariants = cva("border text-center p-4 flex items-center w-full", {
  variants: {
    variant: {
      warning: "bg-yellow-400/80 border-yellow-300 text-primary",
      success: "bg-emerald-700 border-emerald-800 text-secondary",
      danger: "bg-rose-500 border-rose-800 text-primary",
    },
  },
  defaultVariants: {
    variant: "warning",
  },
});

interface BannerProps extends VariantProps<typeof bannerVariants> {
  label: string;
}

const iconMap = {
  warning: AlertTriangle,
  success: CheckCircleIcon,
  danger: StopCircle,
};

const Banner = ({ label, variant }: BannerProps) => {
  const Icon = iconMap[variant || "warning"];

  return (
    <div className={cn(bannerVariants({ variant }))}>
      <Icon className="h-4 w-4 mr-2" />
      <p className="text-xs md:text-base">{label}</p>
    </div>
  );
};

export default Banner;
