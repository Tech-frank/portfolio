export default function Contact(){
    return (
        <>
            <div className="mx-auto mt-[15%] p-[3%]">
  <h1 className="text-3xl font-bold text-center">Get In Touch</h1>

  {/* Responsive grid */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-8 max-w-3xl mx-auto">
    <div className="rounded-lg shadow-md p-4 flex justify-center">
      <a href="mailto:franklynetu80@gmail.com">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"
          />
        </svg>
      </a>
    </div>

    <div className="rounded-lg shadow-md p-4 flex justify-center">
      <a href="tel:+2348143597162">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m21 15.46l-5.27-.61l-2.52 2.52a15.05 15.05 0 0 1-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97z"
          />
        </svg>
      </a>
    </div>

    <div className="rounded-lg shadow-md p-4 flex justify-center">
      <a href="http://example.com">
        {/* GitHub */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
        >
          <g fill="none">
            <g clipPath="url(#SVGXv8lpc2Y)">
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12"
                clipRule="evenodd"
              />
            </g>
            <defs>
              <clipPath id="SVGXv8lpc2Y">
                <path fill="#fff" d="M0 0h24v24H0z" />
              </clipPath>
            </defs>
          </g>
        </svg>
      </a>
    </div>

    <div className="rounded-lg shadow-md p-4 flex justify-center">
      <a href="http://example.com">
        {/* X/Twitter */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 14 14"
        >
          <g fill="none">
            <g clipPath="url(#SVGG1Ot4cAD)">
              <path
                fill="currentColor"
                d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z"
              />
            </g>
            <defs>
              <clipPath id="SVGG1Ot4cAD">
                <path fill="#fff" d="M0 0h14v14H0z" />
              </clipPath>
            </defs>
          </g>
        </svg>
      </a>
    </div>

    <div className="rounded-lg shadow-md p-4 flex justify-center">
      <a href="http://example.com">
        {/* LinkedIn */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M18.72 4H5.37A1.31 1.31 0 0 0 4 5.25v13.38A1.41 1.41 0 0 0 5.37 20h13.35A1.34 1.34 0 0 0 20 18.63V5.25A1.23 1.23 0 0 0 18.72 4M9 17.34H6.67v-7.13H9ZM7.89 9.13A1.18 1.18 0 0 1 6.67 7.9a1.18 1.18 0 0 1 1.24-1.23A1.18 1.18 0 0 1 9.13 7.9a1.18 1.18 0 0 1-1.24 1.23m9.45 8.21H15v-3.9c0-.93-.33-1.57-1.16-1.57a1.25 1.25 0 0 0-1.17.84a1.4 1.4 0 0 0-.08.57v4.06h-2.3v-7.13h2.3v1a2.32 2.32 0 0 1 2.1-1.21c1.51 0 2.65 1 2.65 3.13Z"
          />
        </svg>
      </a>
    </div>
  </div>
</div>

        </>
    )
}