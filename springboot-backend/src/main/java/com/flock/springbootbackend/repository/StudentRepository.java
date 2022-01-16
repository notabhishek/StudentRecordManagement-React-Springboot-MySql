package com.flock.springbootbackend.repository;

import com.flock.springbootbackend.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {

    @Query("SELECT s FROM Student s WHERE s.name LIKE :name%")
    public List<Student> startsWithName(@Param("name") String namePrefix);

    @Query("SELECT s FROM Student s WHERE s.name LIKE %:name")
    public List<Student> endsWithName(@Param("name") String nameSuffix);

    @Query("SELECT s FROM Student s WHERE s.name LIKE %:name%")
    public List<Student> containsName(@Param("name") String name);

    @Transactional
    @Modifying
    @Query("DELETE FROM Student s WHERE s.id = :id")
    public void deleteStudentId(@Param("id") int id);

    @Transactional
    @Modifying
    @Query("UPDATE Student s SET s.name = :name , s.address = :address WHERE s.id = :id")
    public void updateStudent(@Param("id") int id, @Param("name") String name, @Param("address") String address);
}
