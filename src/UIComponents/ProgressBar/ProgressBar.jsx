const LinearProgress = ({ progress = 60 }) => {
    return (
      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
        <div 
          className="h-full bg-blue-500 transition-all duration-300" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    );
  };

  export default LinearProgress