import { ButtonProps } from "@/utils";
import Image from "next/image";

const Button = ({ type, label, icon, variant, full }: ButtonProps) => {
  return (
    <button
    className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'}`}
      type={type}
    >
      {icon && <Image src={icon} width={20} height={20} alt='button-icon' />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">{label}</label>
    </button>
  )
}

export default Button