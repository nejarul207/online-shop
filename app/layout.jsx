import { Outfit } from "next/font/google";
import { Toaster } from "react-hot-toast";
import StoreProvider from "@/app/StoreProvider";
import SupabaseProvider from "@/components/providers/SupabaseProvider";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata = {
    title: "E-Shop - Your Online Store",
    description: "E-Shop - Your one-stop online shopping destination",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${outfit.className} antialiased`}>
                <StoreProvider>
                    <SupabaseProvider>
                        <Toaster />
                        {children}
                    </SupabaseProvider>
                </StoreProvider>
            </body>
        </html>
    );
}
