import "./navbar.css";
import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid
} from 'recharts';
import {
    PieChart, Pie, Cell, Legend
  } from 'recharts';
  
  const dataPie = [
    { name: 'Food', value: 8500 },
    { name: 'Transportation', value: 12500 },
    { name: 'Health', value: 6200 },
    { name: 'Household', value: 9800 },
    { name: 'Subscription', value: 4100 },
    { name: 'Entertainment', value: 7300 },
    { name: 'Education', value: 5400 },
    { name: 'Others', value: 3900 },
  ];
  
  const COLORS = [
    "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0",
    "#9966FF", "#FF9F40", "#8DD1E1", "#C7CEEA"
  ];
const data = [
    { month: '2015-01', spending: 4500 },
    { month: '2015-02', spending: 6200 },
    { month: '2015-03', spending: 3900 },
    { month: '2015-04', spending: 8100 },
    { month: '2015-05', spending: 20500 },
    { month: '2015-06', spending: 1800 },
    { month: '2015-07', spending: 11200 },
    { month: '2015-08', spending: 5200 },
    { month: '2015-09', spending: 4300 },
    { month: '2015-10', spending: 9000 },
    { month: '2015-11', spending: 13000 },
    { month: '2015-12', spending: 4000 },
    { month: '2016-01', spending: 7000 },
    { month: '2016-02', spending: 1500 },
    { month: '2016-03', spending: 8800 },
    { month: '2016-04', spending: 22000 },
    { month: '2016-05', spending: 6700 },
    { month: '2016-06', spending: 9200 },
    { month: '2016-07', spending: 17500 },
    { month: '2016-08', spending: 3400 },
  ];
  
export default function Dash() {


const transactions = [
  { date: '2025-04-01', category: 'Groceries', amount: 52.30, mode: 'Card', type: 'Expense' },
  { date: '2025-04-02', category: 'Salary', amount: 1500.00, mode: 'Bank Transfer', type: 'Income' },
  { date: '2025-04-03', category: 'Dining', amount: 27.80, mode: 'UPI', type: 'Expense' },
  { date: '2025-04-03', category: 'Freelancing', amount: 400.00, mode: 'PayPal', type: 'Income' },
  { date: '2025-04-04', category: 'Electricity Bill', amount: 120.45, mode: 'Card', type: 'Expense' },
  { date: '2025-04-05', category: 'Movie', amount: 18.00, mode: 'Cash', type: 'Expense' },
  { date: '2025-04-06', category: 'Gift', amount: 100.00, mode: 'Cash', type: 'Income' },
  { date: '2025-04-06', category: 'Shopping', amount: 200.99, mode: 'Card', type: 'Expense' },
  { date: '2025-04-07', category: 'Interest', amount: 35.50, mode: 'Bank Transfer', type: 'Income' },
  { date: '2025-04-07', category: 'Petrol', amount: 65.75, mode: 'UPI', type: 'Expense' }
];
const goals = [
  {
    title: "Buying a car",
    collected: "1 000$",
    target: "15 000$",
    deadline: "Aug 2030",
  },
  {
    title: "Vacation",
    collected: "500$",
    target: "1 000$",
    deadline: "Aug 2024",
  },
];
    return (
        <>
             <div className="Main">
        <div className="Nav">
            <h2>Dashboard</h2>
            <h3>Himnish</h3>
            <svg width="40px" height="30px" viewBox="-4.8 -4.8 29.60 29.60" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-4.8" y="-4.8" width="29.60" height="29.60" rx="14.8" fill="#ffffff" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.12"></g><g id="SVGRepo_iconCarrier"> <title>profile_round [#1342]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke-width="0.0002" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -2159.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M100.562548,2016.99998 L87.4381713,2016.99998 C86.7317804,2016.99998 86.2101535,2016.30298 86.4765813,2015.66198 C87.7127655,2012.69798 90.6169306,2010.99998 93.9998492,2010.99998 C97.3837885,2010.99998 100.287954,2012.69798 101.524138,2015.66198 C101.790566,2016.30298 101.268939,2016.99998 100.562548,2016.99998 M89.9166645,2004.99998 C89.9166645,2002.79398 91.7489936,2000.99998 93.9998492,2000.99998 C96.2517256,2000.99998 98.0830339,2002.79398 98.0830339,2004.99998 C98.0830339,2007.20598 96.2517256,2008.99998 93.9998492,2008.99998 C91.7489936,2008.99998 89.9166645,2007.20598 89.9166645,2004.99998 M103.955674,2016.63598 C103.213556,2013.27698 100.892265,2010.79798 97.837022,2009.67298 C99.4560048,2008.39598 100.400241,2006.33098 100.053171,2004.06998 C99.6509769,2001.44698 97.4235996,1999.34798 94.7348224,1999.04198 C91.0232075,1998.61898 87.8750721,2001.44898 87.8750721,2004.99998 C87.8750721,2006.88998 88.7692896,2008.57398 90.1636971,2009.67298 C87.1074334,2010.79798 84.7871636,2013.27698 84.044024,2016.63598 C83.7745338,2017.85698 84.7789973,2018.99998 86.0539717,2018.99998 L101.945727,2018.99998 C103.221722,2018.99998 104.226185,2017.85698 103.955674,2016.63598" id="profile_round-[#1342]"> </path> </g> </g> </g> </g></svg>
        </div>

        <div className="Content">
           <div className="graphs">
                <div className="Monthly">
                    <h3>Monthly Report</h3>
                    <div className="p-4 bg-white shadow-md rounded-xl mspending">
      <ResponsiveContainer width="90%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="month"
            angle={-45}
            textAnchor="end"
            interval={0}
            height={60}
          />
          <YAxis tickFormatter={(value) => `₹${value}`} />
          <Tooltip formatter={(value) => `₹${value}`} />
          <Line type="monotone" dataKey="spending" stroke="#007BFF" dot />
        </LineChart>
      </ResponsiveContainer>
    </div>
                </div>

                <div className="Category">
                    <h3>Category Chart</h3>
                    <div className="p-4 bg-white shadow-md rounded-xl">
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={dataPie}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={140}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
            
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `₹${value}`} />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
                </div>
           </div>
        <div className="Data">
        <div className="Info">
             <div className="Money">
             <div className="Income">
                <h3>Income &nbsp;
                  <svg fill="#000000" width="20px" height="20px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M277.675 981.521c5.657 0 10.24-4.583 10.24-10.24V499.514c0-5.651-4.588-10.24-10.24-10.24h-81.92c-5.652 0-10.24 4.589-10.24 10.24v471.767c0 5.657 4.583 10.24 10.24 10.24h81.92zm0 40.96h-81.92c-28.278 0-51.2-22.922-51.2-51.2V499.514c0-28.271 22.924-51.2 51.2-51.2h81.92c28.276 0 51.2 22.929 51.2 51.2v471.767c0 28.278-22.922 51.2-51.2 51.2zm275.456-40.96c5.657 0 10.24-4.583 10.24-10.24V408.777c0-5.657-4.583-10.24-10.24-10.24h-81.92a10.238 10.238 0 00-10.24 10.24v562.504c0 5.657 4.583 10.24 10.24 10.24h81.92zm0 40.96h-81.92c-28.278 0-51.2-22.922-51.2-51.2V408.777c0-28.278 22.922-51.2 51.2-51.2h81.92c28.278 0 51.2 22.922 51.2 51.2v562.504c0 28.278-22.922 51.2-51.2 51.2zm275.456-40.016c5.657 0 10.24-4.583 10.24-10.24V318.974c0-5.651-4.588-10.24-10.24-10.24h-81.92c-5.652 0-10.24 4.589-10.24 10.24v653.251c0 5.657 4.583 10.24 10.24 10.24h81.92zm0 40.96h-81.92c-28.278 0-51.2-22.922-51.2-51.2V318.974c0-28.271 22.924-51.2 51.2-51.2h81.92c28.276 0 51.2 22.929 51.2 51.2v653.251c0 28.278-22.922 51.2-51.2 51.2zM696.848 40.96l102.39.154c11.311.017 20.494-9.138 20.511-20.449S810.611.171 799.3.154L696.91 0c-11.311-.017-20.494 9.138-20.511 20.449s9.138 20.494 20.449 20.511z"></path><path d="M778.789 20.571l-.307 101.827c-.034 11.311 9.107 20.508 20.418 20.542s20.508-9.107 20.542-20.418l.307-101.827C819.783 9.384 810.642.187 799.331.153s-20.508 9.107-20.542 20.418z"></path><path d="M163.84 317.682h154.184a51.207 51.207 0 0036.211-14.999L457.208 199.71a10.263 10.263 0 017.237-3.003h159.754a51.235 51.235 0 0036.198-14.976l141.13-141.13c7.998-7.998 7.998-20.965 0-28.963s-20.965-7.998-28.963 0L631.447 152.755a10.265 10.265 0 01-7.248 2.992H464.445a51.226 51.226 0 00-36.201 14.999L325.271 273.719a10.244 10.244 0 01-7.248 3.003H163.839c-11.311 0-20.48 9.169-20.48 20.48s9.169 20.48 20.48 20.48z"></path></g></svg>
                </h3>
                <p>$3000</p>
                <h5>amount of income</h5>
                </div>
                <div className="Expense">
                <h3>Expense &nbsp;
                <svg width="20px" height="20px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16.5169,14.3442l7.7047-4.801,10.2741,8.6883v12.5665l-5.9671,4.836v-11.8175l-12.0117-9.4722Z"/><path d="M26.0581,9.2578l5.8416-3.6121,10.4601,7.293-6.4328,4.9258"/><path d="M36.2041,28.6126l6.2959-5.1397"/><path d="M36.2041,25.9523l6.2959-5.1397"/><path d="M36.2041,23.292l6.2959-5.1397"/><path d="M36.2041,20.6317l6.2959-5.1397"/><path d="M35.3139,14.172l2.7236-2.077-1.865-1.2474-1.4987,1.1314"/><path d="M5.5,31.9538l13.5429,10.4006,7.4233-5.9106"/><path d="M5.5,29.2851l13.5429,10.4006,7.4233-5.9106"/><path d="M5.6039,26.6164l13.5429,10.4006,7.4233-5.9106"/><path d="M5.5892,23.9478l13.5429,10.4006,7.4233-5.9106"/><path d="M20.2345,23.7501c-.226,1.0274-1.6933,1.5535-3.2773,1.1753-1.5841-.3783-2.685-1.5178-2.459-2.5451.226-1.0274,1.6933-1.5535,3.2773-1.1753s2.685,1.5177,2.459,2.5451Z"/><path d="M15.0514,15.826l-9.2955,5.5946,13.3311,10.1174,7.6392-6.0147"/></svg>
                </h3>
                <p>$1880</p>
                <h5>amount of expense</h5>
                </div>
             </div>
              <div className="Goals">
              <h3 className="goals-title">Goals</h3>
      <div className="goals-list">
        {goals.map((goal, index) => (
          <div key={index} className="goal-item">
            <div className="goal-info">
              <div className="goal-name">{goal.title}</div>
              <div className="goal-deadline">Target Collected on {goal.deadline}</div>
            </div>
            <div className="goal-amounts">
              <div className="goal-line">
                <span className="label">Collected</span>
                <span className="amount">{goal.collected}</span>
              </div>
              <div className="goal-line">
                <span className="label">Target</span>
                <span className="amount bold">{goal.target}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
              </div>
             
           </div>
           <div className="Transactions">
            <h3>Transactions</h3>
  <table className="transaction-table">
    <thead>
      <tr>
        <th>Date</th>
        <th>Category</th>
        <th>Amount</th>
        <th>Mode</th>
        <th>Type</th>
      </tr>
    </thead>
    <tbody>
      {transactions.map((txn, index) => (
        <tr key={index}>
          <td>{txn.date}</td>
          <td>{txn.category}</td>
          <td>${txn.amount.toFixed(2)}</td>
          <td>{txn.mode}</td>
          <td className={txn.type === 'Income' ? 'income' : 'expense'}>{txn.type}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
        </div>
        </div>
      </div>
  
        </>
        

    );
} 