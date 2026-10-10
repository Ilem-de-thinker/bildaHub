import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info';
  title?: string;
  message: string;
}

interface ToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const ToastContainer: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  return (
    <div
      aria-live="polite"
      className="fixed bottom-6 right-6 z-[120] flex flex-col gap-3 max-w-md w-full pointer-events-none"
    >
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onDismiss={() => onDismiss(toast.id)} />
      ))}
    </div>
  );
};

const ToastItem: React.FC<{ toast: ToastMessage; onDismiss: () => void }> = ({ toast, onDismiss }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onDismiss();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onDismiss]);

  const isSuccess = toast.type === 'success';

  return (
    <div
      className={`pointer-events-auto flex items-start gap-3 p-4 rounded-xl shadow-2xl border transition-all transform animate-in slide-in-from-bottom-5 duration-300 ${
        isSuccess
          ? 'bg-[#04146a] text-white border-[#ffcc00]/50 shadow-[0_0_20px_rgba(255,204,0,0.2)]'
          : 'bg-[#000830] text-white border-red-500/50'
      }`}
    >
      {isSuccess ? (
        <CheckCircle2 className="w-5 h-5 text-[#ffcc00] shrink-0 mt-0.5" />
      ) : (
        <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
      )}

      <div className="flex-1 text-sm">
        {toast.title && <p className="font-bold text-white mb-0.5">{toast.title}</p>}
        <p className="text-slate-200 leading-snug">{toast.message}</p>
      </div>

      <button
        onClick={onDismiss}
        className="p-1 text-slate-400 hover:text-white rounded transition-colors"
        aria-label="Dismiss toast"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
