import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utility/localStorage";

const Applied = () => {
    const jobs = useLoaderData();

    const [jobsApplied, setJobsApplied] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleJobsFilter = filter => {
        if(filter === 'all') {
            setDisplayJobs(jobsApplied);
        } else if(filter === 'remote') {
            const remoteJobs = jobsApplied.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        } else if(filter === 'onsite') {
            const onsiteJobs = jobsApplied.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs);
        }
    }

    useEffect(() => {
       const storedJobIds = getStoredJobApplication();
         if(jobs.length > 0) {
             const appliedJobs = jobs.filter(job => storedJobIds.includes(job.id));
                setJobsApplied(appliedJobs);
                setDisplayJobs(appliedJobs);
         }
    }, [jobs]);
    return (
      <div
        style={{
          background:
            "linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <h1>Applied jobs: {jobsApplied.length}</h1>

          <details className="dropdown mb-32">
            <summary className="m-1 btn">Filter</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              <li onClick={()=> handleJobsFilter('all')}>
                <a>All</a>
              </li>
              <li onClick={()=> handleJobsFilter('remote')}>
                <a >Remote</a>
              </li>
              <li onClick={()=> handleJobsFilter('onsite')}>
                <a>onsite</a>
              </li>
            </ul>
          </details>

          <ul>
            {displayJobs.map((job) => (
              <li key={job.id}>
                <span>
                  {job.job_title} {job.company_name}: {job.remote_or_onsite}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
};

export default Applied;