import { Link, useLocation } from "react-router-dom";

export default function Layout({ children }: any) {
  const { pathname } = useLocation();

  const toggleDark = () => {
    document.documentElement.classList.toggle("dark");
  };

  const menu = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Persons", path: "/persons" },
    { name: "Add Person", path: "/form" },
    { name: "Analytics", path: "/charts" },
  ];

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-800">
      
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-700 border-r">
        <div className="p-6 font-bold text-xl">CRM</div>

        <nav className="px-4 space-y-2">
          {menu.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-4 py-2 rounded-lg transition 
              ${pathname === item.path 
                ? "bg-blue-100 text-blue-600" 
                : "hover:bg-gray-100 dark:hover:bg-gray-700"}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <button
          onClick={toggleDark}
          className="m-4 p-2 bg-gray-200 rounded"
        >
          Toggle Dark
        </button>
      </aside>

      {/* Content */}
      <main className="flex-1 px-8 pb-8">
        {children}
      </main>
    </div>
  );
}