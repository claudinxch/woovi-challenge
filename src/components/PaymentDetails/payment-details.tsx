import { useState } from "react";
import type { Installment } from "../../data/installments";
import { Accordion, AccordionDetails, AccordionSummary, Step, StepConnector, stepConnectorClasses, StepLabel, Stepper } from "@mui/material";
import { formatCurrency } from "../../helpers/price";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import styled from "@emotion/styled";

interface PaymentDetailsProps {
    installment: Installment
}

interface Entry {
    entry: string,
    price: number
}

export function PaymentDetails({ installment }: PaymentDetailsProps) {

    console.log(installment)
    const steps: Entry[] = Array.from({ length: installment.times }, (_, i) => ({
        entry: i === 0 ? `${i + 1}º entrada no Pix` : `${i + 1}º no cartão`,
        price: installment.price,
    })); //Asked gpt if there was a better and smaller way and it gave me this :D my logic is above

    const BeautifulConnector = styled(StepConnector)(() => ({
        [`&.${stepConnectorClasses.vertical}`]: {
            marginLeft: 8,
            padding: 0,
        },
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#E5E5E5',
            borderLeftWidth: 2,
            minHeight: 24,
        },
    }));

    const [expanded, setExpanded] = useState(true);

    const handleChange = () => {
        setExpanded(!expanded);
    };

    return (
        <Accordion
            expanded={expanded}
            onChange={handleChange}
            sx={{
                display: 'flex',
                flexDirection: 'column-reverse',
                padding: 0,
                boxShadow: 'none',
                '&:before': {
                    display: 'none',
                }
            }}>
            <AccordionSummary sx={{
                padding: 0,
                border: 'none',
                height: 58
            }}>
                <div className="details como-funciona">
                    <p>Como funciona? {expanded ? <ExpandLess /> : <ExpandMore />}</p>
                </div>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: 0 }}>
                <div className="steps">
                    <Stepper activeStep={0} connector={<BeautifulConnector />} orientation="vertical">
                        {steps.map((step, index) => (
                            <Step
                                key={index}
                                sx={{
                                    '.MuiStep-root': {
                                        display: 'flex',
                                        alignItems: 'center',
                                        padding: '0px',
                                    },
                                }}>
                                <StepLabel
                                    sx={{
                                        '&.MuiStepLabel-root': {
                                            padding: '0',
                                        },
                                        '& .MuiStepLabel-label': {
                                            color: '#4D4D4D',
                                            fontFamily: 'Nunito',
                                            fontSize: '18px',
                                            fontWeight: '600',
                                            lineHeight: '24.55px',
                                            textAlign: 'center',
                                            width: '100%',
                                            padding: '0',
                                            paddingLeft: '8px'
                                        },
                                        '& .MuiStepLabel-iconContainer': {
                                            paddingRight: '0',
                                        },
                                    }}
                                    icon={
                                        <RadioButtonUncheckedIcon
                                            fontSize="small"
                                            sx={{
                                                color: index === 0 ? '#03D69D' : '#E5E5E5',
                                                padding: 0,
                                            }} />}
                                >
                                    <p className="entry">{step.entry}<span>{formatCurrency(step.price)}</span></p>
                                </StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </div>

                <div className="details">
                    <p>CET: 0,5%<span>Total: {formatCurrency(installment.total)}</span></p>
                </div>
            </AccordionDetails>
        </Accordion>
    )
}