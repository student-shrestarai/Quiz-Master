package com.example.quizapp.Service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.quizapp.Entities.Result;
import com.example.quizapp.Repository.ResultRepo;

@Service
public class ResultService {

    @Autowired
    private ResultRepo resultRepo;

    public Result saveResult(String quizTitle, String userEmail, int score) {
        Result result = new Result(quizTitle, userEmail, score, LocalDate.now());
        return resultRepo.save(result);
    }

    public List<Result> getResultsByUser(String email) {
        return resultRepo.findByUserEmail(email);
    }

    public List<Result> getRecentResults(String email) {
        return resultRepo.findTop5ByUserEmailOrderByDateDesc(email);
    }
}
