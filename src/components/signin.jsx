import { useState } from "react";
import { TextField, Button, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup";
import backgroundSvg from "../assets/background.svg";
import zenergyLogo from "../assets/zenergylogo.png";
import userAvatar from "../assets/user.svg";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const SigninComponent = () => {
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Sign in:", values);
    },
  });

  return (
    <div className="flex flex-col md:flex-row h-screen w-full">
      <div
        className="hidden md:flex md:w-1/2 h-full items-center justify-center relative bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundSvg})` }}
      >
        <div className="p-4 lg:p-6 max-w-sm lg:max-w-md rounded-2xl border border-neutral-700 bg-neutral-950 mx-4">
          <div className="flex items-center gap-3 mb-4">
            <img
              src={userAvatar}
              alt="User Avatar"
              className="w-8 h-8 lg:w-10 lg:h-10 rounded-full"
            />
            <div>
              <p className="text-white font-medium text-xs lg:text-sm">Jason Zhou (AI Jason)</p>
              <p className="text-gray-400 text-xs">@jasonzhou1993</p>
            </div>
          </div>
          <p className="text-gray-300 text-xs lg:text-sm leading-relaxed">
            Vulputate leo amet sapien augue consequat morbi nunc amet consequat. Pellentesque lorem curabitur at pharetra. Diam mattis mauris tellus orci gravida sociis turpis risus. Orci nisi posuere purus porta. A at amet venenatis tortor mauris accumsan. Tortor semper facilisi ipsum quis egestas libero nunc tortor.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 min-h-screen md:h-full flex items-center justify-center bg-neutral-950 px-4 sm:px-6 lg:px-8 py-8 md:py-0">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <img
              src={zenergyLogo}
              alt="Zenergy Sun Valley"
              className="h-8 sm:h-10"
            />
          </div>
          <h1 className="text-white text-xl sm:text-2xl lg:text-3xl font-semibold mb-2">Welcome back!</h1>
          <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">Please enter your details below</p>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-300 text-sm mb-2">Email Address</label>
              <TextField
                fullWidth
                type="email"
                name="email"
                placeholder="Enter Email Address"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                variant="outlined"
                size="small"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "9999px",
                  },
                }}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 text-sm mb-2">Password</label>
              <TextField
                fullWidth
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
                variant="outlined"
                size="small"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "9999px",
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                        sx={{ color: "#9ca3af" }}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div className="text-right mb-6">
              <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                Forgot Password?
              </a>
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: "#fff",
                color: "#000",
                py: 1.5,
                fontWeight: 500,
                borderRadius: "9999px",
                "&:hover": {
                  backgroundColor: "#e5e5e5",
                },
              }}
            >
              Sign In
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SigninComponent;
