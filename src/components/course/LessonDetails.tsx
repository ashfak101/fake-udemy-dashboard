import { Button, FormControl, FormControlLabel, Radio, RadioGroup, Tab, Typography, Tabs } from "@mui/material";
import { Box } from "@mui/system";
import { MainCourse, Module, Option, Quiz } from "components/types";
import CheckIcon from '@mui/icons-material/Check';
import React, { useEffect } from 'react'
import ReactPlayer from 'react-player/youtube'
import ClearIcon from '@mui/icons-material/Clear';
interface Props {
  module: any;


}
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const LessonDetails = ({ module }: Props) => {
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
    <>
      {module?.content || module?.video ? <Box sx={{ height: '610px', overflowY: 'auto' }}>


        {module?.video ? <Box sx={{ width: "100%" }}>
          <ReactPlayer controls={true} url={module.video} width='100%'
            height='600px' style={{ width: '100%' }} />
        </Box> : <Box sx={{ px: { xs: 1, md: '25' } }}>
          {module?.content && <Box dangerouslySetInnerHTML={{ __html: module?.content }} />}
        </Box>}

      </Box> : ''}
      <Box>
        {
          module?.quiz ? <Box>
{/* Result Page */}
             { !showResult && <Box >
              <Box sx={{ px: { xs: 2, md: 14 }, py: 4 }}>
                {
                  isCorrect === 'Correct' ? <Typography variant="h6" sx={{ background: '#acd2cc', display: 'flex', alignItems: 'center', py: 2, px: 2, fontWeight: 'blod' }}>   <CheckIcon></CheckIcon> Good Job
                    .</Typography> : ''
                }
                {
                  isCorrect === 'Incorrect' ? <Typography variant="h6" sx={{ background: '#fcaea0', display: 'flex', alignItems: 'center', py: 2, px: 2, fontWeight: 'blod' }}>   <ClearIcon></ClearIcon>  Incorrect answer. Please try again</Typography> : ''
                }
              </Box>
              {showQuestion && <Box sx={{ px: { xs: 2, md: 14 }, }}>
                <Typography variant="h6" sx={{ fontWeight: '300', color: '#333' }}>Question {currentQ + 1} :</Typography>
                <Typography variant="h6" sx={{ fontWeight: '300' }}>{module?.quiz[currentQ].question} </Typography>
                <Box>

                  {showQuestion && <FormControl sx={{ width: "100%" }} >

                    <RadioGroup>
                      {module?.quiz[currentQ].option.map((opt: Option, index: number) => {
                        return (
                          <FormControlLabel sx={{ width: '100%', border: '0.685px solid #333', my: 1 }} onChange={() => handleChange(opt)} key={index} value={opt.id} disabled={opt.isChecked || isChecked} control={<Radio />} label={opt.text} />
                        )
                      })
                      }
                    </RadioGroup>

                  </FormControl>}

                </Box>
              </Box>}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: "center", mt: { xs: 2, md: 12 }, px: 2, py: "2px", border: '1px solid #999' }}>
                <Typography>Question {currentQ + 1} of {module?.quiz?.length}</Typography>
                <Box>{
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

                </Box>
              </Box>
            </Box>}
            {
              showResult && <Box> 

                <Box sx={{background:'#1c1d1f',height:'20vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <Box>
                    <Typography  variant="h4" sx={{color:'#fff',fontSize:'24px'}}>Complete the quiz to see your results.</Typography>
                    <Typography   sx={{color:'#fff',fontSize:'15px'}}>You got {userRightAns.length} out of 5 correct. 0 question is skipped.</Typography>
                    </Box>
                </Box>
                <Box>
                <Box sx={{display:'flex',justifyContent:'center'}}>
                <Box >
                  {
                    quizArray.length ? <Box>
                        <Typography sx={{display:'flex',alignItems:'center',fontSize:'14px',fontWeight:'bold'}}> <ClearIcon sx={{color: "red"}}></ClearIcon> What You Should review </Typography>
                        {
                          quizArray.map((wrongAns:Quiz)=>(
                            <Box key={wrongAns.id}>
                              <Typography sx={{fontSize:'14px',my:1}}>{wrongAns.question}</Typography>
                              <Typography sx={{fontSize:'14px',my:1}}>Module{wrongAns.id+1}  {wrongAns.module}</Typography>
                            </Box>
                          ))
                        }

                    </Box>:''
                  }
                </Box></Box>
                  <Box sx={{border:'1px solid #333',display:'flex',flexDirection:'row-reverse'}}>
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
        <Box sx={{ borderTop: '1px solid #999', width: '100%', px: 3 }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChangee} aria-label="basic tabs example" sx={{
              color: '#fff', "& .MuiTabs-indicator": {
                backgroundColor: "#fff",
                border: '1px solid #333'
              },
              "& .MuiTab-textColorPrimary .Mui-selected": {
                color: "#333"
              },
              "& .MuiTab-textColorPrimary": {
                color: "#333"
              },
              "& .MuiTab-root": {
                p: 0,
                mr: 1,
                fontSize: '1.1rem',
                textTransform: 'capitalize',
                letterSpacing: '1px',
                fontFamily: 'Georgia', fontWeight: '500'
              }
            }}>
              <Tab label="Overview" {...a11yProps(0)} />
              <Tab label="Notes" {...a11yProps(1)} />
              <Tab label="Announements" {...a11yProps(2)} />
              <Tab label="Reviews" {...a11yProps(4)} />
            </Tabs>
          </Box>

        </Box>
      </Box>
    </>

  )
}

export default LessonDetails