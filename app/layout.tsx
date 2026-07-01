import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer } from "@/components/site-chrome";
import { ChatWidget } from "@/components/chat-widget";
import { getActiveAlert } from "@/data/alerts";

export const metadata: Metadata = {
  title: "Roanoke Higher Education Center",
  description:
    "Education, training, degrees, and student support in Southwest Virginia. RHEC connects students to member institutions, workforce programs, and campus services.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const alert = getActiveAlert();
  return (
    <html lang="en">
      <body>
        {alert && (
          <div
            className={`alert-bar ${alert.severity}`}
            role="status"
            aria-live="polite"
          >
            <strong>{alert.title}:</strong> {alert.message}{" "}
            {alert.ctaLabel && alert.ctaHref && (
              <a href={alert.ctaHref}>{alert.ctaLabel}</a>
            )}
          </div>
        )}

        <Header />
        <main id="main">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
