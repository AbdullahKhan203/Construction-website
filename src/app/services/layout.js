import ConsultationInvite from "@/components/ConsultationInvite";
import ContactInfo from "@/app/contact/components/ContactInfo";
export default function HomeLayout({ children }) {
  return (
    <div className="about-page-wrapper">
      {children}
       <ConsultationInvite/>
        <ContactInfo/>
    </div>
  );
}