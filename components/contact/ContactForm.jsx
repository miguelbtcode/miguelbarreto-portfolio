"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import useContactForm from "@/hooks/useContactForm";
import { memo } from "react";

// Services configuration
const SERVICES = [
  { value: "fullstack_developer", label: "Fullstack Developer" },
  { value: "cloud_solutions_arquitect", label: "Cloud Solutions Arquitect" },
  { value: "backend_developer", label: "Backend Developer" },
  { value: "frontend_developer", label: "Frontend Developer" },
];

// FormFields configuration
const FORM_FIELDS = [
  { name: "name", placeholder: "Nombre", type: "text" },
  { name: "lastname", placeholder: "Apellido", type: "text" },
  { name: "email", placeholder: "Correo electrónico", type: "email" },
  { name: "phone", placeholder: "Teléfono", type: "tel" },
];

const FormField = memo(({ children, error }) => (
  <div>
    {children}
    {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
  </div>
));

FormField.displayName = "FormField";

const ContactForm = memo(() => {
  const { form, onSubmit, isLoading, success } = useContactForm();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = form;

  const serviceValue = watch("service");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
    >
      {/* Header's form */}
      <div className="space-y-4">
        <h3 className="text-4xl text-accent">Trabajemos juntos</h3>
        <p className="text-white/60 text-justify">
          Estoy preparado para aportar mis habilidades dentro de un equipo
          sólido, asumir nuevos retos y contribuir al crecimiento y éxito de la
          empresa. Si crees que podemos hacer grandes cosas juntos, conversemos.
        </p>
        <p className="text-white/80">📩 Escríbeme y demos el primer paso.</p>
      </div>

      {/* Main fields's form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {FORM_FIELDS.map((field) => (
          <FormField key={field.name} error={errors[field.name]}>
            <Input
              type={field.type}
              placeholder={field.placeholder}
              {...register(field.name)}
            />
          </FormField>
        ))}
      </div>

      {/* Select Services */}
      <FormField error={errors.service}>
        <Select
          onValueChange={(value) => setValue("service", value)}
          value={serviceValue}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Seleccione un servicio" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Seleccione un servicio</SelectLabel>
              {SERVICES.map((service) => (
                <SelectItem key={service.value} value={service.value}>
                  {service.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </FormField>

      {/* Textarea message */}
      <FormField error={errors.message}>
        <Textarea
          className="h-[200px]"
          placeholder="Escribe tu mensaje aquí."
          {...register("message")}
        />
      </FormField>

      {/* Send email button */}
      <Button type="submit" size="md" className="max-w-40" disabled={isLoading}>
        {isLoading ? "Enviando..." : "Enviar Mensaje"}
      </Button>

      {/* State messages */}
      <div className="space-y-2">
        {errors.root && <p className="text-red-500">{errors.root.message}</p>}
        {success && <p className="text-green-500">{success}</p>}
      </div>
    </form>
  );
});

ContactForm.displayName = "ContactForm";

export default ContactForm;
