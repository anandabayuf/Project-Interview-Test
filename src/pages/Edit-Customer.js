import { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { editCustomer } from "../api/Customer";
import CustomerForm from "../components/Customer-Form";
import { XCircleFill } from "react-bootstrap-icons";

export default function EditCustomer() {
	const [customer, setCustomer] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [alertShow, setAlertShow] = useState(false);

	const navigate = useNavigate();
	const location = useLocation();
	const params = useParams();

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
			const response = await editCustomer(params.id, customer);

			setIsLoading(false);

			if (response) {
				navigate("/customers", {
					state: {
						showAlert: true,
						for: "edit",
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

	useEffect(() => {
		setCustomer(location.state.customer);
		console.log(location.state.customer);
		window.history.replaceState({}, document.title); // eslint-disable-next-line
	}, []);

	return (
		<div className="min-vh-100" style={{ padding: "20px" }}>
			<h3 className="mb-5">Edit Customer</h3>
			{alertShow && (
				<div
					className="alert alert-danger d-flex align-items-center"
					role="alert"
				>
					<span>
						<XCircleFill size={16} /> Failed To Edit
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
