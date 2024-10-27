import React, { useState } from 'react';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import Button from "@mui/material/Button";

const DPForm = () => {
    const [Text1, setText1] = useState('');
    const [Text2, setText2] = useState('');
    const [Text3, setText3] = useState('');
    const [Text4, setText4] = useState('');
    const [Text5, setText5] = useState('');
    const [Text6, setText6] = useState('');
    const [Text7, setText7] = useState('');
    const [Text8, setText8] = useState('');
    const [Text9, setText9] = useState('');
    const [Text10, setText10] = useState('');
    const [Text11, setText11] = useState('');
    const [Text12, setText12] = useState('');
  

      const handleSubmit = (e) => {
        const t= Text1+", "+Text2+", "+Text3+", "+Text4+", "+Text5+", "+Text6+", "+Text7+", "+Text8+", "
        +Text9+", "+Text10+", "+Text11+", "+Text12
        console.log(t
        )

      };

    return (
        <div>
            <Paper elevation={3} sx={{ marginRight: "15%", marginLeft: "15%" }}>
                <Box sx={{ padding: 5 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={10}>
                            <p className="text-amber-700">
                                What motivated you to start your journey here?
                            </p>
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Multiline"
                                value={Text1} 
                                onChange={(e) => setText1(e.target.value)}
                                fullWidth
                                multiline
                                maxRows={4}
                            />
                        </Grid>
                        <Grid item xs={12} sm={10}>
                            <p className="text-amber-700">
                            How has your mood affected your work, school, or personal relationships?
                            </p>
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Multiline"
                                value={Text2} 
                                onChange={(e) => setText2(e.target.value)}
                                fullWidth
                                multiline
                                maxRows={4}
                            />
                        </Grid>
                        <Grid item xs={12} sm={10}>
                            <p className="text-amber-700">
                            What are some talking points you’d feel comfortable sharing?
                            </p>
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Multiline"
                                value={Text3} 
                                onChange={(e) => setText3(e.target.value)}
                                fullWidth
                                multiline
                                maxRows={4}
                            />
                        </Grid>
                        <Grid item xs={12} sm={10}>
                            <p className="text-amber-700">
                            Would you prefer a professional as a companion or another individual?
                            </p>
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Multiline"
                                value={Text4} 
                                onChange={(e) => setText4(e.target.value)}
                                fullWidth
                                multiline
                                maxRows={4}
                            />
                        </Grid>
                        <Grid item xs={12} sm={10}>
                            <p className="text-amber-700">
                            How often do you experience these feelings?
                            </p>
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Multiline"
                                value={Text5} 
                                onChange={(e) => setText5(e.target.value)}
                                fullWidth
                                multiline
                                maxRows={4}
                            />
                        </Grid>
                        <Grid item xs={12} sm={10}>
                            <p className="text-amber-700">
                            How long have you been feeling this way?
                            </p>
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Multiline"
                                value={Text6} 
                                onChange={(e) => setText6(e.target.value)}
                                fullWidth
                                multiline
                                maxRows={4}
                            />
                        </Grid>
                        <Grid item xs={12} sm={10}>
                            <p className="text-amber-700">
                            What is the most important characteristic you are looking for in a companion?
                            </p>
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Multiline"
                                value={Text7} 
                                onChange={(e) => setText7(e.target.value)}
                                fullWidth
                                multiline
                                maxRows={4}
                            />
                        </Grid>
                        <Grid item xs={12} sm={10}>
                            <p className="text-amber-700">
                            Where are you in your life right now?
                            </p>
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Multiline"
                                value={Text8} 
                                onChange={(e) => setText8(e.target.value)}
                                fullWidth
                                multiline
                                maxRows={4}
                            />
                        </Grid>
                        <Grid item xs={12} sm={10}>
                            <p className="text-amber-700">
                            What does your ideal weekend look like?
                            </p>
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Multiline"
                                value={Text9} 
                                onChange={(e) => setText9(e.target.value)}
                                fullWidth
                                multiline
                                maxRows={4}
                            />
                        </Grid>
                        <Grid item xs={12} sm={10}>
                            <p className="text-amber-700">
                            Where do you want to see yourself in 10 years?
                            </p>
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Multiline"
                                value={Text10} 
                                onChange={(e) => setText10(e.target.value)}
                                fullWidth
                                multiline
                                maxRows={4}
                            />
                        </Grid>
                        <Grid item xs={12} sm={10}>
                            <p className="text-amber-700">
                            What support systems would you be interested in being involved in?
                            </p>
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Multiline"
                                value={Text11} 
                                onChange={(e) => setText11(e.target.value)}
                                fullWidth
                                multiline
                                maxRows={4}
                            />
                        </Grid>
                        <Grid item xs={12} sm={10}>
                            <p className="text-amber-700">
                            What support systems would you be interested in being involved in?
                            </p>
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Multiline"
                                value={Text12} 
                                onChange={(e) => setText12(e.target.value)}
                                fullWidth
                                multiline
                                maxRows={4}
                            />
                        </Grid>
                       
                        <Grid item xs={12} sm={4}>
                            <Button sx={{ color: "#ff781f" }} onClick={handleSubmit}>
                                Submit
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={5} />
                    </Grid>

                </Box>
            </Paper>
        </div>
    );
};

export default DPForm;