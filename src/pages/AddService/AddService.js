import React from 'react';
import useTitle from '../../hooks/useTitle';

const AddService = () => {
    useTitle('Add Service');
    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.serviceName.value;
        const image = form.image.value;
        const price = form.price.value;
        const discription = form.discription.value;


        const service = {
            name: name,
            image: image,
            price: price,
            discription: discription
        }

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    form.reset();
                    alert('Review placed succesfully')
                }
            })
            .catch(error => console.error(error));
    }
    return (
        <div>
            <h3 className='text-4xl text-accent font-bold text-center mt-16 mb-14'><u>Add Service</u></h3>
            <form onSubmit={handleAddService}>
                <div className='grid grid-cols-2 gap-x-20 gap-y-8 mx-16 mb-12'>
                    <input type="text" name='serviceName' placeholder="Service Name" className="input w-full bg-white text-black" />
                    <input type="text" name='image' placeholder="Service Image" className="input w-full bg-white text-black" />
                    <input type="text" name='price' placeholder="Price" className="input w-full bg-white text-black" />

                </div>
                <div className='text-center'>
                    <textarea name='discription' className="textarea textarea-success w-3/4 mx-16 h-44 text-black  bg-white" placeholder="Discription"></textarea>

                </div>
                <div className='text-center mt-6'>
                    <button className="btn btn-accent">Add</button>
                </div>

            </form>
        </div>
    );
};

export default AddService;