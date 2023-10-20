import { ComponentProps } from "react"

const SectionTitle = ({ children, ...props}: ComponentProps<"p">) => {
  return (
    <p className='uppercase font-bold mb-3' {...props}>Teclados</p>

  )
}

export default SectionTitle