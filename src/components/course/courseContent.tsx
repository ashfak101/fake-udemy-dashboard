


import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material"
import { CourseInterFace } from "components/types"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ReactPlayer from 'react-player'
interface Props {
    course: CourseInterFace[]
}

const CourseContent = ({ course }: Props) => {
    console.log(course)
    return (
        <Box>
            <Typography>Course content</Typography>
            {course.map((content, index) => (
                <Accordion key={content.id} sx={{ boxShadow: 'none', background: '#f2f7f6', }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
          id="panel1bh-header"
          
                    >
                        <Typography >Section {index + 1} :    {content.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{mt:""}}>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>))}
        </Box>
    )
}
export default CourseContent