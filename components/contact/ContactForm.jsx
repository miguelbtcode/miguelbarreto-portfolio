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

const ContactForm = () => {
  const {
    formData,
    handleChange,
    handleSelectChange,
    sendEmail,
    isLoading,
    error,
    success,
  } = useContactForm();

  return (
    <form
      className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
      onSubmit={sendEmail}
    >
      <h3 className="text-4xl text-accent">Trabajemos juntos</h3>
      <p className="text-white/60 text-justify">
        Estoy preparado para aportar mis habilidades dentro de un equipo sólido,
        asumir nuevos retos y contribuir al crecimiento y éxito de la empresa.
        Si crees que podemos hacer grandes cosas juntos, conversemos.
      </p>
      <p className="text-white/80">📩 Escríbeme y demos el primer paso.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          name="name"
          type="text"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          name="lastname"
          type="text"
          placeholder="Apellido"
          value={formData.lastname}
          onChange={handleChange}
          required
        />
        <Input
          name="email"
          type="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          name="phone"
          type="tel"
          placeholder="Teléfono"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <Select onValueChange={handleSelectChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Seleccione un servicio" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Seleccione un servicio</SelectLabel>
            <SelectItem value="Desarrollo Fullstack">
              Desarrollo Fullstack
            </SelectItem>
            <SelectItem value="Líder Técnico Fullstack">
              Líder Técnico Fullstack
            </SelectItem>
            <SelectItem value="Desarrollo .NET">Desarrollo .NET</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Textarea
        name="message"
        className="h-[200px]"
        placeholder="Escribe tu mensaje aquí."
        value={formData.message}
        onChange={handleChange}
      />

      <Button type="submit" size="md" className="max-w-40" disabled={isLoading}>
        {isLoading ? "Enviando..." : "Enviar Mensaje"}
      </Button>

      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
    </form>
  );
};

export default ContactForm;
