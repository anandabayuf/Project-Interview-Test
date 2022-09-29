import Loader from "./Loader";

export default function CustomerForm(props) {
	return (
		<form onSubmit={props.handleSubmit}>
			<div className="row">
				<div className="col-6 mb-3">
					<label htmlFor="branchNumber" className="form-label">
						Branch Number
					</label>
					<input
						type="number"
						className="form-control"
						id="branchNumber"
						name="branchNumber"
						onChange={props.handleChange}
						value={
							props.customer.branchNumber === undefined
								? ""
								: props.customer.branchNumber
						}
					/>
				</div>
				<div className="col-6 mb-3">
					<label htmlFor="cifNumber" className="form-label">
						Cif Number
					</label>
					<input
						type="number"
						className="form-control"
						id="cifNumber"
						name="cifNumber"
						onChange={props.handleChange}
						value={
							props.customer.cifNumber === undefined
								? ""
								: props.customer.cifNumber
						}
					/>
				</div>
			</div>
			<div className="row">
				<div className="col-6 mb-3">
					<label htmlFor="accountType" className="form-label">
						Account Type
					</label>
					<input
						type="text"
						className="form-control"
						id="accountType"
						name="accountType"
						onChange={props.handleChange}
						value={
							props.customer.accountType === undefined
								? ""
								: props.customer.accountType
						}
					/>
				</div>
				<div className="col-6 mb-3">
					<label htmlFor="accountNumber" className="form-label">
						Account Number
					</label>
					<input
						type="number"
						className="form-control"
						id="accountNumber"
						name="accountNumber"
						onChange={props.handleChange}
						value={
							props.customer.accountNumber === undefined
								? ""
								: props.customer.accountNumber
						}
					/>
				</div>
			</div>
			<div className="row">
				<div className="col-6 mb-3">
					<label htmlFor="shortName" className="form-label">
						Short Name
					</label>
					<input
						type="text"
						className="form-control"
						id="shortName"
						name="shortName"
						onChange={props.handleChange}
						value={
							props.customer.shortName === undefined
								? ""
								: props.customer.shortName
						}
					/>
				</div>
				<div className="col-6 mb-3">
					<label htmlFor="accountRelationship" className="form-label">
						Account Relationship
					</label>
					<input
						type="text"
						className="form-control"
						id="accountRelationship"
						name="accountRelationship"
						onChange={props.handleChange}
						value={
							props.customer.accountRelationship === undefined
								? ""
								: props.customer.accountRelationship
						}
					/>
				</div>
			</div>
			<div className="row">
				<div className="col-6 mb-3">
					<label htmlFor="productCode" className="form-label">
						Product Code
					</label>
					<input
						type="text"
						className="form-control"
						id="productCode"
						name="productCode"
						onChange={props.handleChange}
						value={
							props.customer.productCode === undefined
								? ""
								: props.customer.productCode
						}
					/>
				</div>
				<div className="col-6 mb-3">
					<label htmlFor="currencyCode" className="form-label">
						Currency Code
					</label>
					<input
						type="text"
						className="form-control"
						id="currencyCode"
						name="currencyCode"
						onChange={props.handleChange}
						value={
							props.customer.currencyCode === undefined
								? ""
								: props.customer.currencyCode
						}
					/>
				</div>
			</div>
			<div className="mb-3">
				<label htmlFor="balance" className="form-label">
					Balance
				</label>
				<input
					type="number"
					className="form-control"
					id="balance"
					name="balance"
					onChange={props.handleChange}
					value={
						props.customer.balance === undefined
							? ""
							: props.customer.balance
					}
				/>
			</div>
			{props.isLoading ? (
				<div className="mt-5 text-center">
					<Loader />
				</div>
			) : (
				<div className="mt-5 row justify-content-end">
					<div className="col-auto">
						<button
							type="button"
							className="btn btn-outline-dark shadow"
							onClick={props.handleCancel}
						>
							Cancel
						</button>
					</div>
					<div className="col-auto">
						<button
							type="submit"
							className="btn btn-primary shadow"
						>
							Submit
						</button>
					</div>
				</div>
			)}
		</form>
	);
}
