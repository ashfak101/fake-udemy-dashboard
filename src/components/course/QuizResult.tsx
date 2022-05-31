import { Box, Button, Typography } from '@mui/material'
import { Quiz } from 'components/types'
import React from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import Icons from './Icons';
interface Props {
    quizArray:any;
    userRightAns:any;
    setGridCount:(gridCount:boolean)=>void;
    gridCount:boolean;
    handleRetry:()=>void
}
const QuizResult = ({quizArray,setGridCount ,gridCount ,handleRetry,userRightAns }:Props) => {
    return (
        <Box>

                <Box sx={{ background: '#1c1d1f', height: '20vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Box>
                    <Typography variant="h4" sx={{ color: '#fff', fontSize: '24px' }}>Complete the quiz to see your results.</Typography>
                    <Typography sx={{ color: '#fff', fontSize: '15px' }}>You got {userRightAns.length} out of 5 correct. 0 question is skipped.</Typography>
                  </Box>
                </Box>
                <Box>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{ height: { xs: '300px', md: '400px' } }} >
                      {
                        quizArray.length ? <Box>
                          <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: '14px', fontWeight: 'bold' }}> <ClearIcon sx={{ color: "red" }}></ClearIcon> What You Should review </Typography>
                          {
                            quizArray.map((wrongAns: Quiz) => (
                              <Box key={wrongAns.id} >
                                <Typography sx={{ fontSize: '14px', my: 1, fontFamily: 'Popins' }}>{wrongAns.question}</Typography>
                                <Typography sx={{ fontSize: '14px', my: 1, fontFamily: 'Popins' }}>Module{wrongAns.id + 1} : {wrongAns.module}</Typography>
                              </Box>
                            ))
                          }

                        </Box> : ''
                      }
                    </Box></Box>
                  <Box sx={{ border: '1px solid #333', display: 'flex', flexDirection: 'row-reverse', py: 1 }}>

                    <Icons setGridCount={setGridCount} gridCount={gridCount} />
                    <Button sx={{
                      background: "#333", color: '#fff', borderRadius: '0', px: 2, "&:hover": {
                        background: "#999",
                        color: '#fff'
                      }
                    }} onClick={handleRetry}>Retry Quiz</Button>
                  </Box>
                </Box>
              </Box>
    )}

 export default QuizResult