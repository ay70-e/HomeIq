import React from 'react';
import '../style/Orders.css';
import { FaCalendarAlt, FaMoneyBillWave, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';

function OrderCard({ order }) {
  const statusColors = {
    pending: '#ff8b2bff',
    in_review: '#7458b0ff',
    in_progress: '#4591dcff',
    completed: '#6bbd94ff',
    approved: '#33ef49ff',
    cancelled: '#e11515ff'
  };

     return (
    <div className="order-card">
      <div className="order-left">
        <div className="order-id">#{order.order_id}</div>
        <div className="order-name">{order.service_name}</div>
        <p>{order.details}</p>
      </div>

      <div className="order-right">
        <div className="order-info">
          <div><FaCalendarAlt /> {new Date(order.order_date).toLocaleDateString()}</div>
          <div>{order.price} IQR</div>
          <div className="order-status" style={{ backgroundColor: statusColors[order.order_status] }}>
            <FaCheckCircle /> {order.order_status}
          </div>
          <div> {order.payment_method} </div>
          {order.order_status === 'completed' && !order.reviewed && (
            <button className="action-button">Rate Service</button>
        )}
        </div>
      </div>
    </div>
  );
}

export default OrderCard;