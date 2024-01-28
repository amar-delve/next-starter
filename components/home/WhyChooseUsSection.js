import React from 'react';
import CustomButton from '../extra/CustomButton';

export default function WhyChooseUsSection() {
    return (
        <div className="w-11/12 mx-auto py-16 flex flex-col md:flex-row ">
            <div className="md:w-1/2 order-2 md:order-1">
                <img
                    src="/images/aboutsection.jpg"
                    alt="Why Choose Us"
                    className="w-full h-auto md:max-w-lg  rounded-md shadow-md"
                />
            </div>
            <div className="md:w-1/2 order-1 md:order-2 dark:text-white">
                <h2 class="text-2xl font-semibold mb-4 leading-8 relative before:content-[' '] before:-bottom-1 before:h-[0.10rem] before:w-20 before:bg-[#1b5df3] before:absolute undefined">
                    Why Choose Us</h2>
                <p className="text-lg mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac purus sit amet nisl sagittis convallis.
                    Integer vel libero euismod, condimentum arcu vel, imperdiet nisi.
                </p>
                <p className="text-lg mb-6">
                    Nunc laoreet metus eu mauris varius, id fringilla urna mattis. Vestibulum convallis justo in nunc cursus,
                    vel tristique nulla cursus.
                </p>
                <p className="text-lg mb-6">
                    Proin sodales libero non purus commodo, sit amet volutpat justo scelerisque. Vestibulum ante ipsum primis
                    in faucibus orci luctus et ultrices posuere cubilia Curae.
                </p>
                <p className="text-lg mb-6">
                    Proin sodales libero non purus commodo, sit amet volutpat justo scelerisque. Vestibulum ante ipsum primis
                    in faucibus orci luctus et ultrices posuere cubilia Curae.
                </p>
                <p className="text-lg mb-6">
                    Proin sodales libero non purus commodo, sit amet volutpat justo scelerisque. Vestibulum ante ipsum primis
                    in faucibus orci luctus et ultrices posuere cubilia Curae.
                </p>
                <CustomButton title="Know More" bgColor="blue-500" />
            </div>
        </div>
    );
}
