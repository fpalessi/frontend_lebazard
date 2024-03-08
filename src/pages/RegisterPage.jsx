import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../components/Alert";
import Spinner from "../components/Spinner";
import useAuth from "../hooks/useAuth";

const RegisterPage = () => {
  const { token } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({});

  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [navigate, token]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([email, password, name, address, phoneNumber, city].includes("")) {
      setAlert({ msg: "Rellene los campos", error: true });
      return;
    }
    try {
      setLoading(true);
      setAlert({});
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/Auth/register`,
        {
          email,
          password,
          name,
          phoneNumber,
          address,
          city,
        }
      );
      setAlert({ msg: data.message, error: false });
    } catch (error) {
      setAlert({ msg: error.response.data, error: true });
    } finally {
      setLoading(false);
    }
  };
  const { msg } = alert;

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up with your details
          </h2>
        </div>
        {loading && <Spinner />}
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>{" "}
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Name
                </label>
              </div>
              <div className="mt-2">
                <input
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  id="name"
                  name="name"
                  type="name"
                  required
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Address
                </label>
              </div>
              <div className="mt-2">
                <input
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                  id="address"
                  name="address"
                  type="address"
                  required
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  City
                </label>
              </div>
              <div className="mt-2">
                <input
                  value={city}
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                  id="city"
                  name="city"
                  type="city"
                  required
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Mobile Phone
                </label>
              </div>
              <div className="mt-2">
                <input
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                  id="phoneNumber"
                  name="phoneNumber"
                  type="phoneNumber"
                  required
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-emerald-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
              >
                Sign up
              </button>
            </div>
          </form>
          <p className="mt-10 text-center text-sm text-gray-500">
            Already a member?{" "}
            <Link
              to="/access"
              className="font-semibold leading-6 text-emerald-600 hover:text-emerald-500"
            >
              Sign in
            </Link>
          </p>

          {msg && <Alert alert={alert} />}
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
