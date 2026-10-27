import pool from '../config/db.js';

export const fetch = async () =>{
    const [rows] = await pool.query("SELECT * FROM student");
    return rows;

};

export const insert = async (student)=>{
    const[result] = await pool.query("INSERT IN TO student(name, course)VALUES(?,?)",[student.name, student.course]);
    
    return result.insertId;
    
}

export const update = async  (student) => {
    const [result] = await pool.query (
        "UPDATE student SET name= ?, author= ? WHERE id= ? ",
        [student.name, student.course]
    );
    return result.affectedRows;
}