import { ContactFormComponent } from "@/components/contact/contactFormComponent";
import Header from "@/components/contact/header";
import PortfolioWork from "@/components/portfolio/portfolioWork";

export default function Contact() {
  return (
    <main className="main-container">
      <Header />
      <ContactFormComponent />
    </main>
  );
}
