import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import emailjs from "@emailjs/browser";

// Schema de validación
const contactSchema = z.object({
  name: z.string().min(1, "El nombre es requerido"),
  lastname: z.string().min(1, "El apellido es requerido"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(1, "El teléfono es requerido"),
  service: z.string().min(1, "Selecciona un servicio"),
  message: z.string().min(1, "El mensaje es requerido"),
});

const useContactForm = () => {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service") || "";
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      lastname: "",
      email: "",
      phone: "",
      service: serviceParam,
      message: "",
    },
  });

  useEffect(() => {
    const service = searchParams.get("service");
    if (service && service !== form.getValues("service")) {
      form.setValue("service", service);
    }
  }, [searchParams, form]);

  const onSubmit = async (data) => {
    setIsLoading(true);
    setSuccess("");

    try {
      await emailjs.send(
        "service_ryzacvi",
        "template_nud5j5a",
        { ...data, date: new Date().toLocaleString() },
        "4DXvyFO1JtabgNJiX"
      );

      setSuccess("Mensaje enviado con éxito 🎉");
      form.reset({
        name: "",
        lastname: "",
        email: "",
        phone: "",
        service: serviceParam || "",
        message: "",
      });
    } catch (error) {
      form.setError("root", {
        message: "Error al enviar el mensaje. Inténtalo nuevamente.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    form,
    onSubmit,
    isLoading,
    success,
  };
};

export default useContactForm;
