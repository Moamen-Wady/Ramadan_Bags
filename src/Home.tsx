import { useState, useEffect, memo } from "react";
import api, { isCancel } from "./api";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  Typography,
} from "@mui/material";

type item = {
  _id: string;
  name: string;
  unit: string;
  available: number;
  total: number;
};

export default memo(function Home({
  notify,
}: {
  notify: (e: string, msg: string) => void;
}) {
  const [rows, setRows] = useState<item[]>([]);
  useEffect(() => {
    const controller = new AbortController();
    api
      .get("/items", { signal: controller.signal })
      .then((result) => {
        setRows(result.data.items);
      })
      .catch((err) => {
        if (!isCancel(err)) {
          notify("error", "حدث خطأ! برجاء المحاولة مرة أخرى");
        }
      });
    return () => controller.abort();
  }, []);
  return (
    <>
      <Typography
        component="h1"
        variant="h2"
        sx={{
          textAlign: "center",
          my: 4,
          mx: "auto",
          fontFamily: "'El Messiri', sans-serif",
        }}
      >
        شنط رمضان
      </Typography>
      <TableContainer
        component={Paper}
        dir="rtl"
        className="table"
        elevation={1}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>الصنف</TableCell>
              <TableCell>الوحدة</TableCell>
              <TableCell>المطلوب</TableCell>
              <TableCell>المتاح</TableCell>
              <TableCell>المتبقي</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                {/* <TableCell className="checker">
                  <Checkbox
                    checked={selected.includes(row._id)}
                    onChange={() => handleSelect(row._id)}
                  />
                </TableCell> */}
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.unit}</TableCell>
                <TableCell>{row.total}</TableCell>
                <TableCell>{row.available}</TableCell>
                <TableCell>
                  {Number(row.total) - Number(row.available)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
});
