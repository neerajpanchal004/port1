export default function Mail() {
  return (
    <a
      href="mailto:neerajpanchal004@gmail.com"
      rel="noreferrer"
      target="_blank"
      className="bg-white dark:bg-gray-600 dark:shadow-gray-900 p-2 rounded-full shadow-xl group"
    >
      <svg
        className="fill-gray-800 dark:fill-white group-hover:fill-green dark:group-hover:fill-mustard"
        stroke="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        height="1.3em"
        width="1.3em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Email</title>
        <path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z"></path>
      </svg>
    </a>
  );
}
