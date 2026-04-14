import axios from "axios";
import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import 'chart.js/auto';
import Layout from "../components/Layout";

export default function Charts() {
  
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/persons", {
      headers: { Authorization: localStorage.getItem("token") }
    }).then(res => setData(res.data));
  }, []);


const grouped: any = {
  Gmail: data.filter(p => p.email.includes("gmail")).length,
  Yahoo: data.filter(p => p.email.includes("yahoo")).length,
  Outlook: data.filter(p => p.email.includes("outlook")).length,
};
  return (
    <Layout>
      <h1 className="text-2xl text-left leading-none">Analytics</h1>
      <div className="h-[300px] max-w-md">
        <Pie
          data={{
            labels: Object.keys(grouped),
            datasets: [
              { data: Object.values(grouped), backgroundColor: ["#f87171", "#60a5fa", "#34d399"] }],
          }}
          options={{
            plugins: {
              legend: {
                position: "bottom",
              },
            },
            responsive: true,
            maintainAspectRatio: false,
          }}
        />
      </div>
      {/*
      <Doughnut
        data={{
          labels: Object.keys(grouped),
          datasets: [
            {
              data: Object.values(grouped),
              backgroundColor: ["#f87171", "#60a5fa", "#34d399"],
              hoverOffset: 10,
            },
          ],
        }}
        options={{
          plugins: {
            legend: {
              position: "bottom",
            },
          },
          cutout: "85%", // makes it a proper doughnut look
        }}
      /> */}
    </Layout>
  );
}