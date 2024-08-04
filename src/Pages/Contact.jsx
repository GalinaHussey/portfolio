import { m, LazyMotion, domAnimation } from "framer-motion";
import SectionTitle from "../Components/SectionTitle";
import ContactForm from "../Components/ContactForm";
import SocialLinks from "../Components/SocialLinks";

function Contact() {
  return (
    <div
      id="contact"
      className="flex flex-col items-center w-full overflow-hidden-web"
    >
      <div className="w-full min-h-[800px] flex flex-col xl:w-[70%]">
        <div className="w-full">
          <SectionTitle title="CONTACT" subtitle="Get in touch" />
        </div>
        <div className="flex items-center justify-center w-full">
          <LazyMotion features={domAnimation} strict>
            <m.div
              initial={{ x: 200 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="w-full sm:w-[90%] md:w-[80%] sm:h-[600px] p-4 flex flex-col sm:flex-row gap-4"
            >
              <div className="flex justify-center" />
              <ContactForm />
            </m.div>
          </LazyMotion>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <SocialLinks />
      </div>
    </div>
  );
}

export default Contact;
