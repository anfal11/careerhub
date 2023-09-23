import {MdOutlineAccountBox} from 'react-icons/md'
import {HiOutlineLightBulb} from 'react-icons/hi'
import {FcSalesPerformance} from 'react-icons/fc'
import {BiBriefcaseAlt} from 'react-icons/bi'

const CategoryList = () => {
  return (
    <div>
      <h1 className="text-5xl text-center font-bold pt-5 pb-2">Job Category List</h1>
      <p className="text-base text-center font-bold">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>

      <div>
        
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10" >
<div className="rounded-lg p-5" style={{background: "linear-gradient(180deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)"}} >
            <MdOutlineAccountBox className="text-5xl" />
            <p className='font-semibold text-xl '>Account & Finance</p>
            <p>300 Jobs Available</p>
        </div>
        <div className="rounded-lg p-5" style={{background: "linear-gradient(180deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)"}} >
            <HiOutlineLightBulb className="text-5xl" />
            <p className='font-semibold text-xl' >Creative Design</p>
            <p>100+ Jobs Available</p>
        </div>
        <div className="rounded-lg p-5" style={{background: "linear-gradient(180deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)"}} >
            <FcSalesPerformance className="text-5xl" />
            <p className='font-semibold text-xl' >Marketing & Sales</p>
            <p>150 Jobs Available</p>
        </div>
        <div className="rounded-lg p-5" style={{background: "linear-gradient(180deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)"}} >
            <BiBriefcaseAlt className="text-5xl" />
            <p className='font-semibold text-xl' >Engineering Job</p>
            <p>224 Jobs Available</p>
        </div>
</div>
        </div>
     
    </div>



  );
};

export default CategoryList;
