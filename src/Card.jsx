export default function Card({className}) {
    return (
        <div className={'bg-skin-fill text-skin-primary border-skin w-full py-10 rounded-skin ' + className}>
            <h1 className='text-2xl mb-3 px-10 font-serif'>
                Lorem
            </h1>
            <p className='text-sm px-10'>
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, <a className='underline' href="#">it's a link!</a> Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
            </p>
            <div className="relative w-full flex items-center justify-between">
                <img
                    className="p-5"
                    src="http://source.unsplash.com/random/800x600"
                    alt="lorem"
                />
                <div className="absolute flex w-full justify-between px-10">
                    <span className="w-10 h-10 bg-skin-controls-bg hover:bg-skin-controls-bg-hover text-skin-controls-text hover:text-skin-controls-text-hover cursor-pointer text-4xl rounded-controls border-skin-controls border-skin-controls-width p-2 ease-in-out duration-300 rotate-180">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">
                            <path 
                                d="m132.803 85.194-75-74.997a7.5 7.5 0 0 0-10.606 10.607l69.696 69.694-69.697 69.699a7.5 7.5 0 0 0 10.607 10.606l75-75.002a7.498 7.498 0 0 0 0-10.607Z" 
                                fill="currentColor" 
                            />
                        </svg>
                    </span>
                    <span className="w-10 h-10 bg-skin-controls-bg hover:bg-skin-controls-bg-hover text-skin-controls-text hover:text-skin-controls-text-hover cursor-pointer text-4xl rounded-controls border-skin-controls border-skin-controls-width p-2 ease-in-out duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">
                            <path 
                                d="m132.803 85.194-75-74.997a7.5 7.5 0 0 0-10.606 10.607l69.696 69.694-69.697 69.699a7.5 7.5 0 0 0 10.607 10.606l75-75.002a7.498 7.498 0 0 0 0-10.607Z" 
                                fill="currentColor" 
                            />
                        </svg>
                    </span>
                </div>
            </div>
            <p className='text-sm px-10'>
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, <a className='underline' href="#">it's a link!</a> Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
            </p>
            <hr className='my-8 border-skin-color border-b-skin-width border-t-0' />
            <div className='space-x-4 px-10'>
                <button className="rounded-button px-4 py-2 bg-skin-button-primary hover:bg-skin-button-primary-hover text-skin-button-primary hover:text-skin-button-primary-hover">
                    Senden
                </button>
                <button className="rounded-button text-skin-button-secondary hover:text-skin-button-secondary-hover bg-skin-button-secondary hover:bg-skin-button-secondary-hover px-4 py-2 border-skin">
                    Abbrechen
                </button>
            </div>
        </div>
    )
}
