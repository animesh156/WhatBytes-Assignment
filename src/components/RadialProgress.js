/* eslint-disable @next/next/no-img-element */
export default function RadialProgress() {
  const progress = 60; // Dynamic progress value

  return (
    <div className="relative w-20  m-auto mt-6  ">
      {" "}
      {/* Adjusted size */}
      {/* Background (Gray for remaining 30%) */}
      <div
        className="radial-progress text-gray-300 absolute top-0 left-0"
        style={{ "--value": 100, "--thickness": "18px", "--size": "8rem" }} // Adjusted thickness
        role="progressbar"
      ></div>
      {/* Foreground (Blue for covered 70%) */}
      <div
        className="radial-progress rotate-210 rounded-none  text-blue-500 absolute top-0 left-0"
        style={{
          "--value": progress,
          "--thickness": "18px",
          "--size": "8rem",
        }}
        aria-valuenow={progress}
        role="progressbar"
      >
        <img src="./dart.svg" alt="dart_svg" className="w-6 rotate-150" />
      </div>
    </div>
  );
}
