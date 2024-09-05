type NavLink = {
    href: string;
    label: string;
  };
  
  export const links: NavLink[] = [
    { href: '/', label: 'Home' },
    { href: '/favorites ', label: 'Favorites' },
    { href: '/bookings ', label: 'Bookings' },
    { href: '/reviews ', label: 'Reviews' },
    { href: '/rentals/create ', label: 'Create Rental' },
    { href: '/rentals', label: 'My Rentals' },
    { href: '/profile ', label: 'Profile' },
  ];