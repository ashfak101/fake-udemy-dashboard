


import { Box } from '@mui/material'
import CourseContent from 'components/course/courseContent'
import LessonDetails from 'components/course/LessonDetails'

import { CourseInterFace, Module } from 'components/types'
import { NextPage } from 'next'


import { useEffect, useState } from 'react'
export const getStaticProps = async () => {
  const res = await fetch(' https://jsonkeeper.com/b/MGS3')
  const data = await res.json()
  return {
    props: {
      data: data
    }
  }
}

const Course: NextPage<{ data: CourseInterFace[] }> = ({ data }) => {
  const [lessonId, setLessonId] = useState<number>(1)
  const [course, setCourse] = useState<CourseInterFace>()
  const [lesson ,setLesson]=useState<Module>()
  // const [course,setCourse]=useState<Array<CourseInterFace>>([])
  // console.log(data)
  //    async function fetchCourse() {
  //     await fetch('data.json')
  //         .then(res=> res.json())
  //         .then(data => 
  //            setCourse(data)

  //         )
  //         .catch(err => console.error(err));
  // }

  //     useEffect(()=>{
  //        fetchCourse()

  //     },[])
  // console.dir('hello',course)
  // console.log(data)
  const singleCourse = data.find(course => course.module.find(lesson => lesson.id === lessonId))
  const leesson = singleCourse?.module.find(lesson => lesson.id === lessonId)
  console.log(leesson)
  useEffect(() => {
   
    setCourse(singleCourse)
    setLesson(leesson)
  }, [course, singleCourse,leesson])
  
  // const singleLesson =course.module.find(lesson => lesson.id === lessonId)

  return (
    <div >

      <Box sx={{ display: 'flex' }}>
        <Box sx={{ width: '70%' }}>
          <LessonDetails lesson={lesson}></LessonDetails>
        </Box>
        <Box sx={{ width: '30%' }}>
          <CourseContent course={data} setLessonId={setLessonId}></CourseContent>
        </Box>
      </Box>

    </div>
  )
}

export default Course