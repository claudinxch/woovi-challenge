import { Checkbox } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

interface CheckBoxButtonProps {
    isChecked: boolean,
    handleCheck: () => void
}

export function CheckboxButton({isChecked, handleCheck}: CheckBoxButtonProps) {
    const handleChange = () => {
        handleCheck();
    };

    return <Checkbox
    checked={isChecked}
    onChange={handleChange}
    sx={{
        fontSize: 26,
        width: 26,
        height: 26
    }}
        icon={<RadioButtonUncheckedIcon sx={{ color: '#E5E5E5' }} />}
        checkedIcon={<CheckCircleIcon sx={{ color: '#03D69D' }} />}
    />
}