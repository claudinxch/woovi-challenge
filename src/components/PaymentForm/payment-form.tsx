import { TextField } from '@mui/material'
import { styled }  from '@mui/material/styles';
import './payment-form.css'

const CustomTextField = styled(TextField)({
    '& .MuiFormLabel-root': {
        color: '#4D4D4D',
        fontFamily: 'Nunito',
        fontWeight: 600,
        fontSize: '16px',
        lineHeight: '19px',
        padding: 0,
      },
      '& .MuiInputLabel-root': {
        color: '#4D4D4D',
        fontFamily: 'Nunito',
        fontWeight: 600,
        fontSize: '16px',
        lineHeight: '19px',
        padding: 0,
        maxWidth: '100%'
      },
      '& .MuiInputLabel-root.Mui-focused': {
        color: '#4D4D4D',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#E5E5E5',
          borderWidth: '2px',
          borderRadius: '8px',
        },
        '&:hover fieldset': {
          borderColor: '#C5C5C5',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#E5E5E5',
        },
        '& input': {
          color: '#4D4D4D', 
          fontFamily: 'Nunito',
          fontWeight: 600,
          fontSize: '18px',
          lineHeight: '24.55px',
          height: '65px',
          padding: '0 20px'
        },
      },
    })

export function PaymentForm() {
    return (
        <form className='payment-form'>
            <CustomTextField label="Nome completo" id="custom-css-outlined-input" className='span-2'/>
            <CustomTextField label="CPF" id="custom-css-outlined-input" className='span-2'/>
            <CustomTextField label="Número do cartão" id="custom-css-outlined-input" className='span-2'/>
            <CustomTextField label="Vencimento" id="custom-css-outlined-input" />
            <CustomTextField label="CVV" id="custom-css-outlined-input" />
            <CustomTextField label="Parcelas" id="custom-css-outlined-input" className='span-2'/>

            <button className='span-2'> 
                Pagar
            </button>
        </form>
    )
}