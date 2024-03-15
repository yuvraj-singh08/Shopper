import ProfileNavigation from "@/components/Profile/ProfileNavigation/ProfileNavigation";
import { Suspense } from "react";
import './filter.css'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
        </>
    );
}