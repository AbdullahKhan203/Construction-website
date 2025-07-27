
import ConsultationInvite from "@/components/ConsultationInvite";
import ContactInfo from "@/app/contact/components/ContactInfo";
import Founder from "../about/components/Founder";
export default function HomeLayout({ children }) {
  return (
    <div className="about-page-wrapper">
      {children}
      <Founder />
       <ConsultationInvite/>
        <ContactInfo/>
    </div>
  );
}
