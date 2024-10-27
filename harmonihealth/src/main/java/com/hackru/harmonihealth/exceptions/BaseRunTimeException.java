package com.hackru.harmonihealth.exceptions;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BaseRunTimeException extends RuntimeException {
    private long startTime;

    public BaseRunTimeException() {
        super();
    }

    public BaseRunTimeException(String message) {
        super(message);
    }
    public BaseRunTimeException(String message, Throwable cause) {
        super(message, cause);
    }
}