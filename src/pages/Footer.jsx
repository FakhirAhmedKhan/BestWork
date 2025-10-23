import { HeadIng } from "../UI/components/Head";
import { useEmailForm } from "../Components/Footer/useEmailForm";
import { FooterText } from "../Components/Footer/FooterText";
import { StatusMessages } from "../Components/Footer/Status Messages";
import { FormInput } from "../Components/Footer/FormInput";
import { SectionSTyle } from "../UI/components/motionConfige";

export default function Footer() {

  const { email, setEmail, status, handleSubmit } = useEmailForm();

  return (
    <footer id="contact" className={SectionSTyle}>
      <HeadIng Tittle="Get In Touch" Pragaphic="Drop your email and let's create something amazing together" />

      <FormInput status={status} setEmail={setEmail} handleSubmit={handleSubmit} email={email} />
      <StatusMessages status={status} />

      <FooterText />
    </footer >
  );
}