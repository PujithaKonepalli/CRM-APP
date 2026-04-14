import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Layout from "../components/Layout";

export default function Form() {
  const [form, setForm] = useState({ name:"", email:"", phone:"" });

  const submit = async () => {
    await axios.post("http://localhost:5000/api/persons", form, {
      headers: { Authorization: localStorage.getItem("token") }
    });
    toast.success("Added!");
  };

  return (
    <Layout>
      <h1 className="text-2xl text-left leading-none">Add Person</h1>

      <div className="bg-white dark:bg-gray-800 text-black dark:text-white
        p-6 rounded shadow max-w-md space-y-4 border border-gray-200 dark:border-gray-700">

        <input
          placeholder="Name"
          className="w-full border p-2 rounded bg-gray-100 dark:bg-gray-700"
          onChange={e=>setForm({...form,name:e.target.value})}
        />

        <input
          placeholder="Email"
          className="w-full border p-2 rounded bg-gray-100 dark:bg-gray-700"
          onChange={e=>setForm({...form,email:e.target.value})}
        />

        <input
          placeholder="Phone"
          className="w-full border p-2 rounded bg-gray-100 dark:bg-gray-700"
          onChange={e=>setForm({...form,phone:e.target.value})}
        />

        <button
          onClick={submit}
          className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Save
        </button>
      </div>
    </Layout>
  );
}