import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const login = async () => {
    const res = await axios.post("http://localhost:5000/api/auth/login", {
      email,
      password,
    });
    toast.success("Login success");
    localStorage.setItem("token", res.data.token);
    nav("/dashboard");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-80">
        <h2 className="text-xl mb-4">CRM Login</h2>
        <input
          className="border p-2 w-full mt-4 mb-4 rounded"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="border p-2 w-full mb-6 rounded"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-blue-600 rounded-lg text-white w-full py-2" onClick={login}>Login</button>
      </div>
    </div>
  );
}