import React from 'react'
import { Button } from '@mui/material'
import { Box } from '@mui/system'
import { SelectField } from '../components/SelectField'
import useAxios from '../hooks/useAxios'

function Settings() {
    const { response, error, loading } = useAxios({ url: "/api_category.php"})
    console.log(response)
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
