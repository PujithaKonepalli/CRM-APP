import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";

export default function Dashboard() {
  const [persons, setPersons] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:5000/api/persons", {
      headers: { Authorization: localStorage.getItem("token") }
    }).then(res => setPersons(res.data.length));
  }, []);

  return (
    <Layout>
      <h1 className="text-2xl text-left leading-none">Dashboard</h1>
      <div className="grid grid-cols-3 gap-4">
        {/* Card 1 */}
        <div className="bg-blue-100 dark:bg-blue-100 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-lg">Total Users</h2>
          <p className="text-2xl font-bold">--</p>
        </div>

        {/* Card 2 */}
        <div className="bg-green-100 dark:bg-green-100 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-lg">Total Persons</h2>
          <p className="text-2xl font-bold">{persons}</p>
        </div>

        {/* Card 3 */}
        <div className="bg-purple-100 dark:bg-purple-100 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-lg">Activity</h2>
          <p className="text-2xl font-bold">--</p>
        </div>
      </div>
    </Layout>
  );
}