type NavLink = {
    href: string;
    label: string;
  };
  
  export const links: NavLink[] = [
    { href: '/', label: 'Home' },
    // { href: '/favorites ', label: 'Favorites' },
    { href: '/bookings ', label: 'Bookings' },
    { href: '/reviews ', label: 'Reviews' },
    { href: '/rentals/create ', label: 'Create Property' },
    { href: '/rentals', label: 'My Properties' },
    { href: '/profile ', label: 'Profile' },
  ];