import React from 'react';
import TestimonialSlider from './TestimonialSlider';
import Heading from '../extra/Heading';

const TestimonialSection = () => {
    const testimonials = [
        {
            id: 1,
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
            author: 'John Doe',
            position: 'CEO, Company Inc.',
            avatar: '/images/user-profile.png',
        },
        {
            id: 2,
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
            author: 'John Doe',
            position: 'CEO, Company Inc.',
            avatar: '/images/user-profile.png',
        },
    ];

    return (
        <section className="py-12">
            <div className="container mx-auto text-center">
                <Heading title="Testimonials" />
                <TestimonialSlider testimonials={testimonials} />
            </div>
        </section>
    );
};

export default TestimonialSection;
