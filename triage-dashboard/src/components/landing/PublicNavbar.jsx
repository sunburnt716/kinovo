import { Link, NavLink } from "react-router-dom";
import { APP_ROUTES } from "../../constants/routes";

const NAV_ITEMS = [
  { label: "Landing", to: APP_ROUTES.ROOT },
  { label: "Solutions", to: APP_ROUTES.PUBLIC_SOLUTIONS },
  { label: "Research", to: APP_ROUTES.PUBLIC_RESEARCH },
];

function PublicNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/90 bg-[#F8F9FA]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-6 py-4 lg:px-10">
        <Link
          to={APP_ROUTES.ROOT}
          className="flex items-center gap-3 text-[#0A192F]"
        >
          <span
            aria-hidden
            className="inline-flex h-8 w-8 items-center justify-center rounded-[4px] bg-[color:var(--color-clinical-teal,#104F55)] text-white"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M1 7h3l1.5-4 3 8L10 7h3"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="font-serif text-[18px] tracking-[-0.02em]">
            Kinova
          </span>
        </Link>

        <nav
          className="hidden items-center gap-7 md:flex"
          aria-label="Public navigation"
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-[13px] font-medium transition-colors ${
                  isActive
                    ? "text-[#0A192F]"
                    : "text-slate-500 hover:text-slate-900"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to={APP_ROUTES.PUBLIC_SOLUTIONS}
            className="inline-flex items-center rounded-[4px] bg-[color:var(--color-clinical-teal,#104F55)] px-4 py-2 text-[13px] font-medium text-white transition-colors hover:opacity-90"
          >
            Request Pilot Info
          </Link>
          <Link
            to={APP_ROUTES.LOGIN}
            className="inline-flex items-center rounded-[4px] border border-slate-300 bg-white px-4 py-2 text-[13px] font-medium text-slate-700 transition-colors hover:border-[color:var(--color-clinical-teal,#104F55)] hover:text-[color:var(--color-clinical-teal,#104F55)]"
          >
            Hospital Login
          </Link>
        </div>
      </div>
    </header>
  );
}

export default PublicNavbar;
