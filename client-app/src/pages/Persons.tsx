import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Layout from "../components/Layout";
import EditModal from "../components/EditModal";
import DeleteModal from "../components/DeleteModal";

export default function Persons() {
  const [data, setData] = useState<any[]>([]);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [selected, setSelected] = useState<any>(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const fetchData = () => {
    axios.get("http://localhost:5000/api/persons", {
      headers: { Authorization: localStorage.getItem("token") }
    }).then(res => setData(res.data));
  };

  useEffect(fetchData, []);

  const filtered = data.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const perPage = 5;
  const paginated = filtered.slice((page-1)*perPage, page*perPage);

  const updatePerson = async (p:any) => {
    await axios.put(`http://localhost:5000/api/persons/${p.id}`, p, {
      headers: { Authorization: localStorage.getItem("token") }
    });
    toast.success("Updated!");
    setEditOpen(false);
    fetchData();
  };

  const deletePerson = async () => {
    await axios.delete(`http://localhost:5000/api/persons/${selected.id}`, {
      headers: { Authorization: localStorage.getItem("token") }
    });
    toast.success("Deleted!");
    setDeleteOpen(false);
    fetchData();
  };

  return (
    <Layout>
      <h1 className="text-2xl text-left leading-none dark:text-white">Persons</h1>
      <input
        placeholder="Search..."
        className="border p-2 rounded block ml-auto mb-4"
        onChange={e=>setSearch(e.target.value)}
      />
      <div className="bg-white dark:bg-gray-800 text-black dark:text-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 uppercase">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {paginated.map((p) => (
              <tr key={p.id} className="bg-white dark:bg-gray-900 border-t hover:bg-gray-50 dark:border-gray-500 dark:hover:bg-gray-700">
                <td className="p-3">{p.name}</td>
                <td>{p.email}</td>
                <td>{p.phone}</td>
                <td className="space-x-2">
                  <button
                    className="text-blue-600"
                    onClick={() => {
                      setSelected(p);
                      setEditOpen(true);
                    }}
                  >
                    Edit
                  </button>

                  <button
                    className="text-red-600"
                    onClick={() => {
                      setSelected(p);
                      setDeleteOpen(true);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex justify-end gap-4">
        <button onClick={() => setPage(p => Math.max(p - 1, 1))}>Prev</button>
        <button onClick={() => setPage(p => p + 1)}>Next</button>
      </div>

      <EditModal
        open={editOpen}
        onClose={() => setEditOpen(false)}
        person={selected}
        onSave={updatePerson}
      />

      <DeleteModal
        open={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        onDelete={deletePerson}
      />
    </Layout>
  );
}