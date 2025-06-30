import HeaderDashboard from "../components/Elements/HeaderDashboard";
import AdminForm from "../components/Elements/AdminForm";
import AdminItemList from "../components/Elements/AdminItemList";
import Sidebar from "../components/Elements/Sidebar";
import { useEffect } from "react";
import useItemStore from "../store/useItemStore";

export default function Admin() {
  const { fetchItems } = useItemStore();

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="font-[Lato] min-h-screen bg-[#FFFDF3]">
      <HeaderDashboard />
      <div className="md:flex w-full">
        <Sidebar />
        <div className="p-4 md:px-10 w-full">
          <h1 className="text-2xl font-extrabold mb-4">Admin Dashboard</h1>
          <p className="mb-4">Welcome to the admin dashboard. Here you can manage item and description</p>
          <AdminForm />
          <AdminItemList />
        </div>
      </div>
    </div>
  );
}
