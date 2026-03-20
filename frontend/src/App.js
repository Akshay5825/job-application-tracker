import { useState, useEffect } from "react";

function App() {
  const [jobs, setJobs] = useState([]);
  const [company, setCompany] = useState("");

  const fetchJobs = async () => {
    const res = await fetch("http://localhost:5000/jobs");
    const data = await res.json();
    setJobs(data);
  };

  const addJob = async () => {
    await fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ company }),
    });
    setCompany("");
    fetchJobs();
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Job Application Tracker</h2>

      <input
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Enter company"
        style={{ padding: "5px", marginRight: "10px" }}
      />

      <button onClick={addJob} style={{ padding: "5px 10px" }}>
        Add Job
      </button>

      <ul style={{ marginTop: "20px" }}>
        {jobs.map((job, index) => (
          <li key={index}>{job.company}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;