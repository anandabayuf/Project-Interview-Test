import { useEffect, useState } from "react";
import { getAllCustomer } from "../api/Customer";
import CustomerTable from "../components/Customer-Table";
import { Plus, CheckCircleFill } from "react-bootstrap-icons";
import { useNavigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import DeleteConfirmationModal from "../components/Delete-Confirmation-Modal";

export default function Home() {
	const [customers, setCustomers] = useState([]);
	const [alertShow, setAlertShow] = useState({
		isShow: false,
		for: "",
	});
	const [idForDelete, setIdForDelete] = useState("");

	const navigate = useNavigate();
	const location = useLocation();

	const getCustomers = async () => {
		const response = await getAllCustomer();
		setCustomers(response);
	};

	const handleClickCreate = () => {
		navigate("create");
	};

	const handleClickEdit = (id, customer) => {
		navigate(`edit/${id}`, {
			state: {
				customer,
			},
		});
	};

	const handleClickDelete = (id) => {
		setIdForDelete(id);
	};

	const handleClickDeleteinModal = () => {
		setIdForDelete("");
		showAlert({ for: "delete" });
	};

	const showAlert = (state) => {
		setAlertShow({
			...alertShow,
			isShow: true,
			for: state.for,
		});

		setTimeout(() => {
			setAlertShow({
				...alertShow,
				isShow: false,
			});
		}, 3000);
	};

	const checkLocationState = () => {
		if (location.state) {
			showAlert(location.state);
			window.history.replaceState({}, document.title);
		}
	};

	useEffect(() => {
		getCustomers();
		checkLocationState(); // eslint-disable-next-line
	}, []);

	return (
		<div className="min-vh-100" style={{ padding: "20px" }}>
			<div className="row justify-content-between align-items-center mb-5">
				<div className="col-auto">
					<h3>Customer List</h3>
				</div>
				<div className="col-auto">
					<button
						className="btn btn-outline-primary shadow"
						onClick={handleClickCreate}
					>
						<span>
							<Plus size={32} /> Create Customer
						</span>
					</button>
				</div>
			</div>
			{alertShow.isShow && (
				<div
					className="alert alert-success d-flex align-items-center"
					role="alert"
				>
					<span>
						<CheckCircleFill size={16} /> Successfully{" "}
						{alertShow.for === "create"
							? "Created"
							: alertShow.for === "edit"
							? "Edited"
							: "Deleted"}
					</span>
				</div>
			)}
			{customers.length > 0 ? (
				<div>
					<CustomerTable
						customers={customers}
						handleClickEdit={handleClickEdit}
						handleClickDelete={handleClickDelete}
					/>
				</div>
			) : (
				<div className="text-center">
					<Loader />
				</div>
			)}
			<DeleteConfirmationModal
				accountNumber={idForDelete}
				handleClickDeleteinModal={handleClickDeleteinModal}
			/>
		</div>
	);
}
