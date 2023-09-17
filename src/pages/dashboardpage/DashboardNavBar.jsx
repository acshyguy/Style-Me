import React from 'react'
import StyleLogo from "../../assets/icons/styleMeLogo.svg"
import homeLogo from "../../assets/dashboardpix/homeLogo.svg";
import dashboard from "../../assets/dashboardpix/dashboardLogo.svg";
import wardrobe from "../../assets/dashboardpix/wardrobeLogo.svg";
import favourite from "../../assets/dashboardpix/favouriteLogo.svg";
import history from "../../assets/dashboardpix/historyLogo.svg";
import settings from "../../assets/dashboardpix/settingsLogo.svg";
import logout from "../../assets/dashboardpix/logoutLogo.svg";
import tablesearch from "../../assets/dashboardpix/tablesearch.svg";

const DashboardNavBar = () => {
  return (

    <div className='parentpage flex '>

      <div className='mainDashboard h-screen'>
            <div className='navbar w-[250px] h-full bg-[#14213D] flex mb-12 '>
              <div className=' logo w-10 '>
                <div className='flex items-center gap-3 '>
                  <img src={StyleLogo} alt="" className='h-[60px] w-[50px]' />
                  <h2 className="text-2xl font-bold">StyleMe</h2>
                </div>

                <div className=' home w-[250px] h-[48px] flex  p-3 px-6 items-center gap-5 bg-[#FFF] rounded mt-12'>
                  <img src={homeLogo} alt="" className='w-[24px] h-[24px] text-gray-700' />
                  <div className='  text-black font-Manrope text-16 font-semibold leading-150' >Home</div>
                </div>
                <div className='dashboard w-[250px] h-[48px] flex  p-3 px-6 items-center gap-5 #14213D'>
                  <img src={dashboard} alt="" className='w-[24px] h-[24px] text-gray-700'/>
                  <div className='dashboard text-white font-Manrope text-16 font-semibold leading-150'>Dashboard</div>
                </div>
                <div className=' wardrobe w-[250px] h-[48px] flex  p-3 px-6 items-center gap-5 #14213D'>
                  <img src={wardrobe} alt="" className='w-[24px] h-[24px] text-gray-700' />
                  <div className='  text-white font-Manrope text-16 font-semibold leading-150' >Wardrobe</div>
                </div>
                <div className=' favourite w-[250px] h-[48px] flex  p-3 px-6 items-center gap-5 #14213D'>
                  <img src={favourite} alt="" className='w-[24px] h-[24px] text-gray-700' />
                  <div className='  text-white font-Manrope text-16 font-semibold leading-150' >Favourite</div>
                </div>
                <div className=' history w-[250px] h-[48px] flex  p-3 px-6 items-center gap-5 #14213D'>
                  <img src={history} alt="" className='w-[24px] h-[24px] text-gray-700' />
                  <div className='  text-white font-Manrope text-16 font-semibold leading-150' >History</div>
                </div>
                <div className=' settings w-[250px] h-[48px] flex  p-3 px-6 items-center gap-5 #14213D'>
                  <img src={settings} alt="" className='w-[24px] h-[24px] text-gray-700' />
                  <div className='  text-white font-Manrope text-16 font-semibold leading-150' >Settings</div>
                </div>
                <div className='logout w-[250px] h-[48px] flex  p-3 px-6 items-center gap-5 #14213D mt-36'>
                  <img src={logout} alt="" className='w-[24px] h-[24px] text-gray-700' />
                  <div className='  text-white font-Manrope text-16 font-semibold leading-150' >Logout</div>
                </div>
                
              </div>

            </div>
          
        </div>
        <div className='searchdiv grid grid-flow-col'>
            <div className='text-[rgba(27, 27, 27, 0.90)] font-Manrope text-48 font-semibold  capitalize p-6 ' >Overview</div>
            <div className='search flex rounded-12 border border-gray-200 border-opacity-30 w-[650px] h-[1px] p-6 py-9 items-center gap-3 bg bg-opacity-3'   >
              <img src={tablesearch} alt="" className=' self-start ' />
              <p className=''>search</p>
            </div>
        </div> 

    </div>
    
  )
}

export default DashboardNavBar;
