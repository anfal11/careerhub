import {IoLocationOutline} from 'react-icons/io5';
import {AiOutlineDollarCircle} from 'react-icons/ai';
import PropTypes from 'prop-types';  
import { Link } from 'react-router-dom';

const Job = ({job}) => {
    const {id, logo,job_title,company_name,remote_or_onsite,location,job_type,salary} = job;
    // job_description,job_responsibility,educational_requirements,experiences,contact_information
    return (
        <div className="card bg-base-100 shadow-xl mb-5">
        <figure className="mt-5"><img src={logo} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p className="text-left">{company_name}</p>
          <div className="flex gap-5">
          <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]">{remote_or_onsite}</button>
          <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]">{job_type}</button>
          </div>
          <div className="flex gap-2">
            <div className="flex gap-2 items-center">
                <IoLocationOutline />
                <p>{location}</p>
            </div>
            <div className="flex gap-2 items-center">
                <AiOutlineDollarCircle />
                <p>Salary: {salary}</p>
            </div>
          </div>
          <div className="card-actions justify-start">
          <Link to={`/job/${id}`}>
            <button className='rounded px-4 py-3 text-white' style={{background: "linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)"}}>View Details</button>
          </Link>

          </div>
        </div>
      </div>
    );
};
Job.propTypes = {  
    job: PropTypes.object.isRequired,
}  
export default Job;