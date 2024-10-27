package com.hackru.harmonihealth.service;

import com.hackru.harmonihealth.controller.dto.ChatRequest;

public interface GenAIService {

    String getResponse(ChatRequest request);
}
