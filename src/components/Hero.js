import image from '../assets/image.jpg'



export function Hero() {

return (
  
<div className="antialiased flex flex-col items-center justify-center max-w-2xl px-4 pt-16 mx-auto sm:max-w-xl md:max-w-2xl lg:pt-16 md:px-8">

  <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

        <div className = "sm:mx-[100px] hidden sm:block">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Crypto Today
            </p>

            <img        
                src={image}
                className="w-12 mx-auto max-w-xs"
                alt=""        
            />

        </div>

        <h2 className="max-w-lg mb-6 font-sans text-3xl font-extrabold leading-none tracking-tight text-slate-800 sm:text-6xl md:mx-auto">
            
            Today's Cryptocurrency Prices
        </h2>

        <p className="hidden sm:block text-base text-slate-600 md:text-lg font-mono">
          Keep track of your profits, losses and portfolio valuation with our easy-to-use App.
        </p>

  </div>
        
        
        
</div>

    );
  };