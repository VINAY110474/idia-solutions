import "./App.css";
import React, { useState } from "react";
import DiamondIcon from "@mui/icons-material/Diamond";
import IconButton from "@mui/material/IconButton";
// import { useHistory } from "react-router-dom"
import history from "./history";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
export default function RegistrationForm() {
  // let history = useHistory()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isEnable, setEnable] = useState(true);
  const [showPassword, setShowPassword] = React.useState(false);
  const [name, setName] = React.useState("Cat in the Hat");

  const handleChange = (event) => {
    setUsername(event.target.value);
  };
  const handleChangePWD = (event) => {
    setPassword(event.target.value);
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleKeyUp = () => {
    if (username.length > 0 && password.length > 0) setEnable(false);
    else setEnable(true);
  };
  const loginClick = () => {
    console.log("login button clicked");
    history.push("/expenses", "_self");
  };
  return (
    <div className="login-screen-wrapper">
      <div className="title-wrapper">
        <DiamondIcon sx={{ height: "60px", width: "60px" }} />
        <span className="primary-header">SINGLE STONE SOLUTIONS</span>
      </div>
      <div className="login-fields-wrapper">
        <h1>login</h1>
        <form action="">
          <div className="input container">
            <TextField
              size="small"
              fullWidth
              id="outlined-basic"
              label="user name"
              value={username}
              variant="outlined"
              onChange={handleChange}
            />
            <FormControl
              sx={{ margin: "16px 0" }}
              fullWidth
              variant="outlined"
              size="small"
              className="password-container"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                onChange={handleChangePWD}
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                value={password}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </div>
          <div className="sign-up-container">
            <Button variant="contained" type="submit" onClick={loginClick}>
              Sign In
            </Button>
            <span>forgot username/password</span>
          </div>
        </form>
      </div>
    </div>
  );
}
