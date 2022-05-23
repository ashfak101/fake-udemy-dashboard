import { Box } from '@mui/material';
import CourseContent from 'components/course/courseContent';
import LessonDetails from 'components/course/LessonDetails';
import CourseNav from 'components/shared/CourseNav';
import { useRouter } from 'next/router'
import { type } from 'os';
import React, { useEffect, useState } from 'react'

import {CourseInterFace, MainCourse,Module} from '../../../components/types'


const Index = () => {
  const router = useRouter();
  const {slug}:any =router.query
  const [courses,setCourses]= useState<MainCourse[]|undefined >();
  const [allCourse,setAllCourse]=useState<CourseInterFace[]>();
  const [url,setUrl]=useState<Array>();
  const [courseName,setCourseName]=useState<string>()
  const [lessonId,setLessonID]=useState<string>();
  const [moduleId,setModuleId]=useState<string | number>()
  const [module,setModule]=useState<Module>()
  const [progress,setProgress]=useState<number>()
  useEffect(()=>{
    fetch('/api/courses-api')
    .then(res=> res.json())
    .then(data => 
      setCourses(data)

    )
    .catch(err => console.error(err));
  },[])
  // const lessss = courses.courseContent.find(q=>q.id=="lesson1")
  // 
  const path = router.asPath.slice(9,27);
  
 useEffect(()=>{
  courses?.forEach(courseContent=>{
    if(courseContent.courseName === courseName){
      setAllCourse(courseContent.courseContent)
    }
  } )
 
 
   
 },[courses,slug,courseName])

  const singleLesson = allCourse?.find(course=>course.id===lessonId)
 
  const singleModule = singleLesson?.module.find(module=>module.id==moduleId) 
  
  useEffect(()=>{
    setUrl(slug)
    url?.forEach((ele:string,index:number)=>{
      if(index==0){
        setCourseName(ele)
      }
      if(index === 2){
        setLessonID(ele)
      }
      if(index==3){
        setModuleId(ele)
      }
   })
   setModule(singleModule)
   },[slug,url,singleModule])
   const handleProgress = (p:number)=>{

   }
 

  return (
    <>
    <CourseNav/>
      <Box sx={{display:'flex',flexDirection:{
        xs:'column',md:'row'
      }}}>
      <Box sx={{ width: '70%' }}>
          <LessonDetails module={module}></LessonDetails>
        </Box>
        <Box sx={{ width: '30%', background: '#f2f7f6' }}>
          {
            courses?.map(course=>(
              <>
                 <CourseContent key={course.id} courses={course}></CourseContent>
              </>
            ))
          }
        </Box>
      </Box>
    </>
  )
}

export default Index

