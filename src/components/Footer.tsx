import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg nature-gradient">
              <Leaf className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-display text-lg font-semibold text-foreground">
              SoilSense
            </span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/about" className="hover:text-foreground transition-colors">
              About
            </Link>
            <Link to="/dashboard" className="hover:text-foreground transition-colors">
              Dashboard
            </Link>
            <Link to="/market" className="hover:text-foreground transition-colors">
              Market
            </Link>
          </div>

          <p className="text-sm text-muted-foreground">
            © 2025 SoilSense. Growing smarter.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
