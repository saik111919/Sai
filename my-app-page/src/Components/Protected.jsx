import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";

function Protect(props) {
  const { CMP } = props;
  // const isadmin = props.isadmin;
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const handleLoading = () => {
    setIsLoading(false);
  };

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (props.protected === true && token) {
    } else {
      navigate("/login");
    }
  }, [props, navigate, token]);

  useEffect(() => {
    window.addEventListener("load", handleLoading);
    setIsLoading(!isLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, []);
  return !isLoading ? <CMP /> : <Loader status={isLoading} />;
}

export default Protect;
