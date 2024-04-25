const RegistrationDashboard = () => {
  return (
    <div className="flex gap-20 justify-center bg-[#8825a7]">
      <div className="flex flex-col flex-wrap justify-center items-center gap-10 border w-[40%] my-10 rounded-lg text-white">
        <h1 className="text-3xl font-semibold">loreemmmm</h1>
        <p>
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </p>
        <button>Register</button>
      </div>

      <div className="flex flex-col flex-wrap justify-center items-center gap-10 border w-[40%] my-10 rounded-lg text-white">
        <h1 className="text-3xl font-semibold">loreemmmm</h1>
        <div>
          <label for="id">ID:</label>
          <input type="text" placeholder="Enter your ID" className="border" />
        </div>
        <button>View</button>
      </div>
    </div>
  );
};

export default RegistrationDashboard;
