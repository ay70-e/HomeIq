const ordersData = [
  // 🧹 Cleaning
  {
    order_id: 1,
    service_name: 'Home Cleaning',
    details: 'Full deep cleaning with disinfection',
    price: 25000,
    order_date: '2025-10-10',
    order_status: 'completed',
    payment_method: 'cash',
    reviewed: false
  },
  {
    order_id: 2,
    service_name: 'Window Cleaning',
    details: 'Exterior and interior glass cleaning',
    price: 12000,
    order_date: '2025-10-08',
    order_status: 'completed',
    payment_method: 'online',
    reviewed: false
  },

  // 🔧 Maintenance
  {
    order_id: 3,
    service_name: 'AC Maintenance',
    details: 'Filter cleaning and gas refill',
    price: 18000,
    order_date: '2025-10-05',
    order_status: 'cancelled',
    payment_method: 'online',
    reviewed: true
  },
  {
    order_id: 4,
    service_name: 'Electric Repair',
    details: 'Fixing main switch issue',
    price: 15000,
    order_date: '2025-10-03',
    order_status: 'in_progress',
    payment_method: 'cash',
    reviewed: true
  },

  // 🚚 Moving
  {
    order_id: 5,
    service_name: 'Furniture Moving',
    details: 'Moving furniture from old apartment to new house',
    price: 40000,
    order_date: '2025-10-02',
    order_status: 'pending',
    payment_method: 'online',
    reviewed: false
  },
  {
    order_id: 6,
    service_name: 'Office Relocation',
    details: 'Packing and moving office equipment',
    price: 55000,
    order_date: '2025-09-30',
    order_status: 'cancelled',
    payment_method: 'cash',
    reviewed: false
  },

  // 🌿 Gardening
  {
    order_id: 7,
    service_name: 'Garden Cleanup',
    details: 'Removing weeds and trimming bushes',
    price: 10000,
    order_date: '2025-09-28',
    order_status: 'completed',
    payment_method: 'cash',
    reviewed: false
  },
  {
    order_id: 8,
    service_name: 'Lawn Mowing',
    details: 'Weekly lawn trimming service',
    price: 8000,
    order_date: '2025-09-25',
    order_status: 'cancelled',
    payment_method: 'cash',
    reviewed: false
  }
];

export default ordersData;