import { InstructionText } from "../InstructionText/instruction-text";
import './header.css'

interface HeaderProps {
    instruction: string
}

export function Header({instruction}: HeaderProps){
    return (
        <div className='header'>
                <img src='woovi-logo.svg' alt="Woovi's Logo" />

                <InstructionText>
                    {instruction}
                </InstructionText>
            </div>
    )
}