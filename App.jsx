import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, title: "Snacks", amount: -20 },
    { id: 2, title: "Book", amount: -10 },
    { id: 3, title: "Salary", amount: 300 },
    { id: 4, title: "Camera", amount: -150 },
  ]);
 useEffect(() => {
  const fetchData = async () => {
    const response = await axios.get("https://express-4.onrender.com");
    setTransactions(response.data);
  };
  fetchData();
 },[]);
  
 const addTransaction = (title, amount) => {
    console.log("Add =>", (title, amount));
    const newTxn = {
      id: transactions.length + 1,
      title: title,
      amount: amount,
    };
    setTransactions([...transactions, newTxn]);
  };

  return (
    <>
      <h1 className="Title">Expense Tracker</h1>
      <TransactionList transactions={transactions} />
      <TransactionForm addTransaction={addTransaction} />
    </>
  );
};
export default App;
