import React from "react";
// Imported icons from React Icons ====>
import {AiOutlineSearch} from 'react-icons/ai'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {BsHouseDoor} from 'react-icons/bs'
import {CiLocationOn} from 'react-icons/ci'





const Search = () => {
  return(
        <div className=" searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-[3rem]">
            <form action="">
                
                <div className="firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-1g  shadow-greyIsh-700">

                    <div className=" flex gap-2 item-center">
                        <AiOutlineSearch className="text-[25px] icon"/>
                        <input type="text" className=" bg-transparent text-blue-500 focus:outline-none width-[100%]" placeholder='Search Job Here....'/>
                            <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-blueColor icon"/>
                    </div>

                    <div className=" flex gap-2 item-center">
                        <BsHouseDoor className="text-[25px] icon"/>
                        <input type="text" className=" bg-transparent text-blue-500 focus:outline-none width-[100%]" placeholder='Search By Company....'/>
                            <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-blueColor icon"/>
                    </div>

                    <div className=" flex gap-2 item-center">
                        <CiLocationOn className="text-[25px] icon"/>
                        <input type="text" className=" bg-transparent text-blue-500 focus:outline-none width-[100%]" placeholder='Search By Location....'/>
                            <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-blueColor icon"/>
                    </div>

                    <button className=" bg-blueColor hull-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300">Search</button>

                    

                </div>
        
            </form>

            <div className="secDiv flex items-center gap-10 justify-center">

                <div className="singleSearch flex items gap-2">
                    <label htmlFor="Sort By" className="text-[#808080] font-semibold">Sort By:</label>
                    <select name="" id="relevance" className=" bg-white rounded-[3px] px-4 py-1">
                        <option value="">Relevance</option>
                        <option value="">Inclusive</option>
                        <option value="">Starts</option>
                        <option value="">Contains</option>

                        
                    </select>

                    

                </div>

                <div className="singleSearch flex items gap-2">
                    <label htmlFor="Type" className="text-[#808080] font-semibold">Type:</label>

                    <select name="" id="Type" className=" bg-white rounded-[3px] px-4 py-1">
                        <option value="">Full-time</option>
                        <option value="">Remote</option>
                        <option value="">Contract</option>
                        <option value="">Part-Time</option>

                        
                    </select>


                <div className="singleSearch flex items gap-2">
                    <label htmlFor="Level" className="text-[#808080] font-semibold">Level:</label>

                    <select name="" id="Level" className=" bg-white rounded-[3px] px-4 py-1">
                        <option value="">Senior</option>
                        <option value="">Beginner</option>
                        <option value="">Intermediate</option>
                        <option value="">Advocate</option>

                        
                    </select>

                    

                </div>

                <span className=" text-blueColor cursor-pointer ">Clear All</span>
                    

                </div>



            </div>
        </div>
    )
        
}   

export default Search