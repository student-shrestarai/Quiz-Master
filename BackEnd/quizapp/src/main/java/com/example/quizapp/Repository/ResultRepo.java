package com.example.quizapp.Repository;

import java.util.List;

import com.example.quizapp.Entities.Registration;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.example.quizapp.Entities.Result;

public interface ResultRepo extends CrudRepository <Result, Long> {
    List<Result> findByUserEmail(String email);
    List<Result> findTop5ByUserEmailOrderByDateDesc(String email);

     @Query(value = """
        SELECT r.full_name AS fullName, SUM(res.score) AS totalScore
        FROM result res
        JOIN registration r ON res.user_email = r.email
        GROUP BY res.user_email, r.full_name
        ORDER BY totalScore DESC
        LIMIT 2
    """, nativeQuery = true)
    List<LeaderBoardEntry> getTop5PlayersWithNames();
   
    
}
