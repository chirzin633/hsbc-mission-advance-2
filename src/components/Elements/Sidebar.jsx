import { Link } from "react-router";

export default function Sidebar() {
  return (
    <div className="md:w-64 w-full text-center bg-[#2c3e50] text-white md:min-h-screen py-2 md:p-5">
      <h2 className="text-xl font-bold mb-6">Admin Menu</h2>
      <ul className="space-y-2 md:space-y-4">
        <li>
          <Link to={"/admin"} className="hover:underline">
            Input Item
          </Link>
        </li>
        <li>
          <Link to={"/admin/search-user"} className="hover:underline">
            Search User
          </Link>
        </li>
      </ul>
    </div>
  );
}
