// components/Sidebar/page.tsx
'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { navRoutes } from '@/constants/data';
import './Sidebar.css';
import { FaTimes } from 'react-icons/fa';
import { cssPerfectShape } from '@/util/page';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleLinkClick = (path: string) => {
    onClose(); // Close sidebar first
    // Optional: Add a small delay before navigation for smooth transition
    setTimeout(() => {
      router.push(path);
    }, 300);
  };

  return (
    <div className={`sidebar ${open ? "active" : ""}`}>
      <div className="top">
        <button
          className="close-btn"
          onClick={onClose}
          style={{ ...cssPerfectShape(40, 40) }}
          aria-label="Close sidebar"
        >
          <FaTimes />
        </button>
      </div>

      <nav className="middle" aria-label="Mobile navigation">
        {navRoutes.map((route) => (
           
          <Link
            key={route.path}
            href={route.path}
            className={`route ${pathname === route.path ? 'active' : ''}`}
            onClick={onClose}
            aria-current={pathname === route.path ? "page" : undefined}
          >
            {route.name}
          </Link>
          
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;