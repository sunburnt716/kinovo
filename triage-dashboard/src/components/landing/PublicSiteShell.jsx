import PublicFooter from "./PublicFooter";
import PublicNavbar from "./PublicNavbar";

function PublicSiteShell({ children }) {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-slate-800 antialiased">
      <PublicNavbar />
      {children}
      <PublicFooter />
    </div>
  );
}

export default PublicSiteShell;
