import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


// Import styles
import "./globals.css";
import Header from "@/components/header";

// Create a client
const queryClient = new QueryClient();

export const metadata = {
  title: 'ShopCart - Modern Shopping Experience',
  description: 'A modern shopping cart system built with Next.js, Zustand, and TypeScript',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            {/* <Toaster /> */}
            <Sonner />
            <div className="min-h-screen flex flex-col">
              <Header />
              {children}
              <footer className="border-t py-6 md:py-8">
                <div className="container flex flex-col items-center justify-center gap-4 md:flex-row">
                  <p className="text-center text-sm leading-loose text-muted-foreground">
                    &copy; {new Date().getFullYear()} ShopCart. All rights reserved.
                  </p>
                </div>
              </footer>
            </div>
          </TooltipProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}