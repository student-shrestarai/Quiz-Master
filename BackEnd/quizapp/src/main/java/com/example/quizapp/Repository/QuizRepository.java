package com.example.quizapp.Repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.quizapp.Entities.Quiz;

@Repository
public interface QuizRepository extends CrudRepository<Quiz, Long> {
    List<Quiz> findByCategory(String category);

    
}
