import HeaderDashboard from "../components/Elements/HeaderDashboard";
import Sidebar from "../components/Elements/Sidebar";
import { capitalizeEachWord } from "../utils/string";
import useSearchUserStore from "../store/useSearchUserStore";

export default function SearchUser() {
  const { email, loading, result, setEmail, handleSearch, error } = useSearchUserStore();

  function handleInputChange(e) {
    setEmail(e.target.value);
  }

  function onKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  }

  return (
    <div className="font-[Lato] min-h-screen bg-[#FFFDF3]">
      <HeaderDashboard />
      <div className="md:flex w-full">
        <Sidebar />
        <div className="p-4 md:px-10 w-full">
          <h1 className="text-2xl font-extrabold mb-4">Search User</h1>
          <p className="mb-4">You can search user by email.</p>
          <div className="bg-white shadow-lg p-4 flex gap-4 items-center">
            <label htmlFor="email" className="font-bold">
              Email
            </label>
            <input type="text" id="email" name="email" value={email} onChange={handleInputChange} onKeyDown={onKeyDown} className="border border-black rounded-sm p-1 w-[50%]" />
            <button onClick={handleSearch} className="bg-sky-700 w-20 px-2 py-1 rounded text-white font-semibold">
              Search
            </button>
          </div>
          {error && <p className="mt-4 text-red-500 font-medium">{error}</p>}
          {loading && <p className="mt-4 text-gray-500 italic">Loading user data..</p>}
          {!loading && result && (
            <div className="mt-6 bg-white p-4 shadow rounded overflow-x-auto">
              <h2 className="text-lg font-bold mb-4">User Found</h2>
              <table className="min-w-full border-collapse border-gray-300 text-sm text-left">
                <thead className="bg-gray-100 text-gray-700 uppercase">
                  <tr>
                    <th className="px-4 py-2">ID</th>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Email</th>
                    <th className="px-4 py-2">Gender</th>
                    <th className="px-4 py-2">Phone</th>
                    <th className="px-4 py-2">Avatar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2">{result.id}</td>
                    <td className="px-4 py-2">{capitalizeEachWord(result.name)}</td>
                    <td className="px-4 py-2">{result.email}</td>
                    <td className="px-4 py-2">{capitalizeEachWord(result.gender)}</td>
                    <td className="px-4 py-2">{result.phone}</td>
                    <td className="px-4 py-2">
                      <img src={result.avatar} alt="avatar" className="w-12 h-12 rounded-full" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
