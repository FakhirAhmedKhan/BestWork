import { Send } from 'lucide-react'

export const FormInput = ({ status, setEmail, handleSubmit, email }) => {
  return (
    <div className="">
      <div className="space-y-4 relative group">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}
          placeholder="your.email@example.com"
          disabled={status === "loading"}
          className="w-full rounded-xl border-2 border-neutral-700 bg-neutral-900/50 backdrop-blur-sm px-6 py-5 text-lg text-white placeholder-neutral-500 
              focus:border-fuchsia-400 focus:ring-4 focus:ring-fuchsia-400/20 focus:outline-none
              transition-all duration-300 
              disabled:opacity-50 disabled:cursor-not-allowed
              group-hover:border-neutral-600"
          id="footer-email"
          name="footer-email"
        />
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-fuchsia-400/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        disabled={status === "loading" || !email}
        className="w-full rounded-xl bg-gradient-to-r from-fuchsia-500 to-pink-500 px-8 py-5 text-lg font-semibold text-white 
            shadow-lg shadow-fuchsia-500/30
            hover:shadow-xl hover:shadow-fuchsia-500/40 hover:scale-[1.02]
            active:scale-[0.98]
            disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
            transition-all duration-300 
            flex items-center justify-center gap-2"
      >
        {status === "loading" ? (
          <>
            <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="h-5 w-5" />
          </>
        )}
      </button>
    </div>
  )
}
