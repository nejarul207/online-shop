import StoreLayout from "@/components/store/StoreLayout";

export const metadata = {
    title: "E-Shop - Seller Dashboard",
    description: "E-Shop - Seller Dashboard",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <StoreLayout>
                {children}
            </StoreLayout>
        </>
    );
}
