import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import OrdersTable from '../components/OrdersTables';

const page = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1">
        <TopBar />
        <h1 className='flex justify-center items-center text-3xl font-bold font-sans'>
            Live Orders
        </h1>
        <OrdersTable/>

      </div>
    </div>
  );
};

export default page;
