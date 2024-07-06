import { Button, Spinner, Typography } from "@material-tailwind/react";
import { Box, Modal } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-scroll";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const style = {
  position: "absolute",
  height: "max-content",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "max-content",
  bgcolor: "background.paper",
  border: "",
  boxShadow: 24,
  p: 4,
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  backgroundImage: 'url("/money-bg.png")',
  backgroundSize: "cover",
  overflow: "hidden",

  "@media (max-width: 768px)": {
    width: "100%",
    maxWidth: "100%",
    height: "100vh",
    padding: "0",
    borderRadius: "0",
    gap: "0",
  },
};

const Hero = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const submitReferal = async (e) => {
    e.preventDefault();
    setLoading(true);
    const request = {
      name: name,
      email: email,
      referralCode: "7XU4GR",
    };
    try {
      const resp = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/referrals`,
        request
      );
      if (resp.status === 201) {
        setLoading(false);
        handleClose();
        toast.success(resp.data.message);
      }
    } catch (err) {
      setLoading(false);
      toast.error(err.response.data.error);
      console.error("Failed to create referral. " + err.response.data.error);
      console.error(err);
    }
  };

  return (
    <>
      <div className="h-screen flex flex-col gap-4 items-center justify-center px-3 md:px-0">
        <div className="text-xs md:text-base px-3 py-1 font-gray-700 border border-primaryColor rounded-full bg-blue-50 flex gap-2 items-center justify-center flex md:justify-center">
          <span className="text-primaryColor text-center">•</span>
          <p className="text-start">
            Navigate your ideal career path with tailored expert advice{" "}
            <a href="" className="text-primaryColor ms-1 md:ms-2">
              Contact Expert
            </a>
          </p>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
          Unlock dream <span className="text-primaryColor">career</span> with
          your dream universities
        </h1>
        <p className="text-sm md:text-med text-blue-gray-700">
          Refer friends and earn amazing rewards while helping them achieve
          their dreams.
        </p>
        <div className="buttons flex items-center justify-center gap-3 md:pt-3">
          <Button
            variant="text"
            size="md"
            className="normal-case text-xs md:text-lg p-3 md:p-inherit"
          >
            <Link
              to="howRefer"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Know how it works?
            </Link>
          </Button>

          <Button
            size="md"
            className="bg-primaryColor normal-case text-xs md:text-lg p-3 md:px-4"
            onClick={handleOpen}
          >
            Refer & earn
          </Button>
        </div>
      </div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="top flex justify-end items-center px-3 pt-4 md:px-0 md:pt-0 cursor-pointer">
              <div
                className="border border-3 border-black px-2 py-1 rounded-full w-max flex items-center bg-white gap-1 hover:shadow-md"
                onClick={handleClose}
              >
                <p className="text-base font-medium text-xs md:text-base text-center relative md:bottom-0.5">
                  close
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0 0 50 50"
                >
                  <path d="M25,2C12.319,2,2,12.319,2,25s10.319,23,23,23s23-10.319,23-23S37.681,2,25,2z M33.71,32.29c0.39,0.39,0.39,1.03,0,1.42	C33.51,33.9,33.26,34,33,34s-0.51-0.1-0.71-0.29L25,26.42l-7.29,7.29C17.51,33.9,17.26,34,17,34s-0.51-0.1-0.71-0.29	c-0.39-0.39-0.39-1.03,0-1.42L23.58,25l-7.29-7.29c-0.39-0.39-0.39-1.03,0-1.42c0.39-0.39,1.03-0.39,1.42,0L25,23.58l7.29-7.29	c0.39-0.39,1.03-0.39,1.42,0c0.39,0.39,0.39,1.03,0,1.42L26.42,25L33.71,32.29z"></path>
                </svg>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-0 md:gap-3">
              <div className="w-full md:w-1/2 p-3 md:p-inherit">
                <Typography id="modal-modal-title" variant="h1" component="h2">
                  Let's learn and earn
                </Typography>
                <Typography variant="h4" className="text-md">
                  Get a chance to win up-to{" "}
                  <span className="text-primaryColor">₹15000</span>
                </Typography>
                <form
                  method="post"
                  className="flex flex-col gap-3"
                  onSubmit={submitReferal}
                >
                  <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="bg-blue-50 p-2 rounded-md border text-sm ring-inset focus:ring-1"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="bg-blue-50 p-2 rounded-md border text-sm ring-inset focus:ring-1"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="code" className="text-sm font-medium">
                      Referral code
                    </label>
                    <input
                      type="text"
                      placeholder="7XU4GR"
                      readOnly
                      className="bg-blue-50 p-2 rounded-md border placeholder:text-blue-gray-500 text-sm"
                    />
                  </div>
                  <Button
                    className="bg-primaryColor text-md normal-case font-medium w-max flex gap-2 items-center"
                    size="sm"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        Sending referral...{" "}
                        <Spinner color="light-blue" className="h-5 w-5" />
                      </>
                    ) : (
                      <>Send referral</>
                    )}
                  </Button>
                </form>
              </div>
              <div className="w-full md:w-1/2">
                <img
                  className="h-96 w-full object-cover object-center relative top-0 md:top-24"
                  src="/refer-banner.png"
                  alt="nature image"
                />
              </div>
            </div>
          </Box>
        </Modal>
      </div>
      <ToastContainer />
    </>
  );
};

export default Hero;
