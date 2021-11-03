import { Button, Typography } from "@mui/material"; 
import { Box } from '@mui/system';
import { useSelector } from 'react-redux'; 
import useAxios from "../hooks/useAxios"; 

function Questions() {
    const {
        question_category,
        question_difficulty,
        question_type, 
        amount_of_question,

    } = useSelector(state => state); 
    console.log(question_category, question_difficulty)

    let apiUrl = `/api.php?amount=${amount_of_question}`; 
    if(question_category) {
        apiUrl = apiUrl.concat(`&category=${question_category}`)
    }
    if(question_difficulty) {
        apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`)
    }
    if(question_type) {
        apiUrl = apiUrl.concat(`&type=${question_type}`)
    }



    const { response, loading } = useAxios({ url: apiUrl })

    return (
        <Box>
            <Typography variant="h4">Question 1</Typography>
            <Typography mt={5}>This is the question?</Typography>
            <Box mt={2}>
                <Button variant="contained">Answer 1</Button>
            </Box>
            <Box mt={2}>
                <Button variant="contained">Answer 2</Button>
            </Box>
            <Box mt={5}>Score 2/6</Box>
        </Box>
    )
}

export default Questions
