import { Contact } from "@/components/contact/contact";
import { ContactMobile } from "@/components/contact/contact-mobile";

export const ContactSection = () => {
  return (
    <div id="contact" className="my-10 px-4 xl:px-0">
      <Contact />
      <ContactMobile />
    </div>
  );
};
