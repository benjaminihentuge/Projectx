// import React from "react";

// import {BiTimeFive} from 'react-icons/Bi'
// import  logo1 from '../../assets/logo(1).png'

// const Data = [
//   {
//     id:1,
//     image: logo1,
//     title: 'Web Developer',
//     time: 'Now',
//     location: 'Canada',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, dolorem.',
//     company: 'Novac Linus Co.'
  
//   },

//   {
//     id:2,
//     image: logo1,
//     title: 'Web Developer',
//     time: 'Now',
//     location: 'Canada',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, dolorem.',
//     company: 'Novac Linus Co.'
  
//   },

//   {
//     id:3,
//     image: logo1,
//     title: 'Web Developer',
//     time: 'Now',
//     location: 'Canada',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, dolorem.',
//     company: 'Novac Linus Co.'
  
//   },

//   {
//     id:4,
//     image: logo1,
//     title: 'Web Developer',
//     time: 'Now',
//     location: 'Canada',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, dolorem.',
//     company: 'Novac Linus Co.'
  
//   },

//   {
//     id:5,
//     image: logo1,
//     title: 'Web Developer',
//     time: 'Now',
//     location: 'Canada',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, dolorem.',
//     company: 'Novac Linus Co.'
  
//   },
//   {
//     id:6,
//     image: logo1,
//     title: 'Web Developer',
//     time: 'Now',
//     location: 'Canada',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, dolorem.',
//     company: 'Novac Linus Co.'
  
//   },

//   {
//     id:7,
//     image: logo1,
//     title: 'Web Developer',
//     time: 'Now',
//     location: 'Canada',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, dolorem.',
//     company: 'Novac Linus Co.'
  
//   },

//   {
//     id:8,
//     image: logo1,
//     title: 'Web Developer',
//     time: 'Now',
//     location: 'Canada',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, dolorem.',
//     company: 'Novac Linus Co.'
  
//   }

// ]





// const Jobs = () => {
//   return(
//     <div>
//       <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">

//       {
//         Data.map(({id,image,title,time,location,desc,company}) =>{

//           return(
//             <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor   shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">


//               <span className='flex justify-between items-center gap-4'>
//                 <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white ">{title}</h1>
//                 <span className="flex item-center text-[#accc] gap-1 ">
//                   <BiTimeFive/>{time}
//                 </span>
//               </span>
//               <h6 className=" text-[#accc]">{location}</h6>

//               <p className="text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] group-hover:[text-white]">{desc} 
//               </p>

//               <div className="company flex item-center gap-2 "></div>
//               <img src={image} alt="Company Logo" className="w-[10%]"/>
//               <span className="text-[14px] py-[1rem] block group-hover:text-white">{company}</span>
//               <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-item:text-textColor group-hover:text-textColor hover:bg-white">Apply Now
//               </button>
//             </div>
//           )
            
//         })
//       }
        
//       </div>
//     </div>
//   )
// }

// export default Jobs