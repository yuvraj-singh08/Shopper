import ProfileNavigation from "@/components/Profile/ProfileNavigation/ProfileNavigation";
import { Suspense } from "react";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            
            <div className="profile-container">
                <ProfileNavigation />
                <div className="profile-container-main">
                    {children}
                </div>
            </div>
        </>
    );
}
