import React from "react";
import { Redirect } from "react-router-dom";
import UserPool from "../userpool/UserPool";
import {
  Avatar,
  Button,
  Box,
  CssBaseline,
  Container,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Typography,
} from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createTheme();

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      currentUser: false,
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const {email, password, confirmPassword } = this.state;

    
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    else{
      UserPool.signUp(email, password, [], null, (err, data) => {
        if (err) {
          console.error(err);
        }
        console.log(data);
      });
    }
  
 

  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { email, password, confirmPassword, currentUser } =
      this.state;
    if (currentUser) {
      return <Redirect to="/workspace" />;
    }
    return (
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={this.handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
              
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={this.handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    value={password}
                    onChange={this.handleChange}
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="confirmPassword"
                    value={confirmPassword}
                    label="Confirm Password"
                    type="password"
                    id="confirmPassword"
                    onChange={this.handleChange}
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I agree to terms and conditions."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/login" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    );
  }
}
export default SignUp;