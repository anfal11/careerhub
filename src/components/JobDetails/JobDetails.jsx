import { useLoaderData, useParams } from "react-router-dom";
import {IoLocationOutline} from 'react-icons/io5';
import {AiOutlineDollarCircle} from 'react-icons/ai';
import {BsTelephone} from 'react-icons/bs';
import {PiSubtitles} from 'react-icons/pi';
import {MdOutlineEmail} from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../Utility/localStorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const job = jobs.find((job) => job.id === parseInt(id));

    const handleApplyJob = () => {
        saveJobApplication(parseInt(id));
        toast.success('You have applied successfully', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
          });
    }
  return (
    <div>
      <div className="hero min-h-screen" style={{background: "linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)"}}>
        <div className="hero-content flex-col lg:flex-row-reverse items-start">
          <div className="card w-[450px] shadow-xl">
            <div className="card-body">
              <h2 className="card-title border-b-2 border-b-black pb-5">Job Details </h2>
              <p className="flex gap-4 items-center"><AiOutlineDollarCircle /> Salary: {job.salary} (Per Month)</p>
              <p className="flex gap-4 items-center"><PiSubtitles /> Job Title: {job.job_title}</p>
              <h2 className="card-title border-b-2 border-b-black pb-5">Contact Information </h2>
              <p className="flex gap-4 items-center"><BsTelephone /> Phone: {job.contact_information.phone}</p>
              <p className="flex gap-4 items-center"><MdOutlineEmail /> Email: {job.contact_information.email}</p>
              <p className="flex gap-4 items-center"><IoLocationOutline /> Address: {job.salary} (Per Month)</p>
              
            </div>
                <button className="btn btn-primary" onClick={handleApplyJob}>Apply Now</button>
                <ToastContainer />
          </div>
          <div className="w-[425px] md:w-[600px] lg:w-[800px]">
            <h1 className="text-xl font-bold"></h1>
            <p className="py-6 text-xl">
             <span className="font-bold">Job Description: </span>{job.job_description} <br /> <br />
             <span className="font-bold">Job Responsibility: </span>{job.job_responsibility} <br /><br />
             <span className="font-bold">Educational Requirements:</span>  <br /><br /> {job.educational_requirements} <br /><br />
             <span className="font-bold">Experiences:</span>  <br /><br /> {job.experiences}
             
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
