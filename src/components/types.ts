export interface  CourseInterFace{
    id:       number;
    tile:     string;
    module:   Module[];
    length:   number;
    duration: string;
}

export interface Module {
    id:          number;
    lessonTitle: string;
    video?:      string;
    duration:    string;
    isCompleted: boolean;
    content?:    string;
}