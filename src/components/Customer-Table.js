import { Pencil, Trash } from "react-bootstrap-icons";

export default function CustomerTable(props) {
	return (
		<table className="table">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">Branch No</th>
					<th scope="col">Cif No</th>
					<th scope="col">Account Type</th>
					<th scope="col">Account No</th>
					<th scope="col">Short Name</th>
					<th scope="col">Account Relationship</th>
					<th scope="col">Product Code</th>
					<th scope="col">Currency Code</th>
					<th scope="col">Balance</th>
					<th scope="col">Action</th>
				</tr>
			</thead>
			<tbody>
				{props.customers.map((customer, index) => {
					return (
						<tr key={index}>
							<th scope="row">{index}</th>
							<td>{customer.branchNumber}</td>
							<td>{customer.cifNumber}</td>
							<td>{customer.accountType}</td>
							<td>{customer.accountNumber}</td>
							<td>{customer.shortName}</td>
							<td>{customer.accountRelationship}</td>
							<td>{customer.productCode}</td>
							<td>{customer.currencyCode}</td>
							<td>
								{parseInt(customer.balance).toLocaleString(
									"id-ID",
									{
										style: "currency",
										currency: "IDR",
										minimumFractionDigits: 0,
									}
								)}
							</td>
							<td>
								<div className="row justify-content-between">
									<div className="col-auto">
										<button
											className="btn shadow btn-outline-dark"
											style={{ borderRadius: "50px" }}
											onClick={() =>
												props.handleClickEdit(
													customer.accountNumber,
													customer
												)
											}
										>
											<span>
												<Pencil size={16} />
											</span>
										</button>
									</div>
									<div className="col-auto">
										<button
											className="btn shadow btn-outline-danger"
											style={{ borderRadius: "50px" }}
											data-bs-toggle="modal"
											data-bs-target="#deleteconfirmationmodal"
											onClick={() =>
												props.handleClickDelete(
													customer.accountNumber
												)
											}
										>
											<span>
												<Trash size={16} />
											</span>
										</button>
									</div>
								</div>
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
