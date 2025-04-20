const Review3 = () => {
  return (
    <div className="max-w-md mx-auto m-4 rounded-xl shadow-xl overflow-hidden bg-[#FDF9F5]">
      <div className="h-2 bg-gradient-to-r from-[#C8B088] to-[#9C7E4C]" />

      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-1 text-[#9C7E4C]">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                fill="#9C7E4C"
              >
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
            ))}
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              fill="none"
              stroke="#D8CFC0"
            >
              <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0z" />
            </svg>
          </div>

          <span className="text-xs px-3 py-1 rounded-full bg-[#F1ECE6] text-[#7A5E38] font-medium">
            3 hours ago
          </span>
        </div>

        <div className="border-t border-[#E8E2DA] pt-4">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#A08766] to-[#7A5E38] flex items-center justify-center text-white font-semibold mr-2">
              J
            </div>
            <h3 className="text-lg font-bold text-[#5B432B]">John Doe</h3>
          </div>

          <p className="pl-3 mt-1 text-[#6A5642] italic">
            The product exceeded all my expectations. The quality is outstanding
            and the customer service was exceptional.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review3;
