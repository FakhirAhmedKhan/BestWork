import { useEmailForm } from './useEmailForm';
import { AlertCircle, CheckCircle } from 'lucide-react'

export const StatusMessages = () => {
  const { status } = useEmailForm();

  return (
    <div className="min-h-[60px] flex items-center justify-center">
      {status === "success" && (
        <div className="flex items-center gap-3 py-4 px-6 rounded-lg bg-green-500/10 border border-green-500/30">
          <CheckCircle className="h-6 w-6 text-green-400" />
          <span className="text-lg font-medium text-green-400">
            Thanks! We'll be in touch soon
          </span>
        </div>
      )}

      {status === "error" && (
        <div className="flex items-center gap-3 py-4 px-6 rounded-lg bg-red-500/10 border border-red-500/30">
          <AlertCircle className="h-6 w-6 text-red-400" />
          <span className="text-lg font-medium text-red-400">
            Please enter a valid email address
          </span>
        </div>
      )}
    </div>
  )
}
