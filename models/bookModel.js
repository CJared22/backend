import pool from '../config/db.js';

//Retrieve
export const fetch = async () => {
    const [rows] = await pool.query("SELECT * FROM book");
    return rows;
};

export const insert = async (book)=>{
    const[result] = await pool.query("INSERT IN TO student(name, course)VALUES(?,?)",[book.name, book.author]);
    
    return result.insertId;
    
}

export const update = async  (book) => {
    const [result] = await pool.query (
        "UPDATE student SET name= ?, author= ? WHERE id= ? ",
        [book.name, book.author]
    );
    return result.affectedRows;
}