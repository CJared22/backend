import pool from '../config/db.js';

export const fetch = async () =>{
    const [rows] = await pool.query("SELECT * FROM student");
    return rows;

};

export const create = async (student)=>{
    const[result] = await pool.query("INSERT INTO student(name, age)VALUES(?,?)",[student.name, student.age]);
    
    return result.insertId;
    
}

export const update = async (student) => {
    const [result] = await pool.query (
        "UPDATE student SET name= ?, age= ? WHERE id= ? ",
        [student.name, student.age, student.id]
    );
    return result.affectedRows;
}

export const remove = async (id) => {
    const [result] = await pool.query (
        "DELETE FROM student WHERE id= ? ", [id]
    );
    return result.affectedRows;
}