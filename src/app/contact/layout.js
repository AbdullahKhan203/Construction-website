




import ContactInfo from './components/ContactInfo';
import EmbedMap from './components/EmbedMap'
export default function ContactLayout({ children }) {
  return (
    <div className="about-page-wrapper">
            {/* <EmbedMap/> */}
      {children}
      <ContactInfo />
    </div>
  );
}
