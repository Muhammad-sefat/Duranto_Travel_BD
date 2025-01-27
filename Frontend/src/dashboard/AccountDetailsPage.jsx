const AccountDetailsPage = () => (
  <div className="p-6 max-w-lg mx-auto bg-white border border-gray-200 rounded-lg shadow-md">
    <h2 className="text-xl font-semibold mb-4">Account Details</h2>
    <form>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="firstName">
          First Name *
        </label>
        <input
          id="firstName"
          type="text"
          className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="lastName">
          Last Name *
        </label>
        <input
          id="lastName"
          type="text"
          className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="displayName">
          Display Name *
        </label>
        <input
          id="displayName"
          type="text"
          className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="email">
          Email Address *
        </label>
        <input
          id="email"
          type="email"
          className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          Password Change
        </label>
        <input
          type="password"
          placeholder="Current Password"
          className="w-full border border-gray-300 rounded-lg p-2 mb-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <input
          type="password"
          placeholder="New Password"
          className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      >
        Save Changes
      </button>
    </form>
  </div>
);
export default AccountDetailsPage;
