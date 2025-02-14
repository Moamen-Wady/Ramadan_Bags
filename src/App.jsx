import "./App.css";
import { useState } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  Checkbox,
  Button,
  Typography,
} from "@mui/material";

function App() {
  const [selected, setSelected] = useState([]);

  const rows = [
    {
      name: "أرز",
      total: 0,
      available: 0,
    },
    {
      name: "مكرونة",
      total: 0,
      available: 0,
    },
    {
      name: "عدس",
      total: 0,
      available: 0,
    },
  ];

  const handleSelect = (name) => {
    setSelected((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name]
    );
  };

  return (
    <>
      <Typography
        component="h1"
        variant="h2"
        sx={{ textAlign: "center", margin: "var(--r2) auto" }}
      >
        شنط رمضان
      </Typography>
      <TableContainer
        sx={{ width: "95%", margin: "auto" }}
        component={Paper}
        dir="rtl"
        className="table"
        elevation={1}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>الصنف</TableCell>
              <TableCell>اجمالي المطلوب</TableCell>
              <TableCell>المتاح</TableCell>
              <TableCell>المتبقي</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell>
                  <Checkbox
                    checked={selected.includes(row.name)}
                    onChange={() => handleSelect(row.name)}
                  />
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.total}</TableCell>
                <TableCell>{row.available}</TableCell>
                <TableCell>{(row.total - row.available)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div
        style={{ margin: "0 auto var(--r2) var(--r2)", width: "fit-content" }}
      >
        <Button
          variant="contained"
          color="error"
          style={{
            margin: "0 var(--r1) var(--r2) var(--r2)",
            fontSize: "var(--r101)",
          }}
        >
          Delete
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{
            margin: "0 var(--r1) var(--r2) var(--r2)",
            fontSize: "var(--r101)",
          }}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          color="success"
          style={{
            margin: "0 var(--r1) var(--r2) var(--r2)",
            fontSize: "var(--r101)",
          }}
        >
          Add
        </Button>
      </div>
    </>
  );
}

export default App;
// <>
//   <div className="h">
//     <img src="su.jpg" alt="" />
//     <img src="eg.jpg" alt="" />
//   </div>
//   <div className="main">
//     <div className="info">
//       <p>
//         ملاحظات:
//         <br />
//         1-عدد الشنط المستهدف هو 300 شنطة
//         <br />
//         2-محتويات الشنطة:
//         <br />
//         -4 كيلو ارز
//         <br />
//         -2 كيس مكرونة
//         <br />
//         -3 كيلو سكر
//         <br />
//         -نصف كيلو بلح
//         <br />
//         -نصف كيلو لوبيا
//         <br />
//         -نصف كيلو فاصوليا
//         <br />
//         - زجاجة زيت
//         <br />
//         - كيلو سمنة
//         <br />
//         - باكو شاي
//         <br />
//         - كيس ملح
//         <br />
//         - برطمان صلصة
//         <br />
//         3-سيتم تحضير يوم لتعبئة الشنط لذا يرجى ارسال محتويات الشنط و عدد
//         مناسب من الاكياس لتعبئتها وذلك في الموعد الذي سيتم تحديده قريبا ان
//         شاء الله
//       </p>
//     </div>
//     <table>
//       <tbody>
//         <tr>
//           <th>النوع</th>
//           <th>اجمالي الكمية والوحدة</th>
//           <th>المتاح</th>
//           <th>المتبقي</th>
//         </tr>
//         <tr>
//           <td>ارز</td>
//           <td>1200 كيلو</td>
//           <td></td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>مكرونة</td>
//           <td>600 كيس</td>
//           <td></td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>سكر</td>
//           <td>900 كيلو</td>
//           <td></td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>بلح</td>
//           <td>150 كيلو</td>
//           <td></td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>لوبيا</td>
//           <td>150 كيلو</td>
//           <td></td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>فاصوليا</td>
//           <td>150 كيلو</td>
//           <td></td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>زيت</td>
//           <td>300 زجاجة</td>
//           <td></td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>سمنة</td>
//           <td>300 كيلو</td>
//           <td></td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>شاي</td>
//           <td>300 باكو</td>
//           <td></td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>ملح</td>
//           <td>300 كيس</td>
//           <td></td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>صلصة</td>
//           <td>300 برطمان</td>
//           <td></td>
//           <td></td>
//         </tr>
//       </tbody>
//     </table>
//     <div className="lnks">
//       <img src="su.jpg" alt="" />
//       <img src="eg.jpg" alt="" />
//     </div>
//   </div>
// </>
