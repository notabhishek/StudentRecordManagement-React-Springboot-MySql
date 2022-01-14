import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from '@mui/material/Paper';

export default function Student() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [students, setStudents] = useState([]);


  const handleClick = (e) => {
    e.preventDefault();
    const student = { name, address };
    console.log(student);

    fetch("http://localhost:8080/student/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    }).then(() => {
      console.log("new student added!");
    });
  };

  useEffect(() => {
      fetch("http://localhost:8080/student/getAll")
      .then(res => res.json())
      .then((result) => {
        setStudents(result);
        console.log(students);
      }
    )
  });

  return (
    <>
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <h1>Add Student</h1>
      <TextField
        id="outlined-basic"
        label="Student Name"
        variant="outlined"
        fullWidth
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Student Address"
        variant="outlined"
        fullWidth
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <Button variant="contained" color="success" onClick={handleClick}>
        Submit
      </Button>

      {/* <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" /> */}
    </Box>
    <Paper elevation={3}>
      {
         students.map(student => (
           <Paper elevation={6} style={{margin:"10px", padding:"15px", textAlign:"left"}} key={student.id}>
             Id: {student.id} <br/>
             Name: {student.name}<br/>
             Address: {student.address}<br/>
            </Paper>
         )
         )
      }
    </Paper>

    </>
  );
}
