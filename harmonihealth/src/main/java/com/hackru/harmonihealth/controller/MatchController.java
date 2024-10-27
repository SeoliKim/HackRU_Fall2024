package com.hackru.harmonihealth.controller;

import com.hackru.harmonihealth.models.MatchEntity;
import com.hackru.harmonihealth.models.UserEntity;
import com.hackru.harmonihealth.services.MatchingService;
import com.hackru.harmonihealth.web.requests.SearchMatchRequest;
import com.hackru.harmonihealth.web.requests.SearchUserRequest;
import com.hackru.harmonihealth.web.requests.UpdateUserRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@RequiredArgsConstructor
@RequestMapping("/match")
public class MatchController {
    private final MatchingService<MatchEntity> matchingService;

    @GetMapping("/get-user")
    public ResponseEntity<Page<MatchEntity>> getUser(SearchMatchRequest request) {
        List<MatchEntity> user = matchingService.traverseData(request);
        
        return ResponseEntity.ok().body(user);
    }

    @PostMapping("/save-user")
    public ResponseEntity<UserEntity> createUser(@RequestBody @Valid UpdateUserRequest request) {
        UserEntity user = userService.insertUser(request);
        return ResponseEntity.ok().body(user);
    }
}
