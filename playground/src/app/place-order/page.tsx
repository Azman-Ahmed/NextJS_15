"use client";
import { useRouter } from "next/navigation";

const page = () => {
    const router = useRouter();
    const handleClick = () => {
        console.log("Order Confirmed");
        router.push("/")
    };

    return (
        <div>
        <button onClick={handleClick}>Place Order</button>
        </div>
    );
};

export default page;
