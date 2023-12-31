import { ButtonProps } from "@/utils";
import Image from "next/image";

const Button = ({ type, label, icon, variant }: ButtonProps) => {
  return (
    <button
    className={`flexCenter gap-3 rounded-full border ${variant}`}
      type={type}
    >
      {icon && <Image src={icon} width={20} height={20} alt='button-icon' />}
      <label className="bold-16 whitespace-nowrap">{label}</label>
    </button>
  )
}

export default Button