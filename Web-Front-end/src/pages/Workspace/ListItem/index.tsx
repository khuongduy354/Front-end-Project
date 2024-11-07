import * as React from "react";
import "./ListItem.css";
import Item from "../Item";
import { Routes, Route, Link, useParams } from 'react-router-dom';
import Dashboard from "../../Dashboard/Dashboard";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
const ListItem = ({ list }) => {
  const [page, setPage] = React.useState(1);
  const itemsPerPage = 4;  // Số mục trên mỗi trang

  // Hàm xử lý thay đổi trang
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  // Xác định danh sách các mục cần hiển thị dựa trên trang hiện tại
  const startIndex = (page - 1) * itemsPerPage;
  const currentItems = list.slice(startIndex, startIndex + itemsPerPage);

  return (
    <Stack spacing={2}>
      <ul className="Listitem">
        {currentItems.map((item) => (
          <li key={item.id}>
            {/* Liên kết đến Dashboard với tham số name trong URL */}
            <Link to={`/${item.name}`}>
              <Item name={item.name} />
            </Link>
          </li>
        ))}
      </ul>

      {/* Định nghĩa các Routes cho Dashboard với tham số name */}
      <Routes>
        <Route path="/:name" element={<Dashboard />} />
      </Routes>

      {/* Pagination */}
      <Pagination
        count={Math.ceil(list.length / itemsPerPage)}  // Số trang tổng cộng
        page={page}
        onChange={handleChange}
      />
    </Stack>
  );
};

export default ListItem;
