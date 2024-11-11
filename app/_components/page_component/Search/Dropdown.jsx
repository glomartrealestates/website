function Dropdown({ placeholder }) {
    return (
      <select className="flex-1 bg-transparent border border-gray-300 px-4 py-2 rounded-lg text-gray-700 outline-none focus:border-blue-500">
        <option>{placeholder}</option>
       
      </select>
    );
  }
  
  export default Dropdown;
  