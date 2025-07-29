package com.example.quizapp.Repository;

import org.springframework.data.repository.CrudRepository;

import com.example.quizapp.Entities.Login;

public interface LoginRepo  extends CrudRepository<Login ,  Integer>{
    
}
