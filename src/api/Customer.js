import { BASE_URL } from "./Helper";

const getAllCustomer = async () => {
	try {
		const response = await fetch(BASE_URL);
		const responseJson = await response.json();
		const customerData = await responseJson["cifAccountInquiryResponse"][
			"payload"
		]["customerAccount"]["accountList"];

		return customerData;
	} catch (err) {
		alert(err);
	}
};

const createCustomer = async (data) => {
	try {
		const response = await fetch(BASE_URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
		const responseJson = await response.json();

		return responseJson;
	} catch (err) {
		alert(err);
	}
};

const editCustomer = async (id, data) => {
	try {
		const response = await fetch(BASE_URL, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
		const responseJson = await response.json();

		return responseJson;
	} catch (err) {
		alert(err);
	}
};

const deleteCustomer = async (id) => {
	try {
		const response = await fetch(BASE_URL, {
			method: "DELETE",
		});
		const responseJson = await response.json();

		return responseJson;
	} catch (err) {
		alert(err);
	}
};

export { getAllCustomer, createCustomer, editCustomer, deleteCustomer };
