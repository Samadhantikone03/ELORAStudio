import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-ivory flex flex-col items-center justify-center text-center px-6">
      <p className="text-nav font-sans uppercase tracking-widest text-text-muted mb-6">404</p>
      <h1 className="font-serif text-display-lg text-text-primary mb-4">Page Not Found</h1>
      <p className="text-text-secondary text-body-sm mb-10">The page you're looking for doesn't exist.</p>
      <button
        onClick={() => navigate("/")}
        className="bg-arch-dark text-white text-[11px] font-sans uppercase tracking-widest px-6 py-3 rounded-full hover:bg-text-primary transition-colors duration-300"
      >
        Return Home
      </button>
    </div>
  );
}
