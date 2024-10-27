package com.hackru.harmonihealth.controller;

//import com.hackru.harmonihealth.models.MatchEntity;
//import com.hackru.harmonihealth.models.UserEntity;
//import com.hackru.harmonihealth.services.MatchingService;
import com.hackru.harmonihealth.web.requests.SearchMatchRequest;
import com.hackru.harmonihealth.web.requests.SearchUserRequest;
import com.hackru.harmonihealth.web.requests.UpdateUserRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/match")
public class MatchController {
//    private final MatchingService<MatchEntity> matchingService;

    @GetMapping("/get-user-1")
    public ResponseEntity<String> getUser1(SearchMatchRequest request) {
//        Page<MatchEntity> user = matchingService.traverseData(request);
        
        return ResponseEntity.ok().body("John Doe");
    }

    @GetMapping("/get-user-2")
    public ResponseEntity<String> getUser2(SearchMatchRequest request) {
//        Page<MatchEntity> user = matchingService.traverseData(request);

        return ResponseEntity.ok().body("Jane Doe");
    }

    @GetMapping("/get-match")
    public ResponseEntity<String> getMatch(SearchMatchRequest request) {
        return ResponseEntity.ok().body("You've matched with Jane Doe.");
    }

    @PostMapping("/save-user")
    public ResponseEntity<String> createUser(@RequestBody @Valid UpdateUserRequest request) {
        return ResponseEntity.ok().body("User saved");
    }
}
