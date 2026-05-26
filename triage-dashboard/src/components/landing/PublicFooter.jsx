import { Link } from "react-router-dom";
import { APP_ROUTES } from "../../constants/routes";
import { PUBLIC_SITE_NOTICE } from "../../constants/publicSiteContent";

function PublicFooter() {
  return (
    <footer className="border-t border-slate-200 bg-[#F8F9FA]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-5 px-6 py-8 lg:px-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="font-serif text-[17px] tracking-[-0.02em] text-[#0A192F]">
            Kinova
          </p>
          <p className="max-w-xl text-[13px] leading-6 text-slate-600">
            Clinical intelligence for waiting-room surveillance, solutions
            design, and research-backed validation.
          </p>
          <p className="max-w-xl font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
            {PUBLIC_SITE_NOTICE}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-5 text-[13px] text-slate-600">
          <Link to={APP_ROUTES.ROOT} className="hover:text-[#0A192F]">
            Landing
          </Link>
          <Link
            to={APP_ROUTES.PUBLIC_SOLUTIONS}
            className="hover:text-[#0A192F]"
          >
            Solutions
          </Link>
          <Link
            to={APP_ROUTES.PUBLIC_RESEARCH}
            className="hover:text-[#0A192F]"
          >
            Research
          </Link>
          <Link to={APP_ROUTES.LOGIN} className="hover:text-[#0A192F]">
            Hospital Login
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default PublicFooter;
