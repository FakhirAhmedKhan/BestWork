import { HeadIng } from "../UI/components/Head";
import { FormInput } from "../Components/Footer/FormInput";
import { FooterText } from "../Components/Footer/FooterText";
import { SectionSTyle } from "../UI/components/motionConfige";
import { StatusMessages } from "../Components/Footer/Status Messages";

export default function Footer() {

  return (
    <footer id="contact" className={SectionSTyle}>
      <HeadIng Tittle="Get In Touch" Pragaphic="Drop your email and let's create something amazing together" />

      <FormInput />
      <StatusMessages />

      <FooterText />
    </footer >
  );
}