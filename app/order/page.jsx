import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import OrdersTable from '../components/OrdersTables';

const page = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1">
        <TopBar />
        <OrdersTable />

      </div>
    </div>
  );
};

export default page;
