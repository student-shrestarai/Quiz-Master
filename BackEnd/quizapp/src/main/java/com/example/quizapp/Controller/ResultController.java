package com.example.quizapp.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.quizapp.Entities.Result;
import com.example.quizapp.Service.ResultService;
import com.example.quizapp.Repository.LeaderBoardEntry;
import com.example.quizapp.Repository.ResultRepo;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/results")
@CrossOrigin(origins = "http://localhost:3000")
public class ResultController {

    @Autowired
    private ResultService resultService;

    @Autowired
    private ResultRepo resultrepo;

    // Save result (called when user submits quiz)
    @PostMapping("/submit")
    public Result saveQuizResult(@RequestBody Map<String, Object> data) {
        String quizTitle = (String) data.get("quizTitle");
        String email = (String) data.get("email");
        int score = (int) data.get("score");

        return resultService.saveResult(quizTitle, email, score);
    }

    // Get all results by user
    @GetMapping("/user/{email}")
    public List<Result> getUserResults(@PathVariable String email) {
        return resultService.getResultsByUser(email);
    }

    // Get recent 5 attempts
    @GetMapping("/recent/{email}")
    public List<Result> getRecentUserResults(@PathVariable String email) {
        return resultService.getRecentResults(email);
    }



    @GetMapping("/TopLeaders")
    public List<LeaderBoardEntry> gettopLeader(){
        return resultrepo.getTop5PlayersWithNames();
    }
}

