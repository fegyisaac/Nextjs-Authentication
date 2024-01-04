const UserInfo = () => {
  return (
    <div>
      <div className="bg-gray-100 flex flex-col items-center justify-center h-screen">
        <div className="max-w-[600px] bg-gray-300 p-8 shadow-lg">
          <div className="mb-3">
            NAME: <span>John</span>
          </div>
          <div className="mb-3">
            EMAIL: <span>fegy@gmail.com</span>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 mt-1 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            LogOut
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
