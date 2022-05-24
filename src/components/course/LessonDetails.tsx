import { Button, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { MainCourse, Module, Option } from "components/types";

import React, { useEffect } from 'react'
import ReactPlayer from 'react-player/youtube'

interface Props {
  module: Module | undefined;

}
const LessonDetails = ({ module }: Props) => {
  const [answer, setAnswer] = React.useState<Option>()
  const [currentQ, setCurrentQ] = React.useState<number>(0);
  const [showQuestion, setShowQuestion] = React.useState<boolean>(true);
  const [isDisabled, setIsDisabled] = React.useState<boolean>(true);
  const [isCorrect, setIsCorrect] = React.useState<boolean>(false);
  const handleChange = (id: Option) => {
    setIsDisabled(false);
    setAnswer(id)
  }
  const handleOnClick = () => {
    if (answer?.isCorrect) {
      alert("Correct")
      setIsCorrect(true)
    }
    else {
      alert("Wrong")
    }
  }
  const handleNext = () => {
    setShowQuestion(false);
    
    if (currentQ + 1 < module?.quiz?.length) {
      setCurrentQ((prev: number) => prev + 1);
    }

  };
  useEffect(() => {
    setShowQuestion(true)
  }, [currentQ])
  return (
    <>
    { module?.content || module?.video ?<Box sx={{ height: '610px', overflowY: 'auto' }}>
      

        {module?.video ? <Box>
        <ReactPlayer controls={true} url={module.video} width='100%'
          height='600px' style={{ width: '100%' }} />
      </Box> : <Box sx={{ px: 25 }}>
        {module?.content && <div dangerouslySetInnerHTML={{ __html: module?.content }} />}
      </Box>}
    
    </Box>:''}
    <Box>
    {
        module?.quiz ? <Box>

          <Box sx={{border:'1px solid red'}}>
            <Box sx={{ p: { xs: 2, md: 14}, }}>
            <Typography variant="h6" sx={{ fontWeight: '300' ,color:'#333'}}>Question {currentQ + 1} :</Typography>
            <Typography variant="h6" sx={{ fontWeight: '300' }}>{module?.quiz[currentQ].question} </Typography>
            <Box>

              {showQuestion && <FormControl sx={{ width: "100%" }} >

                <RadioGroup>
                  {module?.quiz[currentQ].option.map((opt, index) => {
                    return (
                      <FormControlLabel sx={{ width: '100%', border: '0.685px solid #333', my: 1 }} onChange={() => handleChange(opt)} key={index} value={opt.id} control={<Radio />} label={opt.text} />
                    )
                  })
                  }
                </RadioGroup>

              </FormControl>}

            </Box>
            </Box>
            <Box sx={{display:'flex',justifyContent:'space-between',alignItems:"center",mt:{xs:2,md:12},px:2,py:"2px",border:'1px solid #999'}}>
              <Typography>Question {currentQ+1} of {module?.quiz?.length}</Typography>
              <Box><Button onClick={handleNext}  sx={{color:'#333',borderRadius:'0',px:4,mr:2}}>skip question</Button>
                <Button onClick={handleOnClick} disabled={isDisabled} sx={{background:"#333",color:'#fff',borderRadius:'0',px:2,"&:hover":{
                    background:"#999",
                    color:'#fff'
                }}}>Check answer </Button>
                
              </Box>
            </Box>
          </Box>

        </Box> : ''
      }
    </Box>
    
    </>

  )
}

export default LessonDetails