import "./Form.css";
const Form=()=>{
        return( 

            <div className="form1">
        <form action="">
            <p>Account</p>
            <input type="text" />
            <p>Transaction name</p>
            <input type="text" name="name" id="name" />
            <p>Category</p>
            <input type="text" />
            <p>Date</p>
            <input type="date" />
            <p>Amount</p>
            <input type="number" name="money" id="money" />
            <p>Note</p>
            <textarea name="note" id="note" />
             <button>Cancel</button>
            <button>Add transcation</button>
        </form>
    </div>
    );
}
export default Form;