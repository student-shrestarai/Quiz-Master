package com.example.quizapp.Repository;

import org.springframework.data.repository.CrudRepository;

import com.example.quizapp.Entities.QuizGroup;

public interface  QuizGroupRepository extends CrudRepository<QuizGroup ,  Long> {
    
}
