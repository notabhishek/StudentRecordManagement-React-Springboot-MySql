package com.flock.springbootbackend.service;

import com.flock.springbootbackend.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
}
