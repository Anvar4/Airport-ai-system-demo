import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiInformationCircle } from 'react-icons/hi';

export default function InfoModal({ isOpen, onClose, title, content }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-dark-900/60 backdrop-blur-sm"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", bounce: 0, duration: 0.4 }}
          className="relative w-full max-w-2xl bg-white dark:bg-dark-900 border border-dark-200 dark:border-dark-700 rounded-3xl shadow-2xl shadow-dark-900/20 dark:shadow-black/50 overflow-hidden flex flex-col max-h-full"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-dark-100 dark:border-dark-800 bg-dark-50 dark:bg-dark-950/50">
            <h3 className="text-xl font-bold text-dark-800 dark:text-white flex items-center gap-2">
              <HiInformationCircle className="text-primary-500 text-2xl" />
              {title} qanday ishlaydi?
            </h3>
            <button 
              onClick={onClose}
              className="p-2 rounded-xl hover:bg-dark-200 dark:hover:bg-dark-800 text-dark-500 dark:text-dark-400 transition-colors"
            >
              <HiX size={20} />
            </button>
          </div>
          
          {/* Content */}
          <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
            <div className="prose prose-sm sm:prose-base dark:prose-invert max-w-none text-dark-600 dark:text-dark-300">
              {content}
            </div>
          </div>
          
          {/* Footer */}
          <div className="p-5 border-t border-dark-100 dark:border-dark-800 bg-dark-50 dark:bg-dark-950/50 flex justify-end">
            <button 
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl font-semibold bg-dark-800 text-white hover:bg-dark-700 dark:bg-white dark:text-dark-900 dark:hover:bg-dark-200 transition-colors"
            >
              Tushundim
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
