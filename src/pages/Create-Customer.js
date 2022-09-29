import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createCustomer } from "../api/Customer";
import CustomerForm from "../components/Customer-Form";
import { XCircleFill } from "react-bootstrap-icons";

export default function CreateCustomer() {
	const [customer, setCustomer] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [alertShow, setAlertShow] = useState(false);

	const navigate = useNavigate();

	const handleChange = (e) => {
		const key = e.target.name;
		const value = e.target.value;

		setCustomer({
			...customer,
			[key]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		setIsLoading(true);

		setTimeout(async () => {
			const response = await createCustomer(customer);

			setIsLoading(false);

			if (response) {
				navigate("/customers", {
					state: {
						showAlert: true,
						for: "create",
					},
				});
			} else {
				showAlert();
			}
		}, 3000);
	};

	const handleCancel = () => {
		navigate("/customers");
	};

	const showAlert = () => {
		setAlertShow(true);

		setTimeout(() => {
			setAlertShow(false);
		}, 3000);
	};

	return (
		<div className="min-vh-100" style={{ padding: "20px" }}>
			<h3 className="mb-5">Create Customer</h3>
			{alertShow && (
				<div
					className="alert alert-danger d-flex align-items-center"
					role="alert"
				>
					<span>
						<XCircleFill size={16} /> Failed To Create
					</span>
				</div>
			)}
			<div className="container">
				<CustomerForm
					handleSubmit={handleSubmit}
					handleChange={handleChange}
					handleCancel={handleCancel}
					customer={customer}
					isLoading={isLoading}
				/>
			</div>
		</div>
	);
}
