
import ConsultationInvite from "@/components/ConsultationInvite";
import ContactInfo from "@/app/contact/components/ContactInfo";
import Founder from "../about/components/Founder";
import Clients from "./components/Clients";
export default function HomeLayout({ children }) {
  return (
    <div className="about-page-wrapper">
      {children}
      <Founder />
       <ConsultationInvite/>
        <ContactInfo/>
        <Clients />
    </div>
  );
}
