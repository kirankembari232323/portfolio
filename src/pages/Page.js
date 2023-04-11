import {useEffect, useState} from "react"
import HomePage from "./HomePage"
import { FaNodeJs } from "react-icons/fa"

  function isEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }
    return true;
}

  export default function Page() {
    const [userData,setUserData] = useState({})
    useEffect(()=>{
      fetch('./data.json', { cache: 'no-store' }).then((res)=>res.json()).then((result)=>{
        setUserData(result)
       })
    },[])
    
    const renderData = () =>{
      if(!isEmpty(userData)){
        return <HomePage data={userData} />
      }else{
        return (
        <div className='h-screen w-screen flex flex-col items-center justify-center gap-5 text-violet-600 fixed z-30 bg-gray-100 dark:bg-grey-900'>
        <FaNodeJs size={100} className='animate-pulse' />
        <p className='animate-pulse text-xl'>Loading...</p>
      </div>
        )
      }
    }
  return (
    <>
    {renderData()}
    </>
  );
}


