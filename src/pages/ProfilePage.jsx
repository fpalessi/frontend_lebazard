import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const ProfilePage = () => {
  const { setJwt, token } = useAuth();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const decodeToken = (token) => {
    try {
      const decoded = jwtDecode(token);
      const emailAddress =
        decoded?.[
          "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"
        ];
      const userName =
        decoded?.["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];
      const streetAddress =
        decoded?.[
          "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/streetaddress"
        ];
      const mobilePhone =
        decoded?.[
          "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/mobilephone"
        ];
      const locality =
        decoded?.[
          "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/locality"
        ];
      const rol =
        decoded?.[
          "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
        ];
      setEmail(emailAddress);
      setName(userName);
      setAddress(streetAddress);
      setPhone(mobilePhone);
      setCity(locality);
      setRole(rol);
    } catch (error) {
      alert("Something went wrong. Try again");
    }
  };

  const handleLogout = () => {
    setJwt();
    navigate("/access");
  };

  useEffect(() => {
    if (token) {
      decodeToken(token);
    } else {
      navigate("/");
    }
  }, [token, navigate]);

  useEffect(() => {
    if (role == "admin") {
      navigate("/admin");
    } else if (role == "User") {
      navigate("/profile");
    }
  }, [role, navigate]);

  return (
    <section className="bg-gray-50 p-10 ">
      <div className="w-full lg:w-4/12 px-4 mx-auto">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
          <div className="px-6">
            <button
              onClick={handleLogout}
              className="flex flex-row gap-2 p-2 m-2 "
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H15M8 8L4 12M4 12L8 16M4 12L16 12"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>Logout</p>{" "}
            </button>
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4 flex justify-center">
                <div className="relative">
                  <svg
                    width="150"
                    height="150"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.4"
                      d="M12.1207 12.78C12.0507 12.77 11.9607 12.77 11.8807 12.78C10.1207 12.72 8.7207 11.28 8.7207 9.50998C8.7207 7.69998 10.1807 6.22998 12.0007 6.22998C13.8107 6.22998 15.2807 7.69998 15.2807 9.50998C15.2707 11.28 13.8807 12.72 12.1207 12.78Z"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      opacity="0.34"
                      d="M18.7398 19.3801C16.9598 21.0101 14.5998 22.0001 11.9998 22.0001C9.39977 22.0001 7.03977 21.0101 5.25977 19.3801C5.35977 18.4401 5.95977 17.5201 7.02977 16.8001C9.76977 14.9801 14.2498 14.9801 16.9698 16.8001C18.0398 17.5201 18.6398 18.4401 18.7398 19.3801Z"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="text-center m-20">
              <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700">
                Nombre - {name}
              </h3>
              <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                Ciudad - {city}
              </div>
              <div className="mb-2 text-blueGray-600">
                Phone number - {phone}
              </div>
              <div className="mb-2 text-blueGray-600">Address - {address}</div>
              <div className="mb-2 text-blueGray-600">Email - {email}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
