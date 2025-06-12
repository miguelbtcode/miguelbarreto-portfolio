import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { memo, useMemo } from "react";

const ContactInfo = memo(() => {
  const info = useMemo(
    () => [
      {
        icon: <FaPhoneAlt />,
        title: "Teléfono",
        description: "(+51) 928 799 438",
      },
      {
        icon: <FaEnvelope />,
        title: "Correo",
        description: "mabt2206@gmail.com",
      },
      {
        icon: <FaMapMarkerAlt />,
        title: "Ubicación",
        description: "Lima, Perú",
      },
    ],
    []
  );

  return (
    <ul className="flex flex-col gap-10">
      {info.map((item, index) => (
        <li key={index} className="flex items-center gap-6">
          <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
            <div className="text-[28px]">{item.icon}</div>
          </div>
          <div className="flex-1">
            <p className="text-white/60">{item.title}</p>
            <h3 className="text-xl">{item.description}</h3>
          </div>
        </li>
      ))}
    </ul>
  );
});

ContactInfo.displayName = "ContactInfo";

export default ContactInfo;
