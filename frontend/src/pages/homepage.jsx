import React, { useState } from 'react';
import logo from "../assets/HarmoniHealthLogo.png";
import "./login.css";

function homePage(){
    return  <div style={{width: '100%', height: '100%', paddingLeft: 55, paddingRight: 55, paddingTop: 34, paddingBottom: 34, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end', gap: 42, display: 'inline-flex'}}>
        <div style={{justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
            <div style={{width: 207, height: 969, background: '#F1C6D7'}} />
            <img style={{width: 76, height: 82, borderRadius: 9999}} src="https://via.placeholder.com/76x82" />
            <img style={{width: 27, height: 27, borderRadius: 9999}} src="https://via.placeholder.com/27x27" />
            <img style={{width: 27, height: 27, borderRadius: 9999}} src="https://via.placeholder.com/27x27" />
            <img style={{width: 27, height: 27, borderRadius: 9999}} src="https://via.placeholder.com/27x27" />
            <div style={{padding: 10, background: '#F1C6D7', borderRadius: 6, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                <div style={{textAlign: 'center', color: 'black', fontSize: 20, fontFamily: 'Inika', fontWeight: '400', wordWrap: 'break-word'}}>Home</div>
            </div>
            <div style={{width: 88, height: 41, paddingTop: 10, paddingBottom: 13, paddingLeft: 10, paddingRight: 10, background: '#F1C6D7', borderRadius: 6, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                <div style={{textAlign: 'center', color: 'black', fontSize: 20, fontFamily: 'Inika', fontWeight: '400', wordWrap: 'break-word'}}>Register</div>
            </div>
            <div style={{width: 66, height: 48, padding: 10, background: '#F1C6D7', borderRadius: 6, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                <div style={{width: 112, height: 26, textAlign: 'center', color: 'black', fontSize: 20, fontFamily: 'Inika', fontWeight: '400', wordWrap: 'break-word'}}>Login</div>
            </div>
            <div style={{width: 144.85, height: 82, color: 'black', fontSize: 20, fontFamily: 'Inika', fontWeight: '400', wordWrap: 'break-word'}}>Harmoni Health</div>
            <div style={{width: 823, height: 969, background: '#F8ECF0'}} />
        </div>
        <div style={{width: 750, height: 203, position: 'relative'}}>
            <div style={{width: 750, height: 145, left: 0, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 48, fontFamily: 'Joan', fontWeight: '400', wordWrap: 'break-word'}}>Companionship, Community, and Confidentiality</div>
            <div style={{width: 603, height: 65, left: 73, top: 138, position: 'absolute', textAlign: 'center'}}><span style="color: 'black', fontSize: 24, fontFamily: 'Joan', fontWeight: '400', wordWrap: 'break-word'"><br/></span><span style="color: 'black', fontSize: 32, fontFamily: 'Joan', fontWeight: '400', wordWrap: 'break-word'">Welcome to HarmoniHealth<br/></span><span style="color: 'black', fontSize: 16, fontFamily: 'Joan', fontWeight: '400', wordWrap: 'break-word'"><br/></span></div>
        </div>
        <div style={{width: 741, height: 631, position: 'relative'}}>
            <div style={{width: 650, height: 355, left: 30, top: 180, position: 'absolute', textAlign: 'center'}}><span style="color: 'black', fontSize: 16, fontFamily: 'Joan', fontWeight: '400', wordWrap: 'break-word'"><br/><br/></span><span style="color: 'black', fontSize: 24, fontFamily: 'Joan', fontWeight: '400', wordWrap: 'break-word'">HarmoniHealth offers a safe, secure space where all individuals can share their stories and emotions freely– learning from one another and finding comfort in knowing they’re not alone. This inclusive community provides warmth, empathy, and companionship to everyone– allowing them to take care of themselves and their mental health with the help of others.<br/></span><span style="color: 'black', fontSize: 16, fontFamily: 'Joan', fontWeight: '400', wordWrap: 'break-word'"><br/></span></div>
            <div style={{width: 134, height: 62, paddingTop: 10, paddingBottom: 13, paddingLeft: 10, paddingRight: 10, left: 288, top: 569, position: 'absolute', background: '#F1C6D7', borderRadius: 6, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                <div style={{textAlign: 'center', color: 'black', fontSize: 30, fontFamily: 'Inika', fontWeight: '400', wordWrap: 'break-word'}}>Register</div>
            </div>
            <div style={{width: 445, height: 31, left: 132, top: 498, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 32, fontFamily: 'Joan', fontWeight: '400', wordWrap: 'break-word'}}>Join our community today by signing up here</div>
            <div style={{width: 467, height: 118, left: 274, top: 50, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 30, fontFamily: 'Joan', fontWeight: '400', wordWrap: 'break-word'}}>A place to find companionship in a world riddled with isolation– where those in need find no solace unless they are ‘prescribed’ it. </div>
            <img style={{width: 263, height: 237, left: 0, top: 0, position: 'absolute'}} src="https://via.placeholder.com/263x237" />
        </div>
    </div>
    
}


export default homePage;