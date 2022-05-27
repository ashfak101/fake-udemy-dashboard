import { Box, Button, IconButton, Tooltip } from '@mui/material';
import CourseContent from 'components/course/courseContent';
import LessonDetails from 'components/course/LessonDetails';
import CourseNav from 'components/shared/CourseNav';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { CourseInterFace, MainCourse, Module } from '../../../components/types'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
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
  const[rightMouseData,setRightMouseData]=useState<Module>()
  const [leftMouseData,setLeftMouseData]=useState<Module>()

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
  }, [slug, url, singleModule])

  const handleNext = () => {
    let a = 0
    allCourse?.forEach(course => {
      a += course.length
    })
    console.log(a);
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
  const handleNextLesson =()=>{

    let a = 0
    allCourse?.forEach(course => {
      a += course.length
    })
    if (moduleId < a){
      let id:number= parseInt(moduleId) + 1;
      console.log(id);
      const singleLesson = allCourse?.find(courses => courses.module.find(mod => mod.id == id))
    const singleModule = singleLesson?.module.find(module => module.id == id)
    setRightMouseData(singleModule)
    }
    
  }
  const handlePrevLesson=()=>{
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
    
  }
  console.log(singleModule)
  return (
    <>
      <CourseNav progress={progress} totallesson={totallesson} />
      <Box sx={{
        display: 'flex', flexDirection: {
          xs: 'column', md: 'row'
        }
      }}>
        <Box sx={{ width: { xs: '100%', md: '70%', position: 'relative' } }}>
          <LessonDetails module={module}></LessonDetails>
          {/* rightMouseData */}
          <Box  onMouseOver={handleNextLesson} sx={{ position: 'absolute', left: { xs: "94%", md: '873px', lg: "1318px" }, top: "40%", }}>
            <Tooltip  title={`${rightMouseData?.id}.${rightMouseData?.lessonTitle}`} placement="left">
              <IconButton sx={{ background: "#333", borderRadius: '0', px: '0', color: '#fff','&:hover': { background: '#999',color:'#fff' }  }} onClick={handleNext}>
                <ArrowForwardIosIcon />
              </IconButton>
            </Tooltip>
          </Box>
          {/* leftMouseData */}
          <Box onMouseOver={handlePrevLesson} sx={{ position: 'absolute', left: 0, top: "40%" }}>
            <Tooltip title={`${leftMouseData?.id}.${leftMouseData?.lessonTitle}`} placement="right">
              <IconButton sx={{ background: "#333", borderRadius: '0', px: '0', color: '#fff','&:hover': { background: '#999',color:'#fff' } }} onClick={handleBack}>
                <ArrowBackIosNewIcon />
              </IconButton>
            </Tooltip>

          </Box>
        </Box>
        <Box sx={{ width: { xs: '100%', md: '30%' }, background: '#f2f7f6' }}>
          {
            courses?.map(course => (
              <>
                <CourseContent key={course.id} courses={course} setProgress={setProgress}></CourseContent>
              </>
            ))
          }
        </Box>
      </Box>

    </>
  )
}

export default Index

