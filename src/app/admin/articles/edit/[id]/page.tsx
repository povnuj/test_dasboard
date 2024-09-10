"use client";

import { Autocomplete, Box, Select, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import {
  CATEGORIES_SELECT_QUERY,
  POST_EDIT_MUTATION,
} from "@queries/blog-posts";
import { useOne } from "@refinedev/core";
import { Edit, useAutocomplete } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";
import { useParams } from "next/navigation";
import { Controller } from "react-hook-form";

export default function BlogPostEdit() {
  const id = +useParams().id;
  const { data, isLoading } = useOne({ resource: "blog_posts", id });
  
  const blogPostsData = data?.data;

  const {
    register,
    control,
    saveButtonProps,
    refineCore: { query },
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: blogPostsData?.title || "",
      //categoryId: blogPostsData?.category?.id || "",
      status: blogPostsData?.status || "DRAFT",
      content: blogPostsData?.content || "",
    },
  });

  const { autocompleteProps } = useAutocomplete({
    resource: "categories",
    defaultValue: query?.data?.data?.category?.id,
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: "12px" }}
        autoComplete="off"
      >
        <TextField
          {...register("title")}
          label="Name"
          error={!!errors.title}
          //  helperText={errors?.title?.message}
        />
        <TextField
          {...register("content")}
          multiline
          label="Description"
          error={!!errors.content}
          // helperText={errors.description?.message}
        />
        <TextField
          {...register("status")}
          label="status"
          error={!!errors.status}
          // helperText={errors.material?.message}
        />
        {/* <Controller
          control={control}
          name="category"
          defaultValue={null}
          render={({ field }) => (
            <Autocomplete
              id="category"
              {...autocompleteProps}
              {...field}
              onChange={(_, value) => field.onChange(value)}
              getOptionLabel={(item) => {
                return (
                  autocompleteProps?.options?.find(
                    (option) => option?.id == item?.id,
                  )?.title ?? ""
                );
              }}
              isOptionEqualToValue={(option, value) => {
                return (
                  value === undefined || option?.id == (value?.id ?? value)
                );
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Category"
                  variant="outlined"
                  margin="normal"
                  error={!!errors.category}
                  helperText={errors.category?.message}
                />
              )}
            />
          )}
        /> */}
      </Box>
    </Edit>
  );
}
