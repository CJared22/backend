import * as studentService from '../services/studentService.js';

export const fetchAllStudent = async (req, res) =>{
    const student = await studentService.fetchAllStudent();
    res.status(200).json(student);
}

export const createStudent = async (req, res) =>{
    console.log(req.body);
    const {name,age} = req.body;
    const student = {name, age};
    
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

export const updateStudent = async (req, res) =>{
    const {name, age} = req.body;
    const { id } = req.params;
    const student = {id: parseInt(id), name, age};

    try{
        const updatedStudent = await studentService.updateStudent(student);
        res.status(200).json({
            success: true,
            message: updatedStudent
        });   
    }catch(e){
        console.log(e);
        res.status(500).json({
            error: "Internal Server Error"
        });
    } 
}

export const deleteStudent = async (req, res) =>{
    const { id } = req.params;

    try{
        const deletedStudent = await studentService.deleteStudent(parseInt(id));
        res.status(200).json({
            success: true,
            message: deletedStudent
        });   
    }catch(e){
        console.log(e);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
}