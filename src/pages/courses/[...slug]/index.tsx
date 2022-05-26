import { Box, Button } from '@mui/material';
import CourseContent from 'components/course/courseContent';
import LessonDetails from 'components/course/LessonDetails';
import CourseNav from 'components/shared/CourseNav';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { CourseInterFace, MainCourse, Module } from '../../../components/types'


const Index = () => {
  const router = useRouter();
  const { slug }: any = router.query
  const [courses, setCourses] = useState<MainCourse[] | undefined>();
  const [allCourse, setAllCourse] = useState<CourseInterFace[]>();
  const [url, setUrl] = useState<Array<string>>();
  const [courseName, setCourseName] = useState<string>()
  const [lessonId, setLessonID] = useState<string>();
  const [moduleId, setModuleId] = useState<any>()
  const [module, setModule] = useState<Module>()
  const [progress, setProgress] = useState<number>(0)
const [ totallesson,setTotalLesson]=useState<number>(0)
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


  }, [courses, slug, courseName,allCourse])

  const singleLesson = allCourse?.find(course => course.id === lessonId)

  const singleModule = singleLesson?.module.find(module => module.id == moduleId)
  console.log(singleLesson)
  useEffect(() => {
    setUrl(slug)
    url?.forEach((ele: string, index: number) => {
      if (index == 0) {
        setCourseName(ele)
      }
      if (index === 2) {
        setLessonID(ele)
      }
      if (index == 3) {
        setModuleId(ele)
      }
    })
    setModule(singleModule)
  }, [slug, url, singleModule])
  //  const handleProgress = (p:number)=>{

  //  }
  const handleNext = () => {
     if(moduleId < singleLesson?.length){
      let id:number = parseInt(moduleId) + 1
      router.push(`/courses/web-design-secrets/learn/${singleLesson?.id}/${id}`)
     }
      else if (moduleId <7 ){
      let id:number = parseInt(moduleId) + 1
      router.push(`/courses/web-design-secrets/learn/lesson2/${id}`)
     }
    
    
  }
const handleBack=()=>{
  if(moduleId > 1 && moduleId <= 4){
    let id:number = parseInt(moduleId) - 1
    router.push(`/courses/web-design-secrets/learn/lesson1/${id}`)
   }
    else if (moduleId >4 ){
    let id:number = parseInt(moduleId) - 1
    router.push(`/courses/web-design-secrets/learn/lesson2/${id}`)
   }
}
  return (
    <>
      <CourseNav progress={progress} totallesson={totallesson}/>
      <Box sx={{
        display: 'flex', flexDirection: {
          xs: 'column', md: 'row'
        }
      }}>
        <Box sx={{ width: { xs: '100%', md: '70%' } }}>
          <LessonDetails module={module}></LessonDetails>
          <Box  >
            <Button onClick={handleNext}>NEXT</Button>
          </Box>
          <Box  >
            <Button onClick={handleBack}>Back</Button>
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

