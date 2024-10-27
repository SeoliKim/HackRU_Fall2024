package com.hackru.harmonihealth.controller;

import com.hackru.harmonihealth.controller.dto.ChatRequest;
import com.hackru.harmonihealth.controller.dto.ChatResponse;
import com.hackru.harmonihealth.service.GenAIService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/chat")
public class GenerativeController {

    private final GenAIService genAIService;



    @PostMapping
    public ChatResponse getChatResponse(@RequestBody ChatRequest request){

        return new ChatResponse(genAIService.getResponse(request));
    }

}
