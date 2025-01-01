interface TestimonialCardProps {
    name: string;
    role: string;
    testimonial: string;
    image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, testimonial, image }) => {
    return (
        <div className="p-6 border rounded-xl shadow-md bg-white">
            <img src={image} alt={name} className="h-20 w-20 rounded-full mx-auto mb-4"/>
            <p className="italic text-lg mb-4">"{testimonial}"</p>
            <h3 className="font-semibold text-xl">{name}</h3>
            <p className="text-gray-500">{role}</p>
        </div>
    );
};

export default TestimonialCard;
