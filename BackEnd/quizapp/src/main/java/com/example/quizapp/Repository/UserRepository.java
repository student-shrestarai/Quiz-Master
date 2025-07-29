package com.example.quizapp.Repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.example.quizapp.Entities.Registration;


public interface UserRepository extends CrudRepository <Registration, Integer>

 {

    Optional<Registration>findByEmail(String email);




    
}