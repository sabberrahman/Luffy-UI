import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";

const font = Inter({ subsets: ["latin"] });

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Luffy Builder',
  description: 'No code Website builder with AI',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) 
{
    
    return (
        <html lang="en" suppressHydrationWarning>
            
            <body
                className={cn(
                    "min-h-screen bg-background text-foreground antialiased max-w-full overflow-x-hidden",
                    font.className
                )}
            >
                {children}
            </body>
        </html>
    );
};
