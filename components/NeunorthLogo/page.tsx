import Image from 'next/image';
import Logo from '@/public/assets/Logo.png'; // Recommended: move image to public/assets/
import './NeunorthLogo.css';
import Link from 'next/link';

// components/NeunorthLogo/page.tsx
const NeunorthLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <Link href="/" className={`logo ${className || ''}`}>
      <Image
        src={Logo}
        alt="Neunorth Logo"
        width={120}
        height={40}
        priority
      />
      <h1>Neunorth</h1>
    </Link>
  );
};

export default NeunorthLogo;