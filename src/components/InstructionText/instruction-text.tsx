import { ComponentProps } from "react"
import './instruction-text.css'

interface InstructionTextProps extends ComponentProps<'p'>{
    children: string
}

export function InstructionText(props: InstructionTextProps){
    return <p className="instruction" {...props}>{props.children}</p>
}