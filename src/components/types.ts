

export interface MainCourse {
    id:            number;
    title:         string;
    courseName:    string;
    courseContent: CourseInterFace[];
}

export interface CourseInterFace {
    id:       string;
    title:    string;
    module:   Module[];
    length:   any;
    duration: string;
}

export interface Module {
    id:          number;
    lessonTitle: string;
    video?:      string;
    duration:    string;
    isCompleted: boolean;
    content?:    string;
    quiz?:       Quiz[];
}
export interface Quiz {
    id:       number;
    question: string;
    option:   Option[];
    answer:   number;
    module:string;
}

export interface Option {
    id:        number;
    text:      string;
    isCorrect: boolean;
    isChecked?: boolean;
}


export const handleLocalStorage =(name:string,value:string)=>{
    localStorage.setItem(name,value)
}