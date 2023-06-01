const express = require("express");
var mysql = require('mysql');
var cors = require('cors')
let app = express()
app.use(express.json())
app.use(cors())

var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'RaGuL@08',
  database: 'portfolio'
});
connection.connect();

app.get('/getcompany/:id', (req, res) => {

  connection.query(`select * from company where id = ?`, [req.params.id], function (error, results) {

    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    else {

      res.json(results);
    }

  });
});
app.get('/getall', (req, res) => {

  let sql = `select id,name,email,phonenumber,location from company where isdeleted=? ;`
  connection.query(sql,[0], function (error, results) {

    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    else {

      res.json(results);
    }

  });
})
app.post('/insert', (req, res) => {
  console.log(req.body)
  connection.query(`insert into company (name,email,phonenumber,location)values (?,?,?,?)`, [req.body.name, req.body.email, req.body.phonenumber, req.body.location], function (error, results) {

    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    else {


      res.json(results);
    }

  });
})
app.put('/update/company',(req,res)=>{

  connection.query(`update  company SET name=? ,email=?, phonenumber=? ,location=? where id=?`,[req.body.name,req.body.email,req.body.phonenumber,req.body.location,req.body.id], function (error, results) {

    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
      else{
      // res.end(JSON.stringify(results));

      res.json(results);
      }

    });
  })
  app.put('/delete/company', (req, res) => {

    // Execute the DELETE statement with the specified ID
    
     let sql = `UPDATE company SET isdeleted = ? WHERE id = ?;`;
    
    let id = req.body.id
    
    console.log('id.....', id)
    
    connection.query(sql, [1, id], (error, results) => {
    
      if (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
        else{
        

        res.json(results);
        }
    
    });
    
    });
app.get('/getemployee/:id', (req, res) => {

  connection.query(`select * from employee where id = ?`, [req.params.id], function (error, results) {

    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    else {
      // res.end(JSON.stringify(results));

      res.json(results);
    }

  });
});
app.get('/getallemployee', (req, res) => {

  let sql = `select id,name,age,gender from employee where isdeleted=? ;`
  connection.query(sql,[0], function (error, results) {

    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    else {

      res.json(results);
    }

  });
})
app.post('/insert/employee', (req, res) => {
  console.log(req.body)
  connection.query(`insert into employee (name,age,gender)values (?,?,?)`, [req.body.name, req.body.age, req.body.gender], function (error, results) {

    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    else {


      res.json(results);
    }

  });
})
app.put('/update/employee',(req,res)=>{

  connection.query(`update  employee SET name=? ,age=?, gender=?  where id=?`,[req.body.name,req.body.age,req.body.gender,req.body.id], function (error, results) {

    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
      else{
      // res.end(JSON.stringify(results));

      res.json(results);
      }

    });
  })
  app.put('/delete/employee', (req, res) => {

    // Execute the DELETE statement with the specified ID
    
     let sql = `UPDATE employee SET isdeleted = ? WHERE id = ?;`;
    
    let id = req.body.id
    
    console.log('id.....', id)
    
    connection.query(sql, [1, id], (error, results) => {
    
      if (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
        else{
        

        res.json(results);
        }
    
    });
    
    });
app.get('/getoffice/:id', (req, res) => {
  connection.query(`select *from officeplace where id=?`, [req.params.id], function (error, results) {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    else {


      res.json(results);
    }

  })
})
app.get('/getofficeall', (req, res) => {

  let sql = `select id,ownername,age,salary,location from officeplace where isdeleted=? ;`
  connection.query(sql,[0], function (error, results) {

    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    else {

      res.json(results);
    }

  });
})
app.get('/getdistrictall', (req, res) => {

  let sql = `select id,name,pincode from districts  ;`
  connection.query(sql, function (error, results) {

    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    else {

      res.json(results);
    }

  });
})
app.get('/getsalaryall', (req, res) => {

  let sql = `select id,salary from salary  ;`
  connection.query(sql, function (error, results) {

    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    else {

      res.json(results);
    }

  });
})
app.post('/insert/office', (req, res) => {
  console.log(req.body)
  connection.query(`insert into officeplace (ownername,age,salary,location)values (?,?,?,?)`, [req.body.ownername, req.body.age, req.body.salary, req.body.location], function (error, results) {

    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    else {


      res.json(results);
    }

  });
})
app.put('/update/office',(req,res)=>{

  connection.query(`update  officeplace SET ownername=? ,age=?, salary=? ,location=? where id=?`,[req.body.ownername,req.body.age,req.body.salary,req.body.location,req.body.id], function (error, results) {

    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
      else{
      // res.end(JSON.stringify(results));

      res.json(results);
      }

    });
  })
  app.put('/delete/office', (req, res) => {

    // Execute the DELETE statement with the specified ID
    
     let sql = `UPDATE officeplace SET isdeleted = ? WHERE id = ?;`;
    
    let id = req.body.id
    
    console.log('id.....', id)
    
    connection.query(sql, [1, id], (error, results) => {
    
      if (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
        else{
        

        res.json(results);
        }
    
    });
    
    });
   
app.listen(3001, () => {
  console.log("listening on  port 3001")
})