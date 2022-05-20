


import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material"
import {MainCourse, Module } from "components/types"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useRouter } from "next/router";
import Link from "next/link";
interface Props {courses:MainCourse;
    // setLessonId: (lessonId: number) => void;
}

const CourseContent = ({ courses }: Props) => {
   
    return (
        <Box>
            <Typography>Course content</Typography>
            {courses.courseContent.map((content, index) => (
                <Accordion key={content.id} sx={{ boxShadow: 'none', background: '#f2f7f6', }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"

                    >
                        <Typography >Section {index + 1} :    {content.title}</Typography>
                    </AccordionSummary>
                  {
                      content.module.map((lesson:Module, index:number) => (
                     <Link key={lesson.id} href={`/courses/${courses.courseName}/learn/${content.id}/${lesson.id}`}>
                        <AccordionDetails  sx={{ mt: "" }}>
                        <Typography >
                            {lesson.id} : {lesson.lessonTitle}
                        </Typography>
                    </AccordionDetails>
                     </Link>
                      ))
                  }
                </Accordion>))}
        </Box>
    )
}
export default CourseContent