// lib/orderManagement.js

let orders = [
    {
      id: 'SL/1014/24-25',
      date: 'Jul 30 at 8:40 PM',
      customer: 'No customer',
      total: '₹0.00',
      status: 'Paid',
      fulfillment: 'Fulfilled',
      items: '0 items',
      method: 'Shipping',
    },
  ];
  
  function generateRandomOrder() {
    const id = `SL/${Math.floor(1000 + Math.random() * 9000)}/${new Date().getFullYear()}-${new Date().getFullYear() + 1}`;
    const date = new Date().toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true });
    const customer = `Customer ${Math.floor(Math.random() * 1000)}`;
    const total = `₹${(Math.random() * 1000).toFixed(2)}`;
    const status = Math.random() > 0.5 ? 'Paid' : 'Pending';
    const fulfillment = Math.random() > 0.5 ? 'Fulfilled' : 'Unfulfilled';
    const items = `${Math.floor(Math.random() * 10) + 1} items`;
    const method = Math.random() > 0.5 ? 'Shipping' : 'Pickup';
  
    return { id, date, customer, total, status, fulfillment, items, method };
  }
  
  export function getOrders() {
    return orders;
  }
  
  export function addOrder() {
    const newOrder = generateRandomOrder();
    orders.push(newOrder);
    return newOrder;
  }
  
  export function cancelOrder(orderId) {
    const orderIndex = orders.findIndex(order => order.id === orderId);
    if (orderIndex !== -1) {
      const cancelledOrder = orders[orderIndex];
      orders[orderIndex] = { ...cancelledOrder, status: 'Cancelled' };
      return cancelledOrder;
    }
    return null;
  }
  
  export function deleteOrder(orderId) {
    const initialLength = orders.length;
    orders = orders.filter(order => order.id !== orderId);
    return initialLength !== orders.length;
  }
  
  // Function to simulate automatic order generation and cancellation
  export function simulateOrderActivity() {
    const addOrderInterval = setInterval(() => {
      addOrder();
      console.log('New order added');
    }, 3000);
  
    const cancelOrderInterval = setInterval(() => {
      if (orders.length > 0) {
        const orderToCancel = orders[Math.floor(Math.random() * orders.length)];
        cancelOrder(orderToCancel.id);
        console.log(`Order ${orderToCancel.id} cancelled`);
  
        setTimeout(() => {
          deleteOrder(orderToCancel.id);
          console.log(`Order ${orderToCancel.id} deleted`);
        }, 5000);
      }
    }, 8000);
  
    return () => {
      clearInterval(addOrderInterval);
      clearInterval(cancelOrderInterval);
    };
  }