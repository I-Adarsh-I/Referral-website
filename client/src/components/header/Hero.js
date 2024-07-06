import { Button, Typography } from "@material-tailwind/react";
import { Box, Modal } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const style = {
  position: "absolute",
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
  gap: "12px",
};

const Hero = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState(''); 
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const submitReferal = async(e) => {
    e.preventDefault();
    const request = {
      name: name,
      email: email,
      referralCode: '7XU4GR'
    }
    try {
      const resp = await axios.post(`${process.env.REACT_APP_BASE_URL}/referrals`, request);
      if(resp.status === 201){
        handleClose();
        toast.success(resp.data.message);
      }
    } catch (err) {
      toast.error(err.response.data.message);
      console.error('Failed to create referral. ' + err.response.data.message);
    }
  }

  return (
    <>
      <div className="flex flex-col gap-4 items-center justify-center">
        <div className="text-base px-3 py-1 font-gray-700 border border-primaryColor rounded-full bg-blue-50 flex gap-2 items-center justify-center">
          <span className="text-primaryColor">•</span>
          <p className="">
            Navigate your ideal career path with tailored expert advice{" "}
          </p>
          <a href="" className="text-primaryColor ms-2">
            Contact Expert
          </a>
        </div>
        <h1 className="text-6xl font-bold">
          Unlock dream <span className="text-primaryColor">career</span> with
          your dream universities
        </h1>
        <p className="text-med text-blue-gray-700">
          Refer friends and earn amazing rewards while helping them achieve
          their dreams.
        </p>
        <div className="buttons flex items-center justify-center gap-3">
          <Button variant="text" size="md" className="normal-case text-md">
            Know how it works?
          </Button>
          <Button
            size="md"
            className="bg-primaryColor normal-case text-md"
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
            <div className="w-1/2 flex flex-col gap-5">
              <div className="">
                <Typography id="modal-modal-title" variant="h2" component="h2">
                  Let's learn and earn
                </Typography>
                <Typography variant="h5" className="text-md">
                  Get a chance to win up-to{" "}
                  <span className="text-primaryColor">₹15000</span>
                </Typography>
              </div>
              <form method="post" className="flex flex-col gap-3" onSubmit={submitReferal}>
                <div className="flex flex-col gap-1">
                  <label htmlFor="name" className="text-sm">
                    Full name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-100 p-2 rounded-md border text-sm ring-inset focus:ring-1"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="email" className="text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="bg-gray-100 p-2 rounded-md border text-sm ring-inset focus:ring-1"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="code" className="text-sm">
                    Referal code
                  </label>
                  <input
                    type="text"
                    placeholder='7XU4GR'
                    readOnly
                    className="bg-gray-100 p-2 rounded-md border placeholder:text-blue-gray-500 text-sm"
                  />
                </div>
                <Button
                  className="bg-primaryColor text-md normal-case font-medium w-max "
                  size="sm"
                  type="submit"
                >
                  Start referring
                </Button>
              </form>
            </div>
            <div className="">
              <img
                className="h-96 w-full object-cover object-center relative top-12"
                src="/refer-banner.png"
                alt="nature image"
              />
            </div>
          </Box>
        </Modal>
      </div>
      <ToastContainer />
    </>
  );
};

export default Hero;
