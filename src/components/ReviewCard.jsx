import { star } from "../assets/icons";

const ReviewCard = ({imgURL,customerName,rating,feedback}) => {

    return (
        <div className="flex justify-center items-center flex-col">
            <img 
            src={imgURL} 
            alt={customerName} 
            className="rounded-full object-cover w-[120px] h-[120px]"
            />

           
           <p className="info-text m-auto mt-4 max-w-md text-center">
            {feedback}
            </p>

            <h1 className="font-bold mt-2 text-3xl">
                {customerName}
            </h1>

            <div className="flex gap-2 items-center">
            <img src={star} alt="rating" width={24} height={24} />

            <h3 className="info-text m-auto mt-2 max-w-lg text-center">
                ({rating})
            </h3>
            </div>

        </div>
    );
};

export default ReviewCard;
