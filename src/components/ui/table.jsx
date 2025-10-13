import React from "react";

// === مكونات Table مبسطة ===
export const Table = ({ children, style }) => (
  <table style={{ width: "100%", borderCollapse: "collapse", ...style }}>{children}</table>
);

export const TableHeader = ({ children, style }) => (
  <thead style={{ backgroundColor: "#EBF5FF", ...style }}>{children}</thead>
);

export const TableBody = ({ children, style }) => (
  <tbody style={{ ...style }}>{children}</tbody>
);

export const TableRow = ({ children, style }) => (
  <tr style={{ ...style }}>{children}</tr>
);

export const TableHead = ({ children, style }) => (
  <th style={{ border: "1px solid #ccc", padding: "8px", textAlign: "center", ...style }}>
    {children}
  </th>
);

export const TableCell = ({ children, style }) => (
  <td style={{ border: "1px solid #ccc", padding: "8px", textAlign: "center", ...style }}>
    {children}
  </td>
);

export const TableCaption = ({ children, style }) => (
  <caption style={{ captionSide: "top", fontWeight: "bold", fontSize: "1rem", color: "#7353BA", marginBottom: "10px", ...style }}>
    {children}
  </caption>
);
