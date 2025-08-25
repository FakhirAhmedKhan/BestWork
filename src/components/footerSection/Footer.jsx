import {
  InputBase,
  Paragraph,
  SectionTitle,
  FooterStyle,
  SuccessStyle,
  FooterMessageStyle,
} from "../../UI/styles";
import { CheckCircle } from "lucide-react";
import { useFooterForm } from "./data";

export default function Footer() {
  const { email, setEmail, status, handleSubmit } = useFooterForm();

  return (
    <footer id="📧" className={FooterStyle}>
      <form onSubmit={handleSubmit}>
        <h2 className={SectionTitle}>Get In Touch</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className={InputBase}
          id="footer-email"
          name="footer-email"
        />

        {status === "success" && (
          <div className={SuccessStyle}>
            <CheckCircle className="h-6 w-6" />
          </div>
        )}
      </form>

      <p className={FooterMessageStyle}>
        Built with 💖 using React & Tailwind CSS.
      </p>
    </footer>
  );
}
