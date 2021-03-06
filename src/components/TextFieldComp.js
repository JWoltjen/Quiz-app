import React from 'react'
import { FormControl, TextField } from '@mui/material'; 
import { Box } from '@mui/system'
import { useDispatch } from 'react-redux';
import { handleAmountChange} from '../redux/actions'

export const TextFieldComp = () => {
    const dispatch = useDispatch(); 
    const handleChange = (e) => {
        dispatch(handleAmountChange(e.target.value)); 
    };

    return (
        <Box mt={3} width='100%'>
            <FormControl fullWidth size='small'>
                <TextField
                    onChange={handleChange}
                    variant="outlined"
                    label="Number of Questions"
                    type="number"
                    size="small"
                />
            </FormControl>
        </Box>
    )
}
