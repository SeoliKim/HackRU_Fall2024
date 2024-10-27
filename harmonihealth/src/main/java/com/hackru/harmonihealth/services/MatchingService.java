package com.hackru.harmonihealth.services;

import com.hackru.harmonihealth.web.requests.SearchMatchRequest;

public interface MatchingService<MatchEntity> {
    public void traverseData(SearchMatchRequest request);

    public void matching(SearchMatchRequest request);
}