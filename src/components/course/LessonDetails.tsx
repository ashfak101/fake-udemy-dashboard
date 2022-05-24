import { Button, FormControl, FormControlLabel, Radio, RadioGroup, Tab, Typography, Tabs } from "@mui/material";
import { Box } from "@mui/system";
import { MainCourse, Module, Option } from "components/types";
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
  const [value, setValue] = React.useState(0);

  const handleChangee = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChange = (id: Option) => {
    setIsDisabled(false);
    setAnswer(id)
  }
  const handleOnClick = () => {
    if (answer?.isCorrect) {

      setIsCorrect("Correct")
    }
    else {
      module?.quiz[currentQ].option.forEach((q: any) => {

        if (q.id == answer?.id) {
          q.isChecked = true
          setIsCorrect("Incorrect")

        }

      })
    }
  }
  const handleNext = () => {
    setShowQuestion(false);
    setIsCorrect('')
    if (currentQ + 1 < 5) {
      setCurrentQ((prev: number) => prev + 1);
    }

  };
  useEffect(() => {
    setShowQuestion(true)
    module?.quiz?.forEach((q: any) => {
      q.option.forEach((o: any) => {
        o.isChecked = false;
      })
    })
  }, [currentQ, module?.quiz])
  console.log(module?.quiz)
  return (
    <>
      {module?.content || module?.video ? <Box sx={{ height: '610px', overflowY: 'auto' }}>


        {module?.video ? <Box sx={{width:"100%"}}>
          <ReactPlayer controls={true} url={module.video} width='100%'
            height='600px' style={{ width: '100%' }} />
        </Box> : <Box sx={{ px: {xs:1,md:'25'} }}>
          {module?.content && <div dangerouslySetInnerHTML={{ __html: module?.content }} />}
        </Box>}

      </Box> : ''}
      <Box>
        {
          module?.quiz ? <Box>

            <Box >
              <Box sx={{ px: { xs: 2, md: 14 }, py: 4 }}>
                {
                  isCorrect === 'Correct' ? <Typography variant="h6" sx={{ background: '#acd2cc', display: 'flex', alignItems: 'center', py: 2, px: 2, fontWeight: 'blod' }}>   <CheckIcon></CheckIcon> Good Job
                    .</Typography> : ''
                }
                {
                  isCorrect === 'Incorrect' ? <Typography variant="h6" sx={{ background: '#fcaea0', display: 'flex', alignItems: 'center', py: 2, px: 2, fontWeight: 'blod' }}>   <ClearIcon></ClearIcon>  Incorrect answer. Please try again</Typography> : ''
                }
              </Box>
              <Box sx={{ px: { xs: 2, md: 14 }, }}>
                <Typography variant="h6" sx={{ fontWeight: '300', color: '#333' }}>Question {currentQ + 1} :</Typography>
                <Typography variant="h6" sx={{ fontWeight: '300' }}>{module?.quiz[currentQ].question} </Typography>
                <Box>

                  {showQuestion && <FormControl sx={{ width: "100%" }} >

                    <RadioGroup>
                      {module?.quiz[currentQ].option.map((opt: Option, index: number) => {
                        return (
                          <FormControlLabel sx={{ width: '100%', border: '0.685px solid #333', my: 1 }} onChange={() => handleChange(opt)} key={index} value={opt.id} disabled={opt.isChecked} control={<Radio />} label={opt.text} />
                        )
                      })
                      }
                    </RadioGroup>

                  </FormControl>}

                </Box>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: "center", mt: { xs: 2, md: 12 }, px: 2, py: "2px", border: '1px solid #999' }}>
                <Typography>Question {currentQ + 1} of {module?.quiz?.length}</Typography>
                <Box><Button onClick={handleNext} sx={{ color: '#333', borderRadius: '0', px: 4, mr: 2 }}>skip question</Button>
                  <Button onClick={handleOnClick} disabled={isDisabled} sx={{
                    background: "#333", color: '#fff', borderRadius: '0', px: 2, "&:hover": {
                      background: "#999",
                      color: '#fff'
                    }
                  }}>Check answer </Button>

                </Box>
              </Box>
            </Box>

          </Box> : ''
        }
      </Box>
      <Box>
        <Box sx={{  borderTop: '1px solid #999', width: '100%' ,px:3}}>
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