"use client";
import { useRouter } from "next/dist/client/components/navigation";

export default function OrderProduct() {
    const router = useRouter();
   const handleClick = () => {
       console.log("Order placed successfully!");
       router.push("/");
   };
    return (
        <>
            <h1>Order Product Page</h1>
            <button onClick={handleClick}>Place Order</button>
        </>
    );
    }