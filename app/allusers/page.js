"use client"
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import NonFlagged from '../components/NonFlagged';
import { useRouter } from 'next/navigation';
import OrdersTable from '../components/OrdersTables';
import OrdersTabletwo from '../components/OrdersTabletwo';

const page = () => {
    const router=useRouter()
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1">
        <TopBar />
        <div className=' flex justify-between text-2xl font-bold px-5 m-5 '>
        <h1 className=' border border-slate-500 px-10 rounded-xl py-2 mx-10 hover:cursor-pointer hover:bg-slate-200' onClick={()=>router.push('/flaggedusers')}>
                RETURNS
            </h1>
            <h1 className=' border border-slate-500 px-10 rounded-xl py-2 mx-10 hover:cursor-pointer  hover:bg-slate-200' onClick={()=>router.push('/nonflagged')}>
                RETAINERS
            </h1>
            <h1 className=' border border-slate-500 px-10 rounded-xl py-2 mx-10 hover:cursor-pointer  hover:bg-slate-200' onClick={()=>router.push('/allusers')}>
                ALL USERS
            </h1>
        </div>
        <OrdersTabletwo/>

      </div>
    </div>
  );
};

export default page;
