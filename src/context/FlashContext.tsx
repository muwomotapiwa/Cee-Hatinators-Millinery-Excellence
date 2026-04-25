import React, { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';

type FlashType = 'success' | 'error' | 'info';

interface FlashMessage {
  id: string;
  type: FlashType;
  message: string;
}

interface FlashContextType {
  flash: (message: string, type?: FlashType) => void;
}

const FlashContext = createContext<FlashContextType | undefined>(undefined);

export const FlashProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [messages, setMessages] = useState<FlashMessage[]>([]);

  const flash = useCallback((message: string, type: FlashType = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    setMessages((prev) => [...prev, { id, type, message }]);
    setTimeout(() => {
      setMessages((prev) => prev.filter((msg) => msg.id !== id));
    }, 5000);
  }, []);

  return (
    <FlashContext.Provider value={{ flash }}>
      {children}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col space-y-4 pointer-events-none">
        <AnimatePresence>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              className="pointer-events-auto"
            >
              <div className={`flex items-center p-4 min-w-[300px] bg-white border shadow-xl ${
                msg.type === 'success' ? 'border-green-500' : 
                msg.type === 'error' ? 'border-brand-crimson' : 
                'border-brand-royal'
              }`}>
                <div className="mr-3">
                  {msg.type === 'success' && <CheckCircle className="text-green-500" size={20} />}
                  {msg.type === 'error' && <AlertCircle className="text-brand-crimson" size={20} />}
                  {msg.type === 'info' && <Info className="text-brand-royal" size={20} />}
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-brand-royal flex-grow">
                  {msg.message}
                </p>
                <button 
                  onClick={() => setMessages(prev => prev.filter(m => m.id !== msg.id))}
                  className="ml-4 text-brand-lavender hover:text-brand-royal transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </FlashContext.Provider>
  );
};

export const useFlash = () => {
  const context = useContext(FlashContext);
  if (!context) throw new Error('useFlash must be used within a FlashProvider');
  return context;
};
