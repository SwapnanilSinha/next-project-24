type NavLink = {
    href: string;
    label: string;
  };
  
  export const links: NavLink[] = [
    { href: '/', label: 'Home' },
    { href: '/profile ', label: 'Profile' },
    // { href: '/favorites ', label: 'Favorites' },
    { href: '/bookings ', label: 'Bookings' },
    { href: '/reviews ', label: 'Reviews' },
    { href: '/reservations ', label: 'Reservations' },
    { href: '/rentals/create ', label: 'Create Property' },
    { href: '/rentals', label: 'My Properties' },
    // { href: '/admin ', label: 'Admin' },
  ];