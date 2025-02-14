import "./App.css";
import { useState } from "react";
import api, { isCancel } from "./api";
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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Divider,
  Box,
} from "@mui/material";

export default function App() {
  const [selected, setSelected] = useState([]);
  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState([]);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

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

  const handleOpen = (editMode) => {
    setIsEditing(editMode);
    if (editMode) {
      setFormData(rows.filter((row) => selected.includes(row.name)));
    } else {
      setFormData([{ name: "", total: "", available: "" }]);
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteOpen = () => {
    setDeleteDialogOpen(true);
  };

  const handleDeleteClose = () => {
    setDeleteDialogOpen(false);
  };

  const handleSave = async () => {
    try {
      if (isEditing) {
        await api.put("/items", formData);
      } else {
        await api.post("/items", formData[0]);
      }
      setOpen(false);
    } catch (error) {
      if (!isCancel(error)) {
        console.error("Error saving data", error);
      }
    }
  };

  const handleDelete = async () => {
    try {
      await api.delete("/items", { data: { names: selected } });
      setDeleteDialogOpen(false);
    } catch (error) {
      if (!isCancel(error)) {
        console.error("Error deleting items", error);
      }
    }
  };

  return (
    <>
      <Typography
        component="h1"
        variant="h2"
        sx={{ textAlign: "center", my: 4, mx: "auto" }}
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
                <TableCell>{row.total - row.available}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ mt: 0, mr: "auto", ml: 4, mb: 4, width: "fit-content" }}>
        <Button
          variant="contained"
          color="error"
          onClick={handleDeleteOpen}
          sx={{ mt: 0, mr: 2, ml: 4, mb: 4, fontSize: "var(--r101)" }}
        >
          حذف
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleOpen(true)}
          sx={{ mt: 0, mr: 2, ml: 4, mb: 4, fontSize: "var(--r101)" }}
        >
          تعديل
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={() => handleOpen(false)}
          sx={{ mt: 0, mr: 2, ml: 4, mb: 4, fontSize: "var(--r101)" }}
        >
          إضافة عنصر
        </Button>
      </Box>
      <Dialog open={open} onClose={handleClose} dir="rtl">
        <DialogTitle>
          {isEditing ? "تعديل العناصر" : "إضافة عنصر جديد"}
        </DialogTitle>
        <DialogContent>
          {formData.map((item, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <TextField
                label="الصنف"
                value={item.name}
                fullWidth
                margin="dense"
              />
              <TextField
                label="اجمالي المطلوب"
                value={item.total}
                fullWidth
                margin="dense"
                type="number"
              />
              <TextField
                label="المتاح"
                value={item.available}
                fullWidth
                margin="dense"
                type="number"
              />
              {isEditing && index < formData.length - 1 && (
                <Divider sx={{ my: 2 }} />
              )}
            </Box>
          ))}
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="error"
            onClick={handleClose}
            sx={{ mx: 1 }}
          >
            إلغاء
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={handleSave}
            sx={{ mx: 1 }}
          >
            تم
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={deleteDialogOpen} onClose={handleDeleteClose} dir="rtl">
        <DialogTitle>هل أنت متأكد أنك تريد حذف العناصر المحددة؟</DialogTitle>
        <DialogActions>
          <Button
            variant="contained"
            color="error"
            onClick={handleDeleteClose}
            sx={{ mx: 1 }}
          >
            إلغاء
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={handleDelete}
            sx={{ mx: 1 }}
          >
            نعم، احذف
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
