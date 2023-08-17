// Properly imported icons from 'lucide-react'
import { Download, ImageIcon, Code, MessageSquare, Music, Send, FileAudio } from "lucide-react";

// Your utility function
import { cn } from "@/lib/utils";

// Updated interface to accept a React component as the 'icon' prop
interface HeadingProps {
  title: string;
  description: string;
  icon: React.ComponentType; // This is the type for a React component
  iconColor?: string;
  bgColor?: string;
}

// Updated 'Heading' component
export const Heading = ({
  title,
  description,
  icon:Icon, // Accept a React component as the 'icon' prop
  iconColor,
  bgColor,
}: HeadingProps) => {
  return (
    <>
      <div className="px-4 lg:px-8 flex items-center gap-x-3 mb-8">
        <div className={cn("p-2 w-fit rounded-md", bgColor)}>
          <div className={cn("w-10 h-10", iconColor)} /> 
        </div>
        <div>
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-sm text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};
