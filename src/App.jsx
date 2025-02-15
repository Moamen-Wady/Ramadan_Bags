import "./App.css";
import { useState, useEffect } from "react";
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
  IconButton,
} from "@mui/material";
import { Add, Close } from "@mui/icons-material";

export default function App() {
  const [selected, setSelected] = useState([]);
  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState([]);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    api
      .get("/items")
      .then((result) => {
        setRows(result.data.items);
      })
      .catch((err) => {
        console.log("err", err.message);
      });
  }, []);

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
      setFormData([{ name: "", total: 0, available: 0 }]);
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
        console.log(formData);
        // await api.put("/items", formData);
      } else {
        console.log(formData);
        // await api.post("/items", formData);
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

  const handleAddForm = () => {
    setFormData([...formData, { name: "", total: 0, available: 0 }]);
  };

  const handleRemoveForm = (index) => {
    setFormData(formData.filter((_, i) => i !== index));
  };

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
        sx={{ width: "95%", mx: "auto", mt: 0, mb: 4 }}
        component={Paper}
        dir="rtl"
        className="table"
        elevation={1}
      >
        <Table sx={{ m: "auto" }}>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  fontSize: 17.5,
                  padding: 2,
                  textAlign: "center",
                  width: "fit-content",
                  fontFamily: "'El Messiri', sans-serif",
                }}
              ></TableCell>
              <TableCell
                sx={{
                  fontSize: 17.5,
                  padding: 2,
                  textAlign: "center",
                  width: "fit-content",
                  fontFamily: "'El Messiri', sans-serif",
                }}
              >
                الصنف
              </TableCell>
              <TableCell
                sx={{
                  fontSize: 17.5,
                  padding: 2,
                  textAlign: "center",
                  width: "fit-content",
                  fontFamily: "'El Messiri', sans-serif",
                }}
              >
                اجمالي المطلوب
              </TableCell>
              <TableCell
                sx={{
                  fontSize: 17.5,
                  padding: 2,
                  textAlign: "center",
                  width: "fit-content",
                  fontFamily: "'El Messiri', sans-serif",
                }}
              >
                المتاح
              </TableCell>
              <TableCell
                sx={{
                  fontSize: 17.5,
                  padding: 2,
                  textAlign: "center",
                  width: "fit-content",
                  fontFamily: "'El Messiri', sans-serif",
                }}
              >
                المتبقي
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell
                  sx={{
                    fontSize: 17.5,
                    padding: 2,
                    textAlign: "center",
                    width: "fit-content",
                    fontFamily: "'El Messiri', sans-serif",
                  }}
                >
                  <Checkbox
                    checked={selected.includes(row.name)}
                    onChange={() => handleSelect(row.name)}
                  />
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: 17.5,
                    padding: 2,
                    textAlign: "center",
                    width: "fit-content",
                    fontFamily: "'El Messiri', sans-serif",
                  }}
                >
                  {row.name}
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: 17.5,
                    padding: 2,
                    textAlign: "center",
                    width: "fit-content",
                    fontFamily: "'El Messiri', sans-serif",
                  }}
                >
                  {row.total}
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: 17.5,
                    padding: 2,
                    textAlign: "center",
                    width: "fit-content",
                    fontFamily: "'El Messiri', sans-serif",
                  }}
                >
                  {row.available}
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: 17.5,
                    padding: 2,
                    textAlign: "center",
                    width: "fit-content",
                    fontFamily: "'El Messiri', sans-serif",
                  }}
                >
                  {Number(row.total) - Number(row.available)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ mt: 0, mr: "auto", ml: 4, mb: 4, width: "fit-content" }}>
        <Button
          variant="contained"
          color="error"
          sx={{ mt: 0, mr: 2, ml: 2, mb: 4, fontSize: "var(--r101)" }}
          onClick={handleDeleteOpen}
        >
          حذف
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 0, mr: 2, ml: 2, mb: 4, fontSize: "var(--r101)" }}
          onClick={() => handleOpen(true)}
        >
          تعديل
        </Button>
        <Button
          variant="contained"
          color="success"
          sx={{ mt: 0, mr: 2, ml: 2, mb: 4, fontSize: "var(--r101)" }}
          onClick={() => handleOpen(false)}
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
            <Box key={index} sx={{ mb: 2, position: "relative" }}>
              <TextField
                label="الصنف"
                defaultValue={item.name}
                fullWidth
                margin="dense"
              />
              <TextField
                label="اجمالي المطلوب"
                defaultValue={item.total}
                fullWidth
                margin="dense"
              />
              <TextField
                label="المتاح"
                defaultValue={item.available}
                fullWidth
                margin="dense"
              />
              {!isEditing && (
                <IconButton
                  onClick={() => handleRemoveForm(index)}
                  sx={{ position: "absolute", top: 0, left: 0 }}
                >
                  <Close />
                </IconButton>
              )}
              {isEditing && index < formData.length - 1 && (
                <Divider sx={{ my: 2 }} />
              )}
            </Box>
          ))}
        </DialogContent>
        {!isEditing && (
          <Button onClick={handleAddForm} startIcon={<Add />} sx={{ mx: 2 }}>
            إضافة عنصر آخر
          </Button>
        )}
        <DialogActions>
          <Button
            variant="contained"
            color="error"
            onClick={handleClose}
            sx={{ mt: 0, mr: 2, ml: 0, mb: 0, fontSize: "var(--r101)" }}
          >
            إلغاء
          </Button>
          <Button
            variant="contained"
            color="success"
            sx={{ mt: 0, mr: 2, ml: 0, mb: 0, fontSize: "var(--r101)" }}
            onClick={handleSave}
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
