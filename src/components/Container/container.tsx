import { ComponentProps } from "react";
import { Footer } from "../Footer/footer";
import { Header } from "../Header/header";
import './container.css'

interface ContainerProps extends ComponentProps<'div'>{
    instruction: string
}

export function Container({instruction, ...props}: ContainerProps) {
    return(
        <div className="container">
                <Header instruction={instruction} />
                    {props.children}
                <Footer />
        </div>
    )
}