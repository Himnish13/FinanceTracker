import "./navbar.css";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,  AreaChart, Area,Legend, PieChart, Pie, Cell
   } from 'recharts';
const data = [
    { category: 'Transportation', spending: 12500 },
    { category: 'Household', spending: 9800 },
    { category: 'Education', spending: 5400 },
    { category: 'subscription', spending: 4100 },
    { category: 'Food', spending: 8500 },
    { category: 'Health', spending: 6200 },
    { category: 'Entertainment', spending: 7300 },
    { category: 'Others', spending: 3900 },
  ];
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
  const data1 = [
    {
      month: '2024-01',
      Transportation: 12500,
      Household: 9800,
      Education: 5400,
      subscription: 4100,
      Food: 8500,
      Health: 6200,
      Entertainment: 7300,
      Others: 3900
    },
    {
      month: '2024-02',
      Transportation: 11200,
      Household: 10200,
      Education: 5800,
      subscription: 4300,
      Food: 9100,
      Health: 6400,
      Entertainment: 7100,
      Others: 4200
    },
    {
      month: '2024-03',
      Transportation: 13800,
      Household: 9500,
      Education: 5200,
      subscription: 3900,
      Food: 8700,
      Health: 6000,
      Entertainment: 7500,
      Others: 4000
    },
    {
      month: '2024-04',
      Transportation: 12000,
      Household: 9900,
      Education: 5600,
      subscription: 4500,
      Food: 8900,
      Health: 6600,
      Entertainment: 7200,
      Others: 3800
    }
  ];
  const categoryColors = {
    Transportation: '#4e79a7',
    Household: '#f28e2b',
    Education: '#e15759',
    subscription: '#76b7b2',
    Food: '#59a14f',
    Health: '#edc948',
    Entertainment: '#af7aa1',
    Others: '#ff9da7'
  };
export default function Over()
{
    return (
        <>
            <div className="Main">
            <div className="Nav">
            <h2>Overview</h2>
            <h3>Himnish</h3>
            <svg width="40px" height="30px" viewBox="-4.8 -4.8 29.60 29.60" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-4.8" y="-4.8" width="29.60" height="29.60" rx="14.8" fill="#ffffff" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.12"></g><g id="SVGRepo_iconCarrier"> <title>profile_round [#1342]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke-width="0.0002" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -2159.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M100.562548,2016.99998 L87.4381713,2016.99998 C86.7317804,2016.99998 86.2101535,2016.30298 86.4765813,2015.66198 C87.7127655,2012.69798 90.6169306,2010.99998 93.9998492,2010.99998 C97.3837885,2010.99998 100.287954,2012.69798 101.524138,2015.66198 C101.790566,2016.30298 101.268939,2016.99998 100.562548,2016.99998 M89.9166645,2004.99998 C89.9166645,2002.79398 91.7489936,2000.99998 93.9998492,2000.99998 C96.2517256,2000.99998 98.0830339,2002.79398 98.0830339,2004.99998 C98.0830339,2007.20598 96.2517256,2008.99998 93.9998492,2008.99998 C91.7489936,2008.99998 89.9166645,2007.20598 89.9166645,2004.99998 M103.955674,2016.63598 C103.213556,2013.27698 100.892265,2010.79798 97.837022,2009.67298 C99.4560048,2008.39598 100.400241,2006.33098 100.053171,2004.06998 C99.6509769,2001.44698 97.4235996,1999.34798 94.7348224,1999.04198 C91.0232075,1998.61898 87.8750721,2001.44898 87.8750721,2004.99998 C87.8750721,2006.88998 88.7692896,2008.57398 90.1636971,2009.67298 C87.1074334,2010.79798 84.7871636,2013.27698 84.044024,2016.63598 C83.7745338,2017.85698 84.7789973,2018.99998 86.0539717,2018.99998 L101.945727,2018.99998 C103.221722,2018.99998 104.226185,2017.85698 103.955674,2016.63598" id="profile_round-[#1342]"> </path> </g> </g> </g> </g></svg>
            </div>

            <div className="Content">
            <div className="MixedCat">
            <div className="Bargraph">
                <h3>Category Wise Breakdown of expenses</h3>
            <ResponsiveContainer width="100%" height={600}>
            <BarChart
             layout="vertical"
             data={data}
             margin={{ top: 20, right: 30, left: 0, bottom: 12 }}
             >
             <CartesianGrid strokeDasharray="3 3" />
             <XAxis type="number" label={{ value: 'Total Spending (INR)', position: 'insideBottom', offset: -10 }} />
             <YAxis type="category" dataKey="category" width={150} />
             <Tooltip />
             <Bar dataKey="spending" fill="#4b0082" />
            </BarChart>
            </ResponsiveContainer>
            </div>
           
           
            <div className="Double">
            <div className="w-full h-[500px]  Stacked">
                            <h3>Category-wise spending over time</h3>
                        <ResponsiveContainer width="100%" height="90%">
                    <AreaChart data={data1}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {Object.entries(categoryColors).map(([key, color]) => (
                        <Area
                            key={key}
                            type="monotone"
                            dataKey={key}
                            stackId="1"
                            stroke={color}
                            fill={color}
                        />
                        ))}
                    </AreaChart>
                </ResponsiveContainer>
            </div>
             <div className="PieChart">
                <h3>Category PieChart</h3>
                 <div className="p-4 bg-white shadow-md rounded-xl">
                  <ResponsiveContainer width="100%" height="90%">
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
            </div>
            </div>
            </div>
        </>
    );
}