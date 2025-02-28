import { useState } from "react";
import emailjs from "@emailjs/browser";

const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Manejar los cambios en los campos de texto
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Manejar la selección de servicios
  const handleSelectChange = (value) => {
    setFormData({ ...formData, service: value });
  };

  // Validar el formulario
  const validateForm = () => {
    const { name, lastname, email, phone, service } = formData;

    if (!name || !lastname || !email || !phone || !service) {
      setError("Todos los campos son obligatorios.");
      return false;
    }

    return true;
  };

  // Enviar el formulario con EmailJS
  const sendEmail = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      await emailjs.send(
        "service_ryzacvi",
        "template_nud5j5a",
        {
          ...formData,
          date: new Date().toLocaleString(),
        },
        "4DXvyFO1JtabgNJiX"
      );

      setSuccess("Mensaje enviado con éxito 🎉");
      setFormData({
        name: "",
        lastname: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (err) {
      setError("Hubo un error al enviar el mensaje. Inténtalo nuevamente.");
    }

    setIsLoading(false);
  };

  return {
    formData,
    handleChange,
    handleSelectChange,
    sendEmail,
    isLoading,
    error,
    success,
  };
};

export default useContactForm;
