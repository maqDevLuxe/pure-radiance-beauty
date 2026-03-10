import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground section-padding">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-1">
          <h3 className="font-display text-2xl mb-4">Pure Radiance</h3>
          <p className="font-body text-sm opacity-60 leading-relaxed">
            Luxury organic skincare rooted in botanical science and ethical beauty.
          </p>
        </div>
        <div>
          <h4 className="font-body text-xs tracking-[0.2em] uppercase mb-6 opacity-40">Navigate</h4>
          <div className="flex flex-col gap-3">
            {["Home", "Shop", "Ingredients", "Rituals"].map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="font-body text-sm opacity-60 hover:opacity-100 transition-opacity"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-body text-xs tracking-[0.2em] uppercase mb-6 opacity-40">Company</h4>
          <div className="flex flex-col gap-3">
            {["About Us", "Sustainability", "Press", "Careers"].map((item) => (
              <span key={item} className="font-body text-sm opacity-60">{item}</span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-body text-xs tracking-[0.2em] uppercase mb-6 opacity-40">Connect</h4>
          <div className="flex flex-col gap-3">
            {["Instagram", "Pinterest", "TikTok", "Newsletter"].map((item) => (
              <span key={item} className="font-body text-sm opacity-60">{item}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-body text-xs opacity-40">© 2026 Pure Radiance. All rights reserved.</p>
        <div className="flex gap-6">
          {["Privacy", "Terms", "Cookies"].map((item) => (
            <span key={item} className="font-body text-xs opacity-40">{item}</span>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
