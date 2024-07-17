import type { AppProps } from "next/app";
import { DataServiceProvider } from "@/data/DataService";
import { ThemeProvider } from "@/contexts/themes";
import { Toaster } from "@/components/ui/toaster";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <DataServiceProvider>
        <Component {...pageProps} />
        <Toaster />
      </DataServiceProvider>
    </ThemeProvider>
  );
}
