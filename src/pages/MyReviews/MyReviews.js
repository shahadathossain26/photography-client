import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import MyReviewCard from './MyReviewCard';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [user?.email])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete this review?');
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        // <div className="toast toast-top toast-end">
                        //     <div className="alert alert-success">
                        //         <div>
                        //             <span>Message sent successfully.</span>
                        //         </div>
                        //     </div>
                        // </div>
                        alert('Deleted Succesfully')
                        const remaining = myReviews.filter(myReview => myReview._id !== id);
                        setMyReviews(remaining);
                    }
                })
        }
    }

    return (
        <div>
            {myReviews.length === 0 ?
                <div>
                    <h2 className='text-4xl font-bold text-white text-center mt-20'>No Reviews were added</h2>
                </div>
                :
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Name</th>
                                <th>Discription</th>
                                <th>Favorite Color</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                myReviews.map(myReview => <MyReviewCard
                                    key={myReview._id}
                                    myReview={myReview}
                                    handleDelete={handleDelete}
                                ></MyReviewCard>)
                            }

                        </tbody>



                    </table>
                </div>
            }

        </div>
    );
};

export default MyReviews;