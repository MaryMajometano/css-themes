export default function Card({className}) {
    return (
        <div className={'bg-skin-fill shadow-lg text-skin-primary border-skin w-1/3 py-10 rounded-md ' + className}>
            <h1 className='text-2xl mb-3 px-10 font-serif'>
                Lorem
            </h1>
            <p className='text-sm px-10'>
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, <a className='underline' href="#">it's a link!</a> Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
            </p>
            <hr className='my-8 border-skin' />
            <div className='space-x-4 px-10'>
                <button className="rounded-full px-4 py-2 bg-skin-button-primary hover:bg-skin-button-primary-hover text-skin-button-primary hover:text-skin-button-primary-hover">
                    Senden
                </button>
                <button className="rounded-full text-skin-button-secondary hover:text-skin-button-secondary-hover bg-skin-button-secondary hover:bg-skin-button-secondary-hover px-4 py-2 border-skin">
                    Abbrechen
                </button>
            </div>
        </div>
    )
}
