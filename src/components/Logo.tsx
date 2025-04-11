
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <div className="h-8 w-8 hero-gradient rounded-md flex items-center justify-center">
        <span className="text-white font-bold">TS</span>
      </div>
      <span className="text-foreground font-bold text-xl tracking-tight">TechSpark</span>
    </Link>
  );
};

export default Logo;
