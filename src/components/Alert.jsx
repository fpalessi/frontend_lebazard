/* eslint-disable react/prop-types */
const Alert = ({ alert }) => {
  return (
    <div
      className={`${
        alert.error ? "from-red-400 to-red-600" : "from-green-400 to-green-600"
      } bg-gradient-to-br text-center px-3 py-1.5 rounded-xl uppercase text-white font-semibold text-sm my-4`}
    >
      {alert.msg}
    </div>
  );
};

export default Alert;
