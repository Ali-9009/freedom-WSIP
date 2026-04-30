import Button from "../PrimaryBtn";

export default function ({ isOpen, onClose, plan }) {
    if (!isOpen || !plan) return null;

    return (
        <div
            className="fixed inset-0 bg-black/20 flex items-center justify-center z-50 px-4"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-2xl w-full max-w-2xl p-6"
                onClick={(e) => e.stopPropagation()}
            >
                {/* TOP */}
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center justify-start space-x-4">
                        <div>
                            <img
                                src={plan.img}
                                alt={plan.title}
                                className="w-20 h-20 object-cover rounded-lg"
                            />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">{plan.title}</h2>
                            <p className="text-left text-gray-500">Unlimited</p>
                        </div>
                    </div>
                    

                    <h2 className="text-2xl font-bold text-green-600">
                        {plan.price}
                    </h2>
                </div>

                {/* DESC */}
                <p className="text-gray-600 mb-6">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </p>

                {/* BTN */}
                <div className="flex justify-center">
                    <Button to="/step1" text="Choose plan"  />
                </div>
            </div>
        </div>
    );
}