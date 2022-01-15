package com.flock.springbootbackend.repository;

import com.flock.springbootbackend.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {

    @Query("SELECT s FROM Student s WHERE s.name LIKE :name%")
    public List<Student> startsWithName(@Param("name") String namePrefix);

    @Query("SELECT s FROM Student s WHERE s.name LIKE %:name")
    public List<Student> endsWithName(@Param("name") String nameSuffix);

    @Query("SELECT s FROM Student s WHERE s.name LIKE %:name%")
    public List<Student> containsName(@Param("name") String name);
}
