import AdminLayout from "@/components/admin/AdminLayout";

export const metadata = {
    title: "E-Shop - Admin Dashboard",
    description: "E-Shop - Admin Dashboard",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <AdminLayout>
                {children}
            </AdminLayout>
        </>
    );
}
