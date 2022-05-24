import { Box, Typography } from '@mui/material'
import { Quiz } from 'components/types'
import React from 'react'

interface Props {
    quiz: Quiz[]
}

const Quiz = ({quiz}:Props) => {
    console.log(quiz)
  return (
   <>
        <Box>

        {
                    quiz.map((quiz:Quiz)=>(
                        <Typography key={quiz.id}>{quiz.question}</Typography>
                    
                    ))
                }

                <Box>
                    hellon
                </Box>
        </Box>
   </>
  )
}

export default Quiz