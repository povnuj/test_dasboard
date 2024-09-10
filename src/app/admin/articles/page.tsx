"use client";

import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { POSTS_LIST_QUERY } from "@queries/blog-posts";
import { useList } from "@refinedev/core";
import {
  DateField,
  DeleteButton,
  EditButton,
  List,
  MarkdownField,
  ShowButton,
  useDataGrid,
} from "@refinedev/mui";
import React from "react";

export default function BlogPostList() {
  const { data, isLoading } = useList({
    resource: "blog_posts",
    pagination: { current: 1, pageSize: 15 },
    sorters: [{ field: "name", order: "asc" }],
   // filters: [{ field: "material", operator: "eq", value: "Aluminum" }],
  });


  React.useEffect(() => {
    console.log("data =>", data);
  }, [data]);

  const columns = React.useMemo<GridColDef[]>(
    () => [
      {
        field: "id",
        headerName: "ID",
        type: "number",
        minWidth: 50,
      },
      {
        field: "title",
        flex: 1,
        headerName: "Title",
        minWidth: 200,
      },
      {
        field: "content",
        flex: 1,
        headerName: "Content",
        minWidth: 250,
        // renderCell: function render({ value }) {
        //   if (!value) return "-";
        //   return <MarkdownField value={value?.slice(0, 80) + "..." || ""} />;
        // },
      },
      // {
      //   field: "category",
      //   flex: 1,
      //   headerName: "Category",
      //   minWidth: 300,
      //   valueGetter: ({ row }) => {
      //     const value = row?.category?.title;
      //     return value;
      //   },
      // },
      {
        field: "status",
        flex: 1,
        headerName: "Status",
        minWidth: 200,
      },
      {
        field: "createdAt",
        flex: 1,
        headerName: "Created at",
        minWidth: 250,
        renderCell: function render({ value }) {
          return <DateField value={value} />;
        },
      },
      {
        field: "actions",
        headerName: "Actions",
        sortable: false,
        renderCell: function render({ row }) {
          return (
            <>
              <EditButton hideText recordItemId={row.id} />
              <ShowButton hideText recordItemId={row.id} />
              <DeleteButton hideText recordItemId={row.id} />
            </>
          );
        },
        align: "center",
        headerAlign: "center",
        minWidth: 80,
      },
    ],
    []
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <List>
      <DataGrid rows={data?.data ?? []} columns={columns} autoHeight />
    </List>
  );
  
}


// "use client";

// import { DataGrid, type GridColDef } from "@mui/x-data-grid";
// import { POSTS_LIST_QUERY } from "@queries/blog-posts";
// import {
//   DateField,
//   DeleteButton,
//   EditButton,
//   List,
//   MarkdownField,
//   ShowButton,
//   useDataGrid,
// } from "@refinedev/mui";
// import React from "react";

// export default function BlogPostList() {
//   const { dataGridProps } = useDataGrid({
//     syncWithLocation: true,
//     meta: {
//       gqlQuery: POSTS_LIST_QUERY,
//     },
//   });

//   const columns = React.useMemo<GridColDef[]>(
//     () => [
//       {
//         field: "id",
//         headerName: "ID",
//         type: "number",
//         minWidth: 50,
//       },
//       {
//         field: "title",
//         flex: 1,
//         headerName: "Title",
//         minWidth: 200,
//       },
//       {
//         field: "content",
//         flex: 1,
//         headerName: "Content",
//         minWidth: 250,
//         renderCell: function render({ value }) {
//           if (!value) return "-";
//           return <MarkdownField value={value?.slice(0, 80) + "..." || ""} />;
//         },
//       },
//       {
//         field: "category",
//         flex: 1,
//         headerName: "Category",
//         minWidth: 300,
//         valueGetter: ({ row }) => {
//           const value = row?.category?.title;
//           return value;
//         },
//       },
//       {
//         field: "status",
//         flex: 1,
//         headerName: "Status",
//         minWidth: 200,
//       },
//       {
//         field: "createdAt",
//         flex: 1,
//         headerName: "Created at",
//         minWidth: 250,
//         renderCell: function render({ value }) {
//           return <DateField value={value} />;
//         },
//       },
//       {
//         field: "actions",
//         headerName: "Actions",
//         sortable: false,
//         renderCell: function render({ row }) {
//           return (
//             <>
//               <EditButton hideText recordItemId={row.id} />
//               <ShowButton hideText recordItemId={row.id} />
//               <DeleteButton hideText recordItemId={row.id} />
//             </>
//           );
//         },
//         align: "center",
//         headerAlign: "center",
//         minWidth: 80,
//       },
//     ],
//     []
//   );

//   return (
//     <List>
//       <DataGrid {...dataGridProps} columns={columns} autoHeight />
//     </List>
//   );
// }