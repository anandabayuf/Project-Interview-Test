export default function DeleteConfirmationModal(props) {
	return (
		<div
			className="modal fade"
			id="deleteconfirmationmodal"
			tabIndex="-1"
			aria-labelledby="deleteconfirmationmodallabel"
			aria-hidden="true"
		>
			<div className="modal-dialog modal-dialog-centered">
				<div className="modal-content">
					<div className="modal-header">
						<h5
							className="modal-title"
							id="deleteconfirmationmodallabel"
						>
							Delete Confirmation
						</h5>
						<button
							type="button"
							className="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
						></button>
					</div>
					<div className="modal-body">
						<div>
							Are you sure you want to delete customer with
							account number: {props.accountNumber}?
						</div>
					</div>
					<div className="modal-footer">
						<button
							type="button"
							className="btn btn-secondary"
							data-bs-dismiss="modal"
						>
							Close
						</button>
						<button
							type="button"
							className="btn btn-danger"
							data-bs-dismiss="modal"
							onClick={props.handleClickDeleteinModal}
						>
							Delete
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
