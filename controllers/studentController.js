import * as studentService from '../services/studentService.js';

export const fetchAllStudent = async (req, res) =>{
    const student = await studentService.fetchAllStudent();
    res.status(200).json(student);
}

export const createStudent = async (req, res) =>{
    console.log(req);
    const {name, course} = req.body;
    const student = {name, course};
    
    try {
        const studentId = await studentService.createStudent(student);
        res.status(200).json({
            success: true,
            message: studentId
        });
        
        }catch(e){
            console.log(e);
            res.status(500).json({
                error: "Internal Server Error"});
            
        }
      
    }