import Select from "react-select";
import "./Form.css";

const categoryOptions = [
  { value: "rent", label: "Rent" },
  { value: "groceries", label: "Groceries" },
  { value: "restaurants", label: "Restaurants" },
  { value: "fuel", label: "Fuel" },
  { value: "shopping", label: "Shopping" },
  { value: "utilities", label: "Utilities" },
  { value: "subscriptions", label: "Subscriptions" },
  { value: "medical", label: "Medical" },
  { value: "education", label: "Education" },
  { value: "travel", label: "Travel" },
  { value: "savings", label: "Savings" },
  { value: "loan", label: "Loan Payments" },
  { value: "donations", label: "Donations" },
  { value: "other", label: "Other" }
];

const Form = () => {
  return (
    <div className="form1">
      <form>
        <p>Account</p>
        <input type="text" />
        <p>Transaction name</p>
        <input type="text" name="name" id="name" />
        <p>Category</p>
        <Select options={categoryOptions} />
        <p>Date</p>
        <input type="date" />
        <p>Amount</p>
        <input type="number" name="money" id="money" />
        <p>For meal prep</p>
        <textarea name="note" id="note" />
        <button type="button">Cancel</button>
        <button type="submit">Add transaction</button>
      </form>
    </div>
  );
};

export default Form;
