import { Navigate, Outlet, Route, Routes, useParams } from "react-router-dom";
import AppNavbar from "./components/layout/AppNavbar";
import PortalShell from "./components/layout/PortalShell";
import { APP_ROUTES } from "./constants/routes";
import LandingPage from "./pages/public/landing/LandingPage";
import SolutionsPage from "./pages/public/solutions/SolutionsPage";
import ResearchPage from "./pages/public/research/ResearchPage";
import LoginPage from "./pages/public/auth/LoginPage";
import SignupPage from "./pages/public/auth/SignupPage";
import ForgotPasswordPage from "./pages/public/auth/ForgotPasswordPage";
import TriageDashboardPage from "./pages/portal/triage/TriageDashboardPage";
import PatientDetailTemplatePage from "./pages/portal/triage/PatientDetailTemplatePage";
import PatientHistoryPage from "./pages/portal/history/PatientHistoryPage";
import DeviceHealthPage from "./pages/portal/devices/DeviceHealthPage";
import SettingsPage from "./pages/portal/settings/SettingsPage";
import VitalsProvider from "./providers/VitalsProvider";
import RequireAuth from "./routes/RequireAuth";
import RequireRole from "./routes/RequireRole";
import "./App.css";

function PlaceholderPage({ title, message }) {
  return (
    <main className="placeholder-page" aria-live="polite">
      <h1>{title}</h1>
      <p>{message}</p>
    </main>
  );
}

function PublicShell() {
  return (
    <>
      <AppNavbar />
      <Outlet />
    </>
  );
}

function LegacyPatientDetailRedirect() {
  const { patientId } = useParams();
  return <Navigate to={`/portal/triage/patient/${patientId}`} replace />;
}

function PortalOperationalShell() {
  return (
    <VitalsProvider>
      <Outlet />
    </VitalsProvider>
  );
}

function App() {
  return (
    <Routes>
      {/* Landing page — uses its own navbar/layout */}
      <Route path={APP_ROUTES.ROOT} element={<LandingPage />} />
      <Route path={APP_ROUTES.PUBLIC_SOLUTIONS} element={<SolutionsPage />} />
      <Route path={APP_ROUTES.PUBLIC_RESEARCH} element={<ResearchPage />} />

      <Route element={<PublicShell />}>
        <Route path={APP_ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={APP_ROUTES.SIGNUP} element={<SignupPage />} />
        <Route
          path={APP_ROUTES.FORGOT_PASSWORD}
          element={<ForgotPasswordPage />}
        />
        <Route
          path={APP_ROUTES.AUTH_PENDING_VERIFICATION}
          element={
            <PlaceholderPage
              title="Verification Pending"
              message="Placeholder route: staff verification workflow will be implemented once backend services are available."
            />
          }
        />

        {/* Legacy route redirects */}
        <Route
          path={APP_ROUTES.DASHBOARD}
          element={<Navigate to={APP_ROUTES.PORTAL_TRIAGE} replace />}
        />
        <Route
          path={APP_ROUTES.DASHBOARD_PATIENT_DETAIL}
          element={<LegacyPatientDetailRedirect />}
        />
        <Route
          path={APP_ROUTES.SETTINGS}
          element={<Navigate to={APP_ROUTES.PORTAL_SETTINGS} replace />}
        />
        <Route
          path={APP_ROUTES.STAFF_HOME}
          element={<Navigate to={APP_ROUTES.PORTAL_TRIAGE} replace />}
        />
        <Route
          path={APP_ROUTES.PATIENT_HOME}
          element={<Navigate to={APP_ROUTES.PORTAL_PATIENT_HOME} replace />}
        />
      </Route>

      <Route
        path={APP_ROUTES.PORTAL_ROOT}
        element={
          <RequireAuth>
            <PortalShell />
          </RequireAuth>
        }
      >
        <Route
          index
          element={<Navigate to={APP_ROUTES.PORTAL_TRIAGE} replace />}
        />
        <Route element={<PortalOperationalShell />}>
          <Route path="triage" element={<TriageDashboardPage />} />
          <Route
            path="triage/patient/:patientId"
            element={<PatientDetailTemplatePage />}
          />
          <Route path="intake" element={<PatientHistoryPage />} />
          <Route path="devices" element={<DeviceHealthPage />} />
        </Route>
        <Route
          path="analytics"
          element={
            <RequireRole allowedRoles={["admin"]}>
              <PlaceholderPage
                title="Admin Analytics"
                message="Portal v1 placeholder: admin analytics are restricted until admin roles are enabled."
              />
            </RequireRole>
          }
        />
        <Route path="settings" element={<SettingsPage />} />
        <Route
          path="patient"
          element={
            <PlaceholderPage
              title="Patient Home"
              message="Portal v1 placeholder: patient-specific workspace will be defined in a future phase."
            />
          }
        />
      </Route>

      <Route path="*" element={<Navigate to={APP_ROUTES.LOGIN} replace />} />
    </Routes>
  );
}

export default App;
