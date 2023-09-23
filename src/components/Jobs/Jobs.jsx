import { useEffect, useState } from "react";
import Job from "../Job/Job";

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(4);
  
    useEffect(() => {
      fetch("/public/data/jobs.json")
        .then((res) => res.json())
        .then((data) => setJobs(data));
    }, []);
    return (
        <div style={{background: "linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)"}}>

        <div  className="max-w-7xl mx-auto">
        <div className="text-center font-bold pb-32 pt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {jobs.slice(0, loading).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      {/* <div className={loading === jobs.length && "hidden"}>
        <button className="rounded font-bold px-4 py-3 text-white" style={{background: "linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)"}} onClick={() => setLoading(loading + 4)}>See All Jobs</button>
      </div> */}
      <div className={loading === jobs.length && "hidden"}>
        <button className="rounded font-bold px-4 py-3 text-white" style={{background: "linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)"}} onClick={() => setLoading(jobs.length)}>See All Jobs</button>
      </div>
    </div>
        </div>
        </div>
    );
};

export default Jobs;