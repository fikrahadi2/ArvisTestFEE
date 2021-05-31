import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { Variant } from "react-bootstrap/esm/types";

interface IClosableAlert {
    message: string;
    title: string;
    variant?: Variant;
    onClose?: Function;
}

interface HasClass {
    className?: string;
}

function ClosableAlert({
    message,
    title,
    variant = "primary",
    className,
    onClose,
}: IClosableAlert & HasClass) {
    const [show, setShow] = useState(true);

    return (
        <Alert
            show={show}
            variant={variant}
            onClose={() => {
                setShow(false);
                if (onClose) {
                onClose();
                }
        }}
            dismissible
            className={`w-100 ${className}`}
        >
        <Alert.Heading>{title}</Alert.Heading>
        <p>{message}</p>
        </Alert>
    );
}

export default ClosableAlert;
