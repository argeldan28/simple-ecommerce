import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductNotifModal({ message, onClose, type }){
  
  const bgColor = type === "success"
    ? "bg-green-200 border-green-300 text-green-700"
    : "bg-red-200 border-red-300 text-red-700"

  return(
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y:30 }}
          animate={{ opacity: 1, y:0 }}
          exit={{ opacity: 0, y:30 }}
          transition={{ duration: 0.4 }}
          className={`${bgColor} fixed bottom-6 right-6 bg-white border border-gray-300 shadow-lg rounded-md px-4 py-3 z-50`}
        >
          <p className="text-gray-800">{message}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}