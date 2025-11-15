
import ConsultationInvite from "@/components/ConsultationInvite";
import ContactInfo from "@/app/contact/components/ContactInfo";
import Founder from "../about/components/Founder";
import Clients from "./components/Clients";
import CEO from "../about/components/CEO";
export default function HomeLayout({ children }) {
  return (
    <div className="about-page-wrapper">
      {children}
      {/* <Founder /> */}
      <CEO />
       <ConsultationInvite/>
        <ContactInfo/>
        <Clients />
    </div>
  );
}
