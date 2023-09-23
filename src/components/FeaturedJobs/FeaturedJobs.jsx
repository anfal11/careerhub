import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(4);

  useEffect(() => {
    fetch("./jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="text-center font-bold pb-32">
      <h1 className="text-5xl pt-5 pb-2">Featured Jobs</h1>
      <p className="text-base mb-8">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {jobs.slice(0, loading).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      {/* <div className={loading === jobs.length && "hidden"}>
        <button className="rounded font-bold px-4 py-3 text-white" style={{background: "linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)"}} onClick={() => setLoading(loading + 4)}>See All Jobs</button>
      </div> */}
      <div className={loading === jobs.length && "hidden"}>
        <button className="mt-10 rounded font-bold px-4 py-3 text-white" style={{background: "linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)"}} onClick={() => setLoading(jobs.length)}>See All Jobs</button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
