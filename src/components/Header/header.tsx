import { InstructionText } from "../InstructionText/instruction-text";
import './header.css'

export function Header(){
    return (
        <div className='header'>
                <img src='woovi-logo.svg' alt="Woovi's Logo" />

                <InstructionText>
                    João, como você quer pagar?
                </InstructionText>
            </div>
    )
}