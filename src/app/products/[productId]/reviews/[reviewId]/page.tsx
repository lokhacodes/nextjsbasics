import { notFound, redirect } from 'next/navigation';
export default async function ProductReview ({
    params,
}:{
    params: Promise<{productId: string, reviewID: string }>;
}) {
    const {productId, reviewID} = await params;
    if (parseInt(reviewID)>1000) {
       // notFound();
       redirect ("/products");
    }
    return <h1>Review {reviewID} for Product {productId}</h1>
}