interface FeatureCardProps {
    title: string;
    description: string;
    icon: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
    return (
        <div className="p-6 border rounded-xl shadow-lg text-center hover:shadow-xl transition duration-300 ease-in-out">
            <img src={icon} alt={title} className="w-16 h-16 mx-auto mb-4"/>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default FeatureCard;
