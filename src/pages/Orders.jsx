import React, { useEffect, useState } from 'react';
import '../style/Orders.css';
import ordersData from '../data/ordersData';
import RatingModal from '../components/RatingModal';

function Orders() {
  const [orders, setOrders] = useState([]);
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    setOrders(ordersData);
  }, []);

  const filteredOrders = filterStatus === 'all'
    ? orders
    : orders.filter(order => order.order_status === filterStatus);

  const handleRateClick = (order) => {
    setSelectedOrder(order);
  };

  const closeModal = () => {
    setSelectedOrder(null);
  };

  return (
    <div className="orders-page">
      <h2>My Orders</h2>

      <div className="filter-tabs">
        {['all', 'in_review', 'pending', 'completed', 'cancelled','in_progress'].map(status => (
          <button
            key={status}
            className={`filter-button ${filterStatus === status ? 'active' : ''}`}
            onClick={() => setFilterStatus(status)}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>

      <table className="orders-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Service</th>
            <th>Details</th>
            <th>Date</th>
            <th>Price</th>
            <th>Status</th>
            <th>Payment</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.length === 0 ? (
            <tr>
              <td colSpan="8">No orders found for this status.</td>
            </tr>
          ) : (
            filteredOrders.map(order => (
              <tr key={order.order_id}>
                <td>{order.order_id}</td>
                <td>{order.service_name}</td>
                <td>{order.details}</td>
                <td>{new Date(order.order_date).toLocaleDateString()}</td>
                <td>{order.price} IQD</td>
                <td className={`status-cell ${order.order_status}`}>{order.order_status}</td>
                <td>{order.payment_method}</td>
                <td>
                  {order.order_status === 'completed' && !order.reviewed ? (
                    <button className="rate-button" onClick={() => handleRateClick(order)}>
                      Rate
                    </button>
                  ) : (
                    <span>—</span>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {selectedOrder && (
        <RatingModal order={selectedOrder} onClose={closeModal} />
      )}
    </div>
  );
}

export default Orders;