"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import { memo, Suspense } from "react";

const Contact = memo(() => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Formulario */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <Suspense fallback={<div>Loading...</div>}>
              <ContactForm />
            </Suspense>
          </div>

          {/* Información de contacto */}
          <div className="flex-1 flex items-center xl:justify-center order-1 xl:order-none mb-8 xl:mb-0">
            <ContactInfo />
          </div>
        </div>
      </div>
    </motion.section>
  );
});

export default Contact;
