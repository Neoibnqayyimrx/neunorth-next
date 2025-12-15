import Image from 'next/image';
import Logo from '@/public/assets/Logo.png'; // Recommended: move image to public/assets/
import './NeunorthLogo.css';
import Link from 'next/link';

const NeunorthLogo: React.FC = () => {
  return (
    <Link href="/" className="logo">
      <Image
        src={Logo}
        alt="Neunorth Logo"
        width={120}    // Adjust based on your design
        height={40}    // Adjust based on your design
        priority       // Optional: use if this logo is above the fold
      />
      <h1>Neunorth</h1>
    </Link>
  );
};

export default NeunorthLogo;