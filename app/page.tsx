"use client";

import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Youtube,
  MessageSquare,
  FastForward,
  Search,
  Clock,
  FileText,
  ChefHat,
  Chrome,
} from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const logoControls = useAnimation();

  useEffect(() => {
    setIsVisible(true);
    const animateLogo = async () => {
      await logoControls.start({
        rotate: [0, -20, 20, -20, 20, 0],
        transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
      });
    };
    animateLogo();
  }, [logoControls]);

  const features = [
    {
      icon: <MessageSquare className="h-8 w-8 text-pink-500" />,
      title: "Chat & Summarize",
      description:
        "Get instant summaries and chat about any YouTube video content",
    },
    {
      icon: <FastForward className="h-8 w-8 text-blue-500" />,
      title: "Skip Ads",
      description: "Automatically skip through ad breaks seamlessly",
    },
    {
      icon: <Search className="h-8 w-8 text-purple-500" />,
      title: "Visual Search",
      description: "Search for specific moments in videos with visual context",
    },
    {
      icon: <Clock className="h-8 w-8 text-green-500" />,
      title: "Smart Timestamps",
      description: "Navigate videos with intelligent timestamp markers",
    },
    {
      icon: <FileText className="h-8 w-8 text-orange-500" />,
      title: "Video Transcript",
      description: "Access complete video transcripts instantly",
    },
    {
      icon: <ChefHat className="h-8 w-8 text-yellow-500" />,
      title: "Smart Extraction",
      description: "Get recipes from cooking videos or steps from tutorials",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <motion.div animate={logoControls}>
                <Youtube className="h-8 w-8 text-red-500" />
              </motion.div>
              <span className="text-xl font-bold">ChatWithYoutube</span>
            </div>
            <div className="flex items-center space-x-4">
              <SignedOut>
                <SignInButton mode="modal">
                  <Button variant="ghost">Sign In</Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button>Sign Up</Button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mt-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h1 className="text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
            Your AI YouTube Assistant
          </h1>
          <p className="mt-6 text-xl text-muted-foreground">
            Transform your YouTube experience with AI-powered features that help
            you understand, navigate, and extract information from any video.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-8"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-8 py-6 text-lg"
              onClick={() =>
                window.open("https://chrome.google.com/webstore", "_blank")
              }
            >
              <Chrome className="mr-2 h-5 w-5" />
              Add to Chrome
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                <div className="relative p-6 bg-card rounded-lg border h-full flex flex-col">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                    {feature.icon}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground flex-grow">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="aspect-video rounded-lg border bg-card">
            <div className="flex items-center justify-center h-full text-muted-foreground">
              Demo Video Coming Soon
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
