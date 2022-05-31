import { Box, Button, Grid, IconButton, Tooltip } from '@mui/material';
import CourseContent from 'components/course/courseContent';
import LessonDetails from 'components/course/LessonDetails';
import CourseNav from 'components/shared/CourseNav';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { CourseInterFace, handleLocalStorage, MainCourse, Module } from '../../../components/types'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const Index = () => {
  const router = useRouter();
  const { slug }: any = router.query
  const [courses, setCourses] = useState<MainCourse[] | undefined>();
  const [allCourse, setAllCourse] = useState<CourseInterFace[] | undefined>();
  const [url, setUrl] = useState<Array<string>>();
  const [courseName, setCourseName] = useState<string>()
  const [moduleId, setModuleId] = useState<any>()
  const [module, setModule] = useState<Module>()
  const [progress, setProgress] = useState<number>(0)
  const [totallesson, setTotalLesson] = useState<number>(0)
  const [rightMouseData, setRightMouseData] = useState<Module>()
  const [leftMouseData, setLeftMouseData] = useState<Module>()
  const [lesson, setLesson] = useState<CourseInterFace>()
  const [gridCount, setGridCount] = useState<boolean>(false)

  useEffect(() => {
    fetch('/api/courses-api')
      .then(res => res.json())
      .then(data =>
        setCourses(data)

      )
      .catch(err => console.error(err));
  }, [])
  useEffect(() => {
    courses?.forEach(courseContent => {
      if (courseContent.courseName === courseName) {
        setAllCourse(courseContent.courseContent)
      }
    })
    let a = 0;
    allCourse?.forEach(course => {
      a += course.length
    })
    setTotalLesson(a)


  }, [courses, slug, courseName, allCourse])

  const singleLesson = allCourse?.find(courses => courses.module.find(mod => mod.id == moduleId))

  const singleModule = singleLesson?.module.find(module => module.id == moduleId)

  useEffect(() => {
    setUrl(slug)
    url?.forEach((ele: string, index: number) => {
      if (index == 0) {
        setCourseName(ele)
      }

      if (index == 3) {
        setModuleId(ele)
      }
    })
    setModule(singleModule)
    setLesson(singleLesson)
    handleLocalStorage('id', moduleId)
  }, [slug, url, singleModule, singleLesson, moduleId])

  const handleNext = () => {
    let a = 0
    allCourse?.forEach(course => {
      a += course.length
    })

    if (moduleId < a) {
      let id = parseInt(moduleId) + 1
      router.push(`/courses/web-design-secrets/learn/lecture/${id}`)
    }

  }
  const handleBack = () => {
    let a = 0
    allCourse?.forEach(course => {
      a += course.length
    })
    if (moduleId > 1 && moduleId <= a) {
      let id: number = parseInt(moduleId) - 1
      router.push(`/courses/web-design-secrets/learn/lecture/${id}`)
    }

  }
  const handleNextLesson = () => {

    let a = 0
    allCourse?.forEach(course => {
      a += course.length
    })
    if (moduleId < a) {
      let id: number = parseInt(moduleId) + 1;
      console.log(id);
      const singleLesson = allCourse?.find(courses => courses.module.find(mod => mod.id == id))
      const singleModule = singleLesson?.module.find(module => module.id == id)
      setRightMouseData(singleModule)
    }
    else {
      setRightMouseData(singleModule)
    }

  }
  const handlePrevLesson = () => {
    let a = 0
    allCourse?.forEach(course => {
      a += course.length
    })
    if (moduleId > 1 && moduleId <= a) {
      let num: number = parseInt(moduleId) - 1
      const singleLesson = allCourse?.find(courses => courses.module.find(mod => mod.id == num))
      const singleModule = singleLesson?.module.find(module => module.id == num)
      setLeftMouseData(singleModule)
    }
    else {
      setLeftMouseData(singleModule)
    }
  }
  const handleGridCount = () => {
    setGridCount(false)
  }
  
  
  return (
    <>
      <CourseNav progress={progress} totallesson={totallesson} />
      <Box sx={{
        // display: 'flex', flexDirection: {
        //   xs: 'column', md: 'row'
        // }
      }}>
        <Grid container>
          <Grid xs={12} md={gridCount ? 12 : 9}>
            <Box sx={{ position: 'relative' }}>
              <LessonDetails module={module} lesson={lesson} setGridCount={setGridCount} gridCount={gridCount}></LessonDetails>
              {/* rightMouseData */}
              <Box onMouseOver={handleNextLesson} sx={{ position: 'absolute', right: { xs: "0", md: '0', }, top: "30%", }}>
                <Tooltip title={`${rightMouseData?.id}.${rightMouseData?.lessonTitle}`} placement="left" componentsProps={{
                  tooltip: {
                    sx: {
                      color: "#fff",
                      backgroundColor: " #3b3b3b",
                      fontSize: "12px",
                      borderRadius: '0',
                      p: '12px 12px'
                    }
                  }
                }}>
                  <IconButton sx={{ background: "#333", borderRadius: '0', p: '10px 0', color: '#fff', '&:hover': { background: '#999', color: '#fff' } }} onClick={handleNext}>
                    <ArrowForwardIosIcon />
                  </IconButton>
                </Tooltip>
              </Box>
              {/* leftMouseData */}
              <Box onMouseOver={handlePrevLesson} sx={{ position: 'absolute', left: 0, top: "30%" }}>
                <Tooltip title={`${leftMouseData?.id}.${leftMouseData?.lessonTitle}`} placement="right" componentsProps={{
                  tooltip: {
                    sx: {
                      color: "#fff",
                      backgroundColor: " #3b3b3b",
                      fontSize: "12px",
                      borderRadius: '0',
                      p: '12px 12px'
                    }
                  }
                }}>
                  <IconButton sx={{ background: "#333", borderRadius: '0', p: '10px 0', color: '#fff', '&:hover': { background: '#999', color: '#fff' } }} onClick={handleBack}>
                    <ArrowBackIosNewIcon />
                  </IconButton>
                </Tooltip>

              </Box>
              {gridCount && <Box sx={{ position: 'absolute', top: "20px", right: '0',overflow:'hidden' }}>
                <Button sx={{ border: '1px solid black',background:'#333', color: '#fff',borderRadius:'0','&:hover':{
                  background:'#444', color: '#fff'
                } }} onClick={handleGridCount}><ArrowBackIcon /> Course Content</Button>
              </Box>}
            </Box></Grid>
          <Grid xs={12} md={3} sx={{ borderLeft: '1px solid #bfbfbf', height: '100vh' }}>
            <Box sx={{ background: '#f2f7f6' }}>
              {
                courses?.map(course => (
                  <>
                    <CourseContent key={course.id} courses={course} setProgress={setProgress}></CourseContent>
                  </>
                ))
              }
            </Box></Grid>
        </Grid>
      </Box>
      <Box>

      </Box>
    </>
  )
}

export default Index

