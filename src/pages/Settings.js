import React from 'react'
import { Button } from '@mui/material'
import { Box } from '@mui/system'
import { SelectField } from '../components/SelectField'

function Settings() {

    const handleSubmit = e => {
        e.preventDefault(); 
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <SelectField label="Category"/>
            <SelectField label="Difficulty"/>
            <SelectField label="Type"/>
            <Box mt={3} width="100%">
                <Button fullWidth variant="contained" type='submit'>
                    Get Started
                </Button>
            </Box>
        </form>
    )
}

export default Settings
