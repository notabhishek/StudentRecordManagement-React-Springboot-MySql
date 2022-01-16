import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from '@mui/material/Paper';

export default function Student() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [students, setStudents] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  
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
      fetchData();
    });
  
  };

  const handleDelete = (e) => {
    e.preventDefault();
    console.log("trying to delete id: " + e.target.value);

    fetch("http://localhost:8080/student/delete?id=" + e.target.value, 
    { method: 'DELETE' })
    .then( (res) => {
      console.log(res);
      fetchData();
    });

  }

  const handleEdit = (e) => {
    e.preventDefault();
    console.log("edit id: " + e.target.value);
  }

  function fetchData() {
    let url = "http://localhost:8080/student/startswith?name=" + searchInput;
      console.log(searchInput);
      
      fetch(url)
      .then(res => res.json())
      .then((result) => {
        setStudents(result);
        console.log(students);
      }
    )
  }

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
    fetchData();
    console.log(e.target.value);
  }

  useEffect(() => {
    fetchData();
  }, []);

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
    <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        fullWidth
        value={searchInput}
        onChange={handleSearch}
      />
    <Paper elevation={3}>
      {
         students.map(student => (
           <Paper elevation={6} style={{margin:"10px", padding:"15px", textAlign:"left"}} key={student.id}>
             Id: {student.id} <br/>
             Name: {student.name}<br/>
             Address: {student.address}<br/>
             <Button variant="contained" color="success" onClick={handleDelete} value={student.id}>
              Delete
            </Button>

            <Button variant="contained" color="success" onClick={handleEdit} value={student.id}>
              Edit
            </Button>
            </Paper>
         )
         )
      }
    </Paper>

    </>
  );
}
