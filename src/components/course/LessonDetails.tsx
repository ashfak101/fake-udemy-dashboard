import { Button, Box, FormControl, FormControlLabel, Radio, RadioGroup, Tab, Typography, Tabs, IconButton, Tooltip } from "@mui/material";

import { CourseInterFace, MainCourse, Module, Option, Quiz } from "components/types";
import CheckIcon from '@mui/icons-material/Check';
import React, { useEffect } from 'react'

import ReactPlayer from 'react-player/youtube'
import ClearIcon from '@mui/icons-material/Clear';

import Icons from "./Icons";
import CourseDetails from "./courseDetails";
import Vimeo from '@u-wave/react-vimeo';
interface Props {
  module: any;
  lesson:CourseInterFace | undefined

}
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const LessonDetails = ({ module,lesson }: Props) => {
  const [answer, setAnswer] = React.useState<Option>()
  const [currentQ, setCurrentQ] = React.useState<number>(0);
  const [showQuestion, setShowQuestion] = React.useState<boolean>(true);
  const [isDisabled, setIsDisabled] = React.useState<boolean>(true);
  const [isCorrect, setIsCorrect] = React.useState<string>('');
  const [isChecked, setIsChecked] = React.useState<boolean>(false)
  const [userRightAns, setUserRightAns] = React.useState<any>([])
  const [value, setValue] = React.useState(0);
  const [quizArray, setQuizArray] = React.useState<any>([])
  const [showResult, setShowResult] = React.useState<boolean>(false)

  const handleChangee = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChange = (id: Option) => {
    setIsDisabled(false);
    setAnswer(id)

  }

  const handleCheckAnswer = () => {
    if (answer?.isCorrect) {
      setIsChecked(true)
      setIsCorrect('Correct')
      let arr2 = [...userRightAns, module.quiz[currentQ]]
      if (quizArray[currentQ]?.id == module.quiz[currentQ].id) {
        return
      }
      setUserRightAns(arr2)

    }
    else {

      module?.quiz[currentQ].option.forEach((q: any) => {

        if (q.id == answer?.id) {
          q.isChecked = true
          setIsCorrect("Incorrect")

        }

      })
      let arr: any = [...quizArray, module.quiz[currentQ]]
      if (quizArray[currentQ]?.id == module.quiz[currentQ].id) {
        return
      }

      setQuizArray(arr)
    }
  }
  const handleNext = () => {
    setShowQuestion(false);
    setIsCorrect('')
    if (currentQ + 1 < 5) {
      setCurrentQ((prev: number) => prev + 1);
    }
    setIsChecked(false)
  };
  useEffect(() => {
    setShowQuestion(true)
    module?.quiz?.forEach((q: any) => {
      q.option.forEach((o: any) => {
        o.isChecked = false;
      })
    })
  }, [currentQ, module?.quiz])
  const handleRetry = () => {
    setCurrentQ(0)
    setQuizArray([])
    setUserRightAns([])
    setShowResult(false)
    setIsChecked(false)
    setIsCorrect('')
  }

  return (
    <><Box >
      {module?.content || module?.video ? <Box sx={{ height: '610px', }}>


        {module?.video ? <Box sx={{ width: "100%" }}>
          <ReactPlayer
            playing={true}
            controls={true} url={module.video} width='100%'
            height='600px' style={{ width: '100%' }} />
        </Box> : <Box sx={{ px: { xs: 1, md: '25' } }}>
          {module?.content && <Box sx={{ width: { xs: '100%', md: '600px' }, m: '0 auto', '& h2': { fontSize: '30px', fontFamily: 'Popins', fontWeight: '900' }, '& p': { color: '#555', fontWeight: '400' }, '& a': { color: '#5624d1' } }} dangerouslySetInnerHTML={{ __html: module?.content }} />}
        </Box>}

      </Box> : ''}
      <Box>
        {
          module?.quiz ? <Box>
            {/* Result Page */}
            {!showResult && <Box >
              <Box sx={{ px: { xs: 2, md: 14 }, py: 4 }}>
                {
                  isCorrect === 'Correct' ? <Typography variant="h6" sx={{ background: '#acd2cc', display: 'flex', alignItems: 'center', py: 2, px: 2, fontWeight: 'blod' }}>   <CheckIcon></CheckIcon> Good Job
                    .</Typography> : ''
                }
                {
                  isCorrect === 'Incorrect' ? <Typography variant="h6" sx={{ background: '#fcaea0', display: 'flex', alignItems: 'center', py: 2, px: 2, fontWeight: 'blod' }}>   <ClearIcon></ClearIcon>  Incorrect answer. Please try again</Typography> : ''
                }
              </Box>
              {showQuestion && <Box sx={{ px: { xs: 2, md: 14 }, mb: { xs: 0, md: 30 } }}>
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
              </Box>}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: "center", mt: { xs: 2, md: 12 }, px: 2, py: "2px", border: '1px solid #999' }}>
                <Typography sx={{ fontFamily: 'Popins' }}>Question {currentQ + 1} of {module?.quiz?.length}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>{
                  isCorrect == 'Correct' ? <Button onClick={currentQ == 4 ? () => setShowResult(true) : handleNext} sx={{
                    background: "#333", color: '#fff', borderRadius: '0', px: 2, "&:hover": {
                      background: "#999",
                      color: '#fff'
                    }
                  }}>{currentQ == 4 ? 'See Result' : 'next'}</Button> :
                    <>
                      {
                        currentQ > 5 ? <Button onClick={handleRetry}>HEllo</Button> : <Button onClick={handleCheckAnswer} disabled={isDisabled} sx={{
                          background: "#333", color: '#fff', borderRadius: '0', px: 2, "&:hover": {
                            background: "#999",
                            color: '#fff'
                          }
                        }}>Check answer </Button>
                      }
                    </>
                }
                  <>
                    <Box sx={{ ml: { xs: 0, md: 4 } }}>
                      <Icons />
                    </Box>
                  </>
                </Box>
              </Box>
            </Box>}
            {
              showResult && <Box>

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

                    <Icons />
                    <Button sx={{
                      background: "#333", color: '#fff', borderRadius: '0', px: 2, "&:hover": {
                        background: "#999",
                        color: '#fff'
                      }
                    }} onClick={handleRetry}>Retry Quiz</Button>
                  </Box>
                </Box>
              </Box>
            }

          </Box> : ''
        }
      </Box>

      <Box>
        <Box sx={{ border: '1px solid #333', display: 'flex', flexDirection: 'row-reverse', py: 1 }}>

          <Icons />

        </Box>
        <CourseDetails module={module} lesson={lesson}/>
      </Box>
    </Box>
    </>

  )
}

export default LessonDetails