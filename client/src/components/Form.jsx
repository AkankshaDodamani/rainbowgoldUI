// components/Form.jsx
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const Row = styled.div`
  display: flex;
  gap: 1.25rem;
  flex-wrap: wrap;

  > * {
    flex: 1 1 200px;
  }
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const Label = styled.label`
  font-size: 0.85rem;
  font-weight: 600;
  color: #3b1c10;
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid #e2d3bd;
  border-radius: 8px;
  font-size: 0.95rem;
  font-family: inherit;
  color: #3b1c10;
  background-color: #fdf8f0;

  &:focus {
    outline: none;
    border-color: #8a4a1f;
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem 1rem;
  border: 1px solid #e2d3bd;
  border-radius: 8px;
  font-size: 0.95rem;
  font-family: inherit;
  color: #3b1c10;
  background-color: #fdf8f0;
  resize: vertical;
  min-height: 140px;

  &:focus {
    outline: none;
    border-color: #8a4a1f;
  }
`;

const SubmitButton = styled.button`
  align-self: flex-start;
  margin-top: 0.5rem;
  padding: 0.9rem 2.2rem;
  background-color: #8a4a1f;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background-color: #6f3a17;
    transform: translateY(-2px);
  }
`;

// groups fields into rows based on each field's `row` value
// fields with the same `row` number sit side by side; omit `row` to get a full-width field
const groupIntoRows = (fields) => {
  const rows = [];
  const seen = new Set();

  fields.forEach((field) => {
    if (field.row === undefined) {
      rows.push([field]);
      return;
    }
    if (seen.has(field.row)) return;
    seen.add(field.row);
    rows.push(fields.filter((f) => f.row === field.row));
  });

  return rows;
};

const Form = ({ fields = [], onSubmit, submitLabel = "Submit" }) => {
  const initialState = fields.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    } else {
      console.log("Form submitted:", formData);
    }
    setFormData(initialState);
  };

  const rows = groupIntoRows(fields);

  return (
    <StyledForm onSubmit={handleSubmit}>
      {rows.map((rowFields, i) =>
        rowFields.length > 1 ? (
          <Row key={i}>
            {rowFields.map((field) => (
              <FieldGroup key={field.name}>
                <Label htmlFor={field.name}>{field.label}</Label>
                {field.type === "textarea" ? (
                  <TextArea
                    id={field.name}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required={field.required}
                  />
                ) : (
                  <Input
                    type={field.type || "text"}
                    id={field.name}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required={field.required}
                  />
                )}
              </FieldGroup>
            ))}
          </Row>
        ) : (
          <FieldGroup key={rowFields[0].name}>
            <Label htmlFor={rowFields[0].name}>{rowFields[0].label}</Label>
            {rowFields[0].type === "textarea" ? (
              <TextArea
                id={rowFields[0].name}
                name={rowFields[0].name}
                value={formData[rowFields[0].name]}
                onChange={handleChange}
                placeholder={rowFields[0].placeholder}
                required={rowFields[0].required}
              />
            ) : (
              <Input
                type={rowFields[0].type || "text"}
                id={rowFields[0].name}
                name={rowFields[0].name}
                value={formData[rowFields[0].name]}
                onChange={handleChange}
                placeholder={rowFields[0].placeholder}
                required={rowFields[0].required}
              />
            )}
          </FieldGroup>
        ),
      )}

      <SubmitButton type="submit">{submitLabel}</SubmitButton>
    </StyledForm>
  );
};

export default Form;
