import { ComponentProps } from "react";
import { Footer } from "../Footer/footer";
import { Header } from "../Header/header";
import './layout.css'

interface ContainerProps extends ComponentProps<'div'>{
    instruction: string
}

export function Layout({instruction, ...props}: ContainerProps) {
    return(
        <div className="layout">
                <Header instruction={instruction} />
                    {props.children}
                <Footer />
        </div>
    )
}