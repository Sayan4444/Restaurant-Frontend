export const calculateReviewRating = (reviews) => {
    if (!reviews.length) return 0;
    const sumRating = reviews.reduce((sum, review) => {
        return sum + review.rating
    }, 0)
    return (sumRating / reviews.length).toFixed(1);
}