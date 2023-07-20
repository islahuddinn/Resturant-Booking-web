const pages = new Map();
pages.set('home', { name: 'Home', path: '/', anchorable: true });
pages.set('bookings', { 
  name: 'Reservations', 
  path: '/bookings', 
  anchorable: true 
});
pages.set('confirmedBooking', { 
  name: 'Confirmed Booking',
  path: '/confirmed-booking',
  anchorable: false 
});
pages.set('orderOnline', { 
  name: 'Order Online', 
  path: '/order-online', 
  anchorable: true 
});

export default pages;
