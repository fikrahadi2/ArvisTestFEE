import React from "react";
import { Form } from "react-bootstrap";
import { v4 } from "uuid";

function StatefulInput({
  state,
  setState,
  type,
  label,
  wrapperClass,
  icon,
  inputClass,
  placeholder,
  name,
  textarea,
}: IStatefulInput) {
  return (
    <Form.Group
      controlId={`form-${name || placeholder || v4()}`}
      className={`position-relative w-100 ${wrapperClass || ""}`}
    >
      <Form.Label className={!!label ? "" : "d-none"}>
        <b>{label}</b>
      </Form.Label>{" "}
      {icon}
      <Form.Control
        as={textarea ? "textarea" : undefined}
        rows={textarea ? 3 : 1}
        name={name}
        placeholder={placeholder || name || ""}
        type={type}
        onChange={(e) => {
          setState(e.target.value);
        }}
        value={state}
        className={inputClass || ""}
      />
    </Form.Group>
  );
}

interface IStatefulInput {
  state: any;
  setState: React.Dispatch<any>;
  name?: string;
  type?: string;
  label?: string;
  wrapperClass?: string;
  inputClass?: string;
  icon?: React.ReactNode;
  placeholder?: string;
  textarea?: boolean;
}

export default StatefulInput;
