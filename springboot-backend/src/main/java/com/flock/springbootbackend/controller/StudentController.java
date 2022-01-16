package com.flock.springbootbackend.controller;

import com.flock.springbootbackend.model.Student;
import com.flock.springbootbackend.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
@CrossOrigin
public class StudentController {
    @Autowired
    private StudentService studentService;

    @PostMapping("/add")
    public String add(@RequestBody Student student) {
        studentService.saveStudent(student);
        return "New student is added";
    }

    @GetMapping("/getAll")
    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }

    @GetMapping("/startswith")
    public List<Student> getStudentsStartsWith(@Param("name") String name) {
        System.out.println("namePrfix :" + name);
        return studentService.startsWithName(name);
    }

    @GetMapping("/endswith")
    public List<Student> getStudentsEndsWith(@Param("name") String name) {
        return studentService.endsWithName(name);
    }

    @GetMapping("/contains")
    public List<Student> getStudentsContains(@Param("name") String name) {
        return studentService.containsName(name);
    }

    @DeleteMapping("/delete")
    public String deleteStudentId(@Param("id") int id) {
        return studentService.deleteStudentId(id);
    }

    @PostMapping("/update")
    public String updateStudent(@Param("id") int id, @Param("name") String name, @Param("address") String address) {
        return studentService.updateStudent(id, name, address);
    }
}
