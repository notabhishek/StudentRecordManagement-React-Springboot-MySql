package com.flock.springbootbackend.service;

import com.flock.springbootbackend.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
    public List<Student> startsWithName(String namePrefix);
    public List<Student> endsWithName(String nameSuffix);
    public List<Student> containsName(String name);
    public String deleteStudentId(int id);
    public String updateStudent(int id, String name, String address);
}
