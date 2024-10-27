package com.hackru.harmonihealth.exceptions;

public class RecordNotFoundException extends BaseRunTimeException {

    public RecordNotFoundException(){
        super();
    }

    public RecordNotFoundException(String message){
        super(message);
    }

    public RecordNotFoundException(String message, Throwable cause){
        super(message, cause);
    }
}