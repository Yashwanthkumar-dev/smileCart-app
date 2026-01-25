import { useEffect, useState } from "react";
import { adminDashboard } from "../Api/Api";

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdmindashboard = async () => {
      try {
        const statistics = await adminDashboard();
        setStats(statistics);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchAdmindashboard();
  }, []);
  return (
    <>
      <div>
        <div>
          <h1>welcome to the smileCart dashboard</h1>
        </div>
        {stats.map((datas, index) => (
          <div key={index}>
            <div>
              { datas.name}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AdminDashboard;
