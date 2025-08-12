import {
  InputBase,
  Paragraph,
  SectionTitle,
  FooterStyle,
  SuccessStyle,
} from "../UI/styles";
import { CheckCircle } from "lucide-react";
import { useFooterForm } from "../script/script";

export default function Footer() {
  const { email, setEmail, status, handleSubmit } = useFooterForm();

  return (
    <footer id="📧" className={FooterStyle}>
      <div className="w-full max-w-md space-y-8">
        <h2 className={SectionTitle}>Get In Touch</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className={InputBase}
            required
            id="footer-email"
            name="footer-email"
          />

          {status === "success" && (
            <div className={SuccessStyle}>
              <CheckCircle className="h-6 w-6" />
              Message sent successfully!
            </div>
          )}
        </form>
      </div>

      <p className={`${Paragraph} mt-8 text-center text-sm text-gray-400`}>
        Built with 💖 using React & Tailwind CSS.
      </p>
    </footer>
  );
}
