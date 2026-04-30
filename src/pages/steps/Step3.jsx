import StepLayout from "./StepLayout";
import { useState } from "react";
import { Calendar } from "lucide-react";
import Button from "../../components/PrimaryBtn";

export default function Step3() {
    const [simType, setSimType] = useState("esim");
    const [date, setDate] = useState("");

    const [card, setCard] = useState({
        number: "",
        cvv: "",
        exp: "",
    });

    const [billing, setBilling] = useState({
        address: "",
        city: "",
        zip: "",
        postal: "",
    });

    const [agree, setAgree] = useState(false);
    const [autoPay, setAutoPay] = useState(false);

    const handleCard = (e) =>
        setCard({ ...card, [e.target.name]: e.target.value });

    const handleBilling = (e) =>
        setBilling({ ...billing, [e.target.name]: e.target.value });

    // your reusable input (same style, kept here)
    const FormInput = ({
        label,
        name,
        value,
        onChange,
        placeholder,
        type = "text",
    }) => {
        return (
            <div className="flex flex-col gap-2 w-full">
                <label className="text-sm font-medium">{label}</label>
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder || label}
                    className="bg-gray-100 p-3 rounded-md w-full outline-none"
                />
            </div>
        );
    };

    return (
        <StepLayout title="Finish Checkout" step={3}>
            <div className="grid lg:grid-cols-12 gap-6">

                {/* LEFT SIDE */}
                <div className="space-y-8 col-span-7">

                    {/* TOP INFO */}
                    <div className="border border-gray-300 rounded-lg shadow-sm p-6">
                        <h2 className="text-2xl font-bold text-(--primary-color)">
                            Great News!
                        </h2>

                        <p className="text-gray-600 mt-2">
                            Your Device is <b>eSIM Compatible</b>
                        </p>

                        {/* DATE */}
                        <div className="mt-5 relative">
                            <label className="text-sm font-medium">
                                Choose start date
                            </label>

                            <input
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="w-full mt-2 border border-gray-300 rounded-md p-3 pl-10"
                            />

                            <Calendar className="absolute left-3 top-12 text-gray-500" size={18} />
                        </div>

                        {/* SIM TYPE */}
                        <div className="mt-6 space-y-3">
                            {[
                                {
                                    id: "esim",
                                    title: "eSIM Compatible",
                                    desc: "Digital delivery",
                                },
                                {
                                    id: "physical",
                                    title: "Physical SIM",
                                    desc: "Shipped to your door",
                                },
                                {
                                    id: "own",
                                    title: "I have SIM card",
                                    desc: "Use existing SIM",
                                },
                            ].map((item) => (
                                <label
                                    key={item.id}
                                    className={`flex gap-3 p-4 rounded-xl border border-gray-300 cursor-pointer transition
                                    ${simType === item.id
                                            ? "border-(--primary-color) bg-gray-50"
                                            : "hover:border-gray-400"
                                        }`}
                                >
                                    <input
                                        type="radio"
                                        checked={simType === item.id}
                                        onChange={() => setSimType(item.id)}
                                        className="mt-1"
                                    />

                                    <div>
                                        <p className="font-semibold">{item.title}</p>
                                        <p className="text-sm text-gray-500">{item.desc}</p>
                                    </div>
                                </label>
                            ))}
                        </div>

                        {/* SIM INPUT */}
                        {simType === "own" && (
                            <div className="mt-4">
                                <FormInput
                                    label="SIM Card Number"
                                    name="sim"
                                    value=""
                                    onChange={() => { }}
                                />
                            </div>
                        )}
                    </div>

                    {/* CARD */}
                    <div className="border border-gray-300 rounded-lg shadow-sm p-6">
                        <h3 className="text-xl font-bold mb-4">
                            Card Information
                        </h3>

                        <div className="space-y-4">
                            <FormInput
                                label="Card Number"
                                name="number"
                                value={card.number}
                                onChange={handleCard}
                            />

                            <div className="grid grid-cols-2 gap-4">
                                <FormInput
                                    label="CVV"
                                    name="cvv"
                                    value={card.cvv}
                                    onChange={handleCard}
                                />

                                <FormInput
                                    label="Exp Date"
                                    name="exp"
                                    value={card.exp}
                                    onChange={handleCard}
                                    placeholder="MM/YY"
                                />
                            </div>
                        </div>
                    </div>

                    {/* BILLING */}
                    <div className="border border-gray-300 rounded-lg shadow-sm p-6">
                        <h3 className="text-xl font-bold mb-4">
                            Billing Information
                        </h3>

                        <div className="space-y-4">
                            <FormInput
                                label="Address"
                                name="address"
                                value={billing.address}
                                onChange={handleBilling}
                            />

                            <div className="grid grid-cols-3 gap-4">
                                <FormInput label="City" name="city" value={billing.city} onChange={handleBilling} />
                                <FormInput label="Zip" name="zip" value={billing.zip} onChange={handleBilling} />
                                <FormInput label="Postal" name="postal" value={billing.postal} onChange={handleBilling} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE - SUMMARY (CLEANED + MODERN) */}
                {/* RIGHT SIDE - SUMMARY */}
                <div className="col-span-5">
                    <div className="sticky top-24">

                        <div className="border border-gray-300 rounded-lg p-6 shadow-sm bg-white">

                            <h3 className="text-2xl font-bold mb-5">
                                Order Summary
                            </h3>

                            {/* PLAN */}
                            <div className="flex gap-3 border-b border-gray-300 pb-4 mb-4">
                                <img src="/assets/plan-img.png" className="w-10 h-10" />
                                <div>
                                    <p className="font-bold">$45 Premium Plan</p>
                                    <p className="text-sm text-gray-500">
                                        3 Month Plan
                                    </p>
                                </div>
                            </div>

                            {/* INFO BOX */}
                            <div className="bg-gray-50 p-3 rounded-lg text-sm space-y-1 mb-4">
                                <p className="font-semibold">Contact Info</p>
                                <p className="text-gray-600">Carlos Fonte</p>
                                <p className="text-gray-600">+92 000 000000</p>
                                <p className="text-gray-600">carlos@email.com</p>
                            </div>

                            {/* PRICE */}
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span>$135</span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Discount</span>
                                    <span className="text-green-600">-30%</span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Tax</span>
                                    <span>$3.19</span>
                                </div>
                            </div>

                            <div className="border-t border-gray-300 my-4 pt-4 flex justify-between font-bold text-lg">
                                <span>Total</span>
                                <span className="text-(--primary-color)">$40</span>
                            </div>

                            {/* CHECKBOX */}
                            <div className="space-y-3 text-sm mb-4">
                                <label className="flex gap-2 items-center">
                                    <input type="checkbox" />
                                    Enable Auto Pay
                                </label>

                                <label className="flex gap-2 items-center">
                                    <input type="checkbox" />
                                    I agree to Terms & Conditions
                                </label>
                            </div>

                            {/* BUTTON */}
                            <Button text="Confirm Purchase & Activate SIM" to="/receipt" />

                        </div>

                    </div>
                </div>
            </div>
        </StepLayout>
    );
}