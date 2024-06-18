import Button from "../components/Button";

const Subscribe = () => {
    return (
        <section className="flex max-lg:flex-col flex-row justify-between items-center " id="contact-us">
           <p className="text-4xl w-full text-center mt-6">
            Sign Up for <span className="text-coral-red"> Updates </span> & Newsletter
           </p>
        
           <div className="mt-10 flex w-full">
           <input type="text" placeholder="subscribe@nike.com"  className="p-4 mt-4 mb-4 border-2 border-slate-400 rounded-xl w-full lg:w-3/4 shadow-3xl shadow-cyan-500 bg-gradient-to-l from-blue-100 to-pink-100"/>

          
           </div>
        </section>
    );
};

export default Subscribe;