import { Box, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material'
import { Option,Module } from 'components/types'
import React from 'react'
interface Props {
    currentQ:number ;
    showQuestion:boolean;
    handleChange:(opt:Option)=>void;
    isChecked:boolean;
    module:any 
}
const Question = ({currentQ,module,showQuestion,handleChange,isChecked}:Props) => {
  return (
    <Box>
        <Box sx={{ px: { xs: 2, md: 14 }, mb: { xs: 0, md: 30 } }}>
                <Typography variant="h6" sx={{ fontWeight: '300', fontFamily: 'Popins', color: '#333' }}>Question {currentQ + 1} :</Typography>
                <Typography variant="h6" sx={{ fontWeight: '300', fontFamily: 'Popins' }}>{module?.quiz[currentQ].question} </Typography>
                <Box>

                  {showQuestion && <FormControl sx={{ width: "100%" }} >

                    <RadioGroup>
                      {module?.quiz[currentQ].option.map((opt: Option, index: number) => {
                        return (
                          <FormControlLabel sx={{ width: { xs: '100%', md: '70%' }, border: '0.685px solid #333', my: 1, ml: "1px" }} onChange={() => handleChange(opt)} key={index} value={opt.id} disabled={opt.isChecked || isChecked} control={<Radio sx={{
                            ml: 1, '&.Mui-checked': {
                              color: "#333",
                            },
                          }} />} label={opt.text} />
                        )
                      })
                      }
                    </RadioGroup>

                  </FormControl>}

                </Box>
              </Box>
    </Box>
  )
}

export default Question